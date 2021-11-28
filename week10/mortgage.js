//document.getElementById("calculator").addEventListener("click",input);

function input(){
    let apr = parseFloat(document.getElementById("apr").value);
    let loanTerm = parseInt(document.getElementById("term").value);
    let P= parseInt(document.getElementById("amount").value);
    
    
    if((apr < 0) || (apr > 25) || isNaN(apr)){
       return document.getElementById('error').innerHTML="Apr must not be between 0 and 25.00%, not empty and be a number",
       document.getElementById('apr').style.borderBlock="5px solid red";
    }
    if(isNaN(loanTerm) || loanTerm <= 0 || loanTerm >= 40){
       return document.getElementById('error').innerHTML="Loan term must be greater than 0 and less than 40, not empty and be a number",
       document.getElementById('term').style.borderBlock="5px solid red";
    }
    if(isNaN(P)){
       return document.getElementById('error').innerHTML= "Enter a Number",
       document.getElementById('amount').style.borderBlock="5px solid red";
    }
}
