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

Department Calendar
------

<div class="calendar-container">
  <iframe
    src="https://calendar.google.com/calendar/embed?src=c_6f39f6e1595e6b87e7800d2002b6c3be6e5fc65dd0e78239c643f16fd79b3113%40group.calendar.google.com&ctz=Asia%2FKolkata" style="border: 0" width="600" height="450"
    frameborder="0"
    scrolling="no">
  </iframe>
</div>

To integrate the calendar with your google calendar, click on "Add to Google Calendar".

Announcements
------

<div class="upcoming-events">

<div class="upcoming-event-card">

<h3>Upcoming Colloquia</h3>

{% assign upcoming_colloquia = site.data.colloquium
  | where: "status", "upcoming"
  | sort: "datestamp"
%}

{% if upcoming_colloquia.size > 0 %}

{% for colloquium in upcoming_colloquia %}

<p>
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


Announcements
------

<div class="upcoming-events">

<div class="upcoming-event-card">

<h3>Upcoming Colloquia</h3>

{% assign today = site.time | date: "%s" | plus: 0 %}
{% assign four_weeks_later = today | plus: 2419200 %}
{% assign found = false %}

{% for colloquium in site.data.colloquium %}
{% assign event_date = colloquium.date | date: "%s" | plus: 0 %}

{% if colloquium.status == "upcoming" %}
{% if event_date >= today %}
{% if event_date <= four_weeks_later %}

{% assign found = true %}

<p>
Department Colloquium by <strong>{{ colloquium.speaker }}</strong><br>
<strong>Title:</strong> {{ colloquium.title }}<br>
{{ colloquium.date | date: "%d %B %Y" }}
&nbsp;&nbsp;
<a href="{{ site.baseurl }}/physics-colloquium/{{ colloquium.datestamp }}/" class="badge">See details</a>
</p>

{% endif %}
{% endif %}
{% endif %}
{% endfor %}

{% unless found %}
<p>No upcoming colloquia</p>
{% endunless %}

</div>


<div class="upcoming-event-card">

<h3>Upcoming Seminars</h3>

{% assign found = false %}

{% for seminar in site.data.seminar %}
{% assign event_date = seminar.date | date: "%s" | plus: 0 %}

{% if seminar.status == "upcoming" %}
{% if event_date >= today %}
{% if event_date <= four_weeks_later %}

{% assign found = true %}

<p>
Department Seminar by <strong>{{ seminar.speaker }}</strong><br>
<strong>Title:</strong> {{ seminar.title }}<br>
{{ seminar.date | date: "%d %B %Y" }}
&nbsp;&nbsp;
<a href="{{ site.baseurl }}/physics-seminar/{{ seminar.datestamp }}/" class="badge">See details</a>
</p>

{% endif %}
{% endif %}
{% endif %}
{% endfor %}

{% unless found %}
<p>No upcoming seminars</p>
{% endunless %}

</div>

</div>



<!--{% include slideshow.html %}-->
