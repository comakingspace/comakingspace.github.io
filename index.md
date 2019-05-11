---
layout: default
title: Home
---
ToDos:
* Bilder Hinzufügen (Projekte? Räume? Kein "Werbematerial", echte Sachen!)

CoMakingSpace? Was ist das?
-
Der CoMakingSpace ist eine offene Werkstatt für “Maker” aus verschiedensten Richtungen. Wir möchten, dass alle realisieren können was auch immer sie sich ausdenken und bieten die nötigen Werkzeuge, Räume und Fähigkeiten.

Wäre es nicht toll wenn du jederzeit an deinen Projekten arbeiten könntest, zum Beispiel nach Feierabend? 

[Dann komm einfach bei uns vorbei und mach mit.](/mach_mit/)

Du kannst dir auch zuerst unsere Neuigkeiten anschauen:
<ul>
  {% for post in site.posts %}
     {% if forloop.index > 2 %}
       {% break %}
     {% endif %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>

Weitere Artikel findest du in unserem [Blog](/blog/). 