---
layout: default
title: Ausrüstung
lang: de
ref: machines
permalink: /werkzeuge/
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

# WERKSTÄTTEN
{: .center}
Wir bieten in unserer Werkstatt verschiedene Bereiche, die den Fokus auf verschiedene Materialien legen. Klick dich durch die einzelnen Bereiche und schau dir unsere Geräte an. Falls du mehr Informationen zu den Geräten möchtest führen die Bilder dich in unser Wiki, in dem mehr Details stehen. Falls du noch weitere Fragen hast komm vorbei oder [schreib uns eine Mail](/kontakt).

<details>
<summary><h2>Holzwerkstatt</h2></summary>
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
</details>

<details>
<summary>
<h2>Metallwerkstatt</h2>
</summary>
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
</details>
<details>
<summary>
<h2>Elektronik-Raum</h2>
</summary>
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
</details>