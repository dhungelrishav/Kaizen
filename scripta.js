document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle Functionality
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('nav ul');

    // Toggle the 'active' class to show/hide the menu
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Sample Product Data
    const products = [
        { name: 'Gaming Laptop', price: '$1,999', image: 'laptop.png' },
        { name: 'Gaming Desktop', price: '$2,499', image: 'ROG desktop.png' },
        { name: 'Gaming Mouse', price: '$79', image: 'ROG mouse.png' },
        { name: 'Gaming Keyboard', price: '$129', image: 'ROG keyboard.png' }
    ];

    // Render Product Cards
    const productGrid = document.querySelector('.product-grid');

    products.forEach((product, index) => {
        // Create a product card
        const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
        // Insert HTML content into the card
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="buy-button" data-product-index="${index}">Buy</button>
        `;
    
        // Append the card to the product grid container
        productGrid.appendChild(productCard);
});


    // Modal Functionality
    const modal = document.getElementById('credentialsModal');
    const closeButton = document.querySelector('.close-button');

    // Select all "Add to Cart" buttons and add event listeners
   document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const productIndex = e.target.getAttribute('data-product-index');
        const selectedProduct = products[productIndex];

        modal.setAttribute('data-selected-product', selectedProduct.name);
        modal.style.display = 'flex'; // Show the modal
    });
});


    // Hide modal when the close button is clicked
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
    });

    // Hide modal and show a thank-you message when the form is submitted
    const credentialsForm = document.getElementById('credentialsForm');
    credentialsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const selectedProduct = modal.getAttribute('data-selected-product');
        alert(`Thank you for purchasing ${selectedProduct}!`);

        modal.style.display = 'none'; // Hide the modal
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none'; // Hide the modal
        }
    });
});

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}