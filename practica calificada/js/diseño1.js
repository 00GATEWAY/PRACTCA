function prom(){
    let nombre=prompt("INGRESE SUS NOMBRES COMPLETOS :  ");
    let apellidos=prompt("INGRESE SUS APELLIDOS COMPLETOS : ");
    let cal1=parseInt(prompt("INGRESE CALIFICACIÓN ENTRE 1 Y 100"));
    let cal2=parseInt(prompt("INGRESE CALIFICACIÓN ENTRE 1 Y 100"));
    alert("Nombre: "+ nombre);
    alert("Apellido:  "+ apellidos);
    let promedio=(cal1+ cal2)/2
    alert("Promedio:  "+ promedio);
    if (promedio > 80 ) {
        categoria = "Destacado";
        document.getElementById('cate').innerHTML=categoria;
      }
      else if (promedio > 60 && promedio < 80) {
        categoria = "BUENO";
        document.getElementById('cate').innerHTML=categoria;
      }
      else if (promedio > 50 && promedio < 60) {
        categoria = "REGULAR";
        document.getElementById('cate').innerHTML=categoria;
      }
      else if (promedio < 50) {
        categoria = "Malo";
        document.getElementById('cate').innerHTML=categoria;

    

    }
    document.getElementById('nom').innerHTML=nombre;
    document.getElementById('ape').innerHTML=apellidos;





    }