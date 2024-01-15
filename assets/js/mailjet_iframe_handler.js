// Function to compute the product of p1 and p2
function loadMailjetIframe(url, cssClass) {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.createElement('iframe');
  iframe.dataset.wType = "embedded"

  iframe.frameBorder = 0;
  iframe.scrolling = "no";
  iframe.marginHeight = 0;
  iframe.marginWidth = 0;
  iframe.width = "100%";
  iframe.height = "auto";
  iframe.src = url;
  iframe.sandbox = "allow-forms allow-scripts allow-same-origin";
  iframe.onload = function () {iFrameResize();}

  if (cssClass) {
    iframe.classList.add(cssClass);
  }
  const mailjetScript = document.createElement('script');
  mailjetScript.type="text/javascript";
  mailjetScript.src="https://app.mailjet.com/pas-nc-embedded-v1.js";
  iframeContainer.replaceChildren(mailjetScript);
  iframeContainer.appendChild(iframe);
}