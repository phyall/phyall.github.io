---
layout: archive
permalink: /committees/
title: "Committees and Point Persons"
sidebar: quicklinks
---

Department Research Committee (DRC)
------

**Members**

Department Grievance Redressal Committee (DGRC)
------

The Departmental Grievance Redressal Cell (DGRC) receives grievances on all non-academic matters from the students associated to the Department, and addresses 
them appropriately in a timely and confidential fashion.  These grievances include (but are not restricted to) discipline matters, student conduct, violation of 
rules, discrimination, living condition, harassment, and other non-academic issues. 

**Members**

{% assign committee = site.data.committee
  | where: "title", "Department Grievance Redressal Committee (DGRC)"
  | first
%}

<ul>
{% for member in committee.members %}
  <li>
    {{ member.name }}
    {% if member.role %}
      — {{ member.role }}
    {% endif %}
  </li>
{% endfor %}
</ul>

Contact: dgrc_ph@iitpkd.ac.in 

Department Consultation Committee (DCC)
------

**Members**




Representatives from the Department in Institute-level Committees
------


Members of the Senate
------

