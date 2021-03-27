---
layout: default
title: Home
lang: en
ref: home
permalink: /home/
redirect_from:
  - /startseite/home.html
---
 
# COME AND JOIN THE GROWING MAKER MOVEMENT
{: .center}

![Banner](/assets/images/banner.png "Banner"){: .img-center}

The basement is too small or you would disturb the neighbors? Renting a garage is too expensive? Let's share our workshop and split the cost!
The CoMakingSpace is an open workshop for Makers from all backgrounds. We aim to provide everyone with the tools, space and skills to make whatever they come up with.
Wouldn't it be awesome if you could work on your projects any time, even after work hours? You just need a large workshop with proper tools in easy reach.

[GET IN TOUCH](/contact) 
{: .center .large-text .space-button }

This idea is not new: the so-called Maker Movement started years before we became active in Heidelberg and is a worldwide phenomenon driven by a vast community of Makers who want to regain control over the objects surrounding us in our everyday life. The workshops they maintain for this purpose are also called "Makerspaces" or "Fablabs". Besides being highly innovative, the principle of local or "desktop" design and fabrication has the potential to replace conventional industry in certain sectors as the importance of sustainability is increasingly acknowledged.

Our volunteers can help you at the CoMakingSpace to make your crazy ideas become reality by using our broad selection of tools, machines and rapid-prototyping equipment. Even if your project contains yet unknown technologies, there is usually somebody with experience who can help you or give valuable advice.

## What are we creating at the CoMakingSpace?

{% for post in site.posts %}
    {% if forloop.index > 2 %}
      {% break %}
    {% endif %}
  
<div class="{% cycle 'post', 'post' %}">
<div class="post-image">
  <a href="{{ post.url }}"><img src="{{post.image}}" alt="{{post.title}}"></a>
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

Find more news in our [Blog](/news/). 

# Rethink education: learn together in a community
"Making" is a lifestyle and you never stop learning. Each project is a chance to grow and gather new experiences! This is the reason why we offer shared resources helping individuals to grow their individual skills.

The CoMakingSpace is the ideal place to find the resources to turn your crazy ideas and projects into life. Creating something together is an outstanding opportunity to develop new skills and help each other. Learning by doing, the fun way!

Apart from that, we are also a supportive community which can add additional inspiration or knowledge to your work. Exchanging ideas and skills for larger projects or hanging out in our social area is just as important as working in the workshop!
