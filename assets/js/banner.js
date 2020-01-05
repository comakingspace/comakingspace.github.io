import { makeTemplate } from "./template.js"
import './btn-link.js'

const template = `

<style>
    .banner {
        background: center no-repeat url("/assets/images/banner.png");
        display: grid;
        min-height: 465px;
        grid-column-gap: 1em;
        grid-row-gap: 1em;
        grid-template-rows:  2fr 7fr 3fr;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: 
            ". . opening_hours"
            "title title title"
            ". lower_area .";
    }
    .title {
        place-self: center;
        color: whitesmoke;
        grid-area: title;
        text-align: center;
    }
    
    .opening_hours {
        place-self: center;
        align-self: center;
        grid-area: opening_hours;
    }
    
    .lower_area {
        grid-area: lower_area;
        place-self: center;
        align-self: center;
        color: whitesmoke;
    }
    
    h1 {
        font-size: 3em;
    }
    
    h1, p {
        text-shadow: 2px 2px 2px black;
    }
    .button {
        font-family: inherit;
        font-size: 100%;
        padding: .5em 1em;
        color: #444;
        color: white;
        border: 1px solid #999;
        border: none transparent;
        background-color: transparent;
        text-decoration: none;
        border-radius: 100%;
        border-color: white;
        border-style: solid;
    }

</style>
<span class="banner">
    <btn-link href="Kalendar" class="opening_hours">Öffnungszeiten</btn-link>
    <div class="title">
        <slot name="over"><p>CoMakingSpace - Offene Werkstatt und Makerspace in Heidelberg</p></slot>
        <h1><slot name="title">Your title here</slot></h1>
    </div>
    <div class="lower_area">
        <slot name="lower_area">
            <btn-link href="Kontakt" class="">Mach mit</btn-link>
        </slot>
    </div>
</span>

`

class Banner extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" }).appendChild(makeTemplate(template).content.cloneNode(true))
        this._lower_area = this.shadowRoot.querySelector('.lower_area')
    }



}

customElements.define('space-banner', Banner)
