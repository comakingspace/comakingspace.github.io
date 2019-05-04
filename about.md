---
layout: default
title: About
permalink: /about/
---
ToDos:
* Namen hinzufügen
* Bilder hinzufügen
* Beschreibung hinzufügen


Leitung
=
Hier findet ihr unsere vier Gründer. Diese sorgen dafür, dass "der Laden läuft":
<table class="table table-borderless">
    {% for item in site.data.managers %}
        <tr>
            <td rowspan="2" style="height: 100px;width:100px;"><img src="{{item.image}}" style="max-width: 100%; max-height: 100%;"></td>
            <td><h2>{{item.name}}</h2></td>
        </tr>
        <tr>
            <td>{{item.desc}}</td>
        </tr>
    {% endfor %}
</table>

Zusätzliche Aufsichtspersonen
=
Um die Leitung des CoMakingSpace zu unterstützen, übernehmen einige Mitglieder ehrenamtlich die Aufgabe, bei Bedarf die Aufsicht während unserer [Öffnungszeiten](/calendar) zu übernehmen:
<table class="table table-borderless">
    {% for item in site.data.supervisors %}
        <tr>
            <td rowspan="2" style="height: 100px;width:100px;"><img src="{{item.image}}" style="max-width: 100%; max-height: 100%;"></td>
            <td><h2>{{item.name}}</h2></td>
        </tr>
        <tr>
            <td>{{item.desc}}</td>
        </tr>
    {% endfor %}
</table>
