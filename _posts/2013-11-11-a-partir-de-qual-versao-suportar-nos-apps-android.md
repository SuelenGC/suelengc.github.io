---
layout: post
title:  "Saiba como decidir qual versão suportar nos aplicativos Android"
date:   2013-11-11
tags: [android, mobile]
image: assets/img/posts/androids_frags.png
keywords:
related:
  - title: Who’s Winning, iOS or Android? All the Numbers, All in One Place 
    url: http://techland.time.com/2013/04/16/ios-vs-android/
  - title: Mais da metade dos aparelhos Android no mundo já roda alguma versão do Jelly Bean
    url: http://meiobit.com/270726/mais-da-metade-android-jelly-bean/
  - title: Cut Loose - Dropping support for older versions of Android is the next big thing
    url: http://androidandme.com/2013/03/opinions/dropping-development-for-older-versions-of-android-is-the-next-big-thing
  - title: The many faces of a little green robot
    url: http://opensignal.com/reports/fragmentation.php
resumo: >
   Um fator muito importante e muitas vezes ignorado por desenvolvedores Android é qual versão mínima suportar em seu aplicativo. Sem pensar nisso seu aplicativo pode estar perdendo usuário. Veja neste post tudo o que precisa considerar para tomar esta decisão.
---
<p dir="ltr">O Android é popularmente conhecido pela sua fragmentação de versões e devices. Ou seja, versões mais recentes do Android possuem recursos que não existem em versões mais antigas, além de que temos mais de 4000 smartphones diferentes rodando Android atualmente (fonte: Google Play Developer Console).</p>
<p>A grande divisora de águas no Android atualmente é a versão 3.x, ela marca um antes, durante e depois. Antes dela todas as versões foram desenvolvidas unicamente para smartphones, apesar de alguns tablets também usarem. Durante, as versões 3.x, foram desenvolvidas unicamente para tablets. E a partir da versão 4+, estes dois mundos foram unificados para rodarem em ambos, smartphones e tablets.</p>
<p>Esta característica trás a tona uma dúvida muito comum para desenvolvedores e empresas: ”A partir de qual versão do Android devemos suportar em nossos aplicativos?”. Apesar de aparentemente trivial, esta decisão é muito importante e pode representar o sucesso ou o fracosso do seu app, portanto deve ser muito bem embasada.</p>
<p>Veremos aqui uma estratégia possível para se tomar esta decisão. Os parágrafos a seguir são baseados na minha experiência pessoal e conhecimento sobre o mundo mobile e Android. Cada um deve pensar sobre eles, e outros que considerar pertinente, aplicado ao seu contexto para tirar conclusões.</p>
<p>Existem duas situações que podemos precisar decirdir qual versão do Android suportar: quando iniciamos o desenvolvimento de um app novo ou quando já temos um e nunca foi realmente pensado sobre isso. Acredito que os itens a seguir podem se encaixar em ambos os casos.</p>
<h2 dir="ltr"><strong>Passo 1: Inicie suportando a menor versão possível</strong></h2>
<p dir="ltr">É importante conhecer os recursos disponibilizados pelas versões e a partir disso pensar se realmente é necessário aquela versão mais recente ou se uma mais antiga já é suficiente para o projeto. Opte pela menor versão possível que atenda as funcionalidades  primordiais do seu app, as que definem seu negócio.</p>
<p>Na maior parte dos casos, versões mais antigas o atenderão, principalemente levando-se em conta que desde 2009 o Google mantém o <a href="http://developer.android.com/tools/support-library/index.html">Support Library</a>, que leva novas funcionalidades para versões mais antigas do Android.</p>
<p>Este passo é muito importante para aumentar ao máximo os insumos para irmos para o próximo passo. Pois quanto menor for a versão que você decida suportar, maior será o público que seu app irá atingir.</p>
<p>O objetivo deste primeiro passo é ampliar nosso leque de informações para que decisões mais estratégicas como: “suportar a partir de versões mais recentes” ou “não dar suporte especializado a derterminada configuração que existe em poucos devices”, dentre outras, possam ser tomadas. Desta forma torna-se possível mais tarde, estreitar seu suporte de forma conciente.</p>
<h2><strong>Passo 2: Analise em quais versões seus usuários estão distribuídos</strong></h2>
<p dir="ltr">Este passo tem como objetivo lhe dar informações sobre seus usuários atuais, ou seja, pessoas que já decidiram e instalaram seu app. Com essas informações você conseguirá saber qual versão deve suportar para manter estes usuários.</p>
<p dir="ltr">O Google disponibiliza uma ferramenta de gerenciamento do app (deployment, test A/B, estatística e outros) muito poderosa, que é o Google Play Developer Console. Com ela é possível visualizar quantas instalações foram feitas (mesmo que desinstaladas posteriormente), quantas instalações ativas (que o app permanece instalado), qual a distribuição dessas instalações dentre as versões do Android, devices e muito mais.</p>

![]({{site.url}}/assets/img/posts/android-console.png)

<h5 style="text-align: center;" dir="ltr"><span style="color: #808080;">Google Play Developer Console</span></h5>
<h2 dir="ltr"><strong>Passo 3: Analise em quais versões o mundo está distribuído</strong></h2>
<p dir="ltr">Com este passo será possível obter dados de como expandir o app. Ou seja, qual versão do Android seu público alvo, que não é um usuário ativo (target), pode estar usando. Tornando possível tirar conclusões sobre quais versões continuar suportando para que no futuro ainda mais usuários tenham acesso a seu app.</p>
<p>O Google mantém estatísticas como estas. Periodicamente ele analisa os usuários da Play Store, webstore do Google, e gera alguns gráficos e tabelas que contém informações sobre qual a distribuição destes usuários dentro das versões do Android e outras. Estas estatísticas podem ser acessadas nos <a href="http://developer.android.com/about/dashboards">Dashboards do site Android Developer</a>.</p>
<p>As informações mais atuais, até a escrita deste texto, disponibilizadas pelo Google mostram que apenas 1,7% dos devices estão em versões 2.2 ou infeior. Que as verões 2.3.3 e 2.3.7 representam 26,3% . E 72,0% dos devices estão rodando a versão 4.0.3 ou superior. Ou seja, 98,3% dos aparelhos analisados pelo Google rodam o Android 2.3.3 ou superior.</p>

![]({{site.url}}/assets/img/posts/android-garf.png)

<h5 style="text-align: center;" dir="ltr"><a href="http://developer.android.com/about/dashboards"><span style="color: #808080;">Dashboards do site Android Developer</span></a><span style="color: #808080;"> em 14/11/2013</span></h5>
<h2 dir="ltr"><strong>Conclusão</strong></h2>
<p dir="ltr">No passado esta decisão já foi muito mais difícil pois, os devices com Android usavam versões de forma muito mais pulverizada. Nos dias atuais a fragmentação está concentrada em dois grandes grupos: versões 2.3.3 e 2.3.7 e versões 4+.</p>
<p>As funcionalidades disponíveis para estes dois grandes grupos estão relativamente bem niveladas. Além deste nivelamento, para nos ajudar nas implementações de funcionalidades mais complexas, podemos contar também com o <a href="http://developer.android.com/tools/support-library/index.html">Support Library</a>, mencionado no início deste texto e bibliotecas disponibilizadas pela comunidade do Android.</p>
<p>No entanto, ainda assim é interessante analisar esta questão de qual versão do Android suportar e, considerar os pontos levantados além de outros que forem pertinentes para encontrar a melhor opção no contexto de cada um. Desta forma será possível tomar a melhor decisão de forma conciente e tirar mais proveito das oportunidades que surgirem com ela.</p>
<p>E você, considera outros critérios? Compartilhe aqui sua opinião adicionando um comentário.</p>
