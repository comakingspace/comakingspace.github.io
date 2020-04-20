---
layout: default
title: Home
permalink: /index_copy/
---
ToDos:
* Bilder Hinzufügen (Projekte? Räume? Kein "Werbematerial", echte Sachen!)

CoMakingSpace? Was ist das?
-
Der CoMakingSpace ist eine offene Werkstatt für “Maker” aus verschiedensten Richtungen. Wir möchten, dass alle realisieren können was auch immer sie sich ausdenken und bieten die nötigen Werkzeuge, Räume und Fähigkeiten. Hier kannst du dir eine große Werkstatt mit Gleichgesinnten teilen!

Wäre es nicht toll wenn du jederzeit an deinen Projekten arbeiten könntest, zum Beispiel nach Feierabend? 

[Dann komm einfach bei uns vorbei und mach mit.](/mach_mit/)

Du kannst dir auch zuerst unsere Neuigkeiten anschauen:

{% for post in site.posts %}
    {% if forloop.index > 2 %}
      {% break %}
    {% endif %}
  
<div class="{% cycle 'post', 'post-alternate' %}">
<div class="post-image">
  <a href="{{ post.url }}"><img src="{{post.image}}"></a>
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


Weitere Artikel findest du in unserem [Blog](/blog/). 


WERDE TEIL DER WACHSENDEN MAKER-BEWEGUNG
=
Der Keller ist zu klein oder du würdest die Nachbarn stören? Eine Garage zu mieten ist zu teuer? Lasst uns unsere Werkstatt teilen und die Kosten reduzieren! Dinge im gemeinschaftlich genutzten Raum mit Gleichgesinnten zu erschaffen hat viele Vorteile: zum Beispiel gibt es jede Menge Platz, über den man sich vorübergehend ausbreiten kann, und Geräte die man sich alleine nicht leisten würde weil man sie selten benötigt oder sie schlicht zu teuer sind.

Diese Idee ist nicht neu: die sogenannte “Maker-Bewegung” begann einige Jahre bevor wir in Heidelberg aktiv wurden und ist ein weltweites Phänomen. Sie wird von einer riesigen Gemeinschaft von Bastlern und Tüftlern getragen, die die Kontrolle über die Gegenstände, die uns jeden Tag umgeben, wiedererlangen wollen. Die Werkstätten, die sie dazu aufrechterhalten, werden auch "Makerspaces" oder "Fablabs" genannt. Neben einem hohen Innovationsgrad hat das Prinzip von lokaler oder „Desktop“-Produktion das Potenzial, die konventionelle Industrie in manchen Sektoren zu ersetzen während die große Bedeutung der Nachhaltigkeit zunehmend akzeptiert wird.

Zahlreiche ehrenamtliche Tutoren helfen dir in unserem Space, deine verrückten Ideen mit einer breit gefächerten Auswahl an Handwerkzeugen, Elektrowerkzeugen, Maschinen, Rapid-Prototyping-Ausrüstung und vielem mehr in coole Projekte umzuwandeln. Wenn ein Projekt unbekannte Techniken beinhaltet gibt es meistens jemanden mit mehr Erfahrung, der dir helfen oder wertvolle Tipps geben kann.

Bildung umdenken: Gemeinsam & gemeinschaftlich lernen
=
“Making” ist eine Lebenseinstellung und man lernt nie aus. Jedes Projekt ist eine Chance, daran zu wachsen, und es gibt immer neue Erfahrungen zu machen! Deshalb bieten wir eine solidarische, gemeinschaftsbasierte Ressource die den Einzelnen hilft, ihre persönlichen Fähigkeiten weiterzuentwickeln.

Der CoMakingSpace ist der ideale Ort, um Mitstreiter für deine verrückten Projekte zu finden. Gemeinsam etwas zu gestalten ist eine hervorragende Möglichkeit, Fähigkeiten zu erlernen und weiterzugeben. "Learning by doing", wie es richtig Spaß macht!

Außerdem sind wir eine freundliche Gemeinschaft, die Inspiration oder neue Erkenntnisse in deine Arbeit einbringen kann. Mitstreiter für größere Unterfangen zu finden oder einfach in Ruhe im Sozialbereich zu reden ist genauso wichtig wie wirklich einen Hammer zu schwingen! 
