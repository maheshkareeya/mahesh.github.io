import MK from '../js/mk.mjs'
import {} from './mk-quiz-card.mjs';
class MyQuiz extends MK{
    connectedCallback(){


this.render();
    }
    render(){
        let current;
       
        if(this.getAttribute('current') != null){

        
         current = this.getAttribute('current')

        }else{
         current = 1;
        }   
        
        
        fetch('../json/mcq.json')
        // fetch('http://localhost:5000/api')
        .then(data=>data.json())

        .then(item=>{
            
            // item.forEach(element => {
            //     if(element.data.id == current){
            //         console.log(element.data.id);
            //     }
            // });
            
            item.filter(element=>{

                
                if(current == item.length){
                    
                    if(element.data.id == current){
                        console.log(element.question);
                        this.innerHTML =`<mk-quiz-card id="question" dataid='${element.data.id}' que='${element.data.question}' ans='${element.data.ans}' A='${element.data.A}' B='${element.data.B}' C='${element.data.C}' D='${element.data.D}'  prev=${current-1} current=${current} total='${item.length}'></mk-quiz-card>`;
                    }
                }
              else
                {
                if(element.data.id == 1 && current == 1){
                    console.log(element.data.question);
                    
                    this.innerHTML =`<mk-quiz-card id="question" dataid='${element.data.id}' que='${element.data.question}' ans='${element.data.ans}' A='${element.data.A}' B='${element.data.B}' C='${element.data.C}' D='${element.data.D}'  next=${current+1} current=${current} total='${item.length}'></mk-quiz-card>`;
                }
                else if(element.data.id == current && element.data.id != 1){
                    console.log(element.data.question);
                    this.innerHTML =`<mk-quiz-card id="question" dataid='${element.data.id}' que='${element.data.question}' ans='${element.data.ans}' A='${element.data.A}' B='${element.data.B}' C='${element.data.C}' D='${element.data.D}' next=${current+1} prev=${current-1} current=${current} total='${item.length}'></mk-quiz-card>`;
                }
                }
                // else{
                //     this.innerHTML =`<mk-quiz-card id="question" que='${element.question}' ans='A' a='H2O' b='P2O' c='C2O' d='K2O' next=${current++} prev=${current--} current=${current}></mk-quiz-card>`;
                // }
            })
        
        })
        this.store('current',current);
        
}

}
customElements.define('mk-quiz',MyQuiz);