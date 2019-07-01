import MK from '../js/mk.mjs'
class MyLogin extends MK{
    connectedCallback(){
        this.render();
    }
    render(){
this.innerHTML = `

<div class="wrapper">
  <form class="login">
    <p class="title">Log in</p>
    <input type="text" placeholder="Username" autofocus/>
    <i class="fa fa-user"></i>
    <input type="password" placeholder="Password" />
    <i class="fa fa-key"></i>
    <a href="#">Forgot your password?</a>
    <button onClick="window.location.replace('https://kariya.web.app/')" >
      <i class="spinner"></i>
      <span class="state">Log in</span>
    </button>
  </form>
  <footer><a target="blank" href="https://kariya.web.app/">boudra.me</a></footer>
  </p>
</div>
`;
    }
}

customElements.define('mk-login',MyLogin);