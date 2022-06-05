import { $loadFile } from 'scripts/loadFile.js';


const html = await $loadFile('./editor-choice-item.html', import.meta.url);
const css = await $loadFile('./editor-choice-item.css', import.meta.url);


class EditorChoiceItem extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.setUp();
    }

    setUp() {
        // Get values
        const imageURL = this.getAttribute('img');
        const title = this.getAttribute('title');
        const desc = this.getAttribute('description');
        const rating = this.getAttribute('rating');
        const tags = this.getAttribute('tags').split(",").map(t => t.trim());

        // Get reference to the elements
        const imageRef = this.shadowRoot.querySelector(".item-image");
        const titleRef = this.shadowRoot.querySelector(".title");
        const descRef = this.shadowRoot.querySelector(".description");
        const ratingRef = this.shadowRoot.querySelector(".rating");
        const tagsRef = this.shadowRoot.querySelector(".tags-container");

        // Set values
        imageRef.src = imageURL;
        titleRef.innerHTML = title;
        descRef.innerHTML = desc;
        ratingRef.innerHTML = rating;

        // create tag and append
        tags.forEach( tag => {
            const tagElement = document.createElement('div');
            tagElement.classList.add('tag');
            tagElement.innerHTML = tag;
            tagsRef.appendChild(tagElement);
        });
    }   

    render() {
        
        this.shadowRoot.innerHTML = `
            <style>${css}</style>
            ${html}
        `;
    }
}

customElements.define("editor-choice-item", EditorChoiceItem);

// Using the component
/*
    <editor-choice-item 
        img="/app/assets/dummy.jpg"
        title="lorem ipsum"
        description="lorem lorem"
        rating="20%"
        tags="test,test"

        ></editor-choice-item>

*/