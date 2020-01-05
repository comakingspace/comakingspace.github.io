import { makeTemplate } from "./template.js"

const template = `
<style>
    .image_display span img {
        grid-row: 1/3;
        grid-column: 1 / 3;
    }
    
    .subtitle {
        font-weight: bold;
        font-size: 1.2em;
    }
    
    .image_display {
        width: 100%;
    }
    
    .details {
        background: rgba(0, 0, 0, 0.7);
        color: whitesmoke;
        padding: 0.6em;
        z-index: 99;
        grid-row: 2 / 3;
        grid-column: 2 / 3;
        place-self: end;
        justify-self: end;
    }
    
    .ani {
        animation: fading 7s infinite;
    }
    
    @keyframes fading {
        0% {
            opacity: 0; 
        }    
        
        20% {
            opacity: 1;
        }
        
        80% {
            opacity: 1;
        }
        
        100% {
            opacity: 0;
        }
    }
</style>

<div class="image_slider">
    <span class="image_display" hidden>
    </span>
    <slot name="images" id="images" hidden></slot>
    <slot class="subtitle" name="subtitle"></slot>
    <template id="image-slider-element">
        <span>
            <p class="details"></p>
        </span>
    </template>

</div>
`

class ImageSlider extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" }).appendChild(makeTemplate(template).content.cloneNode(true))
        this._images = []
        this._intervall = null
        this._showing = this.shadowRoot.querySelector('span.image_display')
        this._elementTemplate = this.shadowRoot.getElementById('image-slider-element')
        this._currentIdx = 0
    }

    connectedCallback() {
        const images = this.querySelectorAll('span[slot="images"] > img')
        if (!images.length) {
            throw new Error('Please insert images inside of the slider')
        }
        images.forEach(i => {
            const element = this._elementTemplate.content.cloneNode(true)
            const info = element.querySelector('.details')
            const span = element.querySelector('span')
            info.innerText = i.alt
            span.appendChild(i)
            i.classList.add('ani', 'image_display')
            span.style.display = 'none'
            this._images.push(span)
            this._showing.appendChild(element)
        })
        this.changeImage(0)
        this._showing.hidden = false
        this.startAnimation()
    }

    disconnectedCallback() {
        clearInterval(this._intervall)
    }

    startAnimation() {
        this._intervall = setInterval(() => {
            this.next()
        }, 7000)
    }

    next() {
        this.changeImage((this._currentIdx + 1) % this.amount)
    }

    changeImage(idx) {
        this._currentIdx = idx
        this._images.forEach(i => i.style.display = 'none')

        const image = this._images[idx]
        image.style.display = 'grid'
    }

    get amount() {
        return this._images.length
    }

}

customElements.define('image-slider', ImageSlider)
