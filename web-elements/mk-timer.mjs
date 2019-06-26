import MK from "../js/mk.mjs"
class MyTimer extends MK{

    connectedCallback(){
        this.render();
    }

render(){
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
//   let countDown = new Date('Oct 29, 2019 00:00:00').getTime(),
let countDown = new Date('Oct 29, 2019 00:00:00').getTime(),

      x = setInterval(function() {


        let now = new Date().getTime(),
            distance = countDown - now;
            
  
        document.getElementById('days').innerText = Math.floor(distance / (day)),
          document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        
        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}
  
      }, second)
    this.innerHTML = this.hasAttribute('hide')?``:`<div class="timer">
    <h4 id="head">Countdown :</h4>
    <ul>
      <li class="li"><span id="days"></span>days</li>
      <li class="li"><span id="hours"></span>Hours</li>
      <li class="li"><span id="minutes"></span>Minutes</li>
      <li class="li"><span id="seconds"></span>Seconds</li>
    </ul>
  </div>
  

  <style>

  .timer{
      margin-top:2em;
      text-align:center;
  }
  
  
  .li {
    display: inline-block;
    font-size: 0.5em;
    list-style-type: none;
    padding: 1em;
    text-transform: uppercase;
  }
  
  .li span {
    display: block;
    font-size: 2.5rem;
  }</style>`
}

}
customElements.define('mk-timer',MyTimer)