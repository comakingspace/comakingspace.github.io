import { Renderer } from "./renderer.js"
import { Links } from "./links.js"

const tempalte = `
<a class="button" href="{{link}}">
    {{name}}
</a>
`

class BtnLink extends HTMLElement {
    constructor() {
        super()
        this._render = new Renderer(this, tempalte)
    }

    static get observedAttributes() {
        return ['href']
    }

    connectedCallback() {
        let name = this.getAttribute('href')
        if (!Links.has(name)) {
            throw new Error('Unkown target: ' + name)
        }
        const link = Links.get(name)
        if (this.innerText) {
            name = this.innerText
        }
        this._render.update({
            name,
            link
        })
    }
}

customElements.define('btn-link', BtnLink)
