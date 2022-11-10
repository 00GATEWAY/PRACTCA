function info(){
    let nom=document.getElementById("nombre").value;
    let ed=document.getElementById("edad").value;
    let nom2=document.getElementById("nombre2").value;
    let ed2=document.getElementById("edad2").value;
    let nom3=document.getElementById("nombre3").value;
    let ed3=document.getElementById("edad3").value;
    let nom4=document.getElementById("nombre4").value;
    let ed4=document.getElementById("edad3").value;

    alert("Nombre: "+ nom);
    alert("Edad: "+ ed);
    alert("Nombre: "+ nom2);
    alert("Edad: "+ ed2);
    alert("Nombre: "+ nom3);
    alert("Edad: "+ ed3);
    alert("Nombre: "+ nom4);
    alert("Edad: "+ ed4);

    
    }


function sumar(){
var  f = parseInt( document.getElementById('F').value) ;
var  f = parseInt( document.getElementById('F').value) ;
var  f = parseInt( document.getElementById('F').value) ;
var  f = parseInt( document.getElementById('F').value) ;
var  M = parseInt( document.getElementById('M').value) ;
var  M = parseInt( document.getElementById('M').value) ;
var  M = parseInt( document.getElementById('M').value) ;
var  M = parseInt( document.getElementById('M').value) ;


document.getElementById('resu').innerHTML=M+M+M+M;

document.getElementById('resul').innerHTML=f+f+f+f;
}