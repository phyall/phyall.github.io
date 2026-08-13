---
layout: archive
permalink: /
sidebar: quicklinks
title: "Home"
redirect_from: 
  - /about/
  - /about.html
---

The Department of Physics at IIT Palakkad, active since August 2015, is currently engaged in teaching and research at the forefront of experimental and theoretical physics, sharing the institute's stated purpose to create, communicate, and apply knowledge for the benefit of society. Its faculty pursue work in diverse domains, spanning quantum information science and technology, theoretical astrophysics, string theory, theoretical and experimental soft matter physics, experimental biophysics, theoretical and experimental high energy physics, and theoretical and experimental condensed matter physics. The Department currently offers a postgraduate program (M.Sc. in Physics) and two research programs (M.S. by Research and Ph.D.). We invite you to explore our website to learn more about the Department's activities, academic programs, research areas, faculty members, and ongoing research projects.

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

**Upcoming Colloquia**

{% assign today = site.time | date: "%Y%m%d" %}
{% assign found = false %}

{% for colloquium in site.data.colloquium %}
{% assign event_date = colloquium.datestamp | append: "" %}
{% if colloquium.status == "upcoming" and event_date >= today %}
{% assign found = true %}
<p><strong>{{ colloquium.speaker }}</strong><br>
{{ colloquium.title }}<br>
{{ colloquium.date | date: "%d %B %Y" }}</p>
{% break %}
{% endif %}
{% endfor %}

{% unless found %}
<p>No upcoming colloquium</p>
{% endunless %}






{% assign today = site.time | date: "%s" %}
{% assign four_weeks_later = today | plus: 2419200 %}
{% assign found = false %}

{% for colloquium in site.data.colloquium %}
{% assign event_date = colloquium.date | date: "%s" %}

{% if colloquium.status == "upcoming" %}
{% if event_date >= today %}
{% if event_date <= four_weeks_later %}

{% assign found = true %}
{% assign colloquium_page = site.colloquium | where: "name", colloquium.datestamp | first %}

<p><strong>{{ colloquium.speaker }}</strong><br>
{{ colloquium.title }}<br>
{{ colloquium.date | date: "%d %B %Y" }}
{% if colloquium_page %}
&nbsp;&nbsp;<a href="{{ colloquium_page.url | relative_url }}" class="badge">Details</a>
{% endif %}
</p>

{% endif %}
{% endif %}
{% endif %}
{% endfor %}

{% unless found %}
<p>No upcoming colloquium</p>
{% endunless %}




<!--{% include slideshow.html %}-->


<!--<div class="frontpage-columns">
  <h2>Caleidoscope</h2>
  
  <div class="frontpage-column frontpage-slideshow">
    {% include slideshow.html %}
  </div>
  <div class="frontpage-column frontpage-calendar">
    <h2>Department Calendar</h2>
    <div class="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=c_6f39f6e1595e6b87e7800d2002b6c3be6e5fc65dd0e78239c643f16fd79b3113%40group.calendar.google.com&ctz=Asia%2FKolkata"
        frameborder="0"
        scrolling="no">
      </iframe>
    </div>
  </div>
</div>-->
