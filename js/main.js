//VARIABLES (CONSTANTES) OBTENIDAS DE LOS BOTONES
const cancelAddWord = document.getElementById("cancel");
const agregarPalabraLayout = document.getElementById("addWord");
const iniciarJuegoLayout = document.getElementById("play");
const salirDelJuegoLayout = document.getElementById("exitGame");
const alert = document.getElementById("alert");
const form = document.querySelector("form");

const palabrasSecretasArray = [];

ocultarMostrarElementos();
agregarPalabrasSecretas();

function agregarPalabrasSecretas() {
  //VARIABLES DE VALIDACION
  let acentos = /[áÁéÉíÍóÓúÚ]/;
  let numeros = /^([0-9])*$/;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const palabraNueva = data.get("userAddWord");

    if (
      palabraNueva.trim() === "" ||
      numeros.test(palabraNueva) ||
      acentos.test(palabraNueva)
    ) {
      alert.innerHTML = "LOS NUMEROS Y ACENTOS NO SON VALIDOS";
    } else {
      alert.innerHTML = "NUEVA PALABRA GUARDADA";

      //GUARDAR LAS NUEVAS PALABRAS EN LOCALSTORAGE
      var palabrasSecretasArray =
        JSON.parse(localStorage.getItem("palabrasSecretas")) || [];

      //AGREGAR PALABRA AL ARRAY
      palabrasSecretasArray.push(palabraNueva.toUpperCase());

      //OBTENER EL ARREGLOR GUARDADO
      localStorage.setItem(
        "palabrasSecretas",
        JSON.stringify(palabrasSecretasArray)
      );
      console.log(palabrasSecretasArray);
    }
    //RESETEAR EL INPUT
    form.reset();
  });
}

function ocultarMostrarElementos() {
  cancelAddWord.addEventListener("click", () => {
    document.getElementById("inicioGame").style.cssText = "display: flex;";
    document.getElementById("agregarPalabra").style.cssText = "display: none;";
  });

  agregarPalabraLayout.addEventListener("click", () => {
    document.getElementById("inicioGame").style.cssText = "display: none;";
    document.getElementById("agregarPalabra").style.cssText = "display: flex;";
  });

  iniciarJuegoLayout.addEventListener("click", () => {
    document.getElementById("inicioGame").style.cssText = "display: none;";
    document.getElementById("startGame").style.cssText = "display: flex;";
  });

  salirDelJuegoLayout.addEventListener("click", () => {
    document.getElementById("inicioGame").style.cssText = "display: flex;";
    document.getElementById("startGame").style.cssText = "display: none;";
  });
}
