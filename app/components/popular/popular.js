import { $loadFile } from 'scripts/loadFile.js';


const html = await $loadFile('./popular.component.html', import.meta.url);
const css = await $loadFile('./css/popular.component.css', import.meta.url);


class PopularSection extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.setUp();
    }

    setUp() {
        fetch("./assets/data/popular.json") // Fetch the data.json file
        .then((response) => response.json()) // Parse as JSON and return the response
        .then((data) => {

            // Use the data
            const popular = data.popularThisWeek; // Get the popular array
            console.log(popular);
            const btnRight = this.shadowRoot.getElementById('btn-right');
            const btnLeft = this.shadowRoot.getElementById('btn-left');
            // let newArr = popular.slice(0, 6)
            let newArr = popular;
            const popularImages = this.shadowRoot.getElementById('popularImages'); // here

            const moveRight = (orginalArr) => {
            // newArr = orginalArr.slice(6)
            // console.log(newArr)
                if( !popularImages.classList.contains("moveRight") ) {
                    popularImages.classList.add("moveRight");
                }
            }

            const moveLeft = (orginalArr) => {
            
                if( popularImages.classList.contains("moveRight") ) {
                    popularImages.classList.remove("moveRight");
                }
            }
            btnRight.addEventListener('click', () => moveRight(popular))

            btnLeft.addEventListener('click', () => moveLeft(popular))


            newArr.forEach((item) => {
                const figure = document.createElement("figure")
                figure.classList.add('popular__image')

                const picture = document.createElement('img')
                picture.setAttribute('src', item.images.png)
                picture.setAttribute('alt', item.alt)
                picture.classList.add('pic')
                figure.appendChild(picture)

                const text = document.createElement('div')
                text.classList.add('popular__text')
                text.innerText = "Ongoing"
                figure.appendChild(text)

                const number = document.createElement('div')
                number.classList.add('popular__text--number')
                number.innerHTML = item.number
                figure.appendChild(number)

                const figcaption = document.createElement('figcaption')
                figcaption.classList.add('popular__caption')
                figure.appendChild(figcaption)

                const title = document.createElement('p')
                title.classList.add('title')
                title.innerHTML = item.name
                figure.appendChild(title)
                const likes = document.createElement('p')
                likes.classList.add('likes')
                likes.innerHTML = item.likes
                figure.appendChild(likes)
                popularImages.appendChild(figure)
            })


        }).catch(error => console.log(error))
        
    }   

    render() {
        
        this.shadowRoot.innerHTML = `
            <style>${css}</style>
            ${html}
        `;
    }
}

customElements.define("popular-section", PopularSection);

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