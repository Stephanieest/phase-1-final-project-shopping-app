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

    // ADDS HOME CONTENT BUT CAN'T DISPLAY IT YET
function renderHome (){
    mainContent.innerHTML = '<h2>Welcome to our shopping app, your one-stop destination for trendy and delightful products that cater to all your needs! Explore a curated collection featuring everything from cozy apparel to stylish accessories, perfect for elevating your lifestyle.Whether you’re looking to spruce up your wardrobe, find the perfect gift, or add a touch of charm to your home, our diverse selection has something for everyone. Shop now and discover unique items that express your style and creativity!</h2>'
}

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

