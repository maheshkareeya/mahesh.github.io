class MyHome extends HTMLElement{
    connectedCallback() {
      this.render();
      }
    render() {

          let home = `<br><br><br><h1>MK Home</h1>`;

        this.innerHTML = home;

  
      }
}
customElements.define('mk-home', MyHome);