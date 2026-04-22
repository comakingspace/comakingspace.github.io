
<script>
(function () {
  var tbody = document.getElementById('issues-body');
  var table = document.getElementById('issues-table');
  var loading = document.getElementById('issues-loading');

  function updateClock() {
    var el = document.getElementById('tv-clock');
    if (el) el.textContent = new Date().toLocaleTimeString('de-DE');
  }
  updateClock();
  setInterval(updateClock, 1000);

  fetch('https://api.github.com/repos/comakingspace/do-something/issues?state=open&per_page=200')
    .then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    })
    .then(function (issues) {
      loading.style.display = 'none';
      var open = issues.filter(function (i) { return !i.pull_request; });
      if (!open.length) {
        loading.style.display = '';
        loading.textContent = 'Aktuell gibt es keine offenen Aufgaben.';
        return;
      }
      open.forEach(function (issue) {
        var labelsHtml = issue.labels.map(function (l) {
          var fg = contrastColor(l.color);
          return '<span class="issue-label" style="background:#' + l.color + ';color:' + fg + '">' + esc(l.name) + '</span>';
        }).join('');

        var bodyText = '';
        if (issue.body) {
          bodyText = stripMd(issue.body);
          if (bodyText.length > 700) bodyText = bodyText.slice(0, 700) + '\u2026';
        }

        var qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=160x160&margin=6&data=' + encodeURIComponent(issue.html_url);

        var tr = document.createElement('tr');
        tr.innerHTML =
          '<td class="issue-num">#' + issue.number + '</td>' +
          '<td>' +
            '<div class="issue-title-main">' + esc(issue.title) + '</div>' +
            (bodyText ? '<div class="issue-body-preview">' + esc(bodyText) + '</div>' : '') +
          '</td>' +
          '<td><div class="issue-labels">' + (labelsHtml || '<span style="color:#555">—</span>') + '</div></td>' +
          '<td class="issue-qr"><img src="' + qrUrl + '" alt="QR #' + issue.number + '" width="160" height="160" loading="lazy"></td>';
        tbody.appendChild(tr);
      });

      table.style.display = '';
      startAutoScroll();
    })
    .catch(function () {
      loading.textContent = 'Fehler beim Laden der Aufgaben. Bitte später erneut versuchen.';
    });

  function startAutoScroll() {
    var msPerTick = 40;
    var pauseBottom = 5000;
    var pauseTop = 2000;
    var paused = false;

    setInterval(function () {
      if (paused) return;
      var atBottom = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight;
      if (atBottom) {
        paused = true;
        setTimeout(function () {
          window.scrollTo(0, 0);
          setTimeout(function () { paused = false; }, pauseTop);
        }, pauseBottom);
      } else {
        window.scrollBy(0, 2);
      }
    }, msPerTick);
  }

  function contrastColor(hex) {
    var r = parseInt(hex.slice(0, 2), 16);
    var g = parseInt(hex.slice(2, 4), 16);
    var b = parseInt(hex.slice(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 128 ? '#000' : '#fff';
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function stripMd(text) {
    return text
      .replace(/#{1,6}\s+/g, '')
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\*(.+?)\*/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/`{1,3}[\s\S]*?`{1,3}/g, '')
      .replace(/^\s*[-*+]\s+/gm, '')
      .replace(/\r?\n+/g, ' ')
      .trim();
  }
}());
</script>
