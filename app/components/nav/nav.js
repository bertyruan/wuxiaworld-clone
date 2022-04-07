import { $loadFile } from 'scripts/loadFile.js';

const html = await $loadFile('./nav.html', import.meta.url);
const css = await $loadFile('./nav.css', import.meta.url);

class NavComponent extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    return `
            <style>${css}</style>
            ${html}
        `;
  }

  connectedCallback() {
    this.innerHTML = this.render();
  }
}

customElements.define('nav-component', NavComponent);
