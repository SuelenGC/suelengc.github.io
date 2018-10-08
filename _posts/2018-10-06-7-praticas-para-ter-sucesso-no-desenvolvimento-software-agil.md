---
layout: post
title:  "7 práticas para ter sucesso no desenvolvimento de software ágil"
date:   2018-10-06
categories: métodos ágeis
tags: [métodos ágeis, qualidade de software, desenvolvimento ágil]
image: assets/img/posts/praticas-ageis.jpg
modal-id: 5
ebook-title: ""
ebook-image:
ebook-resume:
resumo: >
   Já se pegou pensando “Qual nome uso nessa branch?” ou “Faço merge ou rebase?”. Essas e outras dúvidas de processo, a cada tarefa, podem custar muito caro para times ágeis. Neste post, vou compartilhar com você, sete práticas no fluxo de desenvolvimento de software, que percebi contribuírem mais para a agilidade de um time.
---

Já se pegou pensando “Qual nome uso nessa branch?” ou “Faço merge ou rebase?”. Essas e outras dúvidas de processo, a cada tarefa, podem custar muito caro para times ágeis. Impactando diretamente na velocidade do time, consequentemente na entrega de valor e nos resultados da empresa.

Neste post, vou compartilhar com você, sete práticas no fluxo de desenvolvimento de software, que percebi contribuírem mais para a agilidade de um time. Espero que você também possa aplicá-las no seu dia a dia e tornar-se ainda mais ágil.



## 1. Tire proveito do nome das suas branches

Sabia que o nome de suas branches podem ser muito úteis para rastreabilidade das tarefas? Padronizar o nome das branches, de forma que você consiga associar a qual atividade ela está relacionada, ajuda a reduzir vários minutos pensando em nomes criativos. Guarde sua criatividade para situações melhores!

Outra vantagem é economizar tempo quando se precisa rastrear quais funcionalidades ou correções foram entrando no código ao longo do tempo. O que tem dado muito certo nos times ágeis que participei é criar branches com o seguinte formato:

  > feat_ops07_new_help_screen

Onde **feat_** significa feature, ou seja, uma nova funcionalidade; **ops07** é o identificador da tarefa, que no meu caso seria OPS-07 no Jira. E por fim, **_new_help_screen** são três palavras que resumem a tarefa.

Eu falo mais sobre tipos de tarefas neste outro post sobre <a href="http://suelencarvalho.com/articles/backlog-de-produto-comece-o-seu">como organizar um backlog de produto do zero</a>. Para identificar o tipo de tarefa costumo usar os seguintes padrões:
- **feat** para funcionalidade,
- **bug** para branch de correção de bugs e
- **hotfix** para branches que vão corrigir um bug urgente em produção.


## 2. O Git flow certo, nem mais, nem menos

É essencial para um time ágil pensar e estabelecer um fluxo de trabalho com o Git que seja mais adequado para o time. Um dos mais famosos fluxos com o Git é o apresentado no post <a href="https://nvie.com/posts/a-successful-git-branching-model/"> A successful Git branching model</a>. Porém, tenho percebido que este fluxo costuma ser muito mais robusto <u>e complexo</u> do que a maioria dos times ágeis precisam. Eu tenho usado, com muito sucesso, uma versão simplificada deste fluxo:

- **Branch master** representa o código de produção. Ninguém faz commits diretos nesta branch, ela apenas recebe merge da branch `develop`;

- **Branch develop** é inicialmente baseada na `master`. É a branch onde as funcionalidades serão integradas conforme são liberadas para teste ou estiverem prontas, que são as features branches;

- **Feature branches** são branches que recebem o padrão de nomes que comentei no item 1. Essas branches são baseadas na branch `develop` e cada branch representa uma tarefa específica.


## 3. Integre o código com rebase e turbine a rastreabilidade

Quem nunca digitou `git log --oneline --graph` e ficou perplexo com a quantidade de ramificações e linhas cruzadas? Muito confuso certo?! Com o Git, temos basicamente duas formas de integrar uma feature branch à branch de `develop`: por meio de merge ou rebase.

Ambas atendem o objetivo. Porém, o uso do rebase torna o histórico de commits mais fácil de ler, de forma que é possível visualizar facilmente uma atividade entrando após a outra, sem linhas de branches se cruzando!

Para isso, imediatamente antes de abrir ou mergear um PR, costumo fazer rebase da minha feature branch com `develop` e resolvo os conflitos localmente. Isso me possibilita retestar e garantir que, após integrar com todas as outras alterações já prontas, minha tarefa continua ok.


## 4. Tire o máximo do Code Review

As políticas sobre code review são variadas, vão depender de muitos fatores, dentre eles, o tamanho do time. Se o contexto permitir, eu sugiro pelo menos 2 aprovações para que o PR possa ser mergeado.

Não é o objetivo deste texto entrar em detalhes sobre como fazer bons code reviews, mas é importante que o time esteja confortável em ser criterioso no code review e, o responsável pela feature branch, em aceitar sugestões de melhoria no seu código.

Vale lembrar que, em um time ágil, o que os indivíduos do time podem fazer sozinhos é menos relevante do que o que eles podem fazer juntos!


## 5. Como lidar com hotfixes

Hotfixes costumam ser bugs que precisam ser resolvidos imediatamente. Para estes casos, como é uma correção que vai ser feita, testada e o quanto antes deployada em produção, é comum essa branch se basear na `master`. Após concluída a correção, a ideia é que sejam abertos dois PRs, um para `master` e outro para `develop`, para aplicar a correção em ambas as branches.

Fora o fato de uma branch de hotfix se basear na `master`, todo o restante do fluxo (rebase, pull request, code review, testes, etc) não muda. Apenas se torna mais prioritário, enxuto e rápido devido a pontualidade e urgência da correção.


## 6. O melhor momento para apagar as feature branches

Uma dúvida comum é "Qual o melhor momento para se apagar uma feature branch?". Para mim, este momento ocorre quando ela não é mais útil, ou seja, no momento que o código relacionado a determinada branch for para produção.

Antes disso, essa branch ainda poderá ser usada para fazer correções ou ainda, optar por postergar o deploy da tarefa relacionada a ela. Mantendo a branch, você está "guardado" o código para fazer o deploy num momento mais adequado.


## 7. Automatize! Automatize! Automatize!

Para um fluxo de desenvolvimento de software realmente ser eficiente, ele tem que ser fluído. Ou seja, não podemos desperdiçar tempo com tarefas repetitivas e suscetíveis a erros humanos, como realizar deploys. Logo, automatize o máximo de tarefas que puder: execução de testes, validação de "code style", lints, o deploy (continuous delivery) e outras.

Além de ferramentas bem tradicionais como <a href="https://jenkins.io/">Jenkins</a>, atualmente já podemos contar com diversas opções de SAAS (Software As A Service) que simplificam esta tarefa, alguns exemplos são <a href="https://circleci.com" target="_blank">CircleCI</a> e <a href="https://travis-ci.org/" target="_blank">Travis</a>.


<p><center>. . .</center></p>

Muitas pessoas acreditam que o que torna um time ágil são grandes mudanças. Entretanto, a agilidade está nos detalhes. Um detalhe muito importante, capaz de turbinar a agilidade de um time, é estruturar um bom fluxo de desenvolvimento de software. O objetivo é remover o máximo de obstáculos e deixar apenas os processos que agregam algum valor como velocidade ou qualidade.

Agora com essas dicas você já tem mais insumos para tornar o seu time ainda mais ágil!
