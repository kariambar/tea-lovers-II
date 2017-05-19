document.getElementById("suscribirse").addEventListener("click",
	function usuario(){
var nombre=document.getElementById("name").value;
var mail=document.getElementById("mail").value;
var direccion=document.getElementById("direccion").value;

		if(nombre.length == "" || mail.length == "" || direccion.length ==""){
			alert("Ingresa tus datos");
		}else{
			alert("Muchas gracias por suscribirse")
		}
	})