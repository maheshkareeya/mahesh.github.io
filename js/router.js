if(window.location.href !== ''){
    var url = window.location.href;
    console.log(window.location.href);
    var filename = url.split('/').pop();
    console.log(filename);
    document.getElementById("route").innerHTML = "<"+filename+"></"+filename+">";        
        }
        function changeit(url){
            window.location.href = url;
        }
        
        // if(window.location.pathname  == '/ex1'){
        //     document.getElementById("route").innerHTML = `
        //     <h3 class="alert alert-success">Notifications</h3> 
        //     <mk-model-form ></mk-model-form>`;
        //         }