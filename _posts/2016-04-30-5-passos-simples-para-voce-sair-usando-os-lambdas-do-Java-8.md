---
layout: post
title:  "5 passos simples para você sair usando os lambdas do Java 8"
date:   2016-04-29
categories: ["Dicas de Tecnologia"]
tags: [java]
image: assets/img/posts/happy-developer.jpg
keywords:
modal-id: 1
related:
  - title: Excelente post no blog da Caelum sobre Java 8
    url: http://blog.caelum.com.br/o-minimo-que-voce-deve-saber-de-java-8/
  - title: Apresentação sobre Java 8 por Paulo Silveira no Conexão Java 2014
    url: https://www.youtube.com/watch?v=UZaKFZHrnag
  - title: Documentação da Oracle sobre Lambda Expressions
    url: http://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html
resumo: >
   Entenda para que serve e como usar lambdas do Java 8. Veja também meu <a href='https://www.youtube.com/watch?v=BPootnK8taE' target='_blank'>vídeo sobre lambdas</a> no meu canal do YouTube.
---

## 1. O que é

Basicamente, expressão lambda não é nada novo, em outras linguagens de programação como C#, Scala e outras já é algo bem comum. Mas no Java ela é basicamente uma forma mais enxuta de escrever código.

Uma forma de pensar sobre o Lambda é que, enquanto classes anônimas são classes sem nome, Lambdas são métodos sem nome.


## 2. Para que serve

Eventualmente precisamos fazer uso de classes anônimas no nosso código Java. Porém, na maioria das vezes que optamos por uma classe anônima significa que provavelmente o trecho de código não é reaproveitável ou é muito pouco código para justificar a implementação de uma classe concreta ou _preencha seus outros motivos aqui_.

O ponto é que criar classe anônima no Java é um problema porque prejudica a legibilidade do código, e quanto mais classe anônima, pior vai ficando. Só a estrutura mínima de uma classe anônima já totalizam umas 5 linhas de código.

O Lambda vem resolver justamente este problema de muito __código de estrutura__ para criação de classes anônimas.


## 3. Show me the code

Para entender como usar Lambda, vamos pegar como tarefa a ideia de ordenar alfabeticamente uma lista de frutas. Então no nosso código teremos a seguinte lista de frutas:

{% highlight java %}
List<String> frutas = Arrays.asList("Banana", "Caqui", "Amora");
{% endhighlight %}

Para ordenar as coisas no Java antes do 8 o mais comum é usar o método `sort` da classe `Collections` e passar uma implementação, no nosso caso anônima, de `Comparator`:

{% highlight java %}
Collections.sort(frutas, new Comparator<String>() {
    @Override
    public int compare(String s1, String s2) {
        return s1.compareTo(s2);
    }
});
{% endhighlight %}

Como comentamos no item anterior, o Lambda resolve o problema de grandes estruturas para criação de classes anônimas. Sendo assim, podemos melhorar este código trocando a classe anônima do `Comparator` pela expressão Lambda.

A ideia básica é omitir tudo aquilo que o compilador pode inferir. Pensando nisso, podemos concluir que o método `sort` já espera no segundo parâmetro uma instância de `Comparator` e que o único método que ele pode executar é o `compare`, pois este é o único método abstrato que a interface `Comparator` possui.

Logo, podemos omitir o nome da classe e nome do método (também todos os acessórios como chaves, new, etc.) e deixar só os parâmetros do método em diante. Nossa ordenação com expressão Lambda ficará assim:

{% highlight java %}
Collections.sort(frutas, (String s1, String s2) -> {
    return s1.compareTo(s2);
});
{% endhighlight %}

Um ponto importante de entender é que as expressões Lambdas, salvo poucas exceções, terão o seguinte formato:

__(__ parâmetros do método implementado separados por vírgula __)__ __->__ __{__ código a ser executado __}__


## 4. Saindo do básico

É possível deixar o Lambda ainda mais enxuto do que está.

__Otimização 1__: Podemos omitir o tipo dos parâmetros. Vale lembrar que se omitir o tipo de um parâmetro tem que omitir de todos, ou seja, ou informa todos os tipos ou não informa nenhum. No nosso caso, ficaria assim:

{% highlight java %}
Collections.sort(frutas, (s1, s2) -> {
    return s1.compareTo(s2);
});
{% endhighlight %}

__Otimização 2__: Quando e somente quando, o bloco de execução conter apenas 1 linha, podemos mandar este código direto para a flechinha, omitindo chaves do corpo do Lambda, ponto e vírgula e algum return, se houver:

{% highlight java %}
Collections.sort(frutas, (s1, s2) -> s1.compareTo(s2));
{% endhighlight %}

__Otimização 3__: Não é o caso do nosso exemplo mas... quando o método sendo implementado recebe apenas um parâmetro, podemos omitir os parênteses do parâmetro, ficaria algo mais ou menos assim:

{% highlight java %}
s -> System.out.println(s);
{% endhighlight %}

Vale lembrar que, caso seu método não tenha nenhum parâmetro devemos colocar os parênteses.


## 5. Quando não usar

Lambdas só funcionam com Interfaces Funcionais que também é um conceito que veio junto com o Java 8. Basicamente uma Interface Funcional é uma interface com apenas um método abstrato.

Desta forma fica fácil o compilador inferir qual método está sendo implementado sem informarmos o nome. Isso quer dizer que `Comparator`, que usamos na maior parte dos exemplos, é uma interface funcional.

Nós podemos criar nossas próprias interfaces funcionais, basta que ela tenha apenas um método abstrato.


## Conclusão

De fato o Java 8 veio com algumas novidades bem bacanas, o Lambda é uma das mais importante delas. Nosso código fica muito mais simples e legível.

Ainda ficou alguma dúvida? Gostou e quer dar seu feedback? Quer deixar alguma dica, crítica construtiva? Escreve aqui nos comentários ;)