---
layout: post
title:  "Como começar um backlog de produto do zero em 3 passos"
date:   2018-09-20
categories: métodos ágeis
tags: [métodos ágeis, backlog de produto, product owner]
image: assets/img/posts/product-backlog-duvida2.jpg
modal-id: 4
ebook-title: "Como escrever estórias de tarefas, bugs e funcionalidades"
ebook-image: http://www.anped.org.br/sites/default/files/images/ebooks.png
ebook-resume: Aprenda a escrever estórias de tarefas, bugs e funcionalidades, com exemplos!
resumo: >
   O papel do Product Owner é extretamente importante para o bom funcionamento de um time ágil. Sua principal responsabilidade é manter o backlog de produto atualizado e priorizado! Para isso é necessário ter organização e tomar algumas decisões antes de começar. Neste post iremos falar das principais dúvidas que surgem quando se inicia a construção de um backlog de produto eficiente.
---

O Backlog de Produto é basicamente uma lista contendo todas as ideias que se tem para um projeto, como uma lista de desejos. O papel do Product Owner (termo inglês para Dono do Produto) é extretamente importante para o bom funcionamento de um time ágil e sua principal responsabilidade é:

  > Manter o Backlog de Produto atualizado e priorizado.

Ao iniciar um backlog de produto, podem surgir diversas dúvidas. Dentre elas, há três que percebo serem mais comuns:

1. Qual ferramenta usar para fazer a gestão?
2. Quais tipos de itens incluir no backlog?
3. Como manter o backlog saudável?

Neste post, vou compartilhar com você, como tenho resolvido essas três questões nos times que participei ao longo dos últimos 8 anos trabalhando com métodos ágeis. Essas respostas podem lhe ajudar a começar seu backlog de produto mais facilmente!

## 1. Escolhendo uma ferramenta para gerenciar o Backlog de Produto
Existem no mercado diversas ferramentas para a gestão de backlogs. Todas elas oferecem diversas funcionalidades e não é raro ficarmos indecisos e confusos sobre quais funcionalidades adotar. Muitas vezes nos sentimos até obrigados a usar todas as funcionalidades. Mas calma! Isso não é necessário.

As ferramentas que mais vejo serem usadas em times ágeis são: [Jira](https://www.atlassian.com/software/jira?), [Trello](https://trello.com) e [Asana](http://asana.com). Não é o objetivo deste post entrar em detalhes sobre elas e suas funcionalidades. Ao invés disso, vou te contar algumas características, que considero essenciais, para fazer uma boa escolha de ferramenta para a gestão do backlog de produto.


* **Permitir sub-tarefas** <br>
Isso significa possibilitar que um item tenha sub-itens, como uma tarefa ter sub-tarefas. Muitas funcionalidades de negócio, principalmente as mais estratégicas, precisam que várias atividades sejam realizadas para que ela seja considerada como concluída com sucesso. É comum que itens como este entrem no backlog como um item com diversos sub-itens.

* **Poder atribuir prioridade** <br>
Como mencionei no início do post, a principal responsabilidade de um PO é manter o backlog de produto atualizado e priorizado. Por este motivo é muito importante que a ferramenta escolhida possibilite alguma forma de priorização.

* **Visualizar em forma de lista** <br>
Para se comunicar, frequentemente é melhor ter uma lista. Listas não possuem dois itens no mesmo "nível" de prioridade. Ou o item vem acima, ou abaixo de algum outro. Essa ideia é excelente para estabelecer prioridades e deixá-la visível a stakeholders, time e a quem mais for necessário. Além de que, quem nunca usou uma lista de tarefas? Como é muito comum, fica fácil de todos entenderem a sequência em que as tarefas serão executadas.

* **Boas opções de buscas e ordenação** <br>
Como PO você vai precisar interagir muito, mas muito mesmo, com o backlog de produto! Vai precisar priorizar separadamente mas vai querer visualizar o todo após a priorização! Pode precisar buscar por itens sabendo apenas uma palavra chave ou se lembrando de apenas um detalhe da tarefa. Pode precisar focar em apenas um assunto, que eventualmente pode estar espalhado em várias tarefas e agrupados por uma etiqueta ou marcador que os relacionam.
<br>
&nbsp; &nbsp;Resumidamente, pode precisar buscar e ordenar de formas que você nem imagina. E lembre-se! Por diversos motivos, facilmente seu backlog pode crescer rapidamente. De 30 para 100, para 500 ou mais itens. Minha recomendação é, escolha uma ferramenta que tenha boas funcionalidades de busca e ordenação ou sofra as consequências!



## 2. Os diferentes tipos de itens no Backlog de Produto
Quando documentamos nossas ideias para um projeto em uma ferramenta de gestão, é comum termos dúvidas sobre como organizá-las. O que descrevo abaixo é uma forma simples de começar e que foi suficiente na maioria dos projetos que participei. Ao longo do texto, cito exemplos com o Jira, mas ao final, darei sugestões de como você pode adaptar para outras ferramentas.


* **O ajuste pontual** <br>
Um tipo de item de backlog bem comum são ajustes ou alterações pontuais, de negócio ou técnico, e costumam ser itens rápidos de resolver. Alguns exemplos são: alterar um texto de um pop up em um aplicativo, mudar as cores de todos os botões em determinada página ou tela, retornar alguma informação a mais no payload de algum serviço REST, etc. No geral, são ajustes ou alterações bem pontuais. No Jira, costumo usar o tipo Tarefa (Task) para itens como esse.

* **O bug** <br>
Um bug costuma representar um mal funcionamento em produção e, por este motivo, normalmente tem prioridade maior do que as tarefas. Eventualmente sua correção pode ser tão pontual como a de uma tarefa, mas as vezes não. É difícil saber ao certo. No Jira existe o tipo de item Bug, justamente para estes casos.

* **A grande funcionalidade** <br>
Outro tipo de item de backlog muito comum são aqueles que necessitam que um conjunto de tarefas sejam feitas para ser considerado completo. Podem ser, por exemplo, novas funcionalidades e, por isso necessitam de implementações em diferentes projetos para que seja concluída. Por exemplo: uma tela nova em um aplicativo. É provável que hajam tarefas do lado do aplicativo e outras do lado do backend que irá prover as informações que a nova tela no aplicativo irá exibir. O Jira tem o tipo de item Estória (Story) para casos como esse.
<!-- <br> -->
<!-- &nbsp; &nbsp; Não confunda a técnica de escrita Estória com o tipo de item que o Jira provê. Apesar desse tipo de item ser chamado de Estória, nada impede de usarmos a técnica de escrita de Estórias para escrever tarefas ou bugs, falaremos disso mais adiante.
 -->

* **Os itens técnicos** <br>
Além das ideias de negócio, é comum existir em um backlog de produto, itens técnicos, sejam eles grandes ou pontuais. Para estes itens, basta criar dois novos tipos de itens no Jira, uma Tarefa Técnica (Tech Task) e uma Estória Técnica (Tech Story). Ambos seguem a mesma ideia, respectivamente, de um ajuste pontual e uma grande funcionalidade, com a diferença que tratam assuntos técnicos.
<br>
&nbsp; &nbsp; Por exemplo, uma tarefa técnica poderia ser algo tão pontual como "Adicionar logs no método XYZ". Já uma estória técnica poderia ser "Utilizar o ELK como serviço para gestão de logs das aplicações" com sub-tarefas como: "Subir servidor com ELK", "Fazer todos os logs do serviço X serem enviados para o novo servidor do ELK", etc.

A ideia principal é ser possível distinguir um tipo de item do outro. Dessa forma você conseguirá fazer buscas e ordenações no backlog de produto para, por exemplo, saber quantos itens são ajustes rápidos, quantos são bugs, etc. Assim, o momento de priorizar e discutir com o time, será muito mais fácil e produtivo!

Caso a sua ferramenta não permita customizar tipos de itens diferentes, uma maneira de distinguí-los é através de marcadores, etiquetas ou prefixos no título, como por exemplo:

* [bug] Corrigir ortografia do popup de pagamento de contas
* [tarefa] Incluir tipo de cliente no retorno do serviço de login
* [estória] Funcionalidade de resetar senha
* [tarefa técnica] Melhorar logs no método X


## 3. Mantendo a saúde do Backlog de Produto
Diversas ideias vindas de diferentes pessoas vão surgir ao longo do tempo. Você não poderá refinar todas elas sempre, basicamente porque tempo é dinheiro e o tempo de qualquer pessoa é finito! Então você precisa focar no principal objetivo de um PO, relembrando: manter o backlog de produto atualizado e priorizado. Há duas informações que vão te ajudar a manter a saúde do seu backlog de produto: a estória e a prioridade percebida.

Estória do Jira e a técnica de escrita Estória são duas coisas diferentes. O Jira até passa a ideia [\[1\]](https://confluence.atlassian.com/agile/glossary/story?_ga=2.231644383.1152074856.1537238137-182799752.1527212613) de que o item do tipo Estória é uma tarefa escrita no formato de estória, mas isso não significa que você não possa escrever os bugs no formato de estória também.

Minha sugestão é, escreva todo item no formato de estória. Ao usar este formato você ganha produtividade pra priorizar. Uma estória é, basicamente, uma frase curta contendo três informações: O quê? Por quê? e Pra quem? Com essas informações é possível fazer uma rápida avaliação de valor de negócio ou impacto e decidir a prioridade do item.

Tem dúvidas sobre como escrever estórias de usuário? Eu te ajudo no post <a href="aprenda-como-escrever-estorias-de-usuario-com-a-tecnica-como-eu-quero-para-que">"Aprenda de uma vez por todas como escrever estórias de usuário com a técnica Como... Eu quero... Para que..."</a>.

Se você garantir que todo item que entrar no backlog seja escrito no formato de estória e tenha uma prioridade inicial, será muito mais fácil focar e refinar aquilo que é mais importante! Vale lembrar que um backlog de produto é dinâmico. O que hoje é considerado de baixa prioridade, amanhã pode não ser. Então revise as prioridades frequentemente para manter o backlog de produto representando os objetivos da empresa.


<p><center>. . .</center></p>

Pronto, agora que você já sabe como escolher uma ferramenta para gerir seu backlog, quais tipos de itens incluir e quais informações armazenar, é hora de começar o seu!

<!-- Baixe o e-book gratuíto sobre <a href="#portfolioModal{{page.modal-id}}" class="portfolio-link" data-toggle="modal">como escrever estórias de tarefas, bugs e funcionalidades</a> e comece agora mesmo a tirar as ideias da cabeça! -->
