var radios = document.getElementsByName('gen');
var valor1;
const botones = document.querySelectorAll('button');
const btnsubmit = document.getElementById('btnsubmit'); 
const fomulaar  = document.getElementById('formulario');

document.addEventListener('DOMContentLoaded', function() {

  const cargando = this.createElement('div');
  cargando.classList.add('cargando');
  document.body.appendChild(cargando);
  const textcargando = this.createElement('h1');
  textcargando.textContent = 'Cargando...';
  cargando.appendChild(textcargando);
  fomulaar.style.display = 'none';

  const name = window.localStorage.getItem('name');
  const edad = window.localStorage.getItem('edad');
  const piel = window.localStorage.getItem('piel');
  const preocupacion = window.localStorage.getItem('preocupacion');
  const tipo = window.localStorage.getItem('tipo');
  if (name && edad && piel && preocupacion && tipo) {
    window.location.href = "prods.html";
  }
  else{
    cargando.remove();
    fomulaar.style.display = 'flex';
  }
})


function submit() {


  const name = window.localStorage.getItem('name');
  const edad = window.localStorage.getItem('edad');
  const piel = window.localStorage.getItem('piel');
  const preocupacion = window.localStorage.getItem('preocupacion');
  const tipo = window.localStorage.getItem('tipo');
  
  if (edad < 18 || edad > 26) {
    alert("Ingrese una edad dentro del rango de 18 a 26 años.");
    
  }
  else if (name && edad && piel && preocupacion && tipo) {
    window.location.href = "prods.html";
  }
  else{
    alert("Por favor, completa todos los campos antes de continuar.");
  }
  
  


}
btnsubmit.addEventListener('click', () => {
  submit();
})

botones.forEach(boton => {
  boton.addEventListener('click',(e) =>{

    e.preventDefault();

  })
})

this.document.cookie = "tipo=0";

addEventListener('click', function(e) {
    if (e.target.type == 'radio') {
        for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    
    valor1 = radios[i].value;
    this.window.localStorage.setItem("tipo",valor1);
    console.log(valor1);
    break;
  }
}
}
})


function datta(){
  const value = `; ${document.cookie}`;
  const parts = value.split(`; tipo=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

document.addEventListener('DOMContentLoaded', function() {
            const cart = document.querySelectorAll('#cardo');
            let selectedCard = null;
            
            // Cargar selección previa si existe
            const savedSelection = window.localStorage.getItem("piel");
            
            cart.forEach(carta => {
                // Marcar como seleccionado si coincide con el valor guardado
                if (savedSelection === carta.getAttribute("value")) {
                    carta.classList.add("cardo-2");
                    selectedCard = carta;

                }
                
                carta.addEventListener('click', () => {
                    // Remover la clase de todos los cards primero
                    cart.forEach(c => {
                        c.classList.remove("cardo-2");
                    });
                    
                    // Aplicar la clase al card clickeado
                    carta.classList.add("cardo-2");
                    
                    // Guardar en localStorage
                    const value = carta.getAttribute("value");
                    window.localStorage.setItem("piel", value);

                    
                    console.log("Selección actual:", value);
                });
            });
        });
document.addEventListener('DOMContentLoaded', function() {
            const cartdp = document.querySelectorAll('#cardot');
            let selectedCard = null;
            
            // Cargar selección previa si existe
            const savedSelection = window.localStorage.getItem("preocupacion");
            
            cartdp.forEach(carta => {
                // Marcar como seleccionado si coincide con el valor guardado
                if (savedSelection === carta.getAttribute("value")) {
                    carta.classList.add("cardo-2");
                    selectedCard = carta;
                   
                }
                
                carta.addEventListener('click', () => {
                    // Si ya hay una carta seleccionada, quitar la clase
                    if (selectedCard) {
                        selectedCard.classList.remove("cardo-2");
                    }
                    
                   
                        // Aplicar la clase a la nueva carta seleccionada
                        carta.classList.add("cardo-2");
                        selectedCard = carta;
                        
                        // Guardar en localStorage
                        const value = carta.getAttribute("value");
                        window.localStorage.setItem("preocupacion", value);
                        
                    
                    
                    console.log("Selección actual:", window.localStorage.getItem("preocupacion"));
                });
            });
        });

  const name = document.getElementById('name')
  name.addEventListener('change', () => {
    window.localStorage.setItem("name",name.value);
  })
  const edad = document.getElementById('edad')
  edad.addEventListener('change', () => {
    const alerta = document.getElementById('min-edad');
    window.localStorage.setItem("edad",edad.value);
    if(edad.value < 18 || edad.value > 26){
      alerta.classList.remove('hide');
      alerta.classList.add('show');
    }
    else{
      alerta.classList.remove('show');
      alerta.classList.add('hide');
    }
  })



 


