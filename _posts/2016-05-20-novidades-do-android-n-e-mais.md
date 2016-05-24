---
layout: post
title:  "Principais novidades para Android no Google IO"
date:   2016-05-22
categories: android
tags: [android]
image: assets/img/posts/google-io2016.jpg
keywords:
related:
  - title: Site oficial do Firebase
    url: https://firebase.google.com
  - title: Canal no Youtube do Google IO 2016
    url: https://www.youtube.com/playlist?list=PLOU2XLYxmsILe6_eGvDN3GyiodoV3qNSC
  - title: Site oficial do Twitter Fabric
    url: https://get.fabric.io/
resumo: >
   Saiba as principais novidades do Android N e outras coisas muito bacanas para desenvolvedores Android lançadas no Google IO. Você também pode assistir ao meu vídeo inédito [Resumão fo Google IO](https://www.youtube.com/watch?v=cIZCaKCn9D0){:target="_blank"}.
---

Neste post vamos falar sobre as principais novidades divulgadas sobre o **Android N** e outras coisas para Android no **Google I/O** onde pela primeira vez, tive o privilégio de participar presencialmente.

O Google I/O é o maior evento anual do Google onde são anunciados novos produtos, nova versão do Android e muito mais! Este ano ele ocorreu de 18 a 20 de Maio em San Francisco na Califórnia.

## Nome da versão

Se você como muitos, esperava saber o nome da nova versão do Android, vai ficar na mão. Neste ano não foi divulgada o nome da nova versão, ao invés, foi divulgado um [link](http://android.com/n){:target="_blank"} para os desenvolvedores darem sugestões. 

Em teoria, o nome deve vir destas sugestões. Pelo menos para mim é difícil pensar em um doce brasileiro que inicie com a letra N e que não seja Nutella 8).  


## Android Studio 2.2

O Android Studio veio cheio de novidades bacanas mais relacionadas a *design* de interfaces. 

Agora podemos contar com um *clip and point* que de fato funcione e cheio de funcionalidades que te ajudam a criar uma tela bacana e seguindo o *Material Design* sem ter que decorar quantos *dps* devemos usar em cada lugar, pois a IDE tem agora *constraints* que te ajudam com estes números.

Além de não ter que decorar o *Material Design* inteiro, ela também gera xml de layout mais performáticos, ou seja, não temos mais que escolher por nós mesmos se vamos usar um `LinearLayout` ou um `TableLayout` ou etc, ao criar a tela com o *Design Mode* o xml gerado vai buscar ser o mais performático.

Outro ponto legal é que a IDE já vai deixando sua tela responsiva a tamanhos de tela e orientações diferentes, por conta dessa ideia das *constraints*.

É basicamente o sonho dos desenvolvedores que conheceram o eclipse e sabem que o *Design Mode* de lá é balela há alguns anos. A tendência é que a preferência por editar xml para fazer telas do Android se reverta em usar estas novas funcionalidades.

Mais um funcionalidade super bacana é que agora é possível fazer a gravação de testes realizados com o [Espresso](https://google.github.io/android-testing-support-library/docs/espresso){:target="_blank"}. É mágico de tão legal e fácil que ficou criar testes funcionais! É como se gravasse uma macro, você coloca a IDE para gravar, usa o app fazendo o teste que você quer gravar e ele vai gerando o roteiro do Espresso.

Ainda há uma série de outras funcionalidades bacanas com o *APK Analyzer*, *Layout Inspector*, a integração com a última versão do IntelliJ, suporte a C++ e outras mais. É muito coisa para um post só!


## Notificações

O Google deu uma repaginada nas notificações, agora podemos configurar coisas como o *direct reply* onde o usuário consegue responder a notificação sem ter que abrir o app relacionado a ela, ou seja, ele faz isso dali da lista de notificações mesmo.

Há uma série de outras melhorias aqui como novos templates e formas de o usuário silenciar notificações.


## Multi-window 

Sabe aquela funcionalidade que a Samsung já tem a eras de dividir a tela e usar dois apps diferentes? Pois é, agora podemos oficialmente implementar isso nos nossos apps Android. Legal né! 

Junto com isso eles evoluiram a funcioanlidade de *drag and drop* para ser possível fazer isso entre *activities*.


## Display size (sobre acessibilidade)

Agora os usuários poderam mudar o tamanho como eles veem as coisas em todo o app. Ou seja, vai aparecer no app uma barra progressiva onde as pessoas podem aumentar ou diminuir e isso vai influenciar na altura da *action bar*, no tamanho da fonte, e etc.

É uma funcionalidade bem interessante para pessoas que tem problemas de vista.


## Android Instant Apps

Agora mesmo que o usuário não tenha um app instalado no device, ele conseguirá usar uma parte específica do app. Basicamente o app será automaticamente instalado, mas não o app inteiro, apenas a parte necessária para rodar determinada parte do aplicativo que é necessária.

Imagine que você mande um link de uma música do Spotify para alguém que não o tenha instalado, quando esta pessoa clicar no link, a parte para exibir a música será automaticamente instalada.

Tecnicamente, para que isso funcione seu app precisa funcionar bem com *deeplinks* além do desenvolvimento ter de ser modularizado. 


## Direct boot

Sabe aquele loading que aparece quando reiniciamos o Android, dizendo que está otimizando os apps e que ficava um tempão nesta tela de app em app compilando 1 a 1?! Pois é, graças a melhorias feitas no JIT, esta parte do código não existe mais! #Rocks!


## Java 8 

Funcionalidades como [lambdas](http://suelengc.com/2016/java-8-lambdas/), *methods references*, *repeatable annotation*, *default methods* e outros finalmente serão suportados! E digo mais, muitas destas novidades do Java 8 também poderão ser usadas nos xmls de layout. 

Essa funcionalidade de poder colocar alguns códigos nos xmls é chamada de *Data Binding* e foi lançada em 2015. Este ano fizeram uma série de melhorias possibilitando usar alguns conceitos do Java 8 também. Particularmente eu achei muito bacana!


## Firebase

Sem dúvida um dos maiores destaques de todo o Google IO foi o [Firebase](https://firebase.google.com){:target="_blank"}. O Google resolveu investir de fato nesta ferramenta como seu *Mobile Backend As A Service* (MBAAS). 

O Firebase agora disponibiliza todo um *stack* de ferramentas para desenvolvimento mobile como banco de dados (*NoSQL*), *Cloud Messaging*, *Storage* para arquivos estáticos, *TestLab* para testes automatizados com várias integrações disponíveis, autenticação, *analytics* e muito mais. 

Vale mencionar também que ele está completamente integrado ao Android Studio, ou seja, começar a usar qualquer destas ferramentas é muito simples.

Durante todo o evento houveram palestras que entraram mais a fundo em cada uma das ferramentas. Vale ressaltar que alguns deles são de graça, o que torna bem legal de usar. Mas infelizmente algumas ferramentas bacanas ficaram de fora do pacote gratuíto como o TestLab. Pena, mas confira os [planos existente no site](https://firebase.google.com/pricing){:target="_blank"}, afinal, isso pode sempre mudar.

Outro ponto interessante é que o GCM (*Google Cloud Messaging*) agora é FCM (*Firebase Cloud Messaging*), isso mesmo. O Google uniu as duas ferramentas.

No momento que vi esta parte do KeyNote me lembrei imediatamente do [Fabric](https://get.fabric.io/){:target="_blank"} do Twitter pois algumas ferramentas do Firebase como *Analytics* por exemplo, resolvem problemas que algumas ferramentas do Twitter resolvem também. Bem, ambas me pareceram muito boas.


## Não Para Por Aqui

Este ano o Google IO foi como sempre espetacular. Estas são algumas novidades mas existem ainda muitas outras como Vulkan, *support library*, *multi locale*, *quickly settings* e outras. Para cada uma dá um post sozinho e que pretendo escrever alguns mais detalhados mostrando como usar aqui.

E você, gostou das novidades? O que gostaria de ver em mais detalhes? Deixe aqui seu comentário!


