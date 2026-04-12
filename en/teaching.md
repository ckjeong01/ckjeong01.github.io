---
layout: page
title: Teaching
nav: true
nav_order: 4
filter_lang: en
permalink: /en/teaching/
alt_lang_url: /ko/teaching/
---

<div class="projects">
  {%- assign projects = site.projects | sort: "order" | reverse -%}
  
  <div class="grid">
    {% for project in projects %}
      {% if project.lang == "en" %}
        {% include projects.html %}
      {% endif %}
    {% endfor %}
  </div>
</div>