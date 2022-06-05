import { $loadFile } from './../shared/scripts/loadFile.js';


const html = await $loadFile('./../html/releases.component.html', import.meta.url); // html file
const css = await $loadFile('./../css/releases.css', import.meta.url); // css file

class ReleaseSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.setUp();
    }

    setUp() {

    }


    render() {

        this.shadowRoot.innerHTML = `
              <style>${css}</style>
              ${html}
          `;
    }
}

customElements.define("release-section", ReleaseSection);
