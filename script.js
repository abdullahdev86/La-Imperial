// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const dropdowns = document.querySelectorAll('.dropdown');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Handle mobile dropdowns
dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
});

// Featured Products Data
const featuredProducts = [
    {
        id: 1,
        name: "Smart Refrigerator Pro",
        description: "Energy efficient with smart features",
        price: 1299.99,
        image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30"
    },
    {
        id: 2,
        name: "Advanced Washing Machine",
        description: "Large capacity with multiple wash programs",
        price: 799.99,
        image: "https://images.unsplash.com/photo-1610557892470-55d587e6e277"
    },
    {
        id: 3,
        name: "Digital Air Fryer",
        description: "Healthy cooking with minimal oil",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1613274554329-70f997c5f3d7"
    },
    {
        id: 4,
        name: "Premium Blender",
        description: "Powerful motor with multiple speeds",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1556909114-f6016daa51d4"
    }
];

// Load Featured Products
const featuredProductsContainer = document.getElementById('featuredProducts');

if (featuredProductsContainer) {
    featuredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price}</div>
            </div>
        `;
        featuredProductsContainer.appendChild(productCard);
    });
}

// Search Functionality
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            const productDesc = card.querySelector('p').textContent.toLowerCase();
            
            if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Initialize reviews carousel
document.addEventListener('DOMContentLoaded', function() {
    const reviewsTrack = document.querySelector('.reviews-track');
    if (reviewsTrack) {
        // Clone review cards for infinite scroll
        const reviews = document.querySelectorAll('.review-card');
        reviews.forEach(review => {
            const clone = review.cloneNode(true);
            reviewsTrack.appendChild(clone);
        });
    }
});