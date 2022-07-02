$(document).ready(function () {

  $("#home").vegas({
    delay: 7000,
    timer: false,
    shuffle: true,
    // firstTransition: "fade",
    firstTransitionDuration: 5000,
    transitionDuration: 2000,
    slides: [
      { src: "img/demolicion5.jpg" },
      { src: "img/demolicion.jpg" },
      { src: "img/demolicion4.jpg" },
    ],
    animation: 'kenburns',
  });

  
  const typer = new Typed(".typer", {
    strings: ["Residenciales", "Condominios", "Obras publicas", "Carreteras"],

    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: "|", // Caracter para el cursor
    contentType: "html", // 'html' o 'null' para texto sin formato
  });

});

/*Start Funcion filtro de portafolio*/
$(".filter-button").on("click", (e) => {
  const filter = $(e.target).attr("data-filter");
  console.log(filter);
  const items = $(".item-content").parent();
  for (item of items) {
    if (filter == "") {
      $(item).addClass("animated zoomIn faster");
      $(item).parent().addClass("animated zoomIn faster");
      $(item).removeClass("d-none");
      $(item).parent().removeClass("d-none");

      console.log("x");
    } else if ($(item).attr("data-category") == filter) {
      $(item).addClass("animated zoomIn faster");
      $(item).parent().addClass("animated zoomIn faster");
      $(item).removeClass("d-none");
      $(item).parent().removeClass("d-none");
    } else {
      $(item).addClass("d-none");
      $(item).parent().addClass("d-none");
      $(item).removeClass("animated zoomIn faster");
      $(item).parent().removeClass("animated zoomIn faster");
    }
  }
});
/*Fin de Funcion filtro de portafolio*/