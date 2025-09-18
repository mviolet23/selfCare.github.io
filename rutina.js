fetch('json/products.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.forEach(product => {

                    if (product.nombre == `${window.localStorage.getItem('jabon')}` || product.nombre == `${window.localStorage.getItem('gel')}` || (product.nombre == `${window.localStorage.getItem('proteccion')}`) && product.for == `${window.localStorage.getItem('piel')}`) {
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