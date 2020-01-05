class Template extends HTMLTemplateElement {
    constructor() {
        super()
    }

    apply(str) {
        this.innerHTML = str
        return this
    }
}

customElements.define('space-template', Template, { extends: 'template' })

export function makeTemplate(str) {
    return document.createElement('template', { is: 'space-template' }).apply(str)
}
