import MK from '../js/mk.mjs'
import {} from './mk-collapse.mjs';
import {} from './mk-quiz-choice.mjs';

class MyPrev extends MK{
  connectedCallback(){
    this.render();
    this.addEventListener('click', this.onClick);
  
  }
  render(){this.innerHTML =`<div><<</div>`;}
  onClick() {
    if(localStorage.getItem("current")!=1){
      let current = localStorage.getItem("current");
      current--;
      this.store('current',current);
      
      this.getid('question').innerHTML = `<mk-quiz current=${current}></mk-quiz>`; 
    }
    

}
}
customElements.define('mk-prev',MyPrev);

class MyNext extends MK{
  connectedCallback(){
    this.render();
    this.addEventListener('click', this.onClick);
  
  }
  render(){this.innerHTML =`<div>>></div>`;}
  onClick() {
    if(localStorage.getItem("current")!=''){
      let current = localStorage.getItem("current");
      current++;
      this.store('current',current);
      console.log(current);
      this.getid('question').innerHTML = `<mk-quiz current=${current}></mk-quiz>`; 
    }
    
    
    }
}


customElements.define('mk-next',MyNext);


class MyQuizCard extends MK{


    connectedCallback(){
        // this.change('title',' 😓<mk-timer></mk-timer>');
        this.change('title','GATE QUESTIONS<span class="bell fa fa-bell"></span>')
       
        this.render();
       
    
  // let mcqid = 1;
  // this.store('mcqid',mcqid);
  //  let selected="";
  //       this.getname('ono')[0].addEventListener("click",()=>{
  //         selected = 'A';
  //         console.log(selected);

         
  //       })
  //       this.getname('ono')[1].addEventListener("click",()=>{
  //         selected = 'B';
  //         console.log(selected);
  //       })
  //       this.getname('ono')[2].addEventListener("click",()=>{
  //         selected = 'C';
  //         console.log(selected);
  //       })
  //       this.getname('ono')[3].addEventListener("click",()=>{
  //         selected = 'D';
  //         console.log(selected);
  //       })

        
    }

    render()
    {
      let current = this.getAttribute('current');
      // console.log(this.getAttribute('dataid'))
      // console.log(this.getAttribute('answer'));
      this.store('answer',this.getAttribute('answer'));
      console.log(localStorage.getItem('answer'));
// fetch('../json/mcq.json')
// .then(res=>res.json())
// .then((item)=>{
  let htmlbody = '';


  
// item.forEach(element => {
  
  // if(element.id == localStorage.getItem(localStorage.key('mcqid'))){
          htmlbody += `
       
          <br><br><br>
        <div class="container-box">
        
  <div class="scrollbar" id="style-11">
  <div class="force-overflow">
  <h3> ${this.getAttribute('dataid')}. ${this.getAttribute('que')}</h3>
</div>
</div>
</div>
  <div class="noselect container-box">`;
  for(var i=65;i<=68;i++)
  {
    console.log(String.fromCharCode(i));
    if(String.fromCharCode(i) == localStorage.getItem('answer') ){
    htmlbody += `<div  class="box b">${String.fromCharCode(i)}</div>
    <mk-quiz-choice id="greenanswer" class="box a" option='${String.fromCharCode(i)}' is='${this.getAttribute(String.fromCharCode(i))}'></mk-quiz-choice>`;
    }else{
      htmlbody += `<div  class="box b">${String.fromCharCode(i)}</div>
      <mk-quiz-choice class="box a" option='${String.fromCharCode(i)}' is='${this.getAttribute(String.fromCharCode(i))}'></mk-quiz-choice>`;
    }
   
  }
{/* <div  class="box b">A</div>
  <mk-quiz-choice class="box a" option='A' is='${this.getAttribute('A')}'></mk-quiz-choice>
  <div  class="box b">B</div>
  <mk-quiz-choice class="box a" option='B' is='${this.getAttribute('B')}'></mk-quiz-choice>
  <div  class="box b">C</div>
  <mk-quiz-choice class="box a" option='C' is='${this.getAttribute('C')}'></mk-quiz-choice>
  <div  class="box b">D</div>
  <mk-quiz-choice class="box a" option='D' is='${this.getAttribute('D')}'></mk-quiz-choice> */}
  htmlbody +=`
 
 

    <br><br>
    ${this.getAttribute('prev')?'<mk-prev  gothere='+current+' class="box c"></mk-prev>':'<div class="ebox d"></div>'}
    <div class="ebox d"></div>
    <div class="box e">${current} / ${this.getAttribute('total')}</div>
    <div class="ebox d"></div>
    ${this.getAttribute('next')?'<mk-next gothere='+current+' class="box c"></mk-next>':'<div class="ebox d"></div>'}
   

  </div>
  
`;
// });
this.innerHTML = htmlbody;

// }
// );

    }
   

}

customElements.define('mk-quiz-card',MyQuizCard)