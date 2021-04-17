
<div class="manager">
{% for item in site.data.managers %}
  <div class="{% cycle 'team-regular', 'team-regular' %}">
    <div class="team-image">
      <img src="/assets/images/managers/{{item.image}}">
    </div>
    <div class="team-name">
      <div class="team-text-name">
        <h2>{{item.name}}</h2>
      </div>
      <div class="team-text-desc">
      <p>{{item.desc[page.lang]}}</p>
      </div>
    </div>
    </div>
{% endfor %}
</div>

