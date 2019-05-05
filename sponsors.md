---
layout: default
title: Sponsors
permalink: /sponsors/
---
Wir sind dankbar für die Unterstützung, die wir von den folgendend Organisationen erhalten haben und erhalten:
<table>
    {% for item in site.data.sponsors %}
        <tr>
            <td><a href="{{ item.link }}"><img src="{{ item.logo }}" alt="{{ item.name }}" title="{{ item.name }}"></a> </td>
        </tr>
    {% endfor %}
</table>