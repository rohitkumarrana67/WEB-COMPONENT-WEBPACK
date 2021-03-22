class SurveyTopNav extends HTMLElement{
  
  constructor(){
    super();
    this.text = this.getAttribute('text') || 'New Survey';
  }

  render() {
    $(this).addClass('d-flex align-items-center')
    this.innerHTML = `
    <div class="px-5 py-3">${this.text}</div>
    <input class="input-group-text mx-5 my-3 d-none" type="text" value="${this.text}" placeholder="Survey Name">
    <i class="fa fa-pencil-square-o mx-1" id="edit-title"></i>
    <i class="fa fa-check mx-1 d-none" id="save-title"></i>
    <i class="fa fa-times mx-1 d-none" id="cancel-title"></i>
    `
    let editIcon = document.querySelector("#edit-title");
    let saveIcon = document.querySelector("#save-title");
    let cancelIcon = document.querySelector("#cancel-title");
    editIcon.addEventListener('click', this.showInput.bind(this));
    saveIcon.addEventListener('click', this.changeTitle.bind(this));
    cancelIcon.addEventListener('click', this.undoChangeTitle.bind(this));
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