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

Survey.getName2 = function() {
  console.log("method chal gya");
}

customElements.define('question-el', Queston);