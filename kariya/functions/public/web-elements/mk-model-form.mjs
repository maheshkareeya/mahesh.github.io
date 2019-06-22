class MyModelForm extends HTMLElement{
connectedCallback(){
    this.render();
}
render(){
    this.innerHTML = `<div class="float-right">
                       
    <button title="Add New"  type="button" class="mb-2 ml-4 mr-4 btn btn-sm btn-primary" data-toggle="modal" data-target="#myModal">
            <i class="fa fa-plus"></i>
          </button>
        </div>
          <div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                      <div class="modal-header">
                  <h4 class="modal-title">Modal Heading</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                <form action="/" >
          <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd">
          </div>
          <div class="form-group form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox"> Remember me
            </label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
                </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
                
              </div>
            </div>
          </div>`;
}
}
customElements.define('mk-model-form',MyModelForm)