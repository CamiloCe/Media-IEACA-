//codigo para hacer que el fondo de la web se mueva 

/*document.body.addEventListener("pointermove", (e)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2); 
}) */

//Memorama


let iconos = []
let selecciones = []

generarTablero()

function cargarIconos() {
    iconos = [
        '<img src="Logo pagina transparente.png" width="100%">',
        '<img src="Imagenes/computador.png" width="100%">',
        '<img src="Imagenes/pizza.png" width="100%">',
        '<img src="Imagenes/celular humano.jpg" width="100%">',
        '<img src="Imagenes/arduino.png" width="100%">',
        '<img src="Imagenes/corazon.jpg" width="100%">',
        '<img src="Imagenes/homero.jpg" width="100%">',
        '<img src="Imagenes/libros.jpg" width="100%">',
        '<img src="Imagenes/estrella.jpg" width="100%">',
        '<img src="Imagenes/pixeles.jpg" width="100%">',
        '<img src="https://i.ibb.co/LJTbjXd/00.gif" width="100%">',
        '<img src="Imagenes/cerebro.jpg" width="100%">',
    ]
}

function generarTablero() {
    cargarIconos()
    let len = iconos.length
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    
    for (let i = 0; i < len*2; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                    <i class="fa-solid fa-robot"></i>
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
        }
    }, 1000);
}
