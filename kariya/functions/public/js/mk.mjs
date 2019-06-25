class MK extends HTMLElement{
    // constructor() {
    //     super();
    //   }
    getid(myid){return document.getElementById(myid);}
    getname(myid){return document.getElementsByName(myid);}
    change(myid,mychange){return document.getElementById(myid).innerHTML = mychange;}
    store(key,value){return localStorage.setItem(key,value);}
    remove(key){return localStorage.removeItem(key);}
    // result(message){ return alert(message);}
}
export default MK;