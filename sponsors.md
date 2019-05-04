---
layout: default
title: Sponsors
permalink: /sponsors/
---
ToDos:
* Test with multiple sponsors

We are very thankful for the support we got from the companies below:
<table>
    {% for item in site.data.sponsors %}
        <tr>
            <td><a href="{{ item.link }}"><img src="{{ item.logo }}" alt="{{ item.name }}" title="{{ item.name }}"></a> </td>
        </tr>
    {% endfor %}
</table>