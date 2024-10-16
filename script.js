const mainContent = document.getElementById('main-content');
const searchInput = document.getElementById('search');
let products = [];
let cart = [];

// fetch products from db.json
fetch('db.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        renderProducts(products);
    })
    .catch(error => console.error('Error fethching products'))



function renderProducts(filteredProducts){
// resets the content which removes products that were displayed before
    mainContent.innerHTML=''
    filteredProducts.forEach(product => {
// creates a div element and gives it a className
        const productDiv = document.createElement('div')
        productDiv.className = 'product'
// creates an img tag - displays the product image
// creates a h3 tage - for the product name
// creates two p tags - one for the product description and the other for the product price
// creates a button that when its clicked, it calls the addToCart func with the products ID
        productDiv.innerHTML = `
        <img src = "${product.image}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: ${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
// appends the productDiv
        mainContent.appendChild(productDiv);
    })
}


