$(document).ready(function() {
    accionParaElClick = function(event) {
        $(this).text("Bémeme");
    }

    $("button").on("click", accionParaElClick);

    console.log('Hola mundo... por tercera vez');
});


//document.getElementById('boton').onclick = function () {
    //alert ('Me has presionado. Me voy de vacaciones a relajarme');
  //  document.getElementById('boton').innerText = 'ya me has comido';

//}
 