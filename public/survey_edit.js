class SurveyEdit extends HTMLElement{

  static get observedAttributes() {
    return ["state"];
  }

  constructor(){
    super();
    $(this).css('display', 'block')
    this.template;
    this._state
    this._data = []
  }

  connectedCallback() {
    if(!this.template){
      fetch('http://localhost:4002/survey/survey_edit').then((response)=>{
        return response.text();
      }).then((response)=>{
        this.template = response;
        this.innerHTML = this.template;
        this.dataJSON = window.survey_data
        $(this).find('.name').text(this.dataJSON.name)
        if (this.dataJSON.description){
          $(this).find('.desc').text(this.dataJSON.description)
        }
        this.render()
      }).catch((err)=>{
        console.log(err);
      });
    } else {
      this.innerHTML = this.template
    }
  }

  getstate(){
    return this._state;
  }

  setstate(newValue){
    this._state = newValue;
    this.render()
  }

  get data(){
   return this._data;
  }

  set data(newData){
    this._data = newData;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "state") {
      this.setstate(newValue);
    }
  }

  render(){
    console.log(JSON.parse(this._state))
  }

}

customElements.define('survey-edit', SurveyEdit);