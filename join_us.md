---
layout: default
title: Mach mit
permalink: /mach_mit/
---
ToDos:
==
* Ersten Absatz in Markdown schreiben
* Letzte membership ggf. anders stylen
* Link "Lerne uns kennen" stylen

<div class="first_paragraph">
<h4>WIE DAS GANZE FUNKTIONIERT</h4>
<p>
Wir haben unseren CoMakingSpace als gemeinnützige GmbH gegründet. Dadurch können wir passende Räumlichkeiten mieten, Versicherungen abschließen etc. und diese Rechtsform bietet eine solide Grundlage für eine Gemeinschaftswerkstatt mit Bestand.
</p>
<small>Offene Werkstatt und Makerspace in Heidelberg</small>
</div>

<div class="membership-blocks">
    {% for item in site.data.memberships %}
        <span class="membership-element {% if forloop.first %}membership-blocks-rounded-top{% elsif forloop.last %} membership-blocks-rounded-bottom {% endif %}" >
            <img src="{{item.image}}">
            <span>
                <h1>{{item.name}}</h1>
                <p>{{item.desc}}</p>
            </span>
            <h1>{{item.price}}</h1>
        </span> 
    {% endfor %}
</div>

<btn-link href="Kontakt">
<a href="/contact.html">LERNE UNS KENNEN</a>
</btn-link>