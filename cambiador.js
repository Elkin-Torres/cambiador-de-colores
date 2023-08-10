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
    //The option "Infinite colors" is selected
    if (e.target === infiniteColorsDiv || e.target === infiniteColorsSpan) {
      infiniteColorsSpan.classList.add("active-option");
      finiteColorsSpan.classList.remove("active-option");

      //Message for hexadecimal system
      if (hexadecimalSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 343 colores";
      }

      //Message for the RGBA system
      if (rgbaSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 67'108.864 colores";
      }

      //Message for RGB system
      if (rgbSpan.classList.contains("active-option")) {
         infoColors.classList.remove("hidden");
         infoColors.textContent = "Esta opción contiene 16'581.375 colores";
      }
    }

    //The "Finite Colors" option is selected
    if (e.target === finiteColorsDiv || e.target === finiteColorsSpan) {
      finiteColorsSpan.classList.add("active-option");
      infiniteColorsSpan.classList.remove("active-option");

    //Message for the hexadecimal system
      if (hexadecimalSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 27 colores";
      }

      //Message to the RGBA system
      if (rgbaSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 375 colores";
      }

      //Message to the RGB system
      if (rgbSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 125 colores";
      }
    }

    //Set the "hexadecimal" option
    if (e.target === hexadecimalSpan) {
      rgbaSpan.classList.remove("active-option");
      rgbSpan.classList.remove("active-option");
      hexadecimalSpan.classList.add("active-option");

      //Message for the "infinite colors" option
      if (infiniteColorsSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 343 colores";
      }

      //Message for the "Finite colors" option
      if (finiteColorsSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 27 colores";
      }
    }

    //Set the "RGB" option
    if (e.target === rgbSpan) {
      rgbaSpan.classList.remove("active-option");
      hexadecimalSpan.classList.remove("active-option");
      rgbSpan.classList.add("active-option");

      //Message for the "Infinite colors" option
      if (infiniteColorsSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 16'581.375 colores";
      }

      //Message for the "Finite colors" option
      if (finiteColorsSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 125 colores";        
      }
    }

    //Set the "RGBA" option
    if (e.target === rgbaSpan) {
      hexadecimalSpan.classList.remove("active-option");
      rgbSpan.classList.remove("active-option");
      rgbaSpan.classList.add("active-option");

    //Message for the "Infinite colors" option
      if (infiniteColorsSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 67'108.864 colores";
      }

      //Message for the "Finite colors" option
      if (finiteColorsSpan.classList.contains("active-option")) {
        infoColors.classList.remove("hidden");
        infoColors.textContent = "Esta opción contiene 375 colores";
      }
    }

    /********** hexadecimal system ************/
    //If "Infinite colors" is selected and also "hexadecimal" is selected
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

    //If "Finite colors" is selected and also "hexadecimal" is selected
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

    /********** RGBA system ************/
    //If "Infinite colors" is selected and also "RGBA" is selected
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

    //If "Finite colors" is selected and also "RGBA" is selected
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

    /*********** RGB system ***********/
    //If "infinite colors" is selected and also "RGB" is selected
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

    //If "Finite colors" is selected and also "RGB" is selected
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
