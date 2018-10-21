---
layout: post
title:  "Porque sai do Wordpress e migrei pro Jekyll"
date:   2016-04-23
categories: blog
tags: [jekyll]
image: assets/img/posts/jekyll-wordpress.png
keywords:
related:
  - title: Site oficial do Jekyll
    url: https://jekyllrb.com/
  - title: Site oficial do Liquid, uma linguagem de template (usada no Jekyll)
    url: https://shopify.github.io/liquid/
  - title: Documentação oficial do GitHub Pages para geração do site com Jekyll
    url: https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/
resumo: >
   Neste post de estréia do meu novo site e blog eu explico porque migrei do Wordpress para o Jekyll, um gerador de páginas estáticas, e quais as vantagens e desvantagens desta migração.
---

## Blog antigo

Por muito tempo eu mantive meu site pessoal e blog no [Wordpress](https://br.wordpress.org/). Sobre o host usado, bem... eu passei por alguns, não me lembro de todos, mas o último foi o [BlueHost](https://www.bluehost.com/).

Para quem não conhece, o BlueHost é um dos melhores hosts para hospedar sites em Wordpress. Muito fácil de criar, atualizar, instalar plugins e tudo mais que você queira fazer. Gostei bastante.

Meu único problema foi na renovação. Como os preços dos planos na renovação estavam meio salgados, pelo menos para um blog e site pessoal, optei por não renovar. Como consequência disso, naturalmente algum tempo depois meu site e blog estavam fora do ar.

Busquei informações com a BlueHost de como eu poderia recuperar um backup, mesmo já não tendo um plano ativo. Resumo da história, fiz uma assinatura de 1 mês para conseguir recuperar o backup do wordpress.

## E quanto aos posts antigos

Com o backup em mãos, resta migrar o conteúdo do Wordpress para cá.

Porém, o Wordpress armazena suas informações no MySQL, isso inclui os posts, mas este novo *stack* técnológico entende arquivos textos formatados com *markdown*. Ou seja, é necessário pegar estes posts que estão no MySQL e criar páginas estáticas formatadas com *markdown* para trazer todos os posts de volta.

Não encontrei uma forma rápida e simples de fazer isso ainda e acredito que não exista --- aceito sugestões :). Então farei isso gradualmente. Infelizmente, quanto aos comentários, serão perdidos #Triste.

## Blog novo

Este cenário de quase perder todo o conteúdo que produzi ao longo de alguns anos, me fez repensar sobre o *stack* tecnológico do meu blog e site. O Wordpress é bem prático de __usar__, mas uma vez os dados lá dentro, __fica difícil de migrar__, armazer algo inteligível fora dele, etc.

Isso me fez considerar um gerador de páginas estáticas, especificamente o [Jekyll](http://jekyllrb.com/) pelos seguintes motivos:

* Os conteúdos produzidos são arquivos textos formatados com *markdown* ao invés de estarem em um banco de dados. A vantagem é que o conteúdo pode ser fácilmente acessado, sem necessidade de instalar um software ou saber fazer consultas SQL por exemplo;

* Os arquivos textos por sí só, são inteligíveis. Os dados fazem sentido mesmo visualizando-os fora do site/blog, basta abrir um arquivo texto;

* *Markdown* é um padrão bem sólido de formatação de texto, diversos desenvolvedores de diversas plataformas diferentes o conhecem, inclusive eu :);

* Especificamente o Jekyll tem integração oficial com GitHub. Isso significa que o GitHub disponibiliza uma [documentação oficial](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/) de como fazer seu blog/site com Jekyll e hospedar no GitHub __de graça__ :);

* Ainda sobre a vantagem de hospedar no [GitHub Pages](https://pages.github.com/), ele permite customização de domínio, ou seja, você pode fazer seu site apontar para __seudominio.com.br__, YEAAH! Se seu domínio é __.com.br__ poderá usar o bom e velho [RegistroBr](http://registro.br) para gerenciar o DNS, já que não estará pagando um host para fazer o trabalho, no meu caso, eu tenho __.com__ e __.com.br__. O __.com.br__ uso o [RegistroBr](http://registro.br) como gerenciador de DNS, no caso do __.com__ eu estou usando __gratuitamente__ o [CloudFlare](http://cloudflare.com), fica a dica;

* Como o conteúdo é estático, não há necessidade de um servidor de aplicação específico ou outros softwares. Basicamente o Jekyll gera as páginas HTML, o host provê estas páginas e o browser renderiza o conteúdo. Simples assim;

* Linguagens web como HTML, CSS, Javascript podem ser usadas, ou seja, bootstraps como [Twitter Bootstrap](http://getbootstrap.com/2.3.2/) ou [Pure CSS](http://purecss.io/) podem ser usados para ajudar no layout;

* _Templates_ de páginas web são bem vindos também, desde que sejam arquivos HTML, CSS ou outros arquivos web, tudo bem;

* Como tudo na vida tem dois lados, uma desvantagem é que para aqueles que não possuem conhecimento técnico sobre tecnologias web, pode ser um desafio ou até mesmo uma tarefa chata.

## Mas e o famoso Medium.com

O [Medium](http://medium.com) tem sido usado por diversas pessoas, inclusive desenvolvedores para prover seus conteúdos.

Mesmo assim eu optei por manter pelo menos meus posts com perfil mais técnico no meu blog pessoal pela facilidade citada de controlar e guardar estas informações. O motivo é que não sei exatamente se seria simples ou não se estivesse tudo no Medium e um dia eu quisesse recuperar o backup para levar para outra plataforma.

Então, ao menos meus posts técnicos irei manter aqui, então fiquem ligados, acompanhem e comentem :).

E você, o que usa para manter seu site e/ou blog pessoal no ar?