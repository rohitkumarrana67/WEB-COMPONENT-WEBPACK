class questionSelection extends HTMLElement{

  QUESTION_TYPE = {
    'mcq'   : {url: 'http://localhost:4001/questions/mcq_question.js', tag: '<question-mcq />', tag_name: 'question-mcq'},
    'tf'    : {url: 'http://localhost:4001/questions/tf_question.js', tag: '<question-tf />', tag_name: 'question-tf'},
    'rating': {url: 'http://localhost:4001/questions/rating_question.js', tag: '<question-rate />', tag_name: 'question-rate'}
  }

  constructor(){
    super()
    this.template;
  }

  connectedCallback(){
    if(!this.template){
      fetch("http://localhost:4002/survey/question_selection").then(response => {
        return response.text();
      }).then(response => {
        this.template = response
        this.innerHTML = this.template;
        $(this).find('.modal').modal('show')
        $(this).on('click', '.close', (e)=>{
          e.preventDefault()
          e.stopPropagation()
          $(this).remove()
        })
        $(this).find('.modal-body button').on('click', this.renderQuestion.bind(this))
        $(window).on('hidden.bs.modal',()=>{
          $(this).remove()
        })
      })
    } else {
      this.innerHTML = this.template;
      $(this).find('.modal').modal('show')
      $(this).on('click', '.close', (e)=>{
        e.preventDefault()
        e.stopPropagation()
        $(this).remove()
      })
      $(this).find('.modal-body button').on('click', this.renderQuestion.bind(this))
    }
  }

  _renderQuestion(type){
    $('survey-section').removeClass('align-items-center justify-content-center').find('#add-question-btn').hide()
    $('survey-section').find('#question-container').append(this.QUESTION_TYPE[type].tag)
    $('survey-section').find('#add-question-small').parent().removeClass('d-none')
  }

  renderQuestion(e){
    let type = $(e.target).attr('type')
    if(!window.customElements.get(this.QUESTION_TYPE[type].tag_name)){
      $.getScript(this.QUESTION_TYPE[type].url, ()=>{
        this._renderQuestion(type)
      })
    } else {
      this._renderQuestion(type)
    }
    $(this).find('.modal').modal('hide')
    $(this).remove()
  }

}

customElements.define('question-selection', questionSelection);
