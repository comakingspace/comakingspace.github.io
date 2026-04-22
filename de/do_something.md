---
layout: tv
title: Aufgaben
lang: de
ref: do_something
permalink: /aufgaben/
---

<div class="tv-header">
  <img class="tv-logo" src="/assets/images/CoMakingSpaceLogo.webp" alt="CoMakingSpace">
  <div class="tv-title">Offene Aufgaben</div>
  <div class="tv-clock" id="tv-clock"></div>
</div>

<p id="issues-loading" class="tv-loading">Aufgaben werden geladen…</p>

<table class="issues-table" id="issues-table" style="display:none">
  <colgroup>
    <col style="width:5%">
    <col style="width:52%">
    <col style="width:25%">
    <col style="width:18%">
  </colgroup>
  <thead>
    <tr>
      <th>#</th>
      <th>Aufgabe</th>
      <th>Labels</th>
      <th>QR-Code</th>
    </tr>
  </thead>
  <tbody id="issues-body"></tbody>
</table>

{%- include common_sites/do_something.md -%}