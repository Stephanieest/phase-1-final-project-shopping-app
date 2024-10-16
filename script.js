const mainContent = document.getElementById('main-content');
const searchInput = document.getElementById('search');
let products = [];
let cart = [];


fetch('db.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        renderProducts(products);
    })




