function canada(){
    document.getElementById("fieldset1").style.display="block";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "canada.txt", false);
    xhttp.send();
    document.getElementById("canadaData").innerHTML = xhttp.responseText;
}

function mexico(){
    document.getElementById("fieldset2").style.display="block";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "mexico.txt", false);
    xhttp.send();
    document.getElementById("mexicoData").innerHTML = xhttp.responseText;
}

function russia() {
    document.getElementById("fieldset3").style.display="block";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "russia.txt", false);
    xhttp.send();
    document.getElementById("russiaData").innerHTML = xhttp.responseText;
}
function usa() {
    document.getElementById("fieldset4").style.display="block";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "usa.txt", false);
    xhttp.send();
    document.getElementById("usaData").innerHTML = xhttp.responseText;
}


function jsonData(){
    var xmlhttp = new XMLHttpRequest();
    var url =document.getElementById("userInput").value;
    xmlhttp.open("GET", url);

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("fieldset5").style.display="block";
            var myArr = JSON.parse(xmlhttp.responseText);
            document.getElementById("data").style.color= "black"; 
            var out = "";         

                for(const [key1,value1] of Object.entries(myArr)){
                    for(const [key2,value2] of Object.entries(value1)){
                        out += "First Name: "+value2.first +"<br>"+
                                "Last Name: "+value2.last +"<br>"

                        for(const [key3,value3] of Object.entries(value2.address)){
                            out += key3 + " : "+value3 +"<br>";
                        }
                        out += "Major: "+value2.major +"<br>"+
                                "Gdp: "+value2.gpa +"<br>"
                        out += "<hr>"
                    }      
                }

                document.getElementById("data").innerHTML = out;
        }else{
            document.getElementById("data").innerHTML = "Student record file not found"; 
            document.getElementById("data").style.color= "red"; 
        }
  }
      xmlhttp.send();
}
