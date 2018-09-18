---
layout: post
title:  "3 passos simples para começar agora o seu Backlog de Produto"
date:   2018-09-08
categories: métodos ágeis
tags: [métodos ágeis, backlog de produto, product owner]
image: assets/img/posts/product-backlog-agile-startegy.jpg
keywords:
modal-id: 4
related:
  - title: Excelente post no blog da Caelum sobre Java 8
    url: http://blog.caelum.com.br/o-minimo-que-voce-deve-saber-de-java-8/
resumo: >
   O papel do Product Owner é extretamente importante para o bom funcionamento de um time ágil. Sua principal responsabilidade é manter o backlog de produto atualizado e priorizado! Para isso é necessário ter organização e tomar algumas decisões antes de começar. Neste post iremos falar das principais dúvidas que surgem quando se inicia a construção de um backlog de produto eficiente.
---

O papel do Product Owner (termo inglês para Dono do Produto) é extretamente importante para o bom funcionamento de um time ágil. Sua principal responsabilidade é:

  > ##### Manter o Backlog de Produto atualizado e priorizado.

Mas ao criar um Backlog do Produto surgem diversas dúvidas, como por exemplo:

- Como deve ser um backlog de produto?
- Quais tipos de itens deve ter?
- Quais ferramenta usar?
- Dentre muitas outras!!

Neste post, vou compartilhar com você, como tenho resolvido algumas dessas questões nos diversos projetos que participei nos últimos 8 anos trabalhando com métodos ágeis. Com essas dicas você estará pronto para iniciar seu backlog de produto de forma eficiente e prática!


## 1. Decidindo qual ferramenta usar para gerenciar o Backlog de Produto
Temos no mercado diversas ferramentas para a gestão de backlogs. Todas essas ferramentas oferecem diversas funcionalidades e não é raro ficarmos indecisos e confusos sobre quais funcionalidades adotar. Muitas vezes nos sentimos até obrigados a usar todas as funcionalidades da ferramenta. Calma! Isso não é necessário.

As ferramentas que mais vi serem usadas em times ágeis são: Jira, Trello ou Asana. Não é o objetivo deste post entrar em detalhes das funcionalidades de cada uma, ao invés disso, iremos pensar sobre quais características considerar para escolher uma delas.

Essa escolha depende de muitas variáveis, como por exemplo: tamanho do time, custo e funcionalidades disponíveis. Você precisa pensar um pouco sobre quais são as suas necessidades e do seu time. A seguir eu listo as funcionalidades que eu considero como as principais para uma boa gestão do Backlog de Produto:


* **Permitir sub-tarefas** <br>
Isso significa possibilitar que um item tenha sub-itens, como uma tarefa ter sub-tarefas. Muitas funcionalidades de negócio, principalmente as mais estratégicas, precisam que várias alterações sejam realizadas, as vezes, inclusive em diferentes sistemas. Sua conclusão com sucesso depende da conclusão de todas essas alterações. Em um backlog de produto, este tipo de item deve conter uma lista com as sub-tarefas que precisam ser executadas para que ele seja considerado completo.

* **Poder atribuir prioridade** <br>
Como mencionei no início do post, a principal responsabilidade de um PO é manter o backlog de produto atualizado e priorizado. Por este motivo é muito importante que a ferramenta escolhida possibilite alguma forma de priorização.

* **Visualizar em forma de lista** <br>
Para se comunicar com stakeholder, frequentemente é melhor ter uma lista. Listas não possuem dois itens no mesmo "nível" de prioridade. Ou o item vem acima, ou abaixo de algum outro. Essa ideia é excelente para estabelecer prioridades e comunicar isso aos stakeholders, ao time e a quem for necessário. Além de que, quem nunca usou uma lista de tarefas na vida? Como é muito comum, fica fácil de todos entenderem a sequência em que as tarefas serão executadas.

* **Boas opções de buscas e ordenação** <br>
Como PO você vai precisar interagir muito, mas muito mesmo, com o backlog de produto! Vai precisar priorizar separadamente mas vai querer visualizar o todo após a priorização! Pode precisar buscar por itens sabendo apenas uma palavra chave ou se lembrando de apenas um detalhe da tarefa. Pode precisar focar em apenas um assunto, que eventualmente pode estar espalhado em várias tarefas e agrupados por uma etiqueta ou marcador que os relacionam.
<br>
&nbsp; &nbsp;Resumidamente, pode precisar buscar e ordenar de formas que você nem sabe. E lembre-se! Por diversos motivos, facilmente seu backlog pode crescer rapidamente. De 30 para 100, para 500 ou mais itens. Minha recomendação é: escolha uma ferramenta que tenha boas funcionalidades de busca e ordenação ou sofra as consequências!



## 2. Os diferentes tipos de itens no Backlog de Produto
No geral, quando vamos documentar nossas ideias do que é preciso ser feito no projeto para uma ferramenta de gestão como Jira ou Asana, é comum termos dúvida sobre como organizá-las. O que vou descrever abaixo é uma forma simples de começar e que foi suficiente na maioria dos projetos que participei. Ao longo do texto eu cito exemplos práticos com o Jira mas ao final, eu dou sugestões de como você pode adaptar caso use outras ferramentas.


* **O ajuste pontual** <br>
Um tipo de item de backlog comum são ajustes ou alterações pontuais, de negócio ou técnico e costumam ser rápidas de resolver. Alguns exemplos são: alterar um texto de um pop up em um aplicativo, mudar as cores de todos os botões em determinada página ou tela, retornar alguma informação a mais no payload de algum serviço REST, etc. No geral, são ajustes ou alterações bem pontuais. No Jira, costumo usar o tipo Task (Tarefa) para estes itens como esse.

* **O bug** <br>
Um bug normalmente representa um mal funcionamento em produção e por este motivo, normalmente tem prioridade maior do que as tarefas. Eventualmente sua correção pode ser tão pontual como a de uma tarefa, mas as vezes não. É difícil saber ao certo. No Jira existe o tipo de item que é Bug, justamente para estes casos.

* **A grande funcionalidade** <br>
Outro tipo de item de backlog muito comum são aqueles que necessitam que um conjunto de tarefas sejam feitas para ser considerado completo. Podem ser, por exemplo, novas funcionalidades e, por isso necessitam de implementações em diferentes projetos para que seja concluída. Por exemplo: uma tela nova em um aplicativo. É provável que hajam tarefas do lado do aplicativo e outras do lado do backend que irá prover as informações que a nova tela no aplicativo irá exibir. No Jira existe o tipo de item Story (Estória) que é definido como *"um requisito de negócio, expresso em sentenças curtas e idealmente linguajar não técnico e é composto por SubTasks (Sub-Tarefas)"* [\[1\]](https://confluence.atlassian.com/agile/glossary/story?_ga=2.231644383.1152074856.1537238137-182799752.1527212613).
<br>
&nbsp; &nbsp; Não confunda aqui a técnica de escrita Estória com o tipo de item que o Jira provê. Apesar desse tipo de item ser chamado de Estória, nada impede de usarmos a técnica de escrita Estória para escrever tarefas, falaremos disso mais adiante.

* **Os itens técnicos** <br>
Além das ideias de negócio, é comum existir em um backlog de produto itens técnicos, sejam eles grandes ou pontuais. Para eles, basta criar dois novos tipos de itens no Jira, uma Tech Task e um Tech Story. Ambos seguem a mesma ideia, respectivamente, de um item pontual e um item grande, com a diferença que tratam assuntos técnicos.

<br>
A ideia principal é ser possível identificar um tipo de item do outro. Se você não usa o Jira, que permite ter tipos de itens diferentes, você pode utilizar etiquetas (labels) ou mesmo um pré-fixo no título das suas tarefas, por exemplo, usar títulos como:

* [BUG] Corrigir ortografia do popup de login
* [TAREFA] Incluir tipo de cliente no retorno do serviço de login
* [ESTÓRIA] Funcionalidade de resetar senha


## 3. Mantendo a saúde do Backlog de Produto
Diversas ideias vindas de diversas pessoas vão surgir ao longo do tempo. Você não poderá refinar todas elas sempre, basicamente porque tempo é dinheiro e o tempo de qualquer pessoa é finito! Então você precisa focar no principal objetivo de um PO: Manter o backlog de produto atualizado e priorizado. Há duas informações que são vão te ajudar a manter a saúde do seu backlog de produto: a estória e a prioridade percebida.

Como comentamos acima, Estória do Jira e a técnica de escrita Estória são duas coisas diferentes. O Jira até dá a entender que o item do tipo Story é uma tarefa escrita no formato de estória, mas isso não significa que você não possa também escrever os bugs e tarefas no formato de estória.

Minha sugestão é, escreva todo item no formato de estória. Ao usar o formato de estória você ganha produtividade pra priorizar. Uma estória é, basicamente, uma frase curta contendo 3 informações: O quê? Por quê? e Pra quem? Com essas 3 informações é possível fazer uma rápida avaliação de valor de negócio ou impacto e decidir a prioridade do item.

Se você garantir que todo item que entrar no backlog seja escrito no formato de estória e tenha uma prioridade inicial, vai ser muito mais fácil focar e refinar aquilo que é mais importante! Vale lembrar que um backlog de produto é dinâmico. O que hoje é considerado de baixa prioridade amanhã pode não ser, então revise as prioridades periodicamente para manter o backlog de produto representando os objetivos da empresa.


<p><center>. . .</center></p>

Pronto, agora que você já sabe como escolher a ferramenta para gerir seu backlog, quais tipos de itens ter e quais informações armazenar, é hora de começar o seu! Baixe o e-book gratuíto sobre **Como escrever estórias de tarefas, bugs e funcionalidades** com exemplos!

Até breve! :)
