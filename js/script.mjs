// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () =>
//       navigator.serviceWorker.register('../sw.mjs')
//         .then(registration => console.log('Service Worker registered'))
//         .catch(err => 'SW registration failed'));
//   }
// if('serviceWorker' in navigator){
//     window.addEventListener('load',()=>{
//          navigator.serviceWorker
//         .register('../sw1.js')
//         .then((reg)=>console.log('service worker'))
//         .catch(err=>console.log(err))
//     })
//  }

// let deferredPrompt;
// window.addEventListener('beforeinstallprompt',(e)=>{
// e.preventDefault();
// deferredPrompt = e;
// })

// btnAdd = document.getElementById('btnAdd');
// btnAdd.addEventListener('click',e=>{
//     deferredPrompt.prompt();
//     deferredPrompt.userChoice.then((choiceResult)=>{
//         if(choiceResult === 'accepted'){
//             console.log('User accepted');
//         }
//         deferredPrompt = null;
//     })

// })

// console.log("%c ༼ つ ◕_◕ ༽つ ARE YOU GOING TO HACK MY SITE ? COME ON LETS GET INTO IT...", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
var drawer,
drawerElem,
iconElem;
window.addEventListener("load", function (e) {
drawerElem = document.getElementById("drawer");
iconElem = document.getElementById("rx_icon");
drawer = new Drawer(drawerElem);
drawer.setDrawerIcon(new DrawerIcon(iconElem));

//Use methods
/*drawer.onOpenListener(function () {
    console.log("open");
});
drawer.onCloseListener(function () {
    console.log("close");
});
drawer.onMoveListener(function (x, percent, animation, duration) {
    console.log(x + " " + percent + " " + animation + " " + duration);
});
drawer.openDrawer();
drawer.closeDrawer();
drawer.toggleDrawer();
drawer.isOpen();
drawer.resetIconOnClick();*/
});


/* Drawer Library */
function Drawer(drawerElem) {
// "use strict";
// console.log('🤫😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 ☺️ 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🥳 🥴 🥺 🤥 🤫 🤭 🧐 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾👶 👧 🧒 👦 👩 🧑 👨 👵 🧓 👴 👲 👳‍♀️ 👳‍♂️ 🧕 🧔 👱‍♂️ 👱‍♀️ 👨‍🦰 👩‍🦰 👨‍🦱 👩‍🦱 👨‍🦲 👩‍🦲 👨‍🦳 👩‍🦳 🦸‍♀️ 🦸‍♂️ 🦹‍♀️ 🦹‍♂️ 👮‍♀️ 👮‍♂️ 👷‍♀️ 👷‍♂️ 💂‍♀️ 💂‍♂️ 🕵️‍♀️ 🕵️‍♂️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 👰 🤵 👸 🤴 🤶 🎅 🧙‍♀️ 🧙‍♂️ 🧝‍♀️ 🧝‍♂️ 🧛‍♀️ 🧛‍♂️ 🧟‍♀️ 🧟‍♂️ 🧞‍♀️ 🧞‍♂️ 🧜‍♀️ 🧜‍♂️ 🧚‍♀️ 🧚‍♂️ 👼 🤰 🤱 🙇‍♀️ 🙇‍♂️ 💁‍♀️ 💁‍♂️ 🙅‍♀️ 🙅‍♂️ 🙆‍♀️ 🙆‍♂️ 🙋‍♀️ 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀️ 🤷‍♂️ 🙎‍♀️ 🙎‍♂️ 🙍‍♀️ 🙍‍♂️ 💇‍♀️ 💇‍♂️ 💆‍♀️ 💆‍♂️ 🧖‍♀️ 🧖‍♂️ 💅 🤳 💃 🕺 👯‍♀️ 👯‍♂️ 🕴 🚶‍♀️ 🚶‍♂️ 🏃‍♀️ 🏃‍♂️ 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 🤲 👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤟 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🦵 🦶 🖕 ✍️ 🙏 💍 💄 💋 👄 👅 👂 👃 👣 👁 👀 🧠 🦴 🦷 🗣 👤 👥🧥 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 🥾 🥿 🧦 🧤 🧣 🎩 🧢 👒 🎓 ⛑ 👑 👝 👛 👜 💼 🎒 👓 🕶 🥽 🥼 🌂 🧵 🧶👶🏻 👦🏻 👧🏻 👨🏻 👩🏻 👱🏻‍♀️ 👱🏻 👴🏻 👵🏻 👲🏻 👳🏻‍♀️ 👳🏻 👮🏻‍♀️ 👮🏻 👷🏻‍♀️ 👷🏻 💂🏻‍♀️ 💂🏻 🕵🏻‍♀️ 🕵🏻 👩🏻‍⚕️ 👨🏻‍⚕️ 👩🏻‍🌾 👨🏻‍🌾 👩🏻‍🍳 👨🏻‍🍳 👩🏻‍🎓 👨🏻‍🎓 👩🏻‍🎤 👨🏻‍🎤 👩🏻‍🏫 👨🏻‍🏫 👩🏻‍🏭 👨🏻‍🏭 👩🏻‍💻 👨🏻‍💻 👩🏻‍💼 👨🏻‍💼 👩🏻‍🔧 👨🏻‍🔧 👩🏻‍🔬 👨🏻‍🔬 👩🏻‍🎨 👨🏻‍🎨 👩🏻‍🚒 👨🏻‍🚒 👩🏻‍✈️ 👨🏻‍✈️ 👩🏻‍🚀 👨🏻‍🚀 👩🏻‍⚖️ 👨🏻‍⚖️ 🤶🏻 🎅🏻 👸🏻 🤴🏻 👰🏻 🤵🏻 👼🏻 🤰🏻 🙇🏻‍♀️ 🙇🏻 💁🏻 💁🏻‍♂️ 🙅🏻 🙅🏻‍♂️ 🙆🏻 🙆🏻‍♂️ 🙋🏻 🙋🏻‍♂️ 🤦🏻‍♀️ 🤦🏻‍♂️ 🤷🏻‍♀️ 🤷🏻‍♂️ 🙎🏻 🙎🏻‍♂️ 🙍🏻 🙍🏻‍♂️ 💇🏻 💇🏻‍♂️ 💆🏻 💆🏻‍♂️ 🕴🏻 💃🏻 🕺🏻 🚶🏻‍♀️ 🚶🏻 🏃🏻‍♀️ 🏃🏻 🤲🏻 👐🏻 🙌🏻 👏🏻 🙏🏻 👍🏻 👎🏻 👊🏻 ✊🏻 🤛🏻 🤜🏻 🤞🏻 ✌🏻 🤟🏻 🤘🏻 👌🏻 👈🏻 👉🏻 👆🏻 👇🏻 ☝🏻 ✋🏻 🤚🏻 🖐🏻 🖖🏻 👋🏻 🤙🏻 💪🏻 🖕🏻 ✍🏻 🤳🏻 💅🏻 👂🏻 👃🏻👶🏼 👦🏼 👧🏼 👨🏼 👩🏼 👱🏼‍♀️ 👱🏼 👴🏼 👵🏼 👲🏼 👳🏼‍♀️ 👳🏼 👮🏼‍♀️ 👮🏼 👷🏼‍♀️ 👷🏼 💂🏼‍♀️ 💂🏼 🕵🏼‍♀️ 🕵🏼 👩🏼‍⚕️ 👨🏼‍⚕️ 👩🏼‍🌾 👨🏼‍🌾 👩🏼‍🍳 👨🏼‍🍳 👩🏼‍🎓 👨🏼‍🎓 👩🏼‍🎤 👨🏼‍🎤 👩🏼‍🏫 👨🏼‍🏫 👩🏼‍🏭 👨🏼‍🏭 👩🏼‍💻 👨🏼‍💻 👩🏼‍💼 👨🏼‍💼 👩🏼‍🔧 👨🏼‍🔧 👩🏼‍🔬 👨🏼‍🔬 👩🏼‍🎨 👨🏼‍🎨 👩🏼‍🚒 👨🏼‍🚒 👩🏼‍✈️ 👨🏼‍✈️ 👩🏼‍🚀 👨🏼‍🚀 👩🏼‍⚖️ 👨🏼‍⚖️ 🤶🏼 🎅🏼 👸🏼 🤴🏼 👰🏼 🤵🏼 👼🏼 🤰🏼 🙇🏼‍♀️ 🙇🏼 💁🏼 💁🏼‍♂️ 🙅🏼 🙅🏼‍♂️ 🙆🏼 🙆🏼‍♂️ 🙋🏼 🙋🏼‍♂️ 🤦🏼‍♀️ 🤦🏼‍♂️ 🤷🏼‍♀️ 🤷🏼‍♂️ 🙎🏼 🙎🏼‍♂️ 🙍🏼 🙍🏼‍♂️ 💇🏼 💇🏼‍♂️ 💆🏼 💆🏼‍♂️ 🕴🏼 💃🏼 🕺🏼 🚶🏼‍♀️ 🚶🏼 🏃🏼‍♀️ 🏃🏼 🤲🏼 👐🏼 🙌🏼 👏🏼 🙏🏼 👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼 🤜🏼 🤞🏼 ✌🏼 🤟🏼 🤘🏼 👌🏼 👈🏼 👉🏼 👆🏼 👇🏼 ☝🏼 ✋🏼 🤚🏼 🖐🏼 🖖🏼 👋🏼 🤙🏼 💪🏼 🖕🏼 ✍🏼 🤳🏼 💅🏼 👂🏼 👃🏼');

//  console.log('🏽 🏃🏽‍♀️ 🏃🏽 🤲🏽 👐🏽 🙌🏽 👏🏽 🙏🏽 👍🏽 👎🏽 👊🏽 ✊🏽 🤛🏽 🤜🏽 🤞🏽 ✌🏽 🤟🏽 🤘🏽 👌🏽 👈🏽 👉🏽 👆🏽 👇🏽 ☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽 👋🏽 🤙🏽 💪🏽 🖕🏽 ✍🏽 🤳🏽 💅🏽 👂🏽 👃🏽🐶 🐱 🐭 🐹 🐰 🦊 🦝 🐻 🐼 🦘 🦡 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦢 🦅 🦉 🦚 🦜 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐚 🐞 🐜 🦗 🕷 🕸 🦂 🦟 🦠 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🐘 🦏 🦛 🐪 🐫 🦙 🦒 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🐐 🦌 🐕 🐩 🐈 🐓 🦃 🕊 🐇 🐁 🐀 🐿 🦔 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 💫 ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈 ☀️ 🌤 ⛅️ 🌥 ☁️ 🌦 🌧 ⛈ 🌩 🌨 ❄️ ☃️ ⛄️ 🌬 💨 💧 💦 ☔️ ☂️ 🌊 🌫🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🥭 🥥 🥝 🍅 🍆 🥑 🥦 🥒 🥬 🌶 🌽 🥕 🥔 🍠 🥐 🍞 🥖 🥨 🥯 🧀 🥚 🍳 🥞 🥓 🥩 🍗 🍖 🌭 🍔 🍟 🍕 🥪 🥙 🌮 🌯 🥗 🥘 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🍤 🍙 🍚 🍘 🍥 🥮 🥠 🍢 🍡 🍧 🍨 🍦 🥧 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🧂 🍩 🍪 🌰 🥜 🍯 🥛 🍼 ☕️ 🍵 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🍾 🥄 🍴 🍽 🥣 🥡 🥢⚽️ 🏀 🏈 ⚾️ 🥎 🏐 🏉 🎾 🥏 🎱 🏓 🏸 🥅 🏒 🏑 🥍 🏏 ⛳️ 🏹 🎣 🥊 🥋 🎽 ⛸ 🥌 🛷 🛹 🎿 ⛷ 🏂 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ 🤺 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏾‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏇 🏇🏻 🏇🏼 🏇🏽 🏇🏾 🏇🏿 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 🎫 🎟 🎪 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻 🎲 🧩 ♟ 🎯 🎳 🎮 🎰🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🛴 🚲 🛵 🏍 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩 💺 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ 🚢 ⚓️ ⛽️ 🚧 🚦 🚥 🚏 🗺 🗿 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🏠 🏡 🏘 🏚 🏗 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🕋 ⛩ 🛤 🛣 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁⌚️ 📱 📲 💻 ⌨️ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️ 📟 📠 📺 📻 🎙 🎚 🎛 ⏱ ⏲ ⏰ 🕰 ⌛️ ⏳ 📡 🔋 🔌 💡 🔦 🕯 🗑 🛢 💸 💵 💴 💶 💷 💰 💳 🧾 💎 ⚖️ 🔧 🔨 ⚒ 🛠 ⛏ 🔩 ⚙️ ⛓ 🔫 💣 🔪 🗡 ⚔️ 🛡 🚬 ⚰️ ⚱️ 🏺 🧭 🧱 🔮 🧿 🧸 📿 💈 ⚗️ 🔭 🧰 🧲 🧪 🧫 🧬 🧯 🔬 🕳 💊 💉 🌡 🚽 🚰 🚿 🛁 🛀 🛀🏻 🛀🏼 🛀🏽 🛀🏾 🛀🏿 🧴 🧵 🧶 🧷 🧹 🧺 🧻 🧼 🧽 🛎 🔑 🗝 🚪 🛋 🛏 🛌 🖼 🛍 🧳 🛒 🎁 🎈 🎏 🎀 🎊 🎉 🧨 🎎 🏮 🎐 🧧 ✉️ 📩 📨 📧 💌 📥 📤 📦 🏷 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 📊 📈 📉 🗒 🗓 📆 📅 📇 🗃 🗳 🗄 📋 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 🖇 📐 📏 📌 📍 ✂️ 🖊 🖋 ✒️ 🖌 🖍 📝 ✏️ 🔍 🔎 🔏 🔐 🔒 🔓');

// console.log('❤️ 🧡 💛 💚 💙 💜 🖤 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉 ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕️ 🛑 ⛔️ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗️ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯️ 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿️ 🅿️ 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ⏏️ ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖️ ♾ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 🔜 ✔️ ☑️ 🔘 ⚪️ ⚫️ 🔴 🔵 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ ⬛️ ⬜️ 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁‍🗨 💬 💭 🗯 ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄️ 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧🏳️ 🏴 🏁 🚩 🏳️‍🌈 🏴‍☠️ 🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇺 🇦🇹 🇦🇿 🇧🇸 🇧🇭 🇧🇩 🇧🇧 🇧🇾 🇧🇪 🇧🇿 🇧🇯 🇧🇲 🇧🇹 🇧🇴 🇧🇦 🇧🇼 🇧🇷 🇮🇴 🇻🇬 🇧🇳 🇧🇬 🇧🇫 🇧🇮 🇰🇭 🇨🇲 🇨🇦 🇮🇨 🇨🇻 🇧🇶 🇰🇾 🇨🇫 🇹🇩 🇨🇱 🇨🇳 🇨🇽 🇨🇨 🇨🇴 🇰🇲 🇨🇬 🇨🇩 🇨🇰 🇨🇷 🇨🇮 🇭🇷 🇨🇺 🇨🇼 🇨🇾 🇨🇿 🇩🇰 🇩🇯 🇩🇲 🇩🇴 🇪🇨 🇪🇬 🇸🇻 🇬🇶 🇪🇷 🇪🇪 🇪🇹 🇪🇺 🇫🇰 🇫🇴 🇫🇯 🇫🇮 🇫🇷 🇬🇫 🇵🇫 🇹🇫 🇬🇦 🇬🇲 🇬🇪 🇩🇪 🇬🇭 🇬🇮 🇬🇷 🇬🇱 🇬🇩 🇬🇵 🇬🇺 🇬🇹 🇬🇬 🇬🇳 🇬🇼 🇬🇾 🇭🇹 🇭🇳 🇭🇰 🇭🇺 🇮🇸 🇮🇳 🇮🇩 🇮🇷 🇮🇶 🇮🇪 🇮🇲 🇮🇱 🇮🇹 🇯🇲 🇯🇵 🎌 🇯🇪 🇯🇴 🇰🇿 🇰🇪 🇰🇮 🇽🇰 🇰🇼 🇰🇬 🇱🇦 🇱🇻 🇱🇧 🇱🇸 🇱🇷 🇱🇾 🇱🇮 🇱🇹 🇱🇺 🇲🇴 🇲🇰 🇲🇬 🇲🇼 🇲🇾 🇲🇻 🇲🇱 🇲🇹 🇲🇭 🇲🇶 🇲🇷 🇲🇺 🇾🇹 🇲🇽 🇫🇲 🇲🇩 🇲🇨 🇲🇳 🇲🇪 🇲🇸 🇲🇦 🇲🇿 🇲🇲 🇳🇦 🇳🇷 🇳🇵 🇳🇱 🇳🇨 🇳🇿 🇳🇮 🇳🇪 🇳🇬 🇳🇺 🇳🇫 🇰🇵 🇲🇵 🇳🇴 🇴🇲 🇵🇰 🇵🇼 🇵🇸 🇵🇦 🇵🇬 🇵🇾 🇵🇪 🇵🇭 🇵🇳 🇵🇱 🇵🇹 🇵🇷 🇶🇦 🇷🇪 🇷🇴 🇷🇺 🇷🇼 🇼🇸 🇸🇲 🇸🇦 🇸🇳 🇷🇸 🇸🇨 🇸🇱 🇸🇬 🇸🇽 🇸🇰 🇸🇮 🇬🇸 🇸🇧 🇸🇴 🇿🇦 🇰🇷 🇸🇸 🇪🇸 🇱🇰 🇧🇱 🇸🇭 🇰🇳 🇱🇨 🇵🇲 🇻🇨 🇸🇩 🇸🇷 🇸🇿 🇸🇪 🇨🇭 🇸🇾 🇹🇼 🇹🇯 🇹🇿 🇹🇭 🇹🇱 🇹🇬 🇹🇰 🇹🇴 🇹🇹 🇹🇳 🇹🇷 🇹🇲 🇹🇨 🇹🇻 🇻🇮 🇺🇬 🇺🇦 🇦🇪 🇬🇧 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🇺🇳 🇺🇸 🇺🇾 🇺🇿 🇻🇺 🇻🇦 🇻🇪 🇻🇳 🇼🇫 🇪🇭 🇾🇪 🇿🇲 🇿🇼');


function checkMobile(a) {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
// return;
}
var drawerIcon = {
        set: function (a) {},
        setState: function (a, b) {},
        setOnClick: function(a) {}
    },
    drawerBg,
    drawerStarted = true,
    width = drawerElem.offsetWidth,
    correct = 0,
    percent = 0,
    trx = 0,
    opened = false,
    startMoveTime = 0,
    startX = 0,
    speedSwipe = 0,
    isMobile = checkMobile(navigator.userAgent || navigator.vendor || window.opera),
    isIE = window.navigator.msPointerEnabled,
    isIE11 = window.navigator.pointerEnabled,
    typeStart = isIE ? "MSPointerDown" : (isMobile ? "touchstart" : "mousedown"),
    typeMove = isIE ? "MSPointerMove" : (isMobile ? "touchmove" : "mousemove"),
    typeEnd = isIE ? "MSPointerUp" : (isMobile ? "touchend" : "mouseup"),
    trZ = "translateZ(0)",
    stateMoved = false,
    transformProp = "transform",
    transitionProp = "transition",
    propPrefixCss = "",
    antiSelect,
    onOpened = function () {},
    onClosed = function () {},
    onMove = function (x, percent, animation, duration) {};

function setProperty(elem, property, value) {
    elem.style[property] = value;
}

function transfrom(x) {
    setProperty(drawerElem, transformProp, x + " " + trZ);
}

function move(x, e) {
    if (x < 0) {
        x = 0;
    }
    if (x > width) {
        x = width;
    }
    if (!stateMoved) {
        if (!isMobile) {
            antiSelect.style.visibility = "visible";
            if (!document.body.classList.contains("rx_noselect"))
                document.body.classList.add("rx_noselect");
        }
        if (trx === x) {
            stateMoved = false;
            return;
        } else {
            e.preventDefault();
            stateMoved = true;
        }

    }
    trx = x;
    transfrom("translateX(-" + x + "px)");
    percent = (1 - (x / width));
    if (percent >= 1) {
        percent = 1;
    } else if (percent <= 0) {
        percent = 0;
    }
    drawerIcon.set(percent * 100);
    drawerBg.style.opacity = percent;
    onMove(320 - x, percent, false, 0);
}

function setTransition(s) {
    setProperty(drawerElem, transitionProp, propPrefixCss + "transform " + s + "s cubic-bezier(0.0, 0.0, 0.2, 1)");
    setProperty(drawerBg, transitionProp, "opacity " + s + "s cubic-bezier(0.0, 0.0, 0.2, 1)");
}

function clearTransition() {
    setProperty(drawerElem, transitionProp, "none");
    setProperty(drawerBg, transitionProp, "none");
}

function openDrawer(s) {
    s = s || 0.225;
    opened = true;
    setTransition(s);
    drawerElem.style.opacity = 1;
    drawerBg.style.opacity = 1;
    drawerBg.style.visibility = "visible";
    transfrom("translateX(0)");
    drawerIcon.setState(1, s);
    onMove(width, 1, true, s);
    setTimeout(function () {
        clearTransition();
        if (drawerStarted) {
            return;
        }
        onOpened();
    }, s * 1000);
}

function closeDrawer(s) {
    s = s || 0.225;
    opened = false;
    setTransition(s);
    drawerBg.style.opacity = 0.001;
    transfrom("translateX(-" + width + "px)");
    drawerIcon.setState(0, s);
    onMove(0, 0, true, s);
    setTimeout(function () {
        clearTransition();
        if (drawerStarted) {
            return;
        }
        drawerElem.style.opacity = 0.001;
        drawerBg.style.visibility = "hidden";
        onClosed();
    }, s * 1000);
}

function toggleDrawer() {
    if (opened) {
        closeDrawer(0.225);
    } else {
        openDrawer(0.225);
    }
}

function onMovedNoOpen(e) {
    move(correct - e.touches[0].clientX, e);
}

function onMovedOpen(e) {
    move(startX - e.touches[0].clientX, e);
}

function onMovedNoOpenDesktop(e) {
    move(correct - e.clientX, e);
}

function onMovedOpenDesktop(e) {
    move(startX - e.clientX, e);
}

window.addEventListener("resize", function (e) {
    width = drawerElem.offsetWidth;
    if (!opened) {
        transfrom("translateX(-" + width + "px)");
    }
});

drawerElem.addEventListener(typeStart, function (e) {
    drawerElem.style.opacity = 1;
    drawerBg.style.visibility = "visible";
    startX = isMobile ? e.touches[0].clientX : e.clientX;
    startMoveTime = new Date();
    correct = width + startX;
    drawerStarted = true;
});
document.addEventListener(typeStart, function (e) {
    if (!drawerStarted) {
        return;
    }
    if (opened) {
        document.addEventListener(typeMove, isMobile ? onMovedOpen : onMovedOpenDesktop);
    } else {
        document.addEventListener(typeMove, isMobile ? onMovedNoOpen : onMovedNoOpenDesktop);
    }
});

document.addEventListener(typeEnd, function (e) {
    drawerStarted = false;
    stateMoved = false;
    if (!isMobile) {
        antiSelect.style.visibility = "hidden";
        document.body.classList.remove("rx_noselect");
    }
    document.removeEventListener(typeMove, isMobile ? onMovedOpen : onMovedOpenDesktop);
    document.removeEventListener(typeMove, isMobile ? onMovedNoOpen : onMovedNoOpenDesktop);

    speedSwipe = (((width / 2) / ((Math.abs((isMobile ? e.changedTouches[0].clientX : e.clientX) - startX)) / (new Date() - startMoveTime))) / 1000).toFixed(3);
    if (speedSwipe === Infinity) {
        if (!opened) {
            closeDrawer(0);
        } else {
            openDrawer(0);
        }
        return;
    }
    if (trx === 0) {
        return;
    }
    if (speedSwipe <= 0.150) {
        speedSwipe = 0.150;
    } else if (speedSwipe >= 0.5) {
        speedSwipe = 0.5;
    }
    var intent = (startX - (isMobile ? e.changedTouches[0].clientX : e.clientX)) > 0;
    if ((width / 2.25) > trx) {
        if (intent && speedSwipe < 0.4) {
            closeDrawer(speedSwipe);
        } else {
            openDrawer(speedSwipe);
        }
    } else {
        if (!intent && speedSwipe < 0.4) {
            openDrawer(speedSwipe);
        } else {
            closeDrawer(speedSwipe);
        }
    }
    trx = 0;
});
this.setDrawerIcon = function (icon) {
    drawerIcon = icon;
    drawerIcon.setOnClick(function (e) {
        toggleDrawer();
    });
};
this.getDrawerIcon = function () {
    return drawerIcon;
};
this.resetIconOnClick = function(){
    drawerIcon.setOnClick(function (e) {
        toggleDrawer();
    });
};
this.onOpenListener = function (listener) {
    onOpened = listener;
};
this.onCloseListener = function (listener) {
    onClosed = listener;
};
this.onMoveListener = function (listener) {
    onMove = listener;
};
this.openDrawer = function () {
    openDrawer();
};
this.closeDrawer = function () {
    closeDrawer();
};
this.toggleDrawer = function () {
    toggleDrawer();
};
this.isOpen = function () {
    return opened;
};

(function () {
    drawerBg = document.createElement("DIV");
    drawerBg.className = "drawer_bg";
    drawerBg.id = "drawer_bg";
    drawerElem.parentElement.insertBefore(drawerBg, drawerElem);
    drawerBg.onclick = function () {
        if (opened) {
            closeDrawer(0.225);
        }
    };
    antiSelect = document.createElement("DIV");
    antiSelect.className = "antiSelect";
    drawerElem.appendChild(antiSelect);
    var label = document.createElement("DIV");
    label.className = "label";
    drawerElem.appendChild(label);
    //Find prop name
    var vendors;
    if (antiSelect.style.transform === undefined) {
        vendors = ['Webkit', 'Moz', 'ms', 'O'];
        for (var vendor in vendors) {
            if (antiSelect.style[vendors[vendor] + 'Transform'] !== undefined) {
                transformProp = vendors[vendor] + 'Transform';
                propPrefixCss = "-" + vendors[vendor].toLowerCase() + "-";
            }
            if (antiSelect.style[vendors[vendor] + 'Transition'] !== undefined) {
                transitionProp = vendors[vendor] + 'Transition';
            }
        }
    }
    if (/.*opera.*presto/i.test(navigator.userAgent)) {
        trZ = "";
    }
})();
}

/* Hamburger Library */
function DrawerIcon(icon) {
// "use strict";
var ic,
    line1,
    line2,
    line3,
    const1 = 1 / 300,
    const2 = 1 / 500,
    const3 = 2 / 3,
    direction = true,
    locked = false,
    rotateLine,
    scaleX,
    transY,
    transX,
    scaleX2,
    transX2,
    rotateIc,
    transformProp = "transform",
    transitionProp = "transition",
    trZ = "translateZ(0)",
    propPrefixCss = "";

function setProperty(elem, property, value) {
    elem.style[property] = value;
}

function enableAnimation(duration) {
    var transition = propPrefixCss + "transform " + duration + "s ease";
    setProperty(line1, transitionProp, transition);
    setProperty(line2, transitionProp, transition);
    setProperty(line3, transitionProp, transition);
    setProperty(ic, transitionProp, transition);
}

function disableAnimation() {
    setProperty(line1, transitionProp, "none");
    setProperty(line2, transitionProp, "none");
    setProperty(line3, transitionProp, "none");
    setProperty(ic, transitionProp, "none");
}

this.state = function () {
    return direction;
};

this.setOnClick = function (listener) {
    icon.onclick = listener;
};

this.set = function (percent) {
    if (locked) {
        return;
    }
    if (percent > 100) {
        percent = 100;
    }
    if (percent < 0) {
        percent = 0;
    }
    if (percent >= 100) {
        direction = false;
    }
    if (percent <= 0) {
        direction = true;
    }

    rotateLine = 0.45 * percent;
    scaleX = 1 - const1 * percent;
    transY = 0.054 * percent;
    transX = 0.033 * percent;
    scaleX2 = 1 - const2 * percent;
    transX2 = -0.01 * percent;
    if (direction) {
        rotateIc = 1.80 * percent;
    } else {
        rotateIc = 360 - (1.80 * percent);
    }
    setProperty(line1, transformProp, "rotate(" + rotateLine + "deg) scaleX(" + scaleX + ") translateY(" + transY + "px) translateX(" + transX + "px) " + trZ);
    setProperty(line2, transformProp, "scaleX(" + scaleX2 + ") translateX(" + transX2 + "px) " + trZ);
    setProperty(line3, transformProp, "rotate(" + (-rotateLine) + "deg) scaleX(" + scaleX + ") translateY(" + (-transY) + "px) translateX(" + transX + "px) " + trZ);
    setProperty(ic, transformProp, "rotate(" + rotateIc + "deg) " + trZ);
};

this.setState = function (state, duration) {
    duration = duration || 0.225;
    enableAnimation(duration);
    var temp = this;
    switch (state) {
        case 0:
            this.set(1);
            break;
        case 1:
            this.set(100);
            break;
    }
    setTimeout(function () {
        disableAnimation();
        if (state === 0) {
            temp.set(0);
        }
    }, Number(duration) * 1000);
};

this.lock = function () {
    locked = true;
};
this.unLock = function () {
    locked = false;
};

(function () {
    icon.innerHTML += '<span class="ic"><i class="line one"></i><i class="line two"></i><i class="line thr"></i></span>';
    ic = icon.querySelector(".ic");
    line1 = ic.querySelector(".one");
    line2 = ic.querySelector(".two");
    line3 = ic.querySelector(".thr");
    //Find prop name
    var testEl = document.createElement('div'),
        vendors;
    if (testEl.style.transform === undefined) {
        vendors = ['Webkit', 'Moz', 'ms', 'O'];
        for (var vendor in vendors) {
            if (testEl.style[vendors[vendor] + 'Transform'] !== undefined) {
                transformProp = vendors[vendor] + 'Transform';
                propPrefixCss = "-" + vendors[vendor].toLowerCase() + "-";
            }
            if (testEl.style[vendors[vendor] + 'Transition'] !== undefined) {
                transitionProp = vendors[vendor] + 'Transition';
            }
        }
    }
    if (/.*opera.*presto/i.test(navigator.userAgent)) {
        trZ = "";
    }
})();
}


var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
navItems.forEach(function(e, i) {
e.addEventListener("click", function(e) {
    navItems.forEach(function(e2, i2) {
        e2.classList.remove("mobile-bottom-nav__item--active");
    })
    this.classList.add("mobile-bottom-nav__item--active");
});
});




//swipper

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    paginationClickable: true,
    loop: true,
         paginationBulletRender: function (index, className) {
      var tabsName = ['Apps', 'Tricks', 'News', 'Games'];
      if ( index === (tabsName.length - 1) ) {
                return	'<span class="' + className + '">'
                    + tabsName[index] + '</span>'
                    + '<div class="active-mark "></div>';
      }
      return '<span class="' + className + '">' + tabsName[index] + '</span>';
          }
  });



  //firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBv1RW9ak1CAn7ZgoMhFppaecPDywK_6v4",
    authDomain: "kariya.firebaseapp.com",
    databaseURL: "kariya.firebaseio.com",
    storageBucket: "gs://kariya.appspot.com",
  };
  firebase.initializeApp(config);
  
  // Shortcuts to DOM Elements.
  var messageForm = document.getElementById('message-form');
  var messageInput = document.getElementById('new-post-message');
  var titleInput = document.getElementById('new-post-title');
  var signInButton = document.getElementById('sign-in-button');
  var signOutButton = document.getElementById('sign-out-button');
  var splashPage = document.getElementById('page-splash');
  var addPost = document.getElementById('add-post');
  var addButton = document.getElementById('add');
  var recentPostsSection = document.getElementById('recent-posts-list');
  var userPostsSection = document.getElementById('user-posts-list');
  var topUserPostsSection = document.getElementById('top-user-posts-list');
  var recentMenuButton = document.getElementById('menu-recent');
  var myPostsMenuButton = document.getElementById('menu-my-posts');
  var myTopPostsMenuButton = document.getElementById('menu-my-top-posts');
  var listeningFirebaseRefs = [];
  
  /**
   * Saves a new post to the Firebase DB.
   */
  // [START write_fan_out]
  function writeNewPost(uid, username, picture, title, body) {
    // A post entry.
    var postData = {
      author: username,
      uid: uid,
      body: body,
      title: title,
      starCount: 0,
      authorPic: picture
    };
  
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }
  // [END write_fan_out]
  
  /**
   * Star/unstar post.
   */
  // [START post_stars_transaction]
  function toggleStar(postRef, uid) {
    postRef.transaction(function(post) {
      if (post) {
        if (post.stars && post.stars[uid]) {
          post.starCount--;
          post.stars[uid] = null;
        } else {
          post.starCount++;
          if (!post.stars) {
            post.stars = {};
          }
          post.stars[uid] = true;
        }
      }
      return post;
    });
  }
  // [END post_stars_transaction]
  
  /**
   * Creates a post element.
   */
  function createPostElement(postId, title, text, author, authorId, authorPic) {
    var uid = firebase.auth().currentUser.uid;
  
    var html =
      '<div class="post mdl-cell mdl-cell--12-col ' +
      'mdl-cell--6-col-tablet mdl-cell--4-col-desktop mdl-grid mdl-grid--no-spacing">' +
      '<div class="mdl-card mdl-shadow--2dp">' +
      '<div class="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">' +
      '<h4 class="mdl-card__title-text"></h4>' +
      '</div>' +
      '<div class="header">' +
      '<div>' +
      '<div class="avatar"></div>' +
      '<div class="username mdl-color-text--black"></div>' +
      '</div>' +
      '</div>' +
      '<span class="star">' +
      '<div class="not-starred material-icons">star_border</div>' +
      '<div class="starred material-icons">star</div>' +
      '<div class="star-count">0</div>' +
      '</span>' +
      '<div class="text"></div>' +
      '<div class="comments-container"></div>' +
      '<form class="add-comment" action="#">' +
      '<div class="mdl-textfield mdl-js-textfield">' +
      '<input class="mdl-textfield__input new-comment" type="text">' +
      '<label class="mdl-textfield__label">Comment...</label>' +
      '</div>' +
      '</form>' +
      '</div>' +
      '</div>';
  
    // Create the DOM element from the HTML.
    var div = document.createElement('div');
    div.innerHTML = html;
    var postElement = div.firstChild;
    if (componentHandler) {
      componentHandler.upgradeElements(postElement.getElementsByClassName('mdl-textfield')[0]);
    }
  
    var addCommentForm = postElement.getElementsByClassName('add-comment')[0];
    var commentInput = postElement.getElementsByClassName('new-comment')[0];
    var star = postElement.getElementsByClassName('starred')[0];
    var unStar = postElement.getElementsByClassName('not-starred')[0];
  
    // Set values.
    postElement.getElementsByClassName('text')[0].innerText = text;
    postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = title;
    postElement.getElementsByClassName('username')[0].innerText = author || 'Anonymous';
    postElement.getElementsByClassName('avatar')[0].style.backgroundImage = 'url("' +
      (authorPic || './silhouette.jpg') + '")';
  
    // Listen for comments.
    // [START child_event_listener_recycler]
    var commentsRef = firebase.database().ref('post-comments/' + postId);
    commentsRef.on('child_added', function(data) {
      addCommentElement(postElement, data.key, data.val().text, data.val().author);
    });
  
    commentsRef.on('child_changed', function(data) {
      setCommentValues(postElement, data.key, data.val().text, data.val().author);
    });
  
    commentsRef.on('child_removed', function(data) {
      deleteComment(postElement, data.key);
    });
    // [END child_event_listener_recycler]
  
    // Listen for likes counts.
    // [START post_value_event_listener]
    var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
    starCountRef.on('value', function(snapshot) {
      updateStarCount(postElement, snapshot.val());
    });
    // [END post_value_event_listener]
  
    // Listen for the starred status.
    var starredStatusRef = firebase.database().ref('posts/' + postId + '/stars/' + uid)
    starredStatusRef.on('value', function(snapshot) {
      updateStarredByCurrentUser(postElement, snapshot.val());
    });
  
    // Keep track of all Firebase reference on which we are listening.
    listeningFirebaseRefs.push(commentsRef);
    listeningFirebaseRefs.push(starCountRef);
    listeningFirebaseRefs.push(starredStatusRef);
  
    // Create new comment.
    addCommentForm.onsubmit = function(e) {
      e.preventDefault();
      createNewComment(postId, firebase.auth().currentUser.displayName, uid, commentInput.value);
      commentInput.value = '';
      commentInput.parentElement.MaterialTextfield.boundUpdateClassesHandler();
    };
  
    // Bind starring action.
    var onStarClicked = function() {
      var globalPostRef = firebase.database().ref('/posts/' + postId);
      var userPostRef = firebase.database().ref('/user-posts/' + authorId + '/' + postId);
      toggleStar(globalPostRef, uid);
      toggleStar(userPostRef, uid);
    };
    unStar.onclick = onStarClicked;
    star.onclick = onStarClicked;
  
    return postElement;
  }
  
  /**
   * Writes a new comment for the given post.
   */
  function createNewComment(postId, username, uid, text) {
    firebase.database().ref('post-comments/' + postId).push({
      text: text,
      author: username,
      uid: uid
    });
  }
  
  /**
   * Updates the starred status of the post.
   */
  function updateStarredByCurrentUser(postElement, starred) {
    if (starred) {
      postElement.getElementsByClassName('starred')[0].style.display = 'inline-block';
      postElement.getElementsByClassName('not-starred')[0].style.display = 'none';
    } else {
      postElement.getElementsByClassName('starred')[0].style.display = 'none';
      postElement.getElementsByClassName('not-starred')[0].style.display = 'inline-block';
    }
  }
  
  /**
   * Updates the number of stars displayed for a post.
   */
  function updateStarCount(postElement, nbStart) {
    postElement.getElementsByClassName('star-count')[0].innerText = nbStart;
  }
  
  /**
   * Creates a comment element and adds it to the given postElement.
   */
  function addCommentElement(postElement, id, text, author) {
    var comment = document.createElement('div');
    comment.classList.add('comment-' + id);
    comment.innerHTML = '<span class="username"></span><span class="comment"></span>';
    comment.getElementsByClassName('comment')[0].innerText = text;
    comment.getElementsByClassName('username')[0].innerText = author || 'Anonymous';
  
    var commentsContainer = postElement.getElementsByClassName('comments-container')[0];
    commentsContainer.appendChild(comment);
  }
  
  /**
   * Sets the comment's values in the given postElement.
   */
  function setCommentValues(postElement, id, text, author) {
    var comment = postElement.getElementsByClassName('comment-' + id)[0];
    comment.getElementsByClassName('comment')[0].innerText = text;
    comment.getElementsByClassName('fp-username')[0].innerText = author;
  }
  
  /**
   * Deletes the comment of the given ID in the given postElement.
   */
  function deleteComment(postElement, id) {
    var comment = postElement.getElementsByClassName('comment-' + id)[0];
    comment.parentElement.removeChild(comment);
  }
  
  /**
   * Starts listening for new posts and populates posts lists.
   */
  function startDatabaseQueries() {
    // [START my_top_posts_query]
    var myUserId = firebase.auth().currentUser.uid;
    var topUserPostsRef = firebase.database().ref('user-posts/' + myUserId).orderByChild('starCount');
    // [END my_top_posts_query]
    // [START recent_posts_query]
    var recentPostsRef = firebase.database().ref('posts').limitToLast(100);
    // [END recent_posts_query]
    var userPostsRef = firebase.database().ref('user-posts/' + myUserId);
  
    var fetchPosts = function(postsRef, sectionElement) {
      postsRef.on('child_added', function(data) {
        var author = data.val().author || 'Anonymous';
        var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
        containerElement.insertBefore(
          createPostElement(data.key, data.val().title, data.val().body, author, data.val().uid, data.val().authorPic),
          containerElement.firstChild);
      });
    };
  
    // Fetching and displaying all posts of each sections.
    fetchPosts(topUserPostsRef, topUserPostsSection);
    fetchPosts(recentPostsRef, recentPostsSection);
    fetchPosts(userPostsRef, userPostsSection);
  
    // Keep track of all Firebase refs we are listening to.
    listeningFirebaseRefs.push(topUserPostsRef);
    listeningFirebaseRefs.push(recentPostsRef);
    listeningFirebaseRefs.push(userPostsRef);
  }
  
  /**
   * Writes the user's data to the database.
   */
  // [START basic_write]
  function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });
  }
  // [END basic_write]
  
  /**
   * Cleanups the UI and removes all Firebase listeners.
   */
  function cleanupUi() {
    // Remove all previously displayed posts.
    topUserPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';
    recentPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';
    userPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';
  
    // Stop all currently listening Firebase listeners.
    listeningFirebaseRefs.forEach(function(ref) {
      ref.off();
    });
    listeningFirebaseRefs = [];
  }
  
  /**
   * The ID of the currently signed-in User. We keep track of this to detect Auth state change events that are just
   * programmatic token refresh but not a User status change.
   */
  var currentUID;
  
  /**
   * Triggers every time there is a change in the Firebase auth state (i.e. user signed-in or user signed out).
   */
  function onAuthStateChanged(user) {
    // We ignore token refresh events.
    if (user && currentUID === user.uid || !user && currentUID === null) {
      return;
    }
    currentUID = user ? user.uid : null;
  
    cleanupUi();
    if (user) {
      splashPage.style.display = 'none';
      writeUserData(user.uid, user.displayName, user.email, user.photoURL);
      startDatabaseQueries();
    } else {
      // Display the splash page where you can sign-in.
      splashPage.style.display = '';
    }
  }
  
  /**
   * Creates a new post for the current user.
   */
  function newPostForCurrentUser(title, text) {
    // [START single_value_read]
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      var username = snapshot.val().username;
      // [START_EXCLUDE]
      return writeNewPost(firebase.auth().currentUser.uid, username,
        firebase.auth().currentUser.photoURL,
        title, text);
      // [END_EXCLUDE]
    });
    // [END single_value_read]
  }
  
  /**
   * Displays the given section element and changes styling of the given button.
   */
  function showSection(sectionElement, buttonElement) {
    recentPostsSection.style.display = 'none';
    userPostsSection.style.display = 'none';
    topUserPostsSection.style.display = 'none';
    addPost.style.display = 'none';
    recentMenuButton.classList.remove('is-active');
    myPostsMenuButton.classList.remove('is-active');
    myTopPostsMenuButton.classList.remove('is-active');
  
    if (sectionElement) {
      sectionElement.style.display = 'block';
    }
    if (buttonElement) {
      buttonElement.classList.add('is-active');
    }
  }
  
  // Bindings on load.
  window.addEventListener('load', function() {
    // Bind Sign in button.
    signInButton.addEventListener('click', function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    });
  
    // Bind Sign out button.
    signOutButton.addEventListener('click', function() {
      firebase.auth().signOut();
    });
  
    // Listen for auth state changes
    firebase.auth().onAuthStateChanged(onAuthStateChanged);
  
    // Saves message on form submit.
    messageForm.onsubmit = function(e) {
      e.preventDefault();
      var text = messageInput.value;
      var title = titleInput.value;
      if (text && title) {
        newPostForCurrentUser(title, text).then(function() {
          myPostsMenuButton.click();
        });
        messageInput.value = '';
        titleInput.value = '';
      }
    };
  
    // Bind menu buttons.
    recentMenuButton.onclick = function() {
      showSection(recentPostsSection, recentMenuButton);
    };
    myPostsMenuButton.onclick = function() {
      showSection(userPostsSection, myPostsMenuButton);
    };
    myTopPostsMenuButton.onclick = function() {
      showSection(topUserPostsSection, myTopPostsMenuButton);
    };
    addButton.onclick = function() {
      showSection(addPost);
      messageInput.value = '';
      titleInput.value = '';
    };
    recentMenuButton.onclick();
  }, false);



  function result(){alert("bhai"); console.log("obhai")}
 


  // login form

var working = false;
$('.login').on('submit', function(e) {
  e.preventDefault();
  if (working) return;
  working = true;
  var $this = $(this),
    $state = $this.find('button > .state');
  $this.addClass('loading');
  $state.html('Authenticating');
  setTimeout(function() {
    $this.addClass('ok');
    $state.html('Welcome back!');
    setTimeout(function() {
      $state.html('Log in');
      $this.removeClass('ok loading');
      working = false;
    }, 4000);
  }, 3000);
});