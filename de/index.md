---
layout: default
title: Home
lang: de
ref: home
permalink: /
image: /assets/images/banner.png
---
# WERDE TEIL DER WACHSENDEN MAKER-BEWEGUNG
{: .center}

![Banner](/assets/images/banner.png "Banner"){: .img-center}

Der Keller ist zu klein oder du würdest die Nachbarn stören? Eine Garage zu mieten ist zu teuer? Lasst uns unsere Werkstatt teilen und die Kosten reduzieren! Dinge im gemeinschaftlich genutzten Raum mit Gleichgesinnten zu erschaffen hat viele Vorteile: zum Beispiel gibt es jede Menge Platz, über den man sich vorübergehend ausbreiten kann, und Geräte die man sich alleine nicht leisten würde weil man sie selten benötigt oder sie schlicht zu teuer sind.

[LERNE UNS KENNEN](/kontakt) 
{: .center .large-text .space-button }

Diese Idee ist nicht neu: die sogenannte “Maker-Bewegung” begann einige Jahre bevor wir in Heidelberg aktiv wurden und ist ein weltweites Phänomen. Sie wird von einer riesigen Gemeinschaft von Bastlern und Tüftlern getragen, die die Kontrolle über die Gegenstände, die uns jeden Tag umgeben, wiedererlangen wollen. Die Werkstätten, die sie dazu aufrechterhalten, werden auch "Makerspaces" oder "Fablabs" genannt. Neben einem hohen Innovationsgrad hat das Prinzip von lokaler oder „Desktop“-Produktion das Potenzial, die konventionelle Industrie in manchen Sektoren zu ersetzen während die große Bedeutung der Nachhaltigkeit zunehmend akzeptiert wird.

Zahlreiche ehrenamtliche Tutoren helfen dir in unserem Space, deine verrückten Ideen mit einer breit gefächerten Auswahl an Handwerkzeugen, Elektrowerkzeugen, Maschinen, Rapid-Prototyping-Ausrüstung und vielem mehr in coole Projekte umzuwandeln. Wenn ein Projekt unbekannte Techniken beinhaltet gibt es meistens jemanden mit mehr Erfahrung, der dir helfen oder wertvolle Tipps geben kann.

## Was tun wir im CoMakingSpace?

{% for post in site.posts %}
    {% if forloop.index > 2 %}
      {% break %}
    {% endif %}
  
<div class="{% cycle 'post', 'post' %}">
<div class="post-image">
  <a href="{{ post.url }}"><img src="{{post.image}}" alt="{{post.title}}"></a>
</div>
<div class="post-teaser">
  <div class="post-teaser-title">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  </div>
  <div class="post-teaser-content">
  <p>{{ post.excerpt }}</p>
  </div>
</div>
</div>
  
{% endfor %}


Weitere Neuigkeiten findest du in unserem [Blog](/neuigkeiten/). 

# Bildung umdenken: Gemeinsam & gemeinschaftlich lernen
“Making” ist eine Lebenseinstellung und man lernt nie aus. Jedes Projekt ist eine Chance, daran zu wachsen, und es gibt immer neue Erfahrungen zu machen! Deshalb bieten wir eine solidarische, gemeinschaftsbasierte Ressource die den Einzelnen hilft, ihre persönlichen Fähigkeiten weiterzuentwickeln.

Der CoMakingSpace ist der ideale Ort, um Mitstreiter für deine verrückten Projekte zu finden. Gemeinsam etwas zu gestalten ist eine hervorragende Möglichkeit, Fähigkeiten zu erlernen und weiterzugeben. "Learning by doing", wie es richtig Spaß macht!

Außerdem sind wir eine freundliche Gemeinschaft, die Inspiration oder neue Erkenntnisse in deine Arbeit einbringen kann. Mitstreiter für größere Unterfangen zu finden oder einfach in Ruhe im Sozialbereich zu reden ist genauso wichtig wie wirklich einen Hammer zu schwingen! 
