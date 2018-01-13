---
layout: post
title:  "Implemente códigos melhores com a última geração de fors do Java 8"
date:   2016-10-01
categories: java
tags: [java]
image: assets/img/posts/java8-foreach-iterator.png
keywords:
related:
  - title: Excelente post no blog da Caelum sobre Java 8 
    url: http://blog.caelum.com.br/o-minimo-que-voce-deve-saber-de-java-8/
  - title: Apresentação sobre Java 8 por Paulo Silveira no Conexão Java 2014
    url: https://www.youtube.com/watch?v=UZaKFZHrnag
resumo: >
   Está de saco cheio de repetidas vezes escrever um for? Conheça essa novidade do Java 8 e nunca mais escreva uma iteração na sua vida! 
---

Um dos recursos mais usados em qualquer linguagem são operadores de repetição como _for_ e _while_. No Java, o _for_ tem sido vagarosamente evoluído, sendo que com o Java 8 recebemos a __Terceira Geração de Iteradores__. Ou seja, passamos pela primeira e segunda geração. Mas quais são elas?!

Para exemplificarmos vamos utilizar a lista de frutas abaixo. Nosso objetivo é iterar sobre esta lista e imprimir as frutas.

{% highlight java %}
List<String> frutas = Arrays.asList("banana", "maça", "limão");
{% endhighlight %}

A __Primeira Geração__ é o famoso for com índice, carinhosamente comumente chamado de `ì`.

{% highlight java %}
for (int i = 0; i < frutas.size(); i++) {
  System.out.println(frutas.get(i));
}
{% endhighlight %}

A __Segunda Geração__ é a geração do _foreach_, recurso que veio com o Java 5, que já nos retorna cada objeto baseado numa lista não necessitando de um índice explícito, _casts_ e _get_ para pegar determinado elemento.

{% highlight java %}
for(String fruta : frutas) {
  System.out.println(fruta);	
}
{% endhighlight %}

Ambas a primeira e segunda geração são consideradas formas de __iteração externa__, ou seja, **nós** temos que, explicitamente, nos preocupar em como iremos iterar na lista e em o que fazer a cada iteração.

De fato, o que importa na maioria das vezes é o que iremos fazer a cada iteração. Por isso, no Java 8 é justamente isso que acontece. Não precisamos mais nos preocupar em fazer a iteração, apenas em o que fazer com cada objeto a cada iteração.

Com a __Terceira Geração de Iteradores__ é a primeira vez que surge no Java a __iteração interna__. A complexidade da iteração foi encapsulada no método `forEach` adicionado a interface `Iterable`. 

Usando a iteração interna é possível aperfeiçoar a execução para que a iteração seja feita de forma paralela internamente pelo SDK sem interefrir negativamente em implementações existentes. Isso elimina uma dúvida existente quando se usa gerações anteriores sobre qual iterador usar, o _for_ com índice ou o _foreach_ com objeto, pensando em qual teria um desempenho melhor.

A ordenação das frutas com o `forEach` do Java 8 pode ser feita da seguinte forma:

{% highlight java %}
frutas.forEach((s) -> System.out.println(s));
{% endhighlight %}

E ainda é possível utilizar um outro recurso do Java 8 que é o *Method Reference*, ficando ainda mais simples, conforme a seguir:

{% highlight java %}
frutas.forEach(System.out::println)
{% endhighlight %}

E aí, gostou dessa nova geração de iteradores? Já conhecia? Conta aqui nos comentários.

Até mais!