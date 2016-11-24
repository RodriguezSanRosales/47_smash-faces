
var mexico = [{
				name:"Moni", 
			    src:"images/moni.jpg"},
			  {
			  	name:"Flor", 
			    src:"images/flor.jpg"},
			  {
			  	name:"Ale Escobar", 
			    src:"images/ale_E.jpg"},
			  { 
			  	name:"Ale Duran", 
			    src:"images/Ale_D.jpg"},
			  {
			  	name:"San", 
			    src:"images/san.jpg"},
			  {
			  	name:"Ana Pao", 
			    src:"images/AnaPao.jpg"}];

var cont = 0;
var intentos = 0;
var sede = document.getElementById('sede');
sede.addEventListener('change', seleccionpais);
var boton = document.getElementById('comprobar');
//seleccionar el pais
function seleccionpais(){
	if(sede.value == "mexico"){
		proceso(mexico);
	}	
}
//img random, agregando la img al contenedor
function proceso(pais){

	function CambiarImg(){
		console.log('sirve');
		var i = mathRandom(0,5);
		var alumna = pais[i];
		var img = document.getElementById('alumna');
		img.setAttribute('src',alumna.src);
		var contenedor = document.getElementById('contenedor');
		contenedor.appendChild(img);
	}
	CambiarImg();

	boton.addEventListener('click', compararNombre);

	function compararNombre(){
		var input = document.getElementById('nombreIngresado').value;
		var puntos = document.getElementById('puntos');
		var textoAviso = document.getElementById('texto');

		if(input == alumna.name){
			cont+=5;
			puntos.innerHTML = "puntos :" + cont;
			textoAviso.innerHTML = 'Muy bien!!';
			
		}
		else{
			intentos++;
			if(intentos == 5){
				textoAviso.innerHTML = 'intentalo de nuevo';
				cont--;
				puntos.innerHTML = "puntos :" + cont;
			}
			CambiarImg();
		}
	}	
}

function mathRandom(low,high){
	return low + Math.floor(Math.random() * (high - low))
}
