class questionSelection extends HTMLElement{

  QUESTION_TYPE = {
    'mcq':        {url: 'http://localhost:4001/questions/mcq_question.js', tag: '<question-mcq />', tag_name: 'question-mcq'},
    'true-false': {url: 'http://localhost:4001/questions/true_false_question.js', tag: '<question-tf />', tag_name: 'question-tf'},
    'rating':     {url: 'http://localhost:4001/questions/rating_question.js', tag: '<question-rate />', tag_name: 'question-rate'}
  }

  constructor(){
    super()
    this.template = `
    <div class="modal fade" id="exampleModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4 my-1"><button class="btn btn-outline-primary w-100" type="mcq">MCQ</button></div>
              <div class="col-md-4 my-1"><button class="btn btn-outline-warning w-100" type="tf">True/False</button></div>
              <div class="col-md-4 my-1"><button class="btn btn-outline-danger w-100" type="rating">Rating</button></div>
              <div class="col-md-4 my-1"><button class="btn btn-outline-primary w-100" type="mcq">MCQ</button></div>
              <div class="col-md-4 my-1"><button class="btn btn-outline-warning w-100" type="tf">True/False</button></div>
              <div class="col-md-4 my-1"><button class="btn btn-outline-danger w-100" type="rating">Rating</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
  connectedCallback(){
    this.innerHTML = this.template
    $(this).find('.modal').modal('show')
    $(this).on('click', '.close', (e)=>{
      e.preventDefault()
      e.stopPropagation()
      $(this).remove()
   })
   $(this).find('.modal-body button').on('click', this.renderQuestion.bind(this))
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
