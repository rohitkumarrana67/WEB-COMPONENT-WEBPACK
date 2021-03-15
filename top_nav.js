class SurveyTopNav extends HTMLElement{
  connectedCallback(){
    this.innerHTML = '<div class="bg-warning px-5 py-3">New Survey</div>'
  }
}

customElements.define('survey-topnav', SurveyTopNav);