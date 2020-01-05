import { makeTemplate } from './template.js'

const template = `
<style>
.elem {
    display: grid;
    grid-template-columns: 2fr 6fr 2fr;
    border: solid 1px black;
    min-height: 193px;
}

.elem span {
    text-align: center;
}

h1 {
    font-weight: lighter;
}

p {
    line-height: 1.8;
}

.elem img {
    place-self: center;
    justify-self: center;
    max-width: 100px;
}
.elem span {
    place-self: center;
    justify-self: center;
}

.elem > h1 {
    place-self: center;
    justify-self: center;
    font-size: 47px;
}

.rounded-top {
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
}

.rounded-bottom {
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
}

</style>
<span class="elem">
    <img src="img/general-tools.png" hidden/>
    <span>
        <h1><slot name="header">Here could be your heading</slot></h1>
        <p><slot name="text">Here could be your text</slot></p>
    </span>
    <h1><span id="plus" hidden>+</span><slot name="price">10k</slot> €</h1>
</span>
`

class MembershipBlock extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" }).appendChild(makeTemplate(template).content.cloneNode(true))
        this._plus = this.shadowRoot.getElementById('plus')
        this._root = this.shadowRoot.querySelector('.elem')
        this._img = this.shadowRoot.querySelector('img')
        this._price = this.shadowRoot.querySelector('.elem > h1')
    }

    static get observedAttributes() {
        return ['rounded', 'plus', 'color', 'imgSrc', 'end']
    }

    connectedCallback() {
        const rounded = this.getAttribute('rounded')
        const plus = this.getAttribute('plus')
        const color = this.getAttribute('color')
        const imgSrc = this.getAttribute('imgSrc')
        if (plus) {
            this._plus.hidden = false
        }

        if (rounded === 'top') {
            this._root.classList.add('rounded-top')
        } else if (rounded === 'bottom') {
            this._root.classList.add('rounded-bottom')
            this._root.style.gridTemplateColumns = 'auto'
            this._root.style.minHeight = 'auto'
            this._price.hidden = true
        }

        if (color) {
            this._root.style.backgroundColor = color
        }

        if (imgSrc) {
            this._img.hidden = false
            this._img.src = imgSrc
        }
    }
}

customElements.define('membership-block', MembershipBlock)
