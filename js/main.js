const cancelAddWord = document.getElementById("cancel");
const agregarPalabraLayout = document.getElementById("addWord");
const iniciarJuegoLayout = document.getElementById("play");
const salirDelJuegoLayout = document.getElementById("exitGame");
const alert = document.getElementById("alert");
const form = document.querySelector("form");

var palabrasSecretas = [];


ocultarMostrarElementos();
agregarPalabrasSecretas();

function agregarPalabrasSecretas() {
  let acentos = /[áéíóúñÑ]/;
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
      alert.innerHTML = "DEBES INGRESAR UNA PALABRA";
    } else {
      alert.innerHTML = "";
      palabrasSecretas.push(palabraNueva.toUpperCase());
      console.log(palabrasSecretas);
    }
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
