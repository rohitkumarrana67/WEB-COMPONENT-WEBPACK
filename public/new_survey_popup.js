class NewSurveyPopup extends HTMLElement{

  constructor(){
    super()
    this.template;
  }

  connectedCallback(){
    if(!this.template){
      fetch("http://localhost:4002/survey/new_survey_popup").then(response => {
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
    }
  }

}

customElements.define('new-survey-popup', NewSurveyPopup);