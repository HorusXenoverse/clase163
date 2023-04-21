AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        // Añadir la condición para reproducir sonido
        if(e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "ArrowRight" || e.key == "ArrowLeft"){
          var pasos = document.querySelector("#sound2")
          pasos.components.sound.playSound()
        }



      });
    },
  });


  
