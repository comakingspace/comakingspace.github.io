{% assign machines = "" | split: ',' %}

    {% if page.lang == 'de' %}
      {% assign machines = include.wikidata | sort: "German", "last" %}
    {% else %}
      {% assign machines = include.wikidata | sort: "Caption", "last" %}
    {% endif %}

<div class="machines">
{% for machine in machines %}
  <div class="{% cycle 'machine-regular', 'machine-regular' %}">
    <div class="machine-image">
      <a href = "{{machine['MachineTypeUrl']}}"><img src="{{ machine['Image'] | replace: 'File:', 'Special:Redirect/file/' | append: '?width=400%26height=400' }}"></a>
    </div>
    <div class="machine-name">
      <div class="machine-text-name">
        <h2>{% if page.lang == 'de' %}{{machine["German"]}}{% else %}{{machine["Caption"]}}{% endif %}</h2>
      </div>
    </div>
    </div>
{% endfor %}
</div>