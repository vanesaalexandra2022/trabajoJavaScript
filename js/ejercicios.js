
function liquidar(){
    var horas=parseInt(document.getElementById('numhoras').value);
    let tarifa=parseInt(document.getElementById('tarifah').value);
    document.getElementById("pagar").innerHTML=horas*tarifa;
}

function suma(){
    var x= parseInt(document.getElementById('valor1').value);
    var y= parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=x+y;
}