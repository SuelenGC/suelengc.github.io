---
layout: post
title:  "Entenda quando usar tag fragment ou tag de layout"
date:   2013-04-18
tags: [android, mobile, fragments]
image: assets/img/posts/fragmented.png
keywords:
related:
resumo: >
   Você aprendeu sobre fragments no Android e quer ir para o próximo nível no quesito conhecimento sobre esta ferramenta bacana que temos no Android. Então venha ver este detalhe incrível sobre para que serve a tag fragment e quando usá-la.
---
<p>Quando começamos a estudar sobre o uso da API de Fragment do Android, é comum chegarmos a conclusão de que temos duas maneiras de adicionar Fragments no xml de layout.</p>
<p>Uma maneira é usar a tag `<fragment>` atributindo ao atributo `class` o _fully qualified name_ do `Fragment` que queremos usar.</p>
<p>Outra forma é usar uma tag de layout para delimitar o espaço e, programaticamente colocarmos o Fragment neste espaço através do `FragmentManager`, `FragmentTransaction` e id atribuído a tag de layout. As leituras no <a title="Android Developer" href="developer.android.com" target="_blank">Android Developer</a> nos induzem a tag de layout `FrameLayout`, mas pode ser qualquer outra.</p>
<p>No entanto, uma questão que normalmente fica sem resposta é _Em quais situações devo usar tag fragment ou tag de layout?_</p>

<h1>Tag Fragment</h1>

<p>A tag fragment é mais adequada em casos que não será necessário substituir o fragment em tempo de execução. Isso pois, se for feito usando os métodos `add` ou `replace` do `FragmentTransaction`, será notado um comportamento estranho pois ambos os métodos irão sobrepor o conteúdo do fragment atual, e ok, esperamos isso do `add` mas não esperamos isso do `replace`.</p>
<p>Aplicativos para tablets são um bom exemplo de utilização. Normalmente o xml de layout de um tablet tem um menu a esquerda e o conteúdo se abre a diretira. O menu é um forte candidato para se usar a tag fragment no seu xml de layout, pois o que se espera neste contexto é que ele sempre esteja lá.</p>
<p>O xml de layout neste caso seria assim:</p>

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

<p>A renderização do layout acima seria algo mais ou menos assim:</p>

![]({{site.url}}/assets/img/posts/tablet.png)

<p>A vantagem neste contexto é uma performance um pouco melhor na renderização da Activity. Desta forma, tão logo o layout seja carregado, operação que é iniciada após a chamada do método setContentView, o próprio Android se encarregará de instanciar o Fragment e carregá-lo, não necessitando ser feito programaticamente.</p>
<p>Considerando inclusive que se feito programaticamente, deve ser feito após o carregamento do layout, para que se possa recuperar os id's e atribuir o novo conteúdo.</p>

<h1>Tag de Layout</h1>

<p>A tag de layout é mais adequada quando se pretende alterar o conteúdo ocupado por um fragment em tempo de execução.</p>
<p>Usando o mesmo exemplo anterior, em um smartphone, o xml de layout teria apenas um espaço que inicialmente carregaria o menu na tela inteira. Ao clicar em algum item, no mesmo lugar que se encontra o menu, deve ser carregado o conteúdo do item clicado. Ou seja, teremos que substituir o conteúdo atual por um novo conteúdo.</p>
<p>Para que isso seja possível, precisamos usar o método `replace` da classe `FragmentTransaction`. Este método irá substituir em tempo de execução o conteúdo atual da tag de layout por um novo Fragment.</p>
<p>Logo, nosso xml de layout ficaria assim:</p>

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

<p>A renderização esperada do layout acima é algo mais ou menos assim (abaixo é possível perceber também o comportamento):</p>

![]({{site.url}}/assets/img/posts/smartphone.png)

<p>A desvantagem desta forma é que, mesmo o primeiro carregamento do Fragment, precisará ser feito programaticamente.</p>
<p>Segue o trecho de código para carregar um Fragment em uma tag de layout, normalmente colocamos este trecho no método onCreate da Activity:</p>

{% highlight java %}
/** Cria uma instância do Fragment a ser carregado */
MenuFragment menuFrag = new MenuFragment();

/** Pega a transação para trabalhar com Fragments */
FragmentTransaction transaction = getSupportFragmentManager().beginTransaction();
      
/** Coloca o Fragment de menu no espaço delimitado pela tag de layout */
transaction.add(R.id.menu, menuFrag); 
            
/** Confirma a transação. Neste momento ele sabe o que deve ser renderizado no espaço da tag de layout */
transaction.commit();
{% endhighlight %}

<p>Apesar disso, ganhamos a flexibilidade de poder alterar a qualquer momento o conteúdo atual por outro Fragment, bastando utilizar o código acima.</p>
<p>Minha opinião como desenvolvedora é, sempre otimize o máximo que puder. Mas não de maneira prematura. Ou seja, pense sobre seu contexto e se for necessário alterar o conteúdo, use uma tag de layout, do contrário, use a tag fragment.</p>
<p>Vale considerar que o esforço para mudar de um para o outro é muito baixo. Sendo necessário apenas que o desenvolvedor detenha este conhecimento.</p>
