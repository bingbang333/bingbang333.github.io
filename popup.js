var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

// btnAbrirPopup.addEventListener('click', function(){
// 	overlay.classList.add('active');
// 	popup.classList.add('active');
// });

window.onload = function(){
	overlay.classList.add('active');
 	popup.classList.add('active');
}

// btnCerrarPopup.addEventListener('click', function(e){
	
// 	location.href = "https://elysa.unisinu.edu.co/psp/cs90p/?cmd=login"
// });