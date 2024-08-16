---
layout: default
title: Equipment
lang: en
ref: machines
permalink: /machines/
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

# WORKSHOPS
{: .center}
We offer different sections in our workshop, each focusing on various materials. Click through the individual sections and take a look at our equipment. If you want more information about the devices, the images will lead you to our wiki, where you can find more details. If you still have questions, step by or [drop us an email](/kontakt).

<details>
<summary><h2>Wood Workshop</h2></summary>
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
<summary><h2>Metal Workshop</h2></summary>

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
<summary><h2>Electronics Room</h2></summary>

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