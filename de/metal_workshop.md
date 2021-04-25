---
layout: default
title: Metall Werkstatt
lang: de
ref: metal_workshop
permalink: /metall_werkstatt/
sitemap:
    expclude: yes
---

<div class="machines">
{% for machine in site.data.Workshops.MetalWorkshop_Machines.query.results %}
    {% assign image_url = machine[1].printouts['Has image'][0].fullurl | replace: "File:", "Special:Redirect/file/" | append: "?width=400%26height=400" %}
  <div class="{% cycle 'machine-regular', 'machine-regular' %}">
    <div class="machine-image">
      <a href = "{{machine[1].fullurl}}"><img src="{{ image_url}}"></a>
    </div>
    <div class="machine-name">
      <div class="machine-text-name">
        <h2>{{  machine[1].fulltext }}</h2>
      </div>
    </div>
    </div>
{% endfor %}
</div>
