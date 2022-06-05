import { $loadFile } from '/app/shared/scripts/loadFile.js';


const html = await $loadFile('./annoucement.html', import.meta.url);
const css = await $loadFile('./annoucement.css', import.meta.url);

class AnnoucementItem extends HTMLElement {
    // Some static values
    static MAX_LIMIT = 308;
    static COMMENT_LOGO = `
        <svg class="footer_content__comment__logo" focusable="false" viewBox="0 0 24 24">
            <path
                d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"
                fill="#fff">
            </path>
        </svg>
    `;
    static ADMIN_BATCH_ELEMENT = `
        <span class="footer_content__user__author__position">ADMIN</span>
    `;

    // Element Reference Variables
    annoucementRef;
    headerTextRef;
    imageContainerRef;
    annoucementTextDesc;
    footerRef;
    descTextToggle;
    imageRef;
    titleRef;
    descRef;
    authorRef;
    postDateRef;
    commentCountRef;

    // Variables to store attribute values
    isIndexPage;
    imageURL;
    title;
    desc;
    author;
    commentCount;
    width;
    commentCountElement;
    postDate;


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
        this.getAttributeValues()

        this.commentCountElement = `
            <span style="margin-left:10px">
                ${this.commentCount}
            </span>
        `;

        // Get reference to the elements
        this.initReferenceVariables();

        // Set values common
        this.titleRef.innerHTML = this.title;  
        if( this.width ) {
            this.annoucementRef.style.width = this.width + 'px';
        }


        // conditionally applying styles and values based on whether the 
        // component is displayed on the home screen or on the view all page
        if( this.isIndexPage ) {
            this.setUpIndexPageStylesAndValues();
        } else {
            this.setUpViewAllPageStylesAndValues();
        }
    }

    getAttributeValues() {
         this.isIndexPage = this.getAttribute('isIndexPage') == "true" ? true : false;
         this.imageURL = this.getAttribute('img');
         this.title = this.getAttribute('title');
         this.desc = this.getAttribute('desc');
         this.author = this.getAttribute('author');
         this.commentCount = this.getAttribute('commentCount');
         this.width = this.getAttribute('width');
         this.postDate = this.getAttribute('date');
    }

    initReferenceVariables() {
        this.annoucementRef = this.getByClass(".annoucement");
        this.headerTextRef = this.getByClass(".header__text");
        this.imageContainerRef = this.getByClass(".header__image_container__image");
        this.annoucementTextDesc = this.getByClass(".annoucement__text__desc");
        this.descTextToggle = this.getByClass(".footer__toggle");
        this.titleRef = this.getByClass(".header__text__title__content");
        this.descRef = this.getByClass(".annoucement__text__desc");
        this.authorRef = this.getByClass(".footer_content__user__author");
        this.commentCountRef = this.getByClass(".footer_content__comment");
        this.footerRef = this.shadowRoot.querySelector("#footer");
        this.imageRef = this.shadowRoot.querySelector("#header_image");
        this.postDateRef = this.getByClass(".footer_content__user__days");
    }

    setUpIndexPageStylesAndValues() {
        this.setUpIndexPageStyles();
        this.setUpIndexPageValues();
        
    }

    setUpIndexPageStyles() {
        this.annoucementRef.classList.add("annoucement-index");
        this.headerTextRef.classList.add("header__text-index");
        this.annoucementTextDesc.classList.add("annoucement__text__desc-index");
        this.footerRef.style.display = "none";
    }

    setUpIndexPageValues() {
        this.descRef.innerHTML = this.desc;
        this.imageRef.src = this.imageURL;
    }

    setUpViewAllPageStylesAndValues() {
        this.setUpViewAllPageStyles();
        this.setUpViewAllPageValues();
        this.setUpDescListener();
    }

    setUpViewAllPageStyles() {
            this.imageContainerRef.style.display = "none";
            this.annoucementRef.classList.add("annoucement-all");
            this.annoucementTextDesc.classList.add("annoucement__text__desc-all");
    }

    setUpViewAllPageValues() {
        this.authorRef.innerHTML = this.author + AnnoucementItem.ADMIN_BATCH_ELEMENT;
        this.commentCountRef.innerHTML = AnnoucementItem.COMMENT_LOGO + this.commentCountElement;
        this.descRef.innerHTML = this.desc.substring(0, AnnoucementItem.MAX_LIMIT) + "<br>...";
        console.log(this.postDateRef)
        this.postDateRef.innerHTML = this.postDate;
    }

    setUpDescListener() {
        this.descTextToggle.addEventListener('click', (e) => {
            const currentText = this.descTextToggle.innerHTML.trim();
            if( currentText == "More") {
                this.descTextToggle.innerHTML = "Less";
                this.descRef.innerHTML = this.desc;
            } else {
                this.descTextToggle.innerHTML = "More";
                this.descRef.innerHTML = this.desc.substring(0, AnnoucementItem.MAX_LIMIT) + "<br>...";
            }
        });
    }

    render() {

        this.shadowRoot.innerHTML = `
              <style>${css}</style>
              ${html}
          `;
    }

    /* Utility methods */
    getByClass(className) {
        return this.shadowRoot.querySelector(className)
    }
}

customElements.define("annoucement-item", AnnoucementItem);

/*
 Usage
    <annoucement-item
        width=536
        isIndexPage="true"
        img="https://cdn.wuxiaworld.com/avatars/jaspaaar.jpg?ver=02f31023e348ff4240d086c413bc990dcdd62e35"
        title="Damn Reincarnation and Past Life Returner are Here!"
        desc="hello world"
        date="2 days ago"
        author="satanic devil"
        commentCount=60>
    </annoucement-item>


 */