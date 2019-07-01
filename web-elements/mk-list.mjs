import MK from '../js/mk.mjs'
class MyList extends MK{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <br><br><br><br><br>
        <div class="box e">LETC</div>
        `;
    }

}
customElements.define('mk-list',MyList);