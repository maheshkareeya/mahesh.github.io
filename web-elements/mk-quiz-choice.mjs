import MK from '../js/mk.mjs'
class MyChoice extends MK{
    connectedCallback(){
      
        this.render();
        this.addEventListener('click', this.onClick);
    }
    render(){
        this.innerHTML = `
        <div  name="ono">${this.getAttribute('is')}</div>`;
    }
    onClick() {
      this.getid('greenanswer').style.backgroundColor = `green`;
      if(localStorage.getItem('answer') == this.getAttribute('option')){
       console.log("clicked")
        this.style.backgroundColor = 'green'; 

      }else{
        this.style.backgroundColor = 'red'; 

      }
}
}

customElements.define('mk-quiz-choice',MyChoice);