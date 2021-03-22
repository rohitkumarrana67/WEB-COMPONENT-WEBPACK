class SurveySection extends HTMLElement {

  constructor() {
    super();
    this.template;
  }

  connectedCallback() {
    $(this).addClass('d-flex flex-column justify-content-center align-items-center h-100')
    if(!this.template){
      $.ajax({
        url: "http://localhost:4002/survey/survey_section",
        method: 'GET',
        wait: true,
        success: (response) => {
          this.template = response
          this.innerHTML = this.template;
          let addQuestionBtn = this.querySelector('#add-question-btn')
          let addQuestionSmall = this.querySelector('#add-question-small')
          addQuestionBtn.addEventListener('click', this.displayModal.bind(this))
          addQuestionSmall.addEventListener('click', this.displayModal.bind(this))
          $(this).find('#question-container').on('question_deleted', this.checkIfLast.bind(this))
        }
      })
    } else {
      this.innerHTML = this.template;
      let addQuestionBtn = this.querySelector('#add-question-btn')
      let addQuestionSmall = this.querySelector('#add-question-small')
      addQuestionBtn.addEventListener('click', this.displayModal.bind(this))
      addQuestionSmall.addEventListener('click', this.displayModal.bind(this))
      $(this).find('#question-container').on('question_deleted', this.checkIfLast.bind(this))
    }
  }

  displayModal() {
    if(!window.customElements.get('question-selection')){
      $.getScript('http://localhost:4001/question_selection.js', ()=>{
        $('body').append('<question-selection />')
      })
    } else {
      $('body').append('<question-selection />')
    }
  }

  checkIfLast(){
    if($('#question-container').children().length-1 < 1){
      $(this).addClass('align-items-center justify-content-center').find('#add-question-btn').show()
      $(this).find('#add-question-small').parent().addClass('d-none')
    }
  }

}

customElements.define('survey-section', SurveySection);