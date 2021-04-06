class SurveyTopNav extends HTMLElement{

  constructor(){
    super();
    this.text = this.getAttribute('text') || 'New Survey';
    this.template;
  }

  render() {
    $(this).addClass('d-flex align-items-center w-100')
    if(!this.template){
      fetch(`http://localhost:4002/survey/top_nav?text=${this.text}`)
      .then(response => {
        return response.text();
      }).then(response => {
        this.template = response
        this.innerHTML = this.template
        let editIcon = document.querySelector("#edit-title");
        let saveIcon = document.querySelector("#save-title");
        let cancelIcon = document.querySelector("#cancel-title");
        editIcon.addEventListener('click', this.showInput.bind(this));
        saveIcon.addEventListener('click', this.changeTitle.bind(this));
        cancelIcon.addEventListener('click', this.undoChangeTitle.bind(this));
      })
    } else {
      this.innerHTML = this.template
      let editIcon = document.querySelector("#edit-title");
      let saveIcon = document.querySelector("#save-title");
      let cancelIcon = document.querySelector("#cancel-title");
      editIcon.addEventListener('click', this.showInput.bind(this));
      saveIcon.addEventListener('click', this.changeTitle.bind(this));
      cancelIcon.addEventListener('click', this.undoChangeTitle.bind(this));
    }
  }

  connectedCallback(){
    this.render();
  }

  showInput() {
    $(this).children().toggleClass('d-none');
  }

  changeTitle() {
    this.text = $(this).find('input').val();
    this.render();
  }

  undoChangeTitle() {
    $(this).find('input').val(this.text);
    $(this).children().toggleClass('d-none');
  }

}

customElements.define('survey-topnav', SurveyTopNav);