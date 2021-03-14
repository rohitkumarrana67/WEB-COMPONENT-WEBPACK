const template = `
<h1>Hi hai ye</h1>
`
class Queston extends HTMLElement{

  connectedCallback() {
    this.setHTMLContent()
  }

  setHTMLContent() {
    this.innerHTML = template;
  }
}

customElements.define('question-el', Queston);