
import './footer.js'
import { makeTemplate } from "./template.js"

const templateString = `
<link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/pure-min.css"
      integrity="sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47" crossorigin="anonymous">
<link rel="stylesheet" href="frame.css">
<span class="main">
<nav id="menu">
    <space-heading></space-heading>
</nav>
<div id="main">
    <slot name="content">
        Et maxime eos provident laboriosam tenetur dolor et. Dolorem et quam aspernatur nihil magni amet quia
        voluptates. Et tempora ex suscipit ducimus. Odit enim sequi ab ratione minus exercitationem soluta rerum.
        Tempora iste temporibus quae eum est architecto dolor assumenda. Harum quis ab repudiandae.

        Aliquam sint nobis mollitia aut explicabo voluptatibus tempore. Nostrum id minima ullam aut quia et est. Enim in
        harum aut inventore quo omnis. Iusto non labore rerum rerum velit temporibus sit. Voluptatem sapiente aut
        veritatis autem aliquid velit. Placeat commodi dolorum aperiam aut.

        Maxime laudantium dolorum ut voluptas veritatis a officiis est. Aut maiores totam qui sunt quia minima in et.
        Cupiditate quia aliquam molestias ut quam. Rerum eligendi nisi pariatur quos distinctio. Voluptatem doloremque
        reprehenderit aut et delectus. Praesentium qui explicabo fugit et architecto tempore corporis nihil.

        Omnis sit expedita ex non sequi nulla. Sunt unde molestias animi impedit aliquam. Unde suscipit natus quibusdam
        quo aut sequi deleniti enim. Aspernatur minus aut ab modi dolore assumenda perspiciatis corporis. Doloremque qui
        pariatur eius aut.

        Maiores minima eaque ut ad omnis accusantium consequatur. Quae aut animi nisi laboriosam eos quod. Harum
        quibusdam et rerum harum modi qui dolor optio. Unde esse molestiae sed reprehenderit. Est adipisci suscipit
        error quia placeat. Aut consectetur quae deserunt.

        Et maxime eos provident laboriosam tenetur dolor et. Dolorem et quam aspernatur nihil magni amet quia
        voluptates. Et tempora ex suscipit ducimus. Odit enim sequi ab ratione minus exercitationem soluta rerum.
        Tempora iste temporibus quae eum est architecto dolor assumenda. Harum quis ab repudiandae.

        Aliquam sint nobis mollitia aut explicabo voluptatibus tempore. Nostrum id minima ullam aut quia et est. Enim in
        harum aut inventore quo omnis. Iusto non labore rerum rerum velit temporibus sit. Voluptatem sapiente aut
        veritatis autem aliquid velit. Placeat commodi dolorum aperiam aut.

        Maxime laudantium dolorum ut voluptas veritatis a officiis est. Aut maiores totam qui sunt quia minima in et.
        Cupiditate quia aliquam molestias ut quam. Rerum eligendi nisi pariatur quos distinctio. Voluptatem doloremque
        reprehenderit aut et delectus. Praesentium qui explicabo fugit et architecto tempore corporis nihil.

        Omnis sit expedita ex non sequi nulla. Sunt unde molestias animi impedit aliquam. Unde suscipit natus quibusdam
        quo aut sequi deleniti enim. Aspernatur minus aut ab modi dolore assumenda perspiciatis corporis. Doloremque qui
        pariatur eius aut.

        Maiores minima eaque ut ad omnis accusantium consequatur. Quae aut animi nisi laboriosam eos quod. Harum
        quibusdam et rerum harum modi qui dolor optio. Unde esse molestiae sed reprehenderit. Est adipisci suscipit
        error quia placeat. Aut consectetur quae deserunt.
        Et maxime eos provident laboriosam tenetur dolor et. Dolorem et quam aspernatur nihil magni amet quia
        voluptates. Et tempora ex suscipit ducimus. Odit enim sequi ab ratione minus exercitationem soluta rerum.
        Tempora iste temporibus quae eum est architecto dolor assumenda. Harum quis ab repudiandae.
        
    </slot>
</div>
<footer id="footer">
    <custom-footer></custom-footer>
</footer>

<span id="gray-1" class="gray">
    </span>
<span id="gray-2" class="gray">
    </span>
</span>
`


class Frame extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" }).appendChild(makeTemplate(templateString).content.cloneNode(true))
    }
}

customElements.define('space-frame', Frame)

