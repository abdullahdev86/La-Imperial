// Sample cart items
const cartItems = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 }
];

// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""; // Clear previous items

    cartItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(itemElement);
    });
}

// Function to show payment page
function showPaymentPage() {
    const paymentPage = document.getElementById("payment-page");
    const cart = document.querySelector(".cart");
    const paymentItemsContainer = document.getElementById("payment-items");

    // Display cart items on payment page
    paymentItemsContainer.innerHTML = "";
    cartItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `${item.name} - $${item.price}`;
        paymentItemsContainer.appendChild(itemElement);
    });

    // Hide cart and show payment page
    cart.style.display = "none";
    paymentPage.style.display = "block";
}

// Function to go back to cart
function goBackToCart() {
    const paymentPage = document.getElementById("payment-page");
    const cart = document.querySelector(".cart");

    // Hide payment page and show cart
    paymentPage.style.display = "none";
    cart.style.display = "block";
}

// Initialize cart items on page load
window.onload = displayCartItems;