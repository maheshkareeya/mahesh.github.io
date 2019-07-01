var url = window.location.href;
console.log(window.location.href);
var filename = url.split('/').pop();
console.log(filename);
if(filename !== ''){
if(filename === 'mk-login'){
    document.getElementById("body").innerHTML = "<"+filename+"></"+filename+">"; 
}else{
    document.getElementById("route").innerHTML = "<"+filename+"></"+filename+">";        
}  }
        else{
            document.getElementById("route").innerHTML = "<mk-home></mk-home>";   
        }
        function changeit(url){
            window.location.href = url;
        }
