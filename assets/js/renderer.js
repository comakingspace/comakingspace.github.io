export class Renderer {
    constructor(elem, template) {
        this.element = elem
        this.template = template
    }

    _replacer(values) {
        return (match, key) => {
            if (values[key]) {
                return values[key]
            }
            return match
        }
    }

    update(values) {
        this.element.innerHTML = this.template.replace(/{{(.*)}}/gm, this._replacer(values))
    }
}
