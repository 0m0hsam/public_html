function total(){
    let iphone = document.getElementById("number1").value;
    let samsung = document.getElementById("number2").value;
    let nokia = document.getElementById("number3").value;
    let htc = document.getElementById("number4").value;

    let total= (350 * iphone) + (300 * samsung) + (250 * nokia) + (200 * htc);
    document.getElementById("total").value = "Total Cost: $"+ 40;
}


    document.getElementById('cardnumber').addEventListener('input', function (e) {
e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});

    document.getElementById('carddate').addEventListener('input', function (e) {
e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{2})/m, '$1/').trim();
});
    document.getElementById('phone').addEventListener('input', function (e) {
e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{3})(.{3})(.{4})/g, '$1-$2-$3').trim();
});