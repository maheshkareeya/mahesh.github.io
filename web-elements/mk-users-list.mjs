class MyUsersList extends HTMLElement{
connectedCallback(){
    this.render();
}
render(){
    let innerhtml = ``;
    fetch('./json/users-list.json')
    .then(res=>res.json())
    .then((data)=>{
        // console.table(data)
    data.forEach(item => {
        innerhtml += `<h1>${item.name}</h1>`;
      
    });
    this.innerHTML = `
<br><br><br><br>${innerhtml}
`;
    });

}
}
customElements.define('mk-users-list',MyUsersList)