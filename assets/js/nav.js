import { Links } from './links.js'

class ListItem {
    constructor(title, href) {
        this.title = title
        this.href = href
    }

    toString() {
        return `
            <li class="pure-menu-item"><a  class="pure-menu-link" href="${this.href}">${this.title}</a></li>
        `
    }
}

class Menu extends HTMLElement {
    items = Array.from(Links.entries()).map(([t, h]) => new ListItem(t, h))

    constructor() {
        super()
        this.classList.add("pure-menu", "pure-menu-horizontal")
        this.style.placeSelf = 'center'
        this.style.justifySelf = 'right'
        this.style.width = 'auto'
        this.innerHTML = `
            <ul class="pure-menu-list">
                ${this.items.join('\n')} 
            </ul>
        `
    }
}

class Logo extends HTMLElement {
    constructor() {
        super()
        // this.style.gridArea = 'logo'
        this.style.display = 'grid'
        this.style.gridTemplateRows = 'auto auto'
        this.style.justifyItems = 'center'
        this.innerHTML = `
            <img src="/img/logo.png"/>
            <p style="text-align: center">Heidelberg's Community Makerspace</p>
        `
    }
}

class Heading extends HTMLElement {
    constructor() {
        super()
        this.style.display = 'grid'
        this.style.gridTemplateColumns = 'auto auto'
        this.style.justifyItems = 'center'
        this.innerHTML = `
            <space-logo></space-logo>
            <space-menu></space-menu>
        `
    }
}

customElements.define('space-logo', Logo)
customElements.define('space-menu', Menu)
customElements.define('space-heading', Heading)
