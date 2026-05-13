const items =
  document.querySelectorAll(".item");

const zonaImagen =
  document.getElementById("zonaImagen");

const imagen =
  document.getElementById("imagenPrincipal");

const btnReiniciar =
  document.getElementById("btnReiniciar");

const nombreOrganelo =
  document.getElementById("nombreOrganelo");

let numeroActual = null;

let audioActual = null;

const audioCorrecto = new Audio('audios/correcto.mp3');
const audioCompletado = new Audio('audios/jugar.mp3');

/* =========================
   CONFIGURACIÓN DESDE HTML
========================= */

const carpetaBase =
  document.body.dataset.carpeta;

const prefijoImagen =
  document.body.dataset.prefijo;

const nombres =
  JSON.parse(
    document.body.dataset.nombres
  );

const nombresBonitos =
  JSON.parse(
    document.body.dataset.nombresBonitos
  );

/* =========================
   SOLO UNA PIEZA ACTIVA
========================= */

let siguientePermitido = 1;

/* =========================
   MOSTRAR NOMBRE
========================= */

function mostrarNombre(numero){

  nombreOrganelo.innerText =
    nombresBonitos[numero];

  nombreOrganelo.classList.add(
    "visible"
  );

}

/* =========================
   ACTUALIZAR BLOQUEOS
========================= */

function actualizarBloqueos(){

  items.forEach(item => {

    const numero =
      Number(item.dataset.numero);

    item.classList.remove(
      "activo",
      "bloqueado"
    );

    item.removeAttribute(
      "draggable"
    );

    /* BORRAR CANDADOS */

    const candado =
      item.querySelector(".bloqueo");

    if(candado)
      candado.remove();

    /* =========================
       ACTUAL
    ========================= */

    if(numero === siguientePermitido){

      item.classList.add(
        "activo"
      );

      item.setAttribute(
        "draggable",
        "true"
      );

    }

    /* =========================
       FUTUROS
    ========================= */

    else if(numero > siguientePermitido){

      item.classList.add(
        "bloqueado"
      );

      item.insertAdjacentHTML(
        "beforeend",
        `<div class="bloqueo">🔒</div>`
      );

    }

    /* =========================
       PASADOS
    ========================= */

    else{

      /* visibles normales */
      /* sin drag */
    }

  });

}

/* =========================
   INICIO
========================= */

actualizarBloqueos();

/* =========================
   ITEMS
========================= */

items.forEach(item => {

  /* DRAG */

  item.addEventListener(
    "dragstart",
    () => {

      const numero =
        Number(item.dataset.numero);

      if(numero !== siguientePermitido)
        return;

      numeroActual = numero;

    }
  );

  /* AUDIO */

  item.addEventListener(
    "mouseenter",
    () => {

      const numero =
        Number(item.dataset.numero);

      /* SOLO EL ACTUAL */

      if(numero !== siguientePermitido)
        return;

      const nombreAudio =
        nombres[numero];

      /* DETENER ANTERIOR */

      if(audioActual){

        audioActual.pause();

        audioActual.currentTime = 0;

      }

      /* NUEVO AUDIO */

      audioActual = new Audio(
        `${carpetaBase}/Audios/${nombreAudio}.mp3`
      );

      audioActual.play();

    }
  );

  /* CLICK */

  item.addEventListener(
    "click",
    () => {

      const numero =
        Number(item.dataset.numero);

      /* SOLO COMPLETADOS */

      if(numero >= siguientePermitido)
        return;

      /* NO CAMBIA IMAGEN */

    }
  );

});

/* =========================
   DRAG OVER
========================= */

zonaImagen.addEventListener(
  "dragover",
  (e) => {

    e.preventDefault();

    zonaImagen.classList.add(
      "drag-over"
    );

  }
);

zonaImagen.addEventListener(
  "dragleave",
  () => {

    zonaImagen.classList.remove(
      "drag-over"
    );

  }
);

/* =========================
   DROP
========================= */

zonaImagen.addEventListener(
  "drop",
  (e) => {

    e.preventDefault();

    zonaImagen.classList.remove(
      "drag-over"
    );

    if(!numeroActual)
      return;

    const numero =
      Number(numeroActual);

    /* SOLO EL CORRECTO */

    if(numero !== siguientePermitido)
      return;

    /* CAMBIAR IMAGEN */

    imagen.src =
      `${carpetaBase}/${prefijoImagen}${numero}.png`;

    /* MOSTRAR NOMBRE */

    mostrarNombre(numero);

    /* AVANZAR */

    siguientePermitido++;

    /* ACTUALIZAR */

    actualizarBloqueos();

    /* AUDIO CORRECTO */

    audioCorrecto.currentTime = 0;
    audioCorrecto.play();

    /* AUDIO COMPLETADO */

    if (siguientePermitido > nombres.length) {
      audioCompletado.currentTime = 0;
      audioCompletado.play();
    }

    numeroActual = null;

  }
);

/* =========================
   REINICIAR
========================= */

btnReiniciar.addEventListener(
  "click",
  () => {

    /* IMAGEN ORIGINAL */

    imagen.src =
      `${carpetaBase}/${prefijoImagen}0.png`;

    /* REINICIAR PROGRESO */

    siguientePermitido = 1;

    /* OCULTAR NOMBRE */

    nombreOrganelo.classList.remove(
      "visible"
    );

    /* DETENER AUDIO */

    if(audioActual){

      audioActual.pause();

      audioActual.currentTime = 0;

    }

    /* RESET VISUAL */

    actualizarBloqueos();

  }
);