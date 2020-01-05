class Link {
    constructor(text, href) {
        this.text = text
        this.href = href
    }

    toString() {
        return `
            <a href="${this.href}">${this.text}</a><br>
        `
    }
}

class LinkBlock {
    constructor(id, links) {
        this.id = id
        this.links = links
    }

    toString() {
        return `
            <div id="${this.id}">
                ${this.links.join('\n')}
            </div>
        `
    }
}

class SpaceInfo extends HTMLElement {
    linkBlocks = [
        new LinkBlock('part-1', [
            '<a href="mailto:info@comaking.space" class="link1">info@comaking.space</a><br>',
            new Link('Newsletter', 'https://lists.schokokeks.org/mailman/listinfo.cgi/comaking-news'),
            new Link('Diskussionsliste', 'https://lists.schokokeks.org/mailman/listinfo.cgi/makers'),
            new Link('Kalender', '/kalender.html'),
        ]),
        new LinkBlock('part-2', [
            new Link('Mitgliedsantrag', 'https://wiki.comakingspace.de/images/d/df/Mitgliedsantrag.pdf'),
            new Link('Familienmitgliedschaft', 'https://wiki.comakingspace.de/images/3/30/Familienmitgliedschaft.pdf'),
            new Link('BASF Tor 4', '/tor4.html')
        ]),
        new LinkBlock('part-3', [
            new Link('Satzungsziele', 'https://wiki.comakingspace.de/images/1/13/Satzungsziele.pdf'),
            new Link('Impressum', '/impressum.html'),
            new Link('Datenschutz', '/datenschutz.html'),
            new Link('Data Protection', '/en/data-protection.html')
        ])
    ]
    constructor() {
        super();
        this.style.display = 'grid'
        this.style.gridTemplateColumns = 'auto auto auto auto'
        this.style.gridColumnGap = '0.3em'
        this.innerHTML = `
           <address id="address">
               Siemensstraße 40 <br>
               69123 Heidelberg <br>
               Deutschland
           </address> 
           ${this.linkBlocks.join('\n')}
        `

    }
}

class SpaceName extends HTMLElement {
    constructor() {
        super();
        this.id = 'space'
        this.innerHTML = `
    <h1>CoMakingSpace</h1>
    <h2>gemeinnützige GmbH</h2>
    <small>Offene Werkstatt und Makerspace in Heidelberg</small> <br>
    <p>
        © CoMakingSpace <br>    
        gemeinnützige GmbH ${new Date().getFullYear()} <br>
        All Rights Reserved.
    </p>
        `
    }
}

class MakerNews extends HTMLElement {
    constructor() {
        super();
        this.id = 'news'
        this.innerHTML = `
<h2>Heidelberg Makerspace News...</h2>
<p>
Make Magazine - <a href="https://www.heise.de/make/meldung/Werkstattberichte-Neues-aus-den-Fablabs-und-der-Makerszene-3960606.html">Werkstattberichte: Neues aus den Fablabs und der Makerszene.</a><br>
RNZ Heidelberg - <a href="https://www.rnz.de/nachrichten/heidelberg_artikel,-co-making-space-in-heidelberg-alles-was-das-tueftler-herz-begehrt-_arid,436381.html">Alles was das Tüftler-Herz begehrt</a>
</p>
<hr>
        `
    }
}

class Details extends HTMLElement {
    constructor() {
        super()
        this.style.display = 'grid'
        this.style.gridTemplateRows = '1fr 1fr'
        this.innerHTML = `
            <maker-news></maker-news>
            <space-info></space-info>
        `
    }
}

class CustomFooter extends HTMLElement {
    constructor() {
        super()
        this.id = 'footer_content'
        this.style.display = 'grid'
        this.style.gridTemplateColumns = '2fr 6fr'
        this.style.backgroundColor = 'rgba(235,235,235,1)'
        this.style.overflow = 'auto'
        this.style.gridColumnGap = '0.5em'
        this.innerHTML = `
            <space-name></space-name>
            <ft-details></ft-details>
        `
    }
}

customElements.define('space-info', SpaceInfo)
customElements.define('space-name', SpaceName)
customElements.define('maker-news', MakerNews)
customElements.define('ft-details', Details)
customElements.define('custom-footer', CustomFooter)
