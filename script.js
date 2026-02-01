// Precio base definido
const basePrice = 700000;
let quantity = 1;

const qtyElement = document.getElementById('quantity');
const totalElement = document.getElementById('total');
const btnMinus = document.getElementById('btn-minus');
const btnPlus = document.getElementById('btn-plus');

const totalLabel = document.querySelector('.total-section p');
if (totalLabel) {
    totalLabel.style.color = 'white';
} else {
    const totalText = document.createElement('h2');
    totalText.textContent = 'Total a pagar';
    if (totalElement && totalElement.parentNode) {
        totalElement.parentNode.insertBefore(totalText, totalElement);
    } else {
        document.body.appendChild(totalText);
    }
}

const cardText = document.querySelector('.card-text');
if (cardText) {
    cardText.style.color = 'white';
}

function updateDisplay() {
    qtyElement.innerText = quantity;
    const total = quantity * basePrice;
    
    // Formato de moneda chilena
    totalElement.innerText = `$ ${total.toLocaleString('es-CL')}`;
}

if (btnPlus) {
    btnPlus.onclick = () => {
        quantity++;
        updateDisplay();
    };
}

if (btnMinus) {
    btnMinus.onclick = () => {
        if (quantity > 1) {
            quantity--;
            updateDisplay();
        }
    };
}

// Inicializar la visualización al cargar
updateDisplay();