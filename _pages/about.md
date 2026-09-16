---
layout: archive
permalink: /
sidebar: quicklinks
title: Home
redirect_from:
  - /about/
  - /about.html
---

The Department of Physics at IIT Palakkad started functioning in August 2015, and is currently engaged in teaching and research at the forefront of experimental and theoretical physics, sharing the institute's stated purpose to create, communicate, and apply knowledge for the benefit of society. Its faculty pursue work in diverse domains, spanning astrophysics, condensed matter physics, high energy physics, quantum information science and technology, soft matter and statistical physics, and string theory. The Department currently offers a postgraduate program (M.Sc. in Physics) and two research programs (M.S. by Research and Ph.D.). We invite you to explore our website to learn more about the Department's activities, academic programs, research areas, faculty profiles, and ongoing research projects.

## Announcements

<div class="announce-grid">

  <div class="announce-card">
    <h3 class="announce-card-title">Colloquia</h3>
    {% assign today = site.time | date: "%Y%m%d" | plus: 0 %}
    {% assign upcoming_colloquia = site.data.colloquium | sort: "datestamp" %}
    {% assign found = false %}
    {% for colloquium in upcoming_colloquia %}
      {% assign colloquium_date = colloquium.datestamp | plus: 0 %}
      {% if colloquium_date >= today %}
        {% assign found = true %}
        <div class="announce-item">
          <div class="announce-item-row">
            <span class="announce-speaker">{{ colloquium.speaker }}</span>
            <a class="announce-detail-link" href="{{ site.baseurl }}/physics-colloquium/{{ colloquium.datestamp }}">Details</a>
          </div>
          <div class="announce-item-meta">{{ colloquium.affiliation }} &middot; {{ colloquium.date | date: "%d %b %Y" }}</div>
        </div>
      {% endif %}
    {% endfor %}
    {% unless found %}
      <p class="announce-empty">No upcoming colloquia</p>
    {% endunless %}
  </div>

  <div class="announce-card">
    <h3 class="announce-card-title">Seminars</h3>
    {% assign today = site.time | date: "%Y%m%d" | plus: 0 %}
    {% assign upcoming_seminars = site.data.seminar | sort: "datestamp" %}
    {% assign found = false %}
    {% for seminar in upcoming_seminars %}
      {% assign seminar_date = seminar.datestamp | plus: 0 %}
      {% if seminar_date >= today %}
        {% assign found = true %}
        <div class="announce-item">
          <div class="announce-item-row">
            <span class="announce-speaker">{{ seminar.speaker }}</span>
            <a class="announce-detail-link" href="{{ site.baseurl }}/physics-seminar/{{ seminar.datestamp }}">Details</a>
          </div>
          <div class="announce-item-meta">{{ seminar.affiliation }} &middot; {{ seminar.date | date: "%d %b %Y" }}</div>
        </div>
      {% endif %}
    {% endfor %}
    {% unless found %}
      <p class="announce-empty">No upcoming seminars</p>
    {% endunless %}
  </div>

  <div class="announce-card">
    <h3 class="announce-card-title">Department Symposiums</h3>
    {% assign all_symposiums = site.data.symposium | sort: "date" %}
    {% assign latest_symposium = all_symposiums | last %}
    {% if latest_symposium %}
      {% assign today_ts = 'now' | date: "%s" %}
      {% assign ended = false %}
      {% if latest_symposium.ending %}
        {% assign ending_ts = latest_symposium.ending | date: "%s" %}
        {% if today_ts > ending_ts %}
          {% assign ended = true %}
        {% endif %}
      {% endif %}
      <div class="announce-item">
        <div class="announce-item-row">
          <span class="announce-speaker">{{ latest_symposium.date }} Edition</span>
          <a class="announce-detail-link" href="{{ site.baseurl }}/assets/pdfs/symposiums/{{ latest_symposium.date }}.pdf">Details</a>
        </div>
        {% if ended %}
          <div class="announce-item-meta">Stay tuned for the next edition</div>
        {% else %}
          <div class="announce-item-meta">{{ latest_symposium.starting | date: "%d %b %Y" }} &ndash; {{ latest_symposium.ending | date: "%d %b %Y" }}</div>
        {% endif %}
      </div>
    {% else %}
      <p class="announce-empty">No symposium information available</p>
    {% endif %}
  </div>

  <div class="announce-card">
    <h3 class="announce-card-title">Other Department Events</h3>
    {% assign today = 'now' | date: "%Y%m%d" | plus: 0 %}
    {% assign upcoming_events = site.data.events | sort: "date" %}
    {% assign found = false %}
    {% for event in upcoming_events %}
      {% if event.date %}
        {% assign event_date = event.date | date: "%Y%m%d" | plus: 0 %}
        {% if event_date >= today %}
          {% assign found = true %}
          <div class="announce-item">
            <div class="announce-item-title">{{ event.title }}</div>
            <div class="announce-item-meta">
              {{ event.date | date: "%d %b %Y" }}
              {% if event.time %}&middot; {{ event.time }}{% endif %}
              {% if event.venue %}&middot; {{ event.venue }}{% endif %}
            </div>
          </div>
        {% endif %}
      {% endif %}
    {% endfor %}
    {% unless found %}
      <p class="announce-empty">No upcoming department event</p>
    {% endunless %}
  </div>

</div>

## Department Statistics

{% include dept-overview-charts.html %}

{% include department-stats.html %}
