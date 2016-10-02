---
layout: post
title:  "Dicas sobre interface visual para desenvolvedores mobile"
date:   2013-03-01
tags: [android, mobile, ui, ux, mobile]
image: 
keywords:
related:
  - title: Calculadora de Tributos PJ na Google PlayStore
    url: https://play.google.com/store/apps/details?id=br.com.suelengc.calctributospj&hl=pt_BR
resumo: >
   Aprenda alguns macetes para deixar seus aplicativos Android mais atraentes em um passe de mágica.
---
<p>Bem, já vou começar dizendo que não sou nenhuma especialista em design e muito menos que lí inúmeros livros que tratam do assunto. Isso me torna uma pessoa totalmente sem credibilidade? Não necessariamente, mas vou deixar este julgamento a você caro leitor.</p>
<p>Para construir a interface visual do meu app de Cálculo de Tributos PJ, me embasei na aplicação <a href="https://play.google.com/store/apps/details?id=net.dotlegend.boalista&amp;feature=search_result#?t=W251bGwsMSwyLDEsIm5ldC5kb3RsZWdlbmQuYm9hbGlzdGEiXQ.." target="_blank">BoaLista</a>, pois na minha opinião ela tem uma interface muito agradável além de uma usabilidade muito boa.</p>
<p>Basicamente eu segui as seguintes ideias:</p>
<ul>
<li>Usar poucas bordas e que elas sejam finas.</li>
<li>Cores claras é uma boa ideia (51 !?).</li>
<li>Cantos arredondados, mas nem tanto.</li>
<li>Campos de entrada de informações devem visualmente estar na mesma separação visual label e valor digitado, e ainda há aquela possibilidade de ao começar a digitação, sumir com o label, o tal do android:hint.</li>
<li>Não criar muitas separações visuais pois quando se divide um espaço e vários sub-espaços, dá a impressão que o espaço é menor do que ele realmente é. Tem também a questão de que criar divisões, por si só só já ocupa espaço == as bordas.</li>
</ul>
<p>Os demais apps que estou desenvolvendo, costumo dar uma olhada antes no site <a title="Ir para Android Niceties" href="http://androidniceties.tumblr.com/" target="_blank">AndroidNiceties.tumblr.com</a> que lista os melhores design mobile do momento!! Lá é possível observar os apps e achar padrões de design e se você não é expert no assunto como eu e também é desenvolvedor, pelo menos de "pattern" você entende :)</p>
<p>Abaixo mostro um comparativo do design de telas das primeiras versões da <strong>Calculadora de Tributos PJ</strong> e da última, que está hoje na PlayStore. Exatamente a esquerda temos a versão 2 e a direita temos a versão 6.</p>

![CalcPJ Versão 2]({{site.url}}/assets/img/posts/calc-pj2.png) | ![CalcPJ Versão 6]({{site.url}}/assets/img/posts/calc-pj-new2.png) 

<p>Ambas as imagens foram extraídas do app sendo executado no mesmo device, um Samsung Galaxy Note. É possível observar que:</p>
<ul>
<li>A versão 6 usa cores  mais claras;</li>
<li>Não possui bordas explícitas como a borda amarela da versão 2;</li>
<li>A fonte é um pouco menor;</li>
<li>A tabela que contém o cálculo usa intercalação de cores para melhor guiar os olhos do usuário para ver o valor algum imposto e possui bordas arredondadas</li>
<li>O design do botão está mais dentro da paleta de cores do app;</li>
<li>Introduzido o patter layout de menu do Android;</li>
<li>O label do campo e a parte de digitação estão no mesmo espaço visual;</li>
</ul>
<p>Por fim, ainda há muito o que melhorar, no entanto, para a versão 6 foram feitas uma série de mudanças que aos meus olhos soam melhores do que as versões anteriores. </p>

<p>O feedback dos usuários quanto a nova versão foi muito positivo, é possível ver nos comentários do app na PlayStore.</p>
