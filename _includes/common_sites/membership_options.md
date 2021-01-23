

<div class="membership-blocks">
    {% for item in site.data.memberships %}
        <span class="membership-element {% if forloop.first %}membership-blocks-rounded-top{% elsif forloop.last %} membership-blocks-rounded-bottom {% endif %}" >
            <img src="{{item.image}}">
            <span>
                <h1>{{item.name[page.lang]}}</h1>
                <p>{{item.desc[page.lang]}}</p>
            </span>
            <h1>{{item.price}}</h1>
        </span>  
    {% endfor %}
</div>

