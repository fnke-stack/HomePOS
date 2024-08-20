// Fetch product list from the backend
function fetchProducts() {
    fetch('http://localhost:8080/api/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            productList.innerHTML = '';

            products.forEach(product => {
                const li = document.createElement('li');
                li.textContent = `${product.name} - $${product.price}`;
                productList.appendChild(li);
            });
        });
}

// Add a product to the order
function addToOrder(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity <= 0) {
        alert('Please enter a valid quantity');
        return;
    }

    const orderItem = {
        productId: productId,
        quantity: quantity
    };

    fetch('http://localhost:8080/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderItem)
    })
        .then(response => response.json())
        .then(order => {
            alert(`Product added to order #${order.id}`);
            quantityInput.value = '';
        });
}

// Fetch order list from the backend
function fetchOrders() {
    fetch('http://localhost:8080/api/orders')
        .then(response => response.json())
        .then(orders => {
            const orderForm = document.getElementById('order-form');
            orderForm.innerHTML = '';

            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            const headerRow = document.createElement('tr');
            ['ID', 'Product', 'Quantity', 'Price'].forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            let total = 0;

            orders.forEach(order => {
                order.orderItems.forEach(orderItem => {
                    const row = document.createElement('tr');

                    const idCell = document.createElement('td');
                    idCell.textContent = order.id;
                    row.appendChild(idCell);

                    const productCell = document.createElement('td');
                    productCell.textContent = orderItem.product.name;
                    row.appendChild(productCell);

                    const quantityCell = document.createElement('td');
                    quantityCell.textContent = orderItem.quantity;
                    row.appendChild(quantityCell);

                    const priceCell = document.createElement('td');
                    priceCell.textContent = `$${orderItem.product.price * orderItem.quantity}`;
                    row.appendChild(priceCell);

                    total += orderItem.product.price * orderItem.quantity;

                    tbody.appendChild(row);
                });
            });

            table.appendChild(tbody);
            orderForm.appendChild(table);

            const totalRow = document.createElement('tr');
            const totalCell = document.createElement('td');
            totalCell.setAttribute('colspan', '3');
            totalCell.textContent = 'Total';
            totalRow.appendChild(totalCell);

            const totalPriceCell = document.createElement('td');
            totalPriceCell.textContent = `$${total}`;
            totalRow.appendChild(totalPriceCell);

            tbody.appendChild(totalRow);
        });
}

// Initialize the GUI
fetchProducts();
fetchOrders();