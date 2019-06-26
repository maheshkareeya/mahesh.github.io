import MK from '../js/mk.mjs'
class MyCollapse extends MK{
connectedCallback(){
    this.render();
}
render(){
    this.innerHTML = this.hasAttribute('hide')?``:`<div class="row">
    <div style="margin-bottom:10em" class="col">
      <h2>Open <b>Description</b></h2>
      <div class="tabs">
        <div class="tab">
          <input type="checkbox" id="chck1">
          <label class="tab-label" for="chck1">Answer</label>
          <div class="tab-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
          </div>
        </div>
      
    </div>
  </div>
  
  
  <style>
  
  
  
  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  
  .row {
    display: flex;
  }
  .row .col {
    flex: 1;
  }
  .row .col:last-child {
    margin-left: 1em;
  }
  
  .tabs {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
  }
  
  .tab {
    width: 100%;
    color: white;
    overflow: hidden;
  }
  .tab-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: #2c3e50;
    font-weight: bold;
    cursor: pointer;
    /* Icon */
  }
  .tab-label:hover {
    background: #1a252f;
  }
  .tab-label::after {
    content: "👉🏼";
    width: 1em;
    height: 1em;
    text-align: center;
    transition: all .35s;
  }
  .tab-content {
    max-height: 0;
    padding: 0 1em;
    color: #2c3e50;
    background: white;
    transition: all .35s;
  }
  .tab-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: #2c3e50;
    cursor: pointer;
  }
  .tab-close:hover {
    background: #1a252f;
  }
  
  input:checked + .tab-label {
    background: #1a252f;
  }
  input:checked + .tab-label::after {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
  }
  input:checked ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
  
  </style>`
}
}
customElements.define('mk-collapse',MyCollapse)