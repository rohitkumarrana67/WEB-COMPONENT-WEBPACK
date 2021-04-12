class Survey extends HTMLElement{

  constructor(){
    super();
    $(this).css('display', 'block')
    this.template;
  }

  connectedCallback() {
    if(!this.template){
      fetch('http://localhost:4002/survey/survey_el').then((response)=>{
        return response.text();
      }).then((response)=>{
        this.template = response;
        this.innerHTML = this.template;
        this.renderTopNav();
        this.renderNewSection();
        // $(this).on('renderSurveyDetails', this.renderSurveyDetails.bind(this))
      }).catch((err)=>{
        console.log(err);
      });
    } else {
      this.innerHTML = this.template
      this.renderTopNav();
      this.renderNewSection();
    }
  }

  renderTopNav(){
    $.getScript('http://localhost:4001/top_nav.js', ()=>{
      $(this).find('#top-nav').html('<survey-topnav class="bg-aliceblue"/>')
    })
  }

  renderNewSection(){
    $.getScript('http://localhost:4001/section.js', ()=>{
      $(this).find('#main-content').html('<survey-section/>')
    })
  }

  // renderSurveyDetails(){
  //   $.getScript('http://localhost:4001/survey-edit.js', ()=>{
  //     this.innerHTML = `<survey-edit/>`
  //   })
  // }

}

customElements.define('survey-el', Survey);

