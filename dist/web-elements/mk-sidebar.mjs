class MySidebar extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        //   fetch(this.getAttribute('json-url'))
        //   .then(response => response.json())
        //   .then((json)=>{
             let sidebar = `<div class="drawer" id="drawer"><div class="content"><div class="header">
                    <div class="avatar"></div><div class="text">
                        <div class="field name">Mahesh Kareeya</div>
                        <div class="field info">maheshkareeya@gmail.com</div>
                    </div>
              </div>
              <ul class="menu"><li onclick="drawer.closeDrawer()" class="item">Demo</li>`;
        //     json.forEach((item)=>{
                

        //       sidebar += `<li onclick="drawer.closeDrawer()" class="item">${item.completed}</li>`;
        //   })
        
    sidebar += `<li class="item subheader">Header</li></ul></div></div>`;
  this.innerHTML = sidebar;
// })
    }
    
}
customElements.define('mk-sidebar',MySidebar);