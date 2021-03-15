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

Survey.prototype.getName2 = function() {
  console.log("method chal gya");
}

customElements.define('question-el', Queston);