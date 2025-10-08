---
layout: page
lang: ko
description: 정태의 교수 사회학 성균관 skku Sociology Sungkyunkwan Tay Jeong
permalink: /ko/research.html
alt_lang_url: /en/research.html
title: 연구
description: 학술논문과 학술서적
nav: true
nav_order: 2
---
<!-- ko/publications.md -->
제 주요 연구 분야는 국제 또는 민족 간 갈등입니다. 전쟁과 평화뿐 아니라 담론적 갈등도 포함하며, 현재의 문제를 역사적인 시각에서 해석하는 것을 좋아합니다.

이와 관련하여, 서로 다른 집단이 왜 다르게 사고하고 느끼는지, 그리고 그러한 차이가 인식론과 윤리학에서 어떤 규범적 문제를 낳는지를 탐구하는 데에도 관심이 있습니다.

과거에는 정신 건강의 사회적 결정 요인에 대해 여러 논문을 발표했으며, 현재도 다른 연구자 들과의 공저를 통해 관심을 이어가고 있습니다.

현재 역사적 방법론과 철학적 방법론을 주로 사용해서 연구를 진행하고 있으며, 정량적 연구에도 많은 경험을 가지고 있습니다. 대학원 과정 전반에 걸쳐 연구 방법론을 매우 중시해 왔으며, 정량적 방법론(다층모형 및 인과추론 분야)과 역사적 방법론(비교역사서술에서의 반사실적 추론) 모두에 있어 방법론적 연구를 진행해 왔습니다.

<h3>Works under Peer-review</h3>
<div class="publications">
{% bibliography -f underreviews.bib %}
</div>

<h3>Peer-reviewed articles</h3>
<div class="publications">
{% bibliography -f {{ site.scholar.bibliography }} %}
</div>

<h3>Book chapters</h3>
<div class="publications">
{% bibliography -f bookchapters.bib %}
</div>

{% comment %}
<div style="height: 1em;"></div>
<h3>Works in progress</h3>
<div class="publications-noyear">
{% bibliography -f inprogress.bib -g none %}
</div>
{% endcomment %}
