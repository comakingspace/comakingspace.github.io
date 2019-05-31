---
layout: default
title: Blog
permalink: /blog/
---

<h1>Latest Posts</h1>

<ul>
  {% for post in site.posts %}
  <div class="row post">
    <div class="column post-image">
      <img src="{{post.image}}"></img>
    </div>
    <div class="column post-teaser">
      <div class="row post-teaser-title">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      </div>
      <div class="row post-teaser-content">
      <p>{{ post.excerpt }}</p>
      </div>
    </div>
    </div>

    
  {% endfor %}
</ul>