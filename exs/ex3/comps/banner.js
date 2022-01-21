var b_template = document.createElement("template"); 
counter_template.innerHTML = `
<h1>Banner</h1>
`;
        class TheBanner extends HTMLElement {
            constructor(){
                super();
                this.attachShadow({mode:"open"});
            }
            connectedCallback(){
                this.shadowRoot.appendChild(counter_template.content.cloneNode(true))
            }
        }

        customElements.define("the-banner", TheBanner);