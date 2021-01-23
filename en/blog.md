---
layout: default
title: news
lang: en
ref: news
permalink: /news/
---

<h1>Latest Posts</h1>

{% comment %}
  {% for post in site.posts %}
  <div class="{% cycle 'post', 'post-alternate' %}">
    <div class="post-image">
      <a href="{{ post.url }}"><img src="{{post.image}}"></a>
    </div>
    <div class="post-teaser">
      <div class="post-teaser-title">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      </div>
      <div class="post-teaser-content">
      <p>{{ post.excerpt }}</p>
      </div>
    </div>
    </div>
  {% endfor %}
{% endcomment %}

  
{%- include common_sites/blog.md -%}

