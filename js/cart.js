// Retrieve cart from localStorage or initialize an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

console.log(cart);
// Function to display cart items and calculate the total amount
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';  // Clear existing items

    let total = 0;

    cart.forEach(item => {
        // Assuming fetchProductById function to retrieve product details by ID
        const product = fetchProductById(item.id); 

        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Quantity: 
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                ${item.quantity}
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
            </p>
            <p>Item Total: $${itemTotal.toFixed(2)}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });

    // Update total price
    cartTotalElement.textContent = total.toFixed(2);
}

// Helper function to find a product by ID (should be adapted to actual data source)
function fetchProductById(productId) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    return products.find(product => product.id === productId) || {};
}

// Function to update item quantity in the cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);  // Prevent quantity from going below 1
        localStorage.setItem('cart', JSON.stringify(cart));  // Save updated cart
        displayCartItems();  // Refresh cart display
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);  // Remove item from cart
    localStorage.setItem('cart', JSON.stringify(cart));  // Save updated cart
    displayCartItems();  // Refresh cart display
}

// Checkout function (basic example - can be expanded)
function checkout() {
    if (cart.length > 0) {
        alert("Proceeding to checkout");
        // Clear the cart after checkout
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    } else {
        alert("Your cart is empty!");
    }
}

// Display cart items on page load
displayCartItems();
