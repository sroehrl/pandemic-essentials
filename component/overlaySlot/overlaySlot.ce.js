const overlaySlotTemplate = `
<div class="overlay">
    <div class="overlay-box">
       <div class="pull-right">
           <button class="button small icon fa-times" id="close-button">
               close
           </button>
       </div>
       <div class="content">
           <slot></slot>
       </div>
    </div>
    <style>
        .pull-right{
            float: right;
        }
        .content{
            clear: both;
        }
        .overlay{
            position: absolute;
            top:0;
            left:0;
            right:0;
            /*bottom:0;*/
            height: 100%;
            z-index: 99999;
            background: rgba(0,0,0,.7);
        }
        .overlay-box{
            position: fixed;
            top: 20%;
            right: 50%;
            max-height: 500px;
            width: 600px;
            margin-right: -300px;
            padding: 12px;
            background: whitesmoke;
            overflow-y: auto;
        }
    </style>
</div>

`;

export class OverlaySlot extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = overlaySlotTemplate;
        this.style.display = 'none';
        this.shadowRoot.querySelector('#close-button').addEventListener('click', () => {
            this.removeAttribute('open');
            this.toggle();
        });

    }
    static get observedAttributes() {
        return ['open'];
    }

    get open() {
        return this.hasAttribute('open');
    }

    set open(val) {
        // Reflect the value of the open property as an HTML attribute.
        if (val) {
            this.setAttribute('open', '');
        } else {
            this.removeAttribute('open');
        }
        this.toggle();
    }
    connectedCallback(){
        this.toggle();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name);
        console.log(newValue);
        this.toggle();
    }
    toggle(){
        if(this.open){
            this.style.display = 'block';
        } else {
            this.style.display = 'none';
        }
    }


}

customElements.define('overlay-slot', OverlaySlot);