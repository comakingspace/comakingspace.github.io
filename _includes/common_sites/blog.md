
{% assign same_lang_posts=site.posts | where:"lang", page.lang %}
{% for post in site.posts %}
<div class="{% cycle 'post', 'post' %}">
  <div class="post-image">
    <a href="{{ post.url }}"><img src="{{post.image}}" alt="{{post.title}}"></a>
  </div>
  <div class="post-teaser">
    <div class="post-teaser-title">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    </div>
    <div class="post-teaser-content">
    <p>{{ post.summary }}</p>
    </div>
  </div>
  </div>
{% endfor %}
