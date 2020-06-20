---
layout: default
title: Sponsors
permalink: /sponsors/
---
Wir sind dankbar für die Unterstützung, die wir von den folgendend Organisationen erhalten haben und erhalten:
<div class="sponsors">
    {% for item in site.data.sponsors %}
            <a class="sponsor"  href="{{ item.link }}">
                <img src="{{ item.logo }}" alt="{{ item.name }}" title="{{ item.name }}">
                <div class="sponsor-name">{{ item.name }}</div>
            </a>
    {% endfor %}
</div>