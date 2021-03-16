class SurveySidemenu extends HTMLElement{

    constructor(){
      super()
      this.template = `
      <ul class="list-group">
        <li class="list-group-item" id="question-1">question type-1</li>
        <li class="list-group-item" id="question-2">question type-2</li>
        <li class="list-group-item" id="question-3">question type-3</li>
        <li class="list-group-item" id="question-4">question type-4</li>
        <li class="list-group-item" id="question-5">question type-5</li>
        <li class="list-group-item" id="question-6">question type-6</li>
        <li class="list-group-item" id="question-7">question type-7</li>
      </ul>
      `
      this.innerHTML= this.template
    }
    connectedCallback(){

      $(this).on('click', '#question-1', function(e){
        $.getScript('https://rohitkumarrana67.github.io/WEB-COMPONENT-WEBPACK/question_selection.js', ()=>{
          $(e.currentTarget).append('<question-selection>')
        })
      })

    }
}

customElements.define('survey-sidemenu', SurveySidemenu);

