const d = document,
  finiteColorsDiv = d.querySelector(".option-colors__div1"),
  finiteColorsSpan = d.querySelector(".option-colors__span1"),
  infiniteColorsDiv = d.querySelector(".option-colors__div2"),
  infiniteColorsSpan = d.querySelector(".option-colors__span2"),
  rgbDiv = d.querySelector(".option-systems__div1"),
  rgbSpan = d.querySelector(".option-systems__span1"),
  rgbaDiv = d.querySelector(".option-systems__div2"),
  rgbaSpan = d.querySelector(".option-systems__span2"),
  hexadecimalDiv = d.querySelector(".option-systems__div3"),
  hexadecimalSpan = d.querySelector(".option-systems__span3"),
  textColor = d.querySelector(".textColor"),
  infoColors = d.querySelector(".infoColors"),
  changeBtn = d.querySelector(".eject");

function changeColor() {
  d.addEventListener("click", (e) => {
    //Se selecciona la opción "Infinite colors"
    if (e.target === infiniteColorsDiv || e.target === infiniteColorsSpan) {
      infiniteColorsSpan.classList.add("active-option");
      finiteColorsSpan.classList.remove("active-option");

      //Mensaje para el sistema hexadecimal
      if (hexadecimalSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 343 colores";
      }

      //Mensaje para el sistema RGBA
      if (rgbaSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 67'108.864 colores";
      }

      //Mensaje para el sistema RGB
      if (rgbSpan.classList.contains("active-option")) {
         infoColors.classList.remove("hidden");
         infoColors.textContent = "Esta opción contiene 16'581.375 colores";
      }
    }

    //Se selecciona la opción "Finite Colors"
    if (e.target === finiteColorsDiv || e.target === finiteColorsSpan) {
      finiteColorsSpan.classList.add("active-option");
      infiniteColorsSpan.classList.remove("active-option");

      //Mensaje para el sistema hexadecimal
      if (hexadecimalSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 27 colores";
      }

      //Mensaje para el sistema RGBA
      if (rgbaSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 375 colores";
      }

      //Mensaje para el sistema RGB
      if (rgbSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 125 colores";
      }
    }

    //Se fija la opción "hexadecimal"
    if (e.target === hexadecimalSpan) {
      rgbaSpan.classList.remove("active-option");
      rgbSpan.classList.remove("active-option");
      hexadecimalSpan.classList.add("active-option");

      //Mensaje para la opción "infinite colors"
      if (infiniteColorsSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 343 colores";
      }

      //Mensaje para la opción "Finite colors"
      if (finiteColorsSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 27 colores";
      }
    }

    //Se fija la opción "RGB"
    if (e.target === rgbSpan) {
      rgbaSpan.classList.remove("active-option");
      hexadecimalSpan.classList.remove("active-option");
      rgbSpan.classList.add("active-option");

      //Mensaje para la opción "Infinite colors"
      if (infiniteColorsSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 16'581.375 colores";
      }

      //Mensaje para la opción "Finite colors"
      if (finiteColorsSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 125 colores";        
      }
    }

    //Se fija la opción "RGBA"
    if (e.target === rgbaSpan) {
      hexadecimalSpan.classList.remove("active-option");
      rgbSpan.classList.remove("active-option");
      rgbaSpan.classList.add("active-option");

      //Mensaje para la opción "Infinite colors"
      if (infiniteColorsSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 67'108.864 colores";
      }

      //Mensaje para la opción "Finite colors"
      if (finiteColorsSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 375 colores";
      }
    }

    /********** Sistema hexadecimal ************/
    //Si está seleccionado "Infinite colors" y además se selecciona "hexadecimal"
    if (
      e.target === changeBtn &&
      infiniteColorsSpan.classList.contains("active-option") &&
      hexadecimalSpan.classList.contains("active-option")
    ) {
      const R = ["00", "33", "66", "99", "AA", "CC", "FF"];
      const G = ["00", "33", "66", "99", "AA", "CC", "FF"];
      const B = ["00", "33", "66", "99", "AA", "CC", "FF"];
      const arrayColors = [];
      for (i = 0; i < R.length; i++) {
        for (j = 0; j < G.length; j++) {
          for (k = 0; k < B.length; k++) {
            arrayColors.push(`#${B[k]}${G[j]}${R[i]}`);
          }
        }
      }
      const aleatory = Math.floor(Math.random() * arrayColors.length);
      d.body.style.backgroundColor = arrayColors[aleatory];
      textColor.textContent = arrayColors[aleatory];
      infoColors.classList.remove("hidden");
      infoColors.textContent = "Esta opción contiene 343 colores";
    }

    //Si está seleccionado "Finite colors" y además se selecciona "hexadecimal"
    if (
      e.target === changeBtn &&
      finiteColorsSpan.classList.contains("active-option") &&
      hexadecimalSpan.classList.contains("active-option")
    ) {
      if (infoColors.classList.contains("hidden")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 27 colores";
      }

      const R = ["00", "33", "FF"];
      const G = ["00", "33", "FF"];
      const B = ["00", "33", "FF"];
      const arrayColors = [];
      for (i = 0; i < R.length; i++) {
        for (j = 0; j < G.length; j++) {
          for (k = 0; k < B.length; k++) {
            arrayColors.push(`#${B[k]}${G[j]}${R[i]}`);
          }
        }
      }
      const aleatory = Math.floor(Math.random() * arrayColors.length);
      d.body.style.backgroundColor = arrayColors[aleatory];
      textColor.textContent = arrayColors[aleatory];
      infoColors.classList.remove("hidden");
      infoColors.textContent = "Esta opción contiene 27 colores";
    }

    /********** Sistema RGBA ************/
    //Si está seleccionado "Infinite colors" y además se selecciona "RGBA"
    if (
      e.target === changeBtn &&
      infiniteColorsSpan.classList.contains("active-option") &&
      rgbaSpan.classList.contains("active-option")
    ) {
      const R = Math.floor(Math.random() * 255);
      const G = Math.floor(Math.random() * 255);
      const B = Math.floor(Math.random() * 255);
      const numbers = [0.2, 0.4, 0.6, 0.8];
      const aleatory = Math.floor(Math.random() * 3);
      const A = numbers[aleatory];
      let color = `rgba(${R},${G},${B},${A})`;
      d.body.style.backgroundColor = color;
      textColor.textContent = color;
      infoColors.classList.remove("hidden");
      infoColors.textContent = "Esta opción contiene 67'108.864 colores";
    }

    //Si está seleccionado "Finite colors" y además se selecciona "RGBA"
    if (
      e.target === changeBtn &&
      finiteColorsSpan.classList.contains("active-option") &&
      rgbaSpan.classList.contains("active-option")
    ) {
      const R = [50, 100, 150, 200, 250];
      const G = [250, 200, 150, 100, 50];
      const B = [100, 200, 50, 150, 250];
      const aleatory = Math.floor(Math.random() * 4);
      const numbers = [0.3, 0.6, 0.9];
      const aleatoryNumber = Math.floor(Math.random() * 2);
      const A = numbers[aleatoryNumber];
      let color = `rgba(${R[aleatory]},${G[aleatory]},${B[aleatory]},${A})`;
      d.body.style.backgroundColor = color;
      textColor.textContent = color;
      infoColors.classList.remove("hidden");
      infoColors.textContent = "Esta opción contiene 375 colores";
    }

    /***********Sistema RGB***********/
    //Si esta seleccionado "infinite colors" y además se selecciona "RGB"
    if (
      e.target === changeBtn &&
      infiniteColorsSpan.classList.contains("active-option") &&
      rgbSpan.classList.contains("active-option")
    ) {
      const R = Math.floor(Math.random() * 255);
      const G = Math.floor(Math.random() * 255);
      const B = Math.floor(Math.random() * 255);
      let color = `rgba(${R},${G},${B})`;
      d.body.style.backgroundColor = color;
      textColor.textContent = color;
      infoColors.classList.remove("hidden");
      infoColors.textContent = "Esta opción contiene 16'581.375 colores";
    }

    //Si esta seleccionado "Finite colors" y además se selecciona "RGB"
    if (
      e.target === changeBtn &&
      finiteColorsSpan.classList.contains("active-option") &&
      rgbSpan.classList.contains("active-option")
    ) {
      const R = [50, 100, 150, 200, 250];
      const G = [250, 200, 150, 100, 50];
      const B = [100, 200, 50, 150, 250];
      const aleatory = Math.floor(Math.random() * 4);
        let color = `rgb(${R[aleatory]},${G[aleatory]},${B[aleatory]})`;
        d.body.style.backgroundColor = color;
        textColor.textContent = color;
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 125 colores";      
    }
  });
}

changeColor();
