---
layout: default
title: Team
permalink: /team/
---
ToDos:
* Namen hinzufügen
* Bilder hinzufügen
* Beschreibung hinzufügen


Leitung
=
  {% for post in site.posts %}

  {% endfor %}



Hier findet ihr unsere Leiter. Diese sorgen dafür, dass "der Laden läuft":


<div class="team">
{% for item in site.data.managers %}
  <div class="{% cycle 'team-regular', 'team-alternate' %}">
    <div class="team-image">
      <img src="{{item.image}}">
    </div>
    <div class="team-name">
      <div class="team-text-name">
        <h2>{{item.name}}</h2>
      </div>
      <div class="team-text-desc">
      <p>{{item.desc}}</p>
      </div>
    </div>
    </div>
{% endfor %}
</div>



Zusätzliche Aufsichtspersonen
=
Um die Leitung des CoMakingSpace zu unterstützen, übernehmen einige Mitglieder ehrenamtlich die Aufgabe, bei Bedarf die Aufsicht während unserer [Öffnungszeiten](/calendar) zu übernehmen:

<div class="team">
    {% for item in site.data.supervisors %}
  <div class="{% cycle 'team-regular', 'team-alternate' %}">
    <div class="team-image">
      <img src="{{item.image}}">
    </div>
    <div class="team-name">
      <div class="team-text-name">
        <h2>{{item.name}}</h2>
      </div>
      <div class="team-text-desc">
      <p>{{item.desc}}</p>
      </div>
    </div>
    </div>
    {% endfor %}
</div>
