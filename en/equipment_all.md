---
layout: default
title: Equipment
lang: en
ref: equipment
permalink: /equipment_all/
sitemap:
    exclude: 'yes'
---

# Our Equipment

{% assign machines = "" | split: ',' %}

    {% if page.lang == 'de' %}
      {% assign machines = site.data.Workshops.WoodWorkshop_Machines | sort: "German", "last" %}
      {% assign machines = machines | concat: site.data.Workshops.MetalWorkshop_Machines | sort: "German", "last" %}
      {% assign machines = machines | concat: site.data.Workshops.ERoom_Machines | sort: "German", "last" %}
    {% else %}
      {% assign machines = site.data.Workshops.WoodWorkshop_Machines | sort: "Caption", "last" %}
      {% assign machines = machines | concat: site.data.Workshops.MetalWorkshop_Machines | sort: "Caption", "last" %}
      {% assign machines = machines | concat: site.data.Workshops.ERoom_Machines | sort: "Caption", "last" %}
    {% endif %}

<div class="machines">
{% for machine in machines %}
  <div class="machine-container">
    <a class="machine-image" href = "{{machine['MachineTypeUrl']}}">
      <img src="{{ machine['Image'] | replace: 'File:', 'Special:Redirect/file/' | append: '?width=400%26height=400' }}">
    </a>
    <b class="machine-name">{% if page.lang == 'de' %}{{machine["German"]}}{% else %}{{machine["Caption"]}}{% endif %}</b>
  </div>
{% endfor %}
</div>
