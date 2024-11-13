async function displayProducts() {
    const products = await fetchProducts();
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        
    });
}



// Initialize cart from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a product to the cart
function addToCart(product) {
   
    updateCartCount();  // Update cart count display
}

// Function to update cart count display
function updateCartCount() {
   
    
}

// Display products and update cart count on page load
displayProducts();
updateCartCount();


let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function addToFavorites(item) {
   
    
}