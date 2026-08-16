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

**Colloquia**


<div class="upcoming-event-card">
{% assign today = site.time | date: "%Y%m%d" | plus: 0 %}
{% assign upcoming_colloquia = site.data.colloquium
  | sort: "datestamp"
%}
{% assign found = false %}
{% for colloquium in upcoming_colloquia %}
{% assign colloquium_date = colloquium.datestamp | plus: 0 %}
{% if colloquium_date >= today %}
{% assign found = true %}
<p>
<strong>Speaker:</strong> {{ colloquium.speaker }}, {{ colloquium.affiliation }}<br>
<strong>Title:</strong> {{ colloquium.title }}<br>
{{ colloquium.date | date: "%d %B %Y" }}
&nbsp;&nbsp;
<a href="{{ site.baseurl }}/physics-colloquium/{{ colloquium.datestamp }}/" class="badge">See details</a>
</p>
{% endif %}
{% endfor %}
{% unless found %}
<p>No upcoming colloquia</p>
{% endunless %}
</div>




**Seminars**


<div class="upcoming-event-card">
{% assign today = site.time | date: "%Y%m%d" | plus: 0 %}
{% assign upcoming_seminars = site.data.seminar
  | sort: "datestamp"
%}
{% assign found = false %}
{% for seminar in upcoming_seminars %}
{% assign seminar_date = seminar.datestamp | plus: 0 %}
{% if seminar_date >= today %}
{% assign found = true %}
<p>
<strong>Speaker:</strong> {{ seminar.speaker }}, {{ seminar.affiliation }}<br>
<strong>Title:</strong> {{ seminar.title }}<br>
{{ seminar.date | date: "%d %B %Y" }}
&nbsp;&nbsp;
<a href="{{ site.baseurl }}/physics-seminar/{{ seminar.datestamp }}/" class="badge">See details</a>
</p>
{% endif %}
{% endfor %}
{% unless found %}
<p>No upcoming seminars</p>
{% endunless %}
</div>


**Events**


<div class="upcoming-event-card">
{% assign today = 'now' | date: "%Y%m%d" | plus: 0 %}
{% assign upcoming_symposiums = site.data.symposium
  | sort: "starting"
%}
{% assign found = false %}
{% for symposium in upcoming_symposiums %}
  {% if symposium.starting %}
    {% assign symposium_date = symposium.starting | date: "%Y%m%d" | plus: 0 %}
    {% if symposium_date >= today %}
      {% assign found = true %}
      <p>
        <strong>Department Symposium</strong><br>
        {{ symposium.starting | date: "%d %B %Y" }}
        {% if symposium.duration %}
          &nbsp;&nbsp;({{ symposium.duration }})
        {% endif %}
        &nbsp;&nbsp;
        <a href="{{ site.baseurl }}/assets/pdfs/symposiums/{{ symposium.date }}.pdf"
           target="_blank"
           class="badge">
          Details
        </a>
      </p>
    {% endif %}
  {% endif %}
{% endfor %}
{% unless found %}
<p>No upcoming event</p>
{% endunless %}
</div>













<!--{% include slideshow.html %}-->
