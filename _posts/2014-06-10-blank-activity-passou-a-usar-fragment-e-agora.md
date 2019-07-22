---
layout: post
title:  "Blank Activity passou a usar Fragment, e agora?"
date:   2014-06-10
categories: ["Tecnologia"]
tags: [android, mobile]
image: assets/img/posts/doubt-blank-activity.jpg
related:
resumo: >
   O Google mudou o template da Blank Activity sem avisar e os desenvovledores ficaram #chateados. Saiba mais aqui.
---
<p>A primeira coisa que normalmente fazemos ao iniciar o desenvolvimento em uma nova tecnologia é tentar criar um projeto do tipo <em>Hello World</em> para gerar o código mais simples e começar a partir dele.</p>
<p>No Android, esta tarefa era bem simples de se fazer. Basicamente, após baixar e abrir o Eclipse <a href="http://developer.android.com/tools/sdk/eclipse-adt.html">ADT</a> Android Development Tools), bastava criar um novo <em><strong>Android Application Project</strong></em> usando o template <em>Blank Activity</em> e seguir as instruções do <em>wizard</em>, ou seja, <em>next, next </em>e<em> finish.</em></p>
<p>Porém, na versão 2.6.0 do Eclipse ADT, o Google alterou o template <em>Blank Activity e</em> ao invés de gerar um código simples, passou a gerar um código mais complexo, já fazendo uso de API's mais avançadas e difíceis de entender. Isso fez com que alguns desenvolvedores Android ficassem um pouco confusos.</p>
<p>Esta alteração sem aviso prévio gerou <a href="https://code.google.com/p/android/issues/detail?id=67513">muita insatisfação por parte dos desenvolvedores</a> pois não havia mais como criar o <em>Hello World</em> básico.</p>
<p>Ao perceber esta insatisfação, o Google lançou a versão 2.6.3 do ADT que traz um template novo chamado <em>Empty Activity</em> que visa atuar como era o antigo <em>Blank Activity</em>, gerando um código simples sem o uso de API's avançadas.</p>
<p>Ou seja, caso seu template <em>Blank Activity </em>esteja gerando um código complexo e você queira algo simples, use o template <em>Empty Activity</em>. Caso você não esteja visualizando este novo template, basta <a href="http://developer.android.com/sdk/installing/installing-adt.html">atualizar o Eclipse ADT</a>.</p>
<p>&nbsp;</p>
