function calculo () {
    var n1=Number(document.getElementById('s').value)
    var n2=Number(document.getElementById('a').value)
    
    if (n2==0 && n2<1){
        var res1=n1/100*5+n1
        document.getElementById('resp').value=res1 
    }else if (n2==1 && n2<2){
        var res2=n1/100*7+n1
        document.getElementById('resp').value=res2
    }else if (n2==2 && n2<5 ){
        var res3=n1/100*10+n1
        document.getElementById('resp').value=res3
    }else if  (n2==5 && n2<10){
        var res5=n1/100*15+n1
        document.getElementById('resp').value=res5
    }else{
        var re=n1/100*20+n1
        document.getElementById('resp').value=re
    }
}

function horas(){
    var ser1 =Number(document.getElementById('ser1').value)
    var reser =ser1*800
    document.getElementById('reser').value=reser
    
}
function promedio(){
    var nota1,nota2,nota3;
    var nota1= Number(document.getElementById('nota1').value)
    var nota2= Number(document.getElementById('nota2').value)
    var nota3= Number(document.getElementById('nota3').value)
    var respuest=(nota1+nota2+nota3)/3
    document.getElementById('promedio').value=respuest
}

function cilindro () {
    var al=Number (document.getElementById('altura').value)
    var diame=Number(document.getElementById('diametro').value)
    var r=diame/2
    var r1=r*r
    var al1=al*3.14
    var total=al1*r1;
    document.getElementById('rec').value=total
}

function promedioA(){

    var arti1 = Number(document.getElementById('num1').value)
    var arti2 =  Number(document.getElementById('num2').value)
    var arti3 = Number (document.getElementById('num3').value)
    var promedio= (arti1+arti2+arti3)/3
    document. getElementById('prom').value=promedio
}


function velocidad()
{
    var vk= Number(document.getElementById('vel').value)
    var sol=(vk*100)/3600
    document.getElementById('ms').value=sol

}

function digitos(){
  var numer =(document.getElementById('num').value)
  if(numer<10){
      document.getElementById('cifras').value =numer+("el numero tiene un cifra")
  }
     else if (numer<100){
      document.getElementById('cifras').value =numer+("el numero tiene  dos cifras")
  }
    else if (numer<1000){
    document.getElementById('cifras').value= numer+("el numero tiene 3 cifras")
}
else{
    doctument.getElementById('cifras'). value =("el numero tiene mas de 3 digitos")
}

}

function banco(){
    var c = Number(document.getElementById('cap1').value)
    var toc=(c*100)/2
    document.getElementById('tc').value= toc


}

function al(){
    var altura= (document.getElementById('altura').value)
    if(altura<=150){

        document.getElementById('tipo').value=("persona es baja")
       

    }
    else if(altura>= 151 && altura<170){
        document.getElementById('tipo').value=("persona de altura media")


    }

    else if(altura>171){
        document.getElementById('tipo').value=("persona es alta")

    }
}

function mayorEdad(){
var nombre = (document.getElementById('nomb').value)
var edad1 =Number (document.getElementById('edad').value)

if( edad1 >= 18){
    document.getElementById('voto').value =nombre+ ("es mayor de edad puede votar")
}
else
    document.getElementById('voto').value=nombre + ("es menor de edad no puede votar")


}

function positivoNegativo(){
    var numero = Number(document.getElementById('numero1').value)
    if(numero>=0){
        document.getElementById('tipo').value = "positivo"
    }
    else if(numero<0)
    document.getElementById('tipo').value = "negativo"

}

function numDistintos(){
    var num1= Number(document.getElementById('n1').value)
    var num2= Number(document.getElementById('n2').value)
    if(num1<num2){
    document.getElementById('res').value=num1
    }
    else 
        document.getElementById('res'). value= num2
}
function cuartaParte(){
    var numer1= Number(document.getElementById('numero1').value) 
    if(numer1>=10){
        var num= numer1  * 3
    document.getElementById('res').value=num
}
else if (numer1<10){
    var num =numer1 / 4
    document.getElementById('res').value=num
}
}

function divicion(){
    var un=Number(document.getElementById('un').value)
    var doss=Number(document.getElementById('do').value)
    if (doss==0 || un==0 )
    document.getElementById('divi').value="la divicion no es posible"
    else 
    var r=un/doss
    document.getElementById('divi').value=r
}

function menorMayor(){
    var numero1=Number(document.getElementById('num1').value)
    var numero2=Number(document.getElementById('num2').value)
    if(numero1<numero2)
        document.getElementById('order').value=numero1+""+numero2     
    
    else 
    document.getElementById('order').value=numero2+""+numero1
}





    



    