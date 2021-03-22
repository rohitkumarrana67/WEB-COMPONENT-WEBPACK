class MCQQuestion extends HTMLElement {

  constructor() {
    super()
    this.JSON = {question: '', options: []}
    this.template = `
      <div class="card m-4">
        <div class="card-header d-flex align-items-center">
          <input class="form-control" type="text" placeholder="Question here...">
          <i class="fa fa-trash ms-3 text-danger delete"></i>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mb-3">
              <input type="text" placeholder="Option 1 here..." class="form-control col-m">
            </div>
            <div class="col-md-6 mb-3">
              <input type="text" placeholder="Option 2 here..." class="form-control col-m">
            </div>
            <div class="col-md-6 mb-3">
              <input type="text" placeholder="Option 3 here..." class="form-control col-m">
            </div>
            <div class="col-md-6 mb-3">
              <input type="text" placeholder="Option 4 here..." class="form-control col-m">
            </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-end align-items-center">
          <button class="btn btn-outline-success save">Save</button>
          <button class="btn btn-outline-warning d-none edit">Edit</button>
        </div>
      </div>`
  }

  connectedCallback() {
    this.innerHTML = this.template;
    $(this).find('.save').on('click', this.validateFields.bind(this))
    $(this).find('.edit').on('click', this.enableFields.bind(this))
    $(this).find('.delete').on('click', this.removeQuestion.bind(this))
  }

  validateFields() {
    let isValid = true;
    let question = $(this).find('.card-header input')[0]
    let options = $(this).find('.card-body input')
    if(!question.value.trim()){
      $(this).find('.card-header input').addClass('border-danger')
      if(isValid){ isValid = false }
    } else {
      $(this).find('.card-header input').removeClass('border-danger')
      if(isValid){ isValid = true }
    }
    if(!options[0].value.trim()){
      $(options[0]).addClass('border-danger')
      if(isValid){ isValid = false }
    } else {
      $(options[0]).removeClass('border-danger')
      if(isValid){ isValid = true }
    }
    if(!options[1].value.trim()){
      $(options[1]).addClass('border-danger')
      if(isValid){ isValid = false }
    } else {
      $(options[1]).removeClass('border-danger')
      if(isValid){ isValid = true }
    }
    if(isValid){
      this.createJSON(question, options)
      this.changeButton()
    }
  }

  createJSON(question, options) {
    this.JSON.question = question.value.trim()
    options.each( (index, option) => {
      if(option.value){
        this.JSON.options.push(option.value.trim())
      }
    })
    console.log(this.JSON)
  }

  changeButton(){
    $(this).find('.card-footer .save, .card-footer .edit').toggleClass('d-none')
    $(this).find('input').attr('disabled', true)
  }

  enableFields(){
    $(this).find('.card-footer .save, .card-footer .edit').toggleClass('d-none')
    $(this).find('input').removeAttr('disabled')
  }

  removeQuestion(){
    $(this).parent().trigger('question_deleted')
    $(this).remove()
  }

}

customElements.define('question-mcq', MCQQuestion);