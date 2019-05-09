---
layout: default
title: Calendar
permalink: /calendar/
---

<link href='https://unpkg.com/@fullcalendar/core/main.min.css' rel='stylesheet' />
<link href='https://unpkg.com/@fullcalendar/daygrid/main.min.css' rel='stylesheet' />
<link href='https://unpkg.com/@fullcalendar/list/main.min.css' rel='stylesheet' />

<script src='https://unpkg.com/@fullcalendar/core/main.min.js'></script>
<script src='https://unpkg.com/@fullcalendar/daygrid/main.min.js'></script>
<script src='https://unpkg.com/@fullcalendar/list/main.min.js'></script>

<script src='https://unpkg.com/@fullcalendar/google-calendar/main.min.js'></script>

<script>
 document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'googleCalendar', 'dayGrid', 'list' ],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek'
    },
    displayEventTime: true,
  	defaultView: 'listWeek',
    googleCalendarApiKey: '',
    events: {
      googleCalendarId: '4hbi6bp3lol50h2m422ljg81t0@group.calendar.google.com'
    }
  });
  calendar.render();
});
</script>

<div id='calendar'></div>
<!--<iframe src="https://calendar.google.com/calendar/embed?showPrint=0&amp;showTz=0&amp;mode=AGENDA&amp;height=500&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=4hbi6bp3lol50h2m422ljg81t0%40group.calendar.google.com&amp;color=%235F6B02&amp;ctz=Europe%2FBerlin" style="border-width:0" width="500" height="500" frameborder="0" scrolling="no"></iframe>-->
