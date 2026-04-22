---
layout: tv
title: Tasks
lang: en
ref: do_something
permalink: /tasks/
---

<div class="tv-header">
  <img class="tv-logo" src="/assets/images/CoMakingSpaceLogo.webp" alt="CoMakingSpace">
  <div class="tv-title">Open Tasks</div>
  <div class="tv-clock" id="tv-clock"></div>
</div>

<p id="issues-loading" class="tv-loading">Loading tasks…</p>

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
      <th>Task</th>
      <th>Labels</th>
      <th>QR Code</th>
    </tr>
  </thead>
  <tbody id="issues-body"></tbody>
</table>

{%- include common_sites/do_something.md -%}