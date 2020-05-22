---
layout: default
title: Mach mit
permalink: /mach_mit/
---
## ToDos:
* Link "Lerne uns kennen" stylen

### WIE DAS GANZE FUNKTIONIERT 
Wir haben unseren CoMakingSpace als gemeinnützige GmbH gegründet. Dadurch können wir passende Räumlichkeiten mieten, Versicherungen abschließen etc. und diese Rechtsform bietet eine solide Grundlage für eine Gemeinschaftswerkstatt mit Bestand.


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
