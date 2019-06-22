class MyTable extends HTMLElement{
    connectedCallback() {
      this.render();
      }
    render() {
      fetch(this.getAttribute('url-name'))
      .then(response => response.json())
      .then(json =>{
          let datatable = `<table id="example" class="table"><tr><td>#</td><td>Body</td><td>Edit</td><td>Delete</td></tr>`
          json.forEach((item)=>{
          datatable += `<tr><td>`+item.id+`</td><td>`+item.title+`
          </td><td><button type="button" class="btn btn-primary">
          <i class="fa fa-pencil"></i>
          </button>
          </td><td><button type="button" class="btn btn-danger">
          <i class="fa fa-trash"></i>
          </button>
          </td></tr>`;
        
          })
          datatable += `</table>`;
        this.innerHTML = datatable;
    })
      }
}
customElements.define('mk-table', MyTable);