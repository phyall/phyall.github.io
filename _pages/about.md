---
layout: archive
permalink: /
sidebar: quicklinks
title: "Home"
redirect_from: 
  - /about/
  - /about.html
---

The Department of Physics at IIT Palakkad started functioning in August 2015, and is currently engaged in teaching and research at the forefront of experimental and theoretical physics, sharing the institute's stated purpose to create, communicate, and apply knowledge for the benefit of society. Its faculty pursue work in diverse domains, spanning astrophysics, condensed matter physics, high energy physics, quantum information science and technology, soft matter and statistical physics, and string theory. The Department currently offers a postgraduate program (M.Sc. in Physics) and two research programs (M.S. by Research and Ph.D.). We invite you to explore our website to learn more about the Department's activities, academic programs, research areas, faculty profiles, and ongoing research projects.

Announcements
------

<!--<div class="upcoming-events">-->

<div class="upcoming-event-card">

{% assign upcoming_colloquia = site.data.colloquium
  | where: "status", "upcoming"
  | sort: "datestamp"
%}

{% if upcoming_colloquia.size > 0 %}

{% for colloquium in upcoming_colloquia %}

<p>
<strong>{{ colloquium.type }}</strong><br>
<strong>Speaker:</strong> {{ colloquium.speaker }}<br>
<strong>Title:</strong> {{ colloquium.title }}<br>
{{ colloquium.date | date: "%d %B %Y" }}
&nbsp;&nbsp;
<a href="{{ site.baseurl }}/physics-colloquium/{{ colloquium.datestamp }}/" class="badge">See details</a>
</p>

{% endfor %}

{% else %}

<p>No upcoming colloquia</p>

{% endif %}

</div>


<!--<div class="upcoming-events">-->

<div class="upcoming-event-card">

{% assign upcoming_seminars = site.data.seminar
  | where: "status", "upcoming"
  | sort: "datestamp"
%}

{% if upcoming_seminars.size > 0 %}

{% for seminar in upcoming_seminars %}

<p>
<strong>{{ seminar.type }}</strong><br>  
<strong>Speaker:</strong> {{ seminar.speaker }}<br>
<strong>Title:</strong> {{ seminar.title }}<br>
{{ seminar.date | date: "%d %B %Y" }}
&nbsp;&nbsp;
<a href="{{ site.baseurl }}/physics-seminar/{{ seminar.datestamp }}/" class="badge">See details</a>
</p>

{% endfor %}

{% else %}

<p>No upcoming seminars</p>

{% endif %}

</div>


<!--{% include slideshow.html %}-->
