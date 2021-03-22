class SurveySection extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="m-5 h-100"></div>
    `
  }

}

customElements.define('survey-section', SurveySection);