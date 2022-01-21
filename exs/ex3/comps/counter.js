var counter_template = document.createElement("template"); // the "template" means : <template><template>
counter_template.innerHTML = `
<style>
             #counter {
                 background-color:#DAD;
                 display: flex;
             }

             #counter  > button {
                 width:30px;
                 height:30px;
                 background-color: #ADD;
                 border:none;
                 border-radius:5px;
                 margin:5px;
             }

             #counter > div {
                 flex:1;
                 display:flex;
                 justify-content: center;
                 align-items:center;
             }

            #bar {
                width:0 px;
                height:15px;
                background-color: saddlebrown;
            }


        </style>
        <div id="counter">
            <button id='d_but'>-</button>
            <div id='number'>1</div>
            <button id='i_but'>+</button>
        </div>
        <div id="bar"></div>
        `;

        class TheCounter extends HTMLElement {
            constructor(){
                super();
                this.attachShadow({mode:"open"});
                this.num = 1;
            }
            connectedCallback(){
                this.shadowRoot.appendChild(counter_template.content.cloneNode(true))
                this.shadowRoot.querySelector("#i_but").onclick = () => this.increase();
                this.shadowRoot.querySelector("#i_but").onclick = () => this.decrease();
            }

            decrease(){
                this.num = this.num - 1;
                this.shadowRoot.querySelector("#number").innerText = this.num;
                this.shadowRoot.querySelector("#bar").style.width = (this.num*10)+"px";
            }

            increase(){
                this.num =this.num + 1;
                this.shadowRoot.querySelector("#number").innerText = this.num;
                this.shadowRoot.querySelector("#bar").style.width = (this.num*10)+"px";
            }
        }

        customElements.define("the-counter", TheCounter);