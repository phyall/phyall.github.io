---
layout: archive
permalink: /
sidebar: 
title: 
redirect_from:
  - /about/
  - /about.html
---

<!-- ============================================================
     Hero
     ============================================================ -->

<section class="home-hero">
  <svg class="home-hero-decor" width="560" height="560" viewBox="0 0 560 560" fill="none" aria-hidden="true">
    <circle cx="280" cy="280" r="220" stroke="rgba(255,255,255,0.14)" stroke-width="1"></circle>
    <ellipse cx="280" cy="280" rx="240" ry="90" stroke="rgba(255,255,255,0.14)" stroke-width="1"></ellipse>
    <ellipse cx="280" cy="280" rx="90" ry="240" stroke="rgba(255,255,255,0.14)" stroke-width="1"></ellipse>
    <circle cx="280" cy="280" r="6" fill="#2f7f93"></circle>
    <circle cx="500" cy="280" r="5" fill="#7fa8c9"></circle>
    <circle cx="280" cy="40" r="4" fill="#7fa8c9"></circle>
  </svg>
  <div class="home-hero-inner">
    <span class="home-hero-eyebrow">Indian Institute of Technology Palakkad</span>
    <h1 class="home-hero-title">Department of Physics</h1>
    <p class="home-hero-text">The Department of Physics at IIT Palakkad started functioning in August 2015, and is currently engaged in teaching and research at the forefront of experimental and theoretical physics, sharing the institute's stated purpose to create, communicate, and apply knowledge for the benefit of society. Its faculty pursue work in diverse domains, spanning astrophysics, condensed matter physics, high energy physics, quantum information science and technology, soft matter and statistical physics, and string theory.</p>
    <div class="home-hero-actions">
      <a href="{{ '/topics/' | relative_url }}" class="home-btn home-btn-primary">Explore Research</a>
      <a href="{{ '/msc/' | relative_url }}" class="home-btn home-btn-outline">Prospective Students</a>
    </div>
  </div>
</section>

<!-- ============================================================
     Stats strip (counts are computed live from site data)
     ============================================================ -->

{% assign current_primary_faculty = site.data.all_faculty | where: "affiliation", "primary" | where: "status", "current" %}
{% assign faculty_count = current_primary_faculty | size %}

{% assign current_phd = site.data.all_phd_students | where: "status", "ongoing" %}
{% assign current_ms = site.data.all_ms_students | where: "status", "ongoing" %}
{% assign current_scholars = current_phd | concat: current_ms %}
{% assign scholar_count = current_scholars | size %}

{% assign pub_count = site.data.all_publications | size %}

<section class="home-stats">
  <div class="home-stats-grid">
    <div class="home-stat">
      <div class="home-stat-number">{{ faculty_count }}</div>
      <div class="home-stat-label">Faculty Members</div>
    </div>
    <div class="home-stat">
      <div class="home-stat-number">{{ scholar_count }}</div>
      <div class="home-stat-label">PhD &amp; MS Scholars</div>
    </div>
    <div class="home-stat">
      <div class="home-stat-number">{{ pub_count }}</div>
      <div class="home-stat-label">Publications</div>
    </div>
    <div class="home-stat">
      <div class="home-stat-number">2015</div>
      <div class="home-stat-label">Established</div>
    </div>
  </div>
</section>

<!-- ============================================================
     Research areas
     ============================================================ -->

<section class="home-section">
  <div class="home-section-inner">

    <h2 class="home-section-title">Research Areas</h2>
    <p class="home-section-sub">Faculty pursue work across six broad domains of physics.</p>

    <div class="home-research-grid">

      <div class="home-research-card">
        <h3>Astrophysics</h3>
        <p>Compact objects, gravitational-wave sources, and the large-scale structure of the cosmos.</p>
      </div>

      <div class="home-research-card">
        <h3>Condensed Matter Physics</h3>
        <p>Quantum materials, topological phases, and emergent phenomena in correlated systems.</p>
      </div>

      <div class="home-research-card">
        <h3>High Energy Physics</h3>
        <p>Particle phenomenology and physics beyond the Standard Model.</p>
      </div>

      <div class="home-research-card">
        <h3>Quantum Information Science &amp; Technology</h3>
        <p>Quantum metrology, sensing, and information-processing protocols.</p>
      </div>

      <div class="home-research-card">
        <h3>Soft Matter &amp; Statistical Physics</h3>
        <p>Collective and non-equilibrium behaviour in complex, disordered systems.</p>
      </div>

      <div class="home-research-card">
        <h3>String Theory</h3>
        <p>Quantum gravity, holography, and the mathematics of fundamental interactions.</p>
      </div>

    </div>

    <div class="home-section-link">
      <a href="{{ '/topics/' | relative_url }}">View all research areas &rarr;</a>
    </div>

  </div>
</section>

<!-- ============================================================
     Announcements
     ============================================================ -->

<section class="home-section home-section-alt">
  <div class="home-section-inner">

    <h2 class="home-section-title">Announcements</h2>

    <div class="announce-grid">

      <div class="announce-card">
        <h3 class="announce-card-title">Colloquia</h3>
        {% assign today = site.time | date: "%Y%m%d" | plus: 0 %}
        {% assign upcoming_colloquia = site.data.all_colloquia | sort: "datestamp" %}
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
        {% assign upcoming_seminars = site.data.all_seminars | sort: "datestamp" %}
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
        {% assign all_symposiums = site.data.all_symposia | sort: "date" %}
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
        {% assign upcoming_events = site.data.all_events | sort: "date" %}
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

  </div>
</section>

<!-- ============================================================
     Faculty spotlight
     ============================================================ -->

<section class="home-section">
  <div class="home-section-inner">

    <div class="home-section-header">
      <h2 class="home-section-title">Meet Our Faculty</h2>
      <a class="home-section-link-inline" href="{{ '/faculty/' | relative_url }}">View all members &rarr;</a>
    </div>

    {% assign spotlight_faculty = current_primary_faculty | sort: "date_joined" %}

    <div class="faculty-mini-grid home-faculty-grid">
      {% for person in spotlight_faculty %}
        {% if forloop.index > 3 %}{% break %}{% endif %}
        {% include faculty-mini-card.html faculty=person %}
      {% endfor %}
    </div>

  </div>
</section>

<!-- ============================================================
     Recent publications
     ============================================================ -->

<section class="home-section home-section-alt">
  <div class="home-section-inner">

    <div class="home-section-header">
      <h2 class="home-section-title">Recent Publications</h2>
      <a class="home-section-link-inline" href="{{ '/publications/' | relative_url }}">View all publications &rarr;</a>
    </div>

    {% assign recent_pubs = site.data.all_publications | sort: "sort" | reverse %}

    <ol class="home-pub-list">
      {% for pub in recent_pubs %}
        {% if forloop.index > 5 %}{% break %}{% endif %}
        <li class="home-pub-item">
          <div class="home-pub-year">{{ pub.year }}</div>
          <div>
            <p class="home-pub-title">{{ pub.authors }}, &ldquo;{{ pub.title }}.&rdquo;</p>
            <p class="home-pub-journal">
              {% if pub.doi %}
                <a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">{{ pub.journal }}</a>
              {% else %}
                {{ pub.journal }}
              {% endif %}
            </p>
          </div>
        </li>
      {% endfor %}
    </ol>

  </div>
</section>
