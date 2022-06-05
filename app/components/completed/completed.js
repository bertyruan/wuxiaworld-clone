import { $loadFile } from 'scripts/loadFile.js';

const html = await $loadFile('./completed.html', import.meta.url);
const css = await $loadFile('./completed.css', import.meta.url);

class CompletedSection extends HTMLElement {

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

customElements.define("completed-section", CompletedSection);