---
layout: default
title: Equipment
lang: en
ref: equipment_separated
permalink: /equipment_separated/
sitemap:
    exclude: 'yes'
---

{% assign machines_wood = "" | split: ',' %}
{% assign machines_metal = "" | split: ',' %}
{% assign machines_eroom = "" | split: ',' %}

    {% if page.lang == 'de' %}
      {% assign machines_wood = site.data.Workshops.WoodWorkshop_Machines | sort: "German", "last" %}
      {% assign machines_metal = site.data.Workshops.MetalWorkshop_Machines | sort: "German", "last" %}
      {% assign machines_eroom = site.data.Workshops.ERoom_Machines | sort: "German", "last" %}
    {% else %}
      {% assign machines_wood = site.data.Workshops.WoodWorkshop_Machines | sort: "Caption", "last" %}
      {% assign machines_metal = site.data.Workshops.MetalWorkshop_Machines | sort: "Caption", "last" %}
      {% assign machines_eroom = site.data.Workshops.ERoom_Machines | sort: "Caption", "last" %}
    {% endif %}

# Wood Workshop

<div class="machines">
{% for machine in machines_wood %}
  <div class="machine-container">
    <a class="machine-image" href = "{{machine['MachineTypeUrl']}}">
      <img src="{{ machine['Image'] | replace: 'File:', 'Special:Redirect/file/' | append: '?width=400%26height=400' }}">
    </a>
    <b class="machine-name">{% if page.lang == 'de' %}{{machine["German"]}}{% else %}{{machine["Caption"]}}{% endif %}</b>
  </div>
{% endfor %}
</div>

# Metal Workshop

<div class="machines">
{% for machine in machines_metal %}
  <div class="machine-container">
    <a class="machine-image" href = "{{machine['MachineTypeUrl']}}">
      <img src="{{ machine['Image'] | replace: 'File:', 'Special:Redirect/file/' | append: '?width=400%26height=400' }}">
    </a>
    <b class="machine-name">{% if page.lang == 'de' %}{{machine["German"]}}{% else %}{{machine["Caption"]}}{% endif %}</b>
  </div>
{% endfor %}
</div>

# Electronics Room

<div class="machines">
{% for machine in machines_eroom %}
  <div class="machine-container">
    <a class="machine-image" href = "{{machine['MachineTypeUrl']}}">
      <img src="{{ machine['Image'] | replace: 'File:', 'Special:Redirect/file/' | append: '?width=400%26height=400' }}">
    </a>
    <b class="machine-name">{% if page.lang == 'de' %}{{machine["German"]}}{% else %}{{machine["Caption"]}}{% endif %}</b>
  </div>
{% endfor %}
</div>