import {enviar_datos_de_login} from "/funciones_de_red.js";

const modal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeLogin');

const inicio_sesion_el_usuario = localStorage.getItem("inicio_de_sesion");

if (!inicio_sesion_el_usuario){
    modal.classList.add('show');
}
else alert("Bienvenido de nuevo");

//funcion para cerra modal cuando se presione el boton
closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('show');
});

//verifica si se clickeo fuera del modal y se cierra
// Demo only: click outside to close
modal.addEventListener('click', (e)=>{
    if(e.target === modal){modal.classList.remove('show');}
});

//valida los datos del modal y envialos
document.getElementById('submitLogin').addEventListener('click', (evento)=>{
    const nombre = document.getElementById("username").value.trim();
    const contraseña = document.getElementById("password").value.trim();

    if(nombre == "" || contraseña == ""){
        alert("El nombre o la contraseña no pueden estar vacios")
    }
    else {
        //enviar los datos al servidor
        enviar_datos_de_login(nombre, contraseña);
        modal.classList.remove('show');
    }
});