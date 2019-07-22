---
layout: post
title:  "Usando o poder da API Fragments do Android"
date:   2013-04-16
categories: ["Tecnologia"]
tags: [android, mobile, fragments]
image: assets/img/posts/android-fragment-api-power.jpg
keywords:
related:
resumo: >
   Chegou a API de Fragments do Android. Entenda neste post como usá-la com exemplos e código disponível no Github.
---
<p>É bem comum criarmos um app que tenha um menu com vários botões e cada botão inicie uma nova funcionalidade. Normalmente, por questões de adequação ao espaço disponível em cada device, esperamos que o comportamento deste app seja diferente se aberto em um Smartphone ou Tablet.</p>
<p>No Smartphone o que costuma ocorrer é de o menu ocupar toda a tela inicial e ao clicar em um item, o novo conteúdo se sobrepõe ao menu, ficando visível somente o conteúdo novo.</p>
<p>Já em um Tablet espera-se que o conteúdo do menu fique na lateral esquerda e que o conteúdo de cada item seja aberto na lateral direita, mantendo tanto menu como funcionalidade visível na mesma tela. Veja as imagens abaixo que demonstram esta situação.</p>
<p>No Smartphone esperamos algo assim:</p>

![]({{site.url}}/assets/img/posts/smartphone.png)

<p>No Tablet esperamos algo assim:</p>

![]({{site.url}}/assets/img/posts/tablet.png)

<p>Neste post vou mostrar uma alternativa de implementação usando a API de Fragments para resolver este problema. Iremos usar o pacote de compatibilidade do Google para que nosso app rode em versões anteriores a 3.0 do Android.</p>
<p>Vamos criar um novo projeto Android sem nenhuma Activity. A versão do Android neste projeto será a 2.3. Primeiro vamos criar um layout chamado <strong>main.xml </strong>que ficará responsável por armazenar nossos fragments.</p>
<p>Um detalhe importante é que quando estivermos acessando de um Smartphone o main.xml deve ter espaço apenas para um Fragment, vou chamar este espaço de <strong>main</strong>. Quando estivermos acessando de um Tablet queremos que ele tenha espaço para dois Fragments, vou chamá-los respectivamente de <strong>menu</strong> e <strong>content</strong>. Iremos delimitar o espaço dos Fragments com a tag de layout FrameLayout, o atributo <strong>id</strong> de cada espaço receberá os nomes que definimos aqui.</p>
<p>O xml de layout para o Smartphone deve ficar na pasta <strong>layout</strong> e o xml de layout para o Tablet deve ficar na pasta <strong>layout-large</strong>. Segue abaixo o código de cada um.</p>
<p><strong>XML de Layout para Smartphone: </strong>res/layout/main.xml</p>

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent" >

    <FrameLayout
        android:id="@+id/main"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent" />

</LinearLayout>
{% endhighlight %}

<p><strong>XML de Layout para Tablet: </strong>res/layout-large/main.xml</p>

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="horizontal">

    <FrameLayout
        android:id="@+id/menu"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent"
        android:layout_weight="2" />

    <FrameLayout
        android:id="@+id/content"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent"
        android:layout_weight="1"/>

</LinearLayout>
{% endhighlight %}

<p>Vamos agora criar a Activity que irá carregar estes layouts. A ideia é que a Activity verifique se existe um espaço "main". Se ele existir significa que o app está sendo acessado por um Smartphone, se não o app está sendo acessado por um Tablet.</p>
<p>Crie a Activity <strong>MainActivity.java</strong> que herde de <strong>FragmentActivity</strong>, segue o código:</p>
<p><strong>Classe MainActivity: </strong>src/br.com.suelengc.fragments.MainActivity.java</p>

{% highlight java %}
package br.com.suelengc.fragments;

import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentTransaction;

public class MainActivity extends FragmentActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.main);

    /** Como o menu sempre existirá, instâncio ele fora da condição */
    MenuFragment menuFrag = new MenuFragment();

    if (findViewById(R.id.main) != null) {
      /** Se for acessodado de um smartphone o espaço main existirá */

      /** Adiciona o menu no único espaço */
      getSupportFragmentManager().beginTransaction().add(R.id.main, menuFrag).commit();

    } else if (findViewById(R.id.content) != null) {
      /** Se for acessodado de um tablet o espaço main não existirá, existirá o menu e content */

      /** Pega a transação */
      FragmentTransaction transaction = getSupportFragmentManager().beginTransaction();

      /** Coloca o fragment de menu do lado esquerdo e o fragment de conteúdo do lado direito */
      transaction.add(R.id.menu, menuFrag).commit();
      transaction.add(R.id.content, new ContentFragment());

      /** Confirma as transações */
      transaction.commit();
    }
  }
}
{% endhighlight %}

<p>Para que não tenhamos que ficar fazendo if´s em todo lugar no nosso código, vamos criar a interface <strong>OnItemClickedCallBack</strong> com o método callback <strong>onItemClicked </strong>e fazer nossa Activity implementá-la.</p>
<p>A implementação deste método deve decidir se este conteúdo que foi clicado deve ser aberto no espaço <strong>main</strong> (se estiver no Smartphone) ou no espaço <strong>content</strong> (se estiver no Tablet). Seguem códigos:</p>
<p><strong>Interface de callback:</strong> src/br.com.suelengc.fragments.OnItemClickedCallBack.java</p>

{% highlight java %}
package br.com.suelengc.fragments;

public interface OnItemClickedCallBack  {
  public void onItemClicked(int position);
}
{% endhighlight %}

<p><strong>Classe MainActivity.java</strong> com a implementação da Interface <strong>OnItemClickedCallBack.java</strong>:</p>

{% highlight java %}
package br.com.suelengc.fragments;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentTransaction;
import android.view.ViewGroup.LayoutParams;
import android.widget.TextView;

public class MainActivity extends FragmentActivity implements OnItemClickedCallBack {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.main);

    /** Como o menu sempre existirá, instâncio ele fora da condição */
    MenuFragment menuFrag = new MenuFragment();

    if (findViewById(R.id.main) != null) {
      /** Se for acessodado de um smartphone o espaço main existirá */

      /** Adiciona o menu no único espaço */
      getSupportFragmentManager().beginTransaction().add(R.id.main, menuFrag);

    } else if (findViewById(R.id.content) != null) {
      /** Se for acessodado de um tablet o espaço main não existirá, existirá o menu e content */

      /** Pega a transação */
      FragmentTransaction transaction = getSupportFragmentManager().beginTransaction();

      /** Coloca o fragment de menu do lado esquerdo e o fragment de conteúdo do lado direito */
      transaction.add(R.id.menu, menuFrag);
      transaction.add(R.id.content, new ContentFragment());

      /** Confirma as transações */
      transaction.commit();
    }
  }

  @Override
  public void onItemClicked(int menuItem) {
    Fragment newFragment = null;

    switch (menuItem) {
    case R.id.menu1:
      /** Fragment que deve ser aberto quando for o menu 1 */
      newFragment = getNewFragment(1);
      break;

    case R.id.menu2:
      /** Fragment que deve ser aberto quando for o menu 2 */
      newFragment = getNewFragment(2);
      break;

    case R.id.menu3:
      /** Fragment que deve ser aberto quando for o menu 3 */
      newFragment = getNewFragment(3);
      break;

    case R.id.menu4:
      /** Fragment que deve ser aberto quando for o menu 4 */
      newFragment = getNewFragment(4);
      break;
    }

    if (newFragment != null) {

      /** Pega a transação */
      FragmentTransaction transaction = getSupportFragmentManager().beginTransaction();

      if (findViewById(R.id.main) != null) {
        /** Se for acessodado de um smartphone o espaço main existirá */

        /** Adiciona o fragment com o novo conteúdo no único espaço */
        transaction.replace(R.id.main, newFragment);

        /** Adiciona o fragment a backstack */
        transaction.addToBackStack(null);

      } else if (findViewById(R.id.content) != null) {
        /** Se for acessodado de um tablet o espaço main não existirá, existirá o menu e content */

        /** Coloca o fragment com o novo conteúdo do lado direito */
        transaction.replace(R.id.content, newFragment);
      }

      /** Confirma a transação */
      transaction.commit();
    }
  }

  /**
   * Método auxiliar que faz a geração do ContentFragment com o conteúdo adequado ao menu clicado
   * Na prática é provável que você não utilize um método como este pois você terá fragments específicos
   */
  private Fragment getNewFragment(int menu) {
    /** Cria instância de ContentFragment */
    ContentFragment fragment = new ContentFragment();

    /** Adiciona um argumento indicando qual menu foi clicado */
    Bundle args = new Bundle();
    args.putInt("menu", menu);
    fragment.setArguments(args);

    /** Retorna o fragment criado */
    return fragment;
  }
}
{% endhighlight %}

<p>Ao clicar em algum dos botões do menu, este deve redirecionar a decisão para o método de callback na Activity, logo, nossa classe MenuFragment.java deve conter um atributo do tipo OnItemClickedCallBack.</p>
<p>Este atributo receberá a instância da MainActivity no momento em que nosso fragment é "attached" nela. Assim, no click de algum botão poderemos invocar o método onItemClicked para decidir onde e qual o conteúdo a ser aberto. Segue código do nosso MenuFragment.java e seu xml de layout.</p>
<p><strong>Fragment MenuFragment: </strong>src/br.com.suelengc.fragments.MenuFragment.java</p>

{% highlight java %}
package br.com.suelengc.fragments;

import android.app.Activity;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

public class MenuFragment extends Fragment {

  /** Atributo de callback */
  OnItemClickedCallBack callBack;

  @Override
  public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
    /** Infla o layout */
    View view = inflater.inflate(R.layout.menu, container, false);

    /** Recupera os botões de menu e adiciona o listener de click */
    ((Button) view.findViewById(R.id.menu1)).setOnClickListener(new OnClickMenuItemListener());;
    ((Button) view.findViewById(R.id.menu2)).setOnClickListener(new OnClickMenuItemListener());;
    ((Button) view.findViewById(R.id.menu3)).setOnClickListener(new OnClickMenuItemListener());;
    ((Button) view.findViewById(R.id.menu4)).setOnClickListener(new OnClickMenuItemListener());;

    /** Retorna a view para ser exibida */
    return view;
  }

  /** Garante que a Activity que irá carregar o fragment implementa a interface de callback */
  @Override
  public void onAttach(Activity activity) {
    super.onAttach(activity);

    try {
      callBack = (OnItemClickedCallBack) activity;
    } catch (ClassCastException e) {
      Log.e("MenuFragment", activity.toString() + " must implement OnItemClickedCallBack");
    }
  }

  /** Listener do click do botão */
  protected class OnClickMenuItemListener implements View.OnClickListener {

    @Override
    public void onClick(View v) {
      /** Chama o método de callback passando o id do botão clicado */
      callBack.onItemClicked(v.getId());
    }
  }

}
{% endhighlight %}

<p><strong>XML de Layout do MenuFragment: </strong>res/layout/menu.xml</p>
<p>https://gist.github.com/SuelenGC/db4b11027e1eb1b65aa2</p>
<p>Para finalizar, seguem códigos da classe ContentFragment.java e seu xml de layout content.xml. Esta classe será responsável por exibir o conteúdo de cada botão.</p>
<p>Provavelmente no seu app, ao invés de ter apenas um Fragment de conteúdo, terá vários, talvez um por funcionalidade. Aqui vamos usar apenas um por questões de simplicidade. Para distinguir um conteúdo do outro, no click de cada botão vamos passar um argumento informando qual menu foi clicado.</p>
<p><strong>Fragment ContentFragment: </strong>src/br.com.suelengc.fragments.ContentFragment.java</p>

{% highlight java %}
package br.com.suelengc.fragments;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

public class ContentFragment extends Fragment {

  int menuClicado = 0;

  @Override
  public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
    /** Infla a view que deve ser exibida */
    View view = inflater.inflate(R.layout.content, container, false);

    /** Recupra o argumento de qual método foi clicado */
    if (getArguments() != null) {
      Bundle args = getArguments();
      menuClicado = args.getInt("menu");
    }

    /** Preenche o conteúdo do textview com a informação de qual menu foi clicado */
    TextView txt = (TextView) view.findViewById(R.id.txt);
    txt.setText("Conteúdo do menu " + menuClicado);

    /** Retorna a view para ser exibida */
    return view;
  }
}
{% endhighlight %}

<p><strong>XML de Layout do <strong>ContentFragment</strong>: </strong>res/layout/content.xml</p>

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center" >

    <TextView
        android:id="@+id/txt"
        android:layout_height="wrap_content"
        android:layout_width="wrap_content"
        android:textStyle="bold"
        android:textSize="18sp" />

</LinearLayout>
{% endhighlight %}

<p>O código-fonte completo deste exemplo está no meu <a title="Código-fonte no Github" href="https://github.com/SuelenGC/Blog-Fragments" target="_blank">Github</a>.</p>
<p>A ideia do post é dar uma ideia inicial de como este problema pode ser resolvido. Obviamente este código pode ser melhorado de várias formas. Tentei mantê-lo simples para que seja didático. Sintam-se a vontade para modificá-lo e melhorá-lo para sua situação.</p>
