class SurveyTopNav extends HTMLElement{
  connectedCallback(){
    this.innerHTML = '<div class="bg-warning px-5 py-3">top navbar<div>'
  }
}

customElements.define('survey-topnav', SurveyTopNav);