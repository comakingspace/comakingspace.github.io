{% assign machines = "" | split: ',' %}

    {% if page.lang == 'de' %}
      {% assign machines = include.wikidata | sort: "German", "last" %}
    {% else %}
      {% assign machines = include.wikidata | sort: "Caption", "last" %}
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

