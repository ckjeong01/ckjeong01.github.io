---
layout: page
title: 교육
nav: true
nav_order: 4
filter_lang: ko
permalink: /ko/teaching/
alt_lang_url: /en/teaching/
---

<div class="projects">
  {%- assign projects = site.projects | sort: "order" | reverse -%}
  
  <div class="grid">
    {% for project in projects %}
      {% if project.lang == "ko" %}
        {% include projects.html %}
      {% endif %}
    {% endfor %}
  </div>
</div>