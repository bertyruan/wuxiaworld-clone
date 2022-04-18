import { $loadFile } from 'scripts/loadFile.js';

const html = await $loadFile('./demo.html', import.meta.url);
const css = await $loadFile('./demo.css', import.meta.url);

class DemoComponent extends HTMLElement {
  render() {
    return `
            <style>${css}</style>
            ${html}
        `;
  }

  connectedCallback() {
    this.innerHTML = this.render();
  }

  /*
    FOR INPUTS...i.e.
    <demo-component data='[1,2,3]'></demo-component>
  */
  get data() {
    return this.getAttribute('data') || null;
  }
}

customElements.define('demo-component', DemoComponent);
