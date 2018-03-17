
const datosCarro = []
let imgPista
let i=0

const arregloNombres =["Miguel", "Cesar"]
let ganador=""

function setup() 
{
  	createCanvas(windowWidth, windowHeight);
  	//frameRate(1)
}

function preload()
{	
	for (let i=0; i<2; i++) 
	{
		let carro = {
			nombre: arregloNombres[i],
			rutaImg: loadImage(`img/${i}.png`),
			posX: 700,
			posY: 540,
			velocidad: Math.floor(random(2, 10)),
			sentido: 1,
			vueltas: 0,
		}
		datosCarro.push(carro)
	}

	imgPista= loadImage(`img/pista.jpg`)
}

function draw()
{
	//Imagen de fondo
	background(imgPista)

	switch(datosCarro[i].sentido)
	{
		case 1:
			rotarDerecha()
			image(datosCarro[i].rutaImg, datosCarro[i].posX+=datosCarro[i].velocidad, datosCarro[i].posY)
			
			if(datosCarro[i].posX>=1100)
				datosCarro[i].sentido=2
		break

		case 2:
			rotarArribaDerecha()
			image(datosCarro[i].rutaImg, datosCarro[i].posX+=datosCarro[i].velocidad,datosCarro[i].posY-=datosCarro[i].velocidad)

			if(datosCarro[i].posY<=412)
				datosCarro[i].sentido=3
		break

		case 3:
			rotarArriba()
			image(datosCarro[i].rutaImg, datosCarro[i].posX, datosCarro[i].posY-=datosCarro[i].velocidad)

			if(datosCarro[i].posY<=199)
				datosCarro[i].sentido=4
		break

		case 4:
			rotarArribaIzquierda()
			image(datosCarro[i].rutaImg, datosCarro[i].posX-=datosCarro[i].velocidad, datosCarro[i].posY-=datosCarro[i].velocidad)

			if(datosCarro[i].posY<=102)
				datosCarro[i].sentido=5
		break

		case 5:
			rotarIzquierda()
			image(datosCarro[i].rutaImg, datosCarro[i].posX-=datosCarro[i].velocidad, datosCarro[i].posY)

			if(datosCarro[i].posX<=1041)
				datosCarro[i].sentido=6
		break;

		case 6:
			rotarAbajoIzquierda()
			image(datosCarro[i].rutaImg, datosCarro[i].posX-=datosCarro[i].velocidad, datosCarro[i].posY+=datosCarro[i].velocidad)

			if(datosCarro[i].posY>=270)
				datosCarro[i].sentido=7
		break;

		case 7:
			rotarIzquierda()
			image(datosCarro[i].rutaImg, datosCarro[i].posX-=datosCarro[i].velocidad, datosCarro[i].posY)

			if(datosCarro[i].posX<=644)
				datosCarro[i].sentido=8
		break;

		case 8:
			rotarArribaIzquierda()
			image(datosCarro[i].rutaImg, datosCarro[i].posX-=datosCarro[i].velocidad, datosCarro[i].posY-=datosCarro[i].velocidad)

			if(datosCarro[i].posY<=118)
				datosCarro[i].sentido=9
		break;

		case 9:
			rotarIzquierda()
			image(datosCarro[i].rutaImg, datosCarro[i].posX-=datosCarro[i].velocidad, datosCarro[i].posY)

			if(datosCarro[i].posX<=198)
				datosCarro[i].sentido=10
		break;

		case 10:
			rotarAbajoIzquierda()
			image(datosCarro[i].rutaImg, datosCarro[i].posX-=datosCarro[i].velocidad, datosCarro[i].posY+=datosCarro[i].velocidad)

			if(datosCarro[i].posY>=215)
				datosCarro[i].sentido=11
		break;

		case 11:
			rotarAbajo()
			image(datosCarro[i].rutaImg, datosCarro[i].posX, datosCarro[i].posY+=datosCarro[i].velocidad)

			if(datosCarro[i].posY>=417)
				datosCarro[i].sentido=12
		break;

		case 12:
			rotarAbajoDerecha()
			image(datosCarro[i].rutaImg, datosCarro[i].posX+=datosCarro[i].velocidad, datosCarro[i].posY+=datosCarro[i].velocidad)

			if(datosCarro[i].posY>=509)
				datosCarro[i].sentido=13
		break;

		case 13:
			rotarDerecha()
			image(datosCarro[i].rutaImg, datosCarro[i].posX+=datosCarro[i].velocidad, datosCarro[i].posY)

			if(datosCarro[i].posX>=319)
				datosCarro[i].sentido=14
		break;

		case 14:
			rotarArribaDerecha()
			image(datosCarro[i].rutaImg, datosCarro[i].posX+=datosCarro[i].velocidad, datosCarro[i].posY-=datosCarro[i].velocidad)

			if(datosCarro[i].posY<=437)
				datosCarro[i].sentido=15
		break;

		case 15:
			rotarDerecha()
			image(datosCarro[i].rutaImg, datosCarro[i].posX+=datosCarro[i].velocidad, datosCarro[i].posY)

			if(datosCarro[i].posX>=520)
				datosCarro[i].sentido=16
		break;

		case 16:
			rotarAbajoDerecha()
			image(datosCarro[i].rutaImg, datosCarro[i].posX+=datosCarro[i].velocidad, datosCarro[i].posY+=datosCarro[i].velocidad)

			if(datosCarro[i].posY>=540)
				datosCarro[i].sentido=17
		break;

		case 17:
			rotarDerecha()
			image(datosCarro[i].rutaImg, datosCarro[i].posX+=datosCarro[i].velocidad, datosCarro[i].posY)

			if(datosCarro[i].posX>=745)
			{
				datosCarro[i].sentido=1
				datosCarro[i].vueltas++
				alert(datosCarro[i].nombre+" vuelta "+datosCarro[i].vueltas+" de 3")
				
				if(datosCarro[i].vueltas==3)
				{
					if(ganador=="")
					{
						ganador=datosCarro[i].nombre
						alert("Ganador "+ganador)
					}

					datosCarro[i].sentido=18
				}
			}
		break;

		case 18:
				image(datosCarro[i].rutaImg, datosCarro[i].posX, datosCarro[i].posY)
		break;
	}
	
	i++

	if(i===datosCarro.length)
		i=0
}

function rotarArriba()
{
	translate(datosCarro[i].posX, datosCarro[i].posY)
	rotate(4.7)
	image(datosCarro[i].rutaImg, 0, 0)
}

function rotarAbajo()
{
	translate(datosCarro[i].posX, datosCarro[i].posY)
	rotate(1.6)
	image(datosCarro[i].rutaImg, 0, 0)
}

function rotarIzquierda()
{
	translate(datosCarro[i].posX, datosCarro[i].posY)
	rotate(3.1)
	image(datosCarro[i].rutaImg, 0, 0)
}

function rotarDerecha()
{
	translate(datosCarro[i].posX, datosCarro[i].posY)
	rotate(0)
	image(datosCarro[i].rutaImg, 0, 0)
}

function rotarAbajoIzquierda()
{
	translate(datosCarro[i].posX, datosCarro[i].posY)
	rotate(2.1)
	image(datosCarro[i].rutaImg, 0, 0)
}

function rotarAbajoDerecha()
{
	translate(datosCarro[i].posX, datosCarro[i].posY)
	rotate(1.1)
	image(datosCarro[i].rutaImg, 0, 0)
}

function rotarArribaIzquierda()
{
	translate(datosCarro[i].posX, datosCarro[i].posY)
	rotate(4)
	image(datosCarro[i].rutaImg, 0, 0)
}

function rotarArribaDerecha()
{
	translate(datosCarro[i].posX, datosCarro[i].posY)
	rotate(6)
	image(datosCarro[i].rutaImg, 0, 0)
}

/*function mouseClicked(){
	alert(mouseX+" "+mouseY)
}*/