// JavaScript Document
function guardar()
{
	localStorage.setItem("nombre","Pepe");
}

function ver()
{
	alert(localStorage.getItem("nombre"));
}

function saludo()
{
	alert("Hola!");
}

$("#saludo").click(saludo);

window.addEventListener("online", hay);
window.addEventListener("offline", nohay);

function hay()
{
	alert("hay internet");
	}
	
	function nohay()
{
	alert("no hay internet");
	}
	
if(navigator.offline)
{
	alert("no hay se�al");
}else{
	alert("hay se�al");
}

$("#boton").click(guardar);
$("#botonver").click(ver);