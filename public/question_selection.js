class questionSelection extends HTMLElement{

  constructor(){
    super()
    this.template = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    `
    this.innerHTML= this.template
  }
  connectedCallback(){
    $(this).find('#exampleModal').modal('show')
    $(this).on('click', '.close', function(e){
      e.preventDefault()
      $('question-selection').remove()
   })
  }
}

customElements.define('question-selection', questionSelection);
