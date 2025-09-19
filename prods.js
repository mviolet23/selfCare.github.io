        
        function saveName() {
            const name = window.localStorage.getItem('name');
            const titleElement = document.getElementById('title');  
            if (name) {
                titleElement.textContent = `Hola, ${name}! Es momento de elegir los productos que más te gusten. 😊`;
            }
        }
        
        document.addEventListener('DOMContentLoaded', saveName);

        fetch('json/products.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.forEach(product => {
const cart = document.querySelectorAll('.product');


let selectedProducta = null;
let selectedProductb = null;
let selectedProductc = null;
cart.forEach(carta => {

  carta.addEventListener('click', () => {
  console.log(carta.getAttribute("value"));
  window.localStorage.setItem("jabon",carta.getAttribute("value"));
  if (selectedProducta) {
    selectedProducta.classList.remove("cardo-2");
  }
 // Si se hace clic en el mismo producto, deseleccionar
 if (selectedProducta === carta) {
     selectedProducta = null;
     window.localStorage.removeItem("jabon");
     
 } else {

     selectedProducta = carta;
     carta.classList.add("cardo-2");

     const value = carta.getAttribute("value");
     window.localStorage.setItem("jabon", value);
    
 }
    
})
})
const cartgel = document.querySelectorAll('.produ-gel');
cartgel.forEach(carta => {

  carta.addEventListener('click', () => {
  console.log(carta.getAttribute("value"));
  window.localStorage.setItem("gel",carta.getAttribute("value"));
  carta.classList.add("cardo-2");
if (selectedProductb) {
    selectedProductb.classList.remove("cardo-2");
  }
  
 // Si se hace clic en el mismo producto, deseleccionar
 if (selectedProductb === carta) {
     selectedProductb = null;
     window.localStorage.removeItem("gel");
     
 } else {

     selectedProductb = carta;
     carta.classList.add("cardo-2");

     const value = carta.getAttribute("value");
     window.localStorage.setItem("gel", value);
    
 }
    
})
})
// prueba

// document.addEventListener('DOMContentLoaded', function() {
//             const cart = document.querySelectorAll('.product');
//             let selectedCard = null;
            
//             // Cargar selección previa si existe
//             const savedSelection = window.localStorage.getItem("jabon");
            
//             cart.forEach(carta => {
//                 // Marcar como seleccionado si coincide con el valor guardado
//                 if (savedSelection === carta.getAttribute("value")) {
//                     carta.classList.add("cardo-2");
//                     selectedCard = carta;

//                 }
                
//                 carta.addEventListener('click', () => {
//                     // Remover la clase de todos los cards primero
//                     cart.forEach(c => {
//                         c.classList.remove("cardo-2");
//                     });
                    
//                     // Aplicar la clase al card clickeado
//                     carta.classList.add("cardo-2");
                    
//                     // Guardar en localStorage
//                     const value = carta.getAttribute("value");
//                     window.localStorage.setItem("jabon", value);

                    
//                     console.log("Selección actual:", value);
//                 });
//             });
//         });

// document.addEventListener('DOMContentLoaded', function() {
//             const cart = document.querySelectorAll('.produ-prote');
//             let selectedCard = null;
            
//             // Cargar selección previa si existe
//             const savedSelection = window.localStorage.getItem("proteccion");
            
//             cart.forEach(carta => {
//                 // Marcar como seleccionado si coincide con el valor guardado
//                 if (savedSelection === carta.getAttribute("value")) {
//                     carta.classList.add("cardo-2");
//                     selectedCard = carta;

//                 }
                
//                 carta.addEventListener('click', () => {
//                     // Remover la clase de todos los cards primero
//                     cart.forEach(c => {
//                         c.classList.remove("cardo-2");
//                     });
                    
//                     // Aplicar la clase al card clickeado
//                     carta.classList.add("cardo-2");
                    
//                     // Guardar en localStorage
//                     const value = carta.getAttribute("value");
//                     window.localStorage.setItem("proteccion", value);

                    
//                     console.log("Selección actual:", value);
//                 });
//             });
//         });
// document.addEventListener('DOMContentLoaded', function() {
//             const cart = document.querySelectorAll('.produ-gel');
//             let selectedCard = null;
            
//             // Cargar selección previa si existe
//             const savedSelection = window.localStorage.getItem("gel");
            
//             cart.forEach(carta => {
//                 // Marcar como seleccionado si coincide con el valor guardado
//                 if (savedSelection === carta.getAttribute("value")) {
//                     carta.classList.add("cardo-2");
//                     selectedCard = carta;

//                 }
                
//                 carta.addEventListener('click', () => {
//                     // Remover la clase de todos los cards primero
//                     cart.forEach(c => {
//                         c.classList.remove("cardo-2");
//                     });
                    
//                     // Aplicar la clase al card clickeado
//                     carta.classList.add("cardo-2");
                    
//                     // Guardar en localStorage
//                     const value = carta.getAttribute("value");
//                     window.localStorage.setItem("gel", value);

                    
//                     console.log("Selección actual:", value);
//                 });
//             });
//         });


// prueba
const cartprot = document.querySelectorAll('.produ-prote');
cartprot.forEach(carta => {
    
  carta.addEventListener('click', () => {
  console.log(carta.getAttribute("value"));
  window.localStorage.setItem("proteccion",carta.getAttribute("value"));
  carta.classList.add("cardo-2");
if (selectedProductc) {
    selectedProductc.classList.remove("cardo-2");
  }
 // Si se hace clic en el mismo producto, deseleccionar
 if (selectedProductc === carta) {
     selectedProductc = null;
     window.localStorage.removeItem("proteccion");
     
 } else {

     selectedProductc = carta;
     carta.classList.add("cardo-2");

     const value = carta.getAttribute("value");
     window.localStorage.setItem("proteccion", value);
    
 }
    
})
})
                   
                    if (product.for == `${window.localStorage.getItem('piel')} con ${window.localStorage.getItem('preocupacion')}` && product.cat == `JABONES FACIALES`) {
                    const productElement = document.createElement('div');
                    productElement.classList.add('product');
                    productElement.setAttribute('value',product.nombre);
                    productElement.innerHTML = `
                    <div class="image">
                    <img src="${product.img}" alt="${product.nombre}" width="200">
                    </div>
                    <div class="teto">
                    <h2>${product.nombre}</h2>
                    <p style="text-align: justify;">${product.descripcion}</p>
                    <div style="display: flex; width: 100%; justify-content: center; align-items: center;">
                    <p style="text-align: justify; font-weight: bold;">Precio: ${product.precio}</p>
                    </div>
                    `;
                    document.getElementById('cards').appendChild(productElement);
                     }
                     
                     //Geles y cremas hidratantes
                     if (product.for == `${window.localStorage.getItem('piel')} con ${window.localStorage.getItem('preocupacion')}` && product.cat == `CREMA HIDRATANTE` || product.for == `${window.localStorage.getItem('piel')} con ${window.localStorage.getItem('preocupacion')}` && product.cat == `GEL HIDRATANTE`) {
                     const productElement = document.createElement('div');
                     productElement.classList.add('produ-gel');
                     productElement.setAttribute('value',product.nombre);
                     productElement.innerHTML = `
                     <div class="image">
                     <img src="${product.img}" alt="${product.nombre}" width="200">
                     </div>
                     <div class="teto">
                     <h2>${product.nombre}</h2>
                     <p style="text-align: justify;">${product.descripcion}</p>
                    <div style="display: flex; width: 100%; justify-content: center; align-items: center;">
                    <p style="text-align: justify; font-weight: bold;">Precio: ${product.precio}</p>
                     </div>
                     `;
                     document.getElementById('cards-gel').appendChild(productElement);
                      }
                     
                     //protectores solares

                    if (product.for == `${window.localStorage.getItem('piel')}` && product.cat == `PROTECTORES SOLARES`) {
                    const productElement = document.createElement('div');
                    productElement.classList.add('produ-prote');
                    productElement.setAttribute('value',product.nombre);
                    productElement.innerHTML = `
                    <div class="image">
                    <img src="${product.img}" alt="${product.nombre}" width="200">
                    </div>
                    <div class="teto">
                    <h2>${product.nombre}</h2>
                    <div style="display: flex; width: 100%; justify-content: start; align-items: center;">
                    <p style="text-align: justify;">${product.descripcion}</p>
                    </div>
                    <div style="display: flex; width: 100%; justify-content: center; align-items: center;">
                    <p style="text-align: justify; font-weight: bold;">Precio: ${product.precio}</p>
                    </div>
                    </div>
                    `;
                    document.getElementById('cards-solares').appendChild(productElement);
                     }
                })
            })


            function crearRutina(){
                const jabon = window.localStorage.getItem('jabon');
                const gel = window.localStorage.getItem('gel');
                const proteccion = window.localStorage.getItem('proteccion');
                if(jabon && gel && proteccion){
                    window.location.href = "rutina.html";
                }else{
                    alert("Por favor, completa todos los campos antes de continuar.");
                }
            }

            
document.addEventListener('DOMContentLoaded', function() {
      const name = window.localStorage.getItem('name');
  const edad = window.localStorage.getItem('edad');
  const piel = window.localStorage.getItem('piel');
  const preocupacion = window.localStorage.getItem('preocupacion');
  const tipo = window.localStorage.getItem('tipo');
   if (!name ||  !edad || !piel ||  !preocupacion || !tipo) {
    window.location.href = "index.html";
  }
});

//Made by Yahir Daniel idolo de Marcela 😎😎🐱