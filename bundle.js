const template = `
<h1>Here, you create</h1>
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