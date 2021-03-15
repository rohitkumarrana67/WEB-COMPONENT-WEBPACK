class SurveyPreview extends HTMLElement{

  connectedCallback(){
    this.innerHTML = `
      <div class="align-items-center bg-light d-flex h-100 justify-content-center"> I will show you the preview<div>
    `
  }

}

customElements.define('survey-preview', SurveyPreview);