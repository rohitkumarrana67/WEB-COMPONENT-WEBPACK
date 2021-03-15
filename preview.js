class SurveyPreview extends HTMLElement{
  connectedCallback(){
    this.innerHTML = '<div class="bg-light px-5 py-3"> I will show you the preview<div>'
  }
}

customElements.define('survey-preview', SurveyPreview);