class MyHead extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){

        let headappend = `
        `;
        headappend += `<title>`+this.getAttribute('title')+`</title>`;
        headappend +=  this.bootstrap ? `
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        
        
    ` : '';
    this.innerHTML = headappend;

    }
    get bootstrap() {
        return this.hasAttribute('bootstrap');
      }
}

customElements.define('mk-head',MyHead);