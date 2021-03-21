---
layout: default
title: Unterstützung
lang: en
ref: support
permalink: /support/
sitemap:
    expclude: yes
---
We are thankful for the support we have and still are getting from the following organizations:
<div class="sponsors">
    {% for item in site.data.supporters %}
            <a class="sponsor"  href="{{ item.link }}">
                <img src="{{ item.logo }}" alt="{{ item.name }}" title="{{ item.name }}">
                <div class="sponsor-name">{{ item.name }}</div>
            </a>
    {% endfor %}
</div>