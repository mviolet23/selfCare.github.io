        
        function saveName() {
            const name = window.localStorage.getItem('name');
            const titleElement = document.getElementById('title');  
            if (name) {
                titleElement.textContent = `¡Hola, ${name}! Es momento de elegir los productos que más te gusten. 😊`;
            }
        }
        
        document.addEventListener('DOMContentLoaded', saveName);

        fetch('json/products.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.forEach(product => {
const cart = document.querySelectorAll('.product');

let selectedProduct;
cart.forEach(carta => {

  carta.addEventListener('click', () => {
  console.log(carta.getAttribute("value"));
  window.localStorage.setItem("jabon",carta.getAttribute("value"));
  if (selectedProduct) {
    selectedProduct.classList.remove("cardo-2");
  }
 // Si se hace clic en el mismo producto, deseleccionar
 if (selectedProduct === carta) {
     selectedProduct = null;
     window.localStorage.removeItem("jabon");
     
 } else {

     selectedProduct = carta;
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
if (selectedProduct) {
    selectedProduct.classList.remove("cardo-2");
  }
 // Si se hace clic en el mismo producto, deseleccionar
 if (selectedProduct === carta) {
     selectedProduct = null;
     window.localStorage.removeItem("gel");
     
 } else {

     selectedProduct = carta;
     carta.classList.add("cardo-2");

     const value = carta.getAttribute("value");
     window.localStorage.setItem("gel", value);
    
 }
    
})
})
const cartprot = document.querySelectorAll('.produ-prote');
cartprot.forEach(carta => {
  carta.addEventListener('click', () => {
  console.log(carta.getAttribute("value"));
  window.localStorage.setItem("proteccion",carta.getAttribute("value"));
  carta.classList.add("cardo-2");
if (selectedProduct) {
    selectedProduct.classList.remove("cardo-2");
  }
 // Si se hace clic en el mismo producto, deseleccionar
 if (selectedProduct === carta) {
     selectedProduct = null;
     window.localStorage.removeItem("proteccion");
     
 } else {

     selectedProduct = carta;
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
                    <p style="text-align: justify;">${product.descripcion}</p>
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

//Made by Yahir Daniel idolo de Marcela 😎😎🐱