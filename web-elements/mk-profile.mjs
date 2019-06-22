class MyPro extends HTMLElement{
    connectedCallback() {
      this.render();
      }
    render() {

          let home = `<br><br><br><h1>MK Profile</h1>`;

        this.innerHTML = home;

  
      }
}
customElements.define('mk-profile', MyPro);