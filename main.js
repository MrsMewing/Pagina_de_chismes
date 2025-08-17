const openBtn = document.getElementById('openLogin');
const modal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeLogin');

//funcion para abrir modal cuando se presione un boton
openBtn.addEventListener('click', ()=>{
    modal.classList.add('show');
});

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
document.getElementById('submitLogin').addEventListener('click', ()=>{
    alert('Aquí procesarías usuario y contraseña');
    modal.classList.remove('show');
});