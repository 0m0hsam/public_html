window.addEventListener("DOMContentLoaded",jsonData());

function jsonData(){
    var xmlhttp = new XMLHttpRequest();
    var url = "assign10.php";
    xmlhttp.open("GET", url);
    var out = "";
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4) {
            var myArr = JSON.parse(xmlhttp.responseText);
            var count = myArr.length;
            for (let index = 0; index < myArr.length; index++){
                count -= 1;
                for (const [key,value] of Object.entries(myArr[index])){
                    out +=  key + ": "+value+"<br>";

                }
                if(myArr[index]["File Type"] == "file"){
                    out += "<a href="+myArr[index]["File Name"]+">Click To View File</a>";
                }
                if(count > 0){
                    out += "<hr>";
                }
            }         
                
        }else{
            document.getElementById("data").innerHTML = "Directory files not found"; 
        }
        document.getElementById("data").innerHTML = out;
  }
      xmlhttp.send();
}
