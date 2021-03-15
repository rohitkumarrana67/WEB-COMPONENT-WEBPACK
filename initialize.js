// require('./survey')

class NewComponent{
  static initiateUI(reference_ele) {
    $(reference_ele).html(`<survey-el />`)
  }
}

window.NewComponent = NewComponent