/*$(document).ready(function() {
    accionParaElClick = function(event) {
        $(this).text("Bémeme");
    }

    $("button").on("click", accionParaElClick);

    console.log('Hola mundo... por tercera vez');
});
*/

//document.getElementById('boton').onclick = function () {
    //alert ('Me has presionado. Me voy de vacaciones a relajarme');
  //  document.getElementById('boton').innerText = 'ya me has comido';

//}

//generar dinámicamente una etiqueta
/*$(document).ready(function(){

    solicitudes = ["Mensaje1", "Hola", "Adios"]; // array con los textos

    for(i = 0; i< solicitudes.length; i++){ // ciclo que recorre el array y va creando los botones
        $("#maestro").append(
            $("<li>").text(solicitudes[i])
        );
    }
});  */


//crear objeto dinámicamente. Commit Creado ya con datos
 $(document).ready(function(){

    solicitud  = {
        
        "id": 1,
        "nombre": "Juan",
        "apellido": "Secreto"

    };
    let solicitudes =[solicitud, solicitud,solicitud];
    for(i = 0; i< solicitudes.length; i++){ // ciclo que recorre el array y va creando los botones
        $("#maestro").append(
            $("<li>").text(solicitudes[i].nombre + ' ' + solicitudes[i].apellido )
        );
    }
});
 