---
layout: tv
title: Maus-Türöffner-Tag – Vorbereitung
lang: de
permalink: /tasks/
---

<style>
  .tv-body {
    overflow: hidden;
    background:
      radial-gradient(circle at 88% 14%, rgba(222, 44, 59, 0.35), transparent 28%),
      linear-gradient(140deg, #17181b 0%, #202226 52%, #121315 100%);
  }

  .maus-prep,
  .maus-prep * {
    box-sizing: border-box;
  }

  .maus-prep {
    --text: #f8f7f4;
    --muted: #c8c7c4;
    --red: #de2c3b;
    --red-light: #f05a66;
    --panel: rgba(255, 255, 255, 0.075);
    --line: rgba(255, 255, 255, 0.15);

    position: relative;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: clamp(1.2rem, 2.5vh, 2.6rem);
    width: 100vw;
    height: 100vh;
    min-height: 100svh;
    padding: clamp(1.8rem, 4.3vh, 4.4rem) clamp(2.2rem, 5vw, 6.2rem)
      clamp(1.4rem, 3vh, 3.2rem);
    color: var(--text);
    isolation: isolate;
  }

  .maus-prep::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0 auto 0 0;
    width: clamp(0.75rem, 1.1vw, 1.35rem);
    background: var(--red);
    box-shadow: 0 0 80px rgba(222, 44, 59, 0.35);
  }

  .maus-prep__header {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 2rem;
  }

  .maus-prep__heading {
    min-width: 0;
  }

  .maus-prep__eyebrow {
    margin: 0 0 0.3em;
    color: var(--red-light);
    font-size: clamp(1rem, 1.5vw, 1.75rem);
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .maus-prep h1 {
    max-width: 15ch;
    margin: 0;
    color: var(--text);
    font-size: clamp(2.7rem, 5.4vw, 6.5rem);
    line-height: 0.95;
    letter-spacing: -0.045em;
  }

  .maus-prep__date {
    flex: 0 0 auto;
    margin: 0 0 0.35rem;
    padding: 0.7em 1em;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--muted);
    background: rgba(10, 10, 10, 0.18);
    font-size: clamp(1rem, 1.45vw, 1.65rem);
    font-weight: 650;
    white-space: nowrap;
  }

  .maus-prep__tasks {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
    gap: clamp(0.7rem, 1.5vw, 1.5rem);
    min-height: 0;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .maus-prep__task {
    display: flex;
    align-items: center;
    gap: clamp(1rem, 1.7vw, 2rem);
    min-width: 0;
    padding: clamp(0.9rem, 1.6vw, 1.75rem) clamp(1.1rem, 2vw, 2.2rem);
    border: 1px solid var(--line);
    border-radius: clamp(1rem, 1.6vw, 1.6rem);
    background: var(--panel);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.05),
      0 16px 40px rgba(0, 0, 0, 0.12);
  }

  .maus-prep__task:last-child {
    grid-column: 1 / -1;
  }

  .maus-prep__number {
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: clamp(3rem, 4.4vw, 5.2rem);
    aspect-ratio: 1;
    border: max(3px, 0.24vw) solid var(--red-light);
    border-radius: 50%;
    color: var(--text);
    font-size: clamp(1.25rem, 2vw, 2.4rem);
    font-weight: 900;
  }

  .maus-prep__task-text {
    font-size: clamp(1.55rem, 2.65vw, 3.2rem);
    font-weight: 750;
    line-height: 1.08;
    letter-spacing: -0.025em;
  }

  .maus-prep__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    color: var(--muted);
    font-size: clamp(0.9rem, 1.2vw, 1.35rem);
    font-weight: 600;
  }

  .maus-prep__logo {
    display: block;
    width: auto;
    height: clamp(1.8rem, 3vw, 3rem);
  }

  @media (max-aspect-ratio: 5 / 4), (max-width: 760px) {
    .tv-body {
      overflow: auto;
    }

    .maus-prep {
      height: auto;
    }

    .maus-prep__header,
    .maus-prep__footer {
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;
    }

    .maus-prep__tasks {
      grid-template-columns: 1fr;
      grid-template-rows: none;
    }

    .maus-prep__task:last-child {
      grid-column: auto;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .maus-prep__task {
      animation: maus-prep-enter 520ms both cubic-bezier(0.2, 0.75, 0.2, 1);
    }

    .maus-prep__task:nth-child(2) { animation-delay: 70ms; }
    .maus-prep__task:nth-child(3) { animation-delay: 140ms; }
    .maus-prep__task:nth-child(4) { animation-delay: 210ms; }
    .maus-prep__task:nth-child(5) { animation-delay: 280ms; }

    @keyframes maus-prep-enter {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }
  }
</style>

<main class="maus-prep">
  <header class="maus-prep__header">
    <div class="maus-prep__heading">
      <p class="maus-prep__eyebrow">Morgen ist Maus-Türöffner-Tag</p>
      <h1>Gemeinschaftsraum vorbereiten</h1>
    </div>
    <p class="maus-prep__date">Samstag · 3. Oktober</p>
  </header>

  <ol class="maus-prep__tasks" aria-label="Aufgaben für heute Abend">
    <li class="maus-prep__task">
      <span class="maus-prep__number" aria-hidden="true">1</span>
      <span class="maus-prep__task-text">Tische freiräumen</span>
    </li>
    <li class="maus-prep__task">
      <span class="maus-prep__number" aria-hidden="true">2</span>
      <span class="maus-prep__task-text">Tische abwischen</span>
    </li>
    <li class="maus-prep__task">
      <span class="maus-prep__number" aria-hidden="true">3</span>
      <span class="maus-prep__task-text">Mülleimer leeren</span>
    </li>
    <li class="maus-prep__task">
      <span class="maus-prep__number" aria-hidden="true">4</span>
      <span class="maus-prep__task-text">Küche aufräumen</span>
    </li>
    <li class="maus-prep__task">
      <span class="maus-prep__number" aria-hidden="true">5</span>
      <span class="maus-prep__task-text">Aufsteller mit Plakaten &amp; Wegweisern bestücken</span>
    </li>
  </ol>

  <footer class="maus-prep__footer">
    <img
      class="maus-prep__logo"
      src="{{ '/assets/images/CoMakingSpaceLogo.webp' | relative_url }}"
      alt="CoMakingSpace Heidelberg"
    >
    <span>Danke fürs Mithelfen!</span>
  </footer>
</main>
