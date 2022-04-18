import { $loadFile } from 'scripts/loadFile.js';

const html = await $loadFile('./demo.html', import.meta.url);
const css = await $loadFile('./demo.css', import.meta.url);

class DemoComponent extends HTMLElement {
  constructor() {
    super();
    const template = this.render();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.cloneNode(true));
  }

  render() {
    console.log(this.html);
    const template = document.createElement('template');
    template.innerHTML = this.html;
    return template.content;
  }

  get html() {
      return /* html */`
        <style>${css}</style>
        ${html}
    `;
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
