
<div class="machines">
{% for machine in include.wikidata %}
    {% assign image_url = machine[1].printouts['Has image'][0].fullurl | replace: "File:", "Special:Redirect/file/" | append: "?width=400%26height=400" %}
    {% if page.lang == 'de' %}
      {% assign caption = machine[1].printouts['Has German'][0] %}
    {% else %}
      {% assign caption = machine[1].printouts['Has caption'][0] %}
    {% endif %}
  <div class="{% cycle 'machine-regular', 'machine-regular' %}">
    <div class="machine-image">
      <a href = "{{machine[1].printouts['MachineType'][0].fullurl}}"><img src="{{ image_url}}"></a>
    </div>
    <div class="machine-name">
      <div class="machine-text-name">
        <h2>{{caption}}</h2>
      </div>
    </div>
    </div>
{% endfor %}
</div>