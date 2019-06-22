class MyNavbar extends HTMLElement{
    connectedCallback() {
      this.render();
      }
    render() {
      fetch(this.getAttribute('url-name'))
      .then(response => response.json())
      .then(json =>{
          let navbar = `<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a class="navbar-brand" href="#">Mahesh</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse"><ul class="navbar-nav mr-auto">`;
          json.forEach((item)=>{
            navbar += `
              <li class="nav-item active">
                <a class="nav-link" href="#">${item.completed} <span class="sr-only">(current)</span></a>
              </li>`;
           })
             
           navbar += `</ul></div>
        </nav><br><br><br>`;
        this.innerHTML = navbar;
      })
  
      }
}
customElements.define('mk-navbar', MyNavbar);