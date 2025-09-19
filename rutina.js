fetch('json/products.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.forEach(product => {

                    if ((product.nombre == `${window.localStorage.getItem('jabon')}`&& product.for == `${window.localStorage.getItem('piel')} con ${window.localStorage.getItem('preocupacion')}`) || (product.nombre == `${window.localStorage.getItem('gel')}` && product.for == `${window.localStorage.getItem('piel')} con ${window.localStorage.getItem('preocupacion')}`) || (product.nombre == `${window.localStorage.getItem('proteccion')}`) && product.for == `${window.localStorage.getItem('piel')}`) {
                    const productElement = document.createElement('div');
                    productElement.classList.add('product');
                    productElement.setAttribute('value',product.nombre);
                    productElement.innerHTML = `
                    <div class="image">
                    <img src="${product.img}" alt="${product.nombre}" width="120">
                    </div>
                    <div class="teto">
                    <h2>${product.nombre}</h2>
                    <p style="text-align: justify;">${product.descripcion}</p>
                    </div>
                    `;
                    document.getElementById('productines').appendChild(productElement);
                     }

                })})

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

function realizar(){
    window.localStorage.clear();
    window.location.href = "index.html";
}