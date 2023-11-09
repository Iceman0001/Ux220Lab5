class AyanElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Ayan was here";
    }
}

customElements.define("x-ayan", AyanElement);