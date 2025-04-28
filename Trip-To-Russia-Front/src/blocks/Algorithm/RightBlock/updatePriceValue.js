export function updatePriceValue(value) {
    document.getElementById('current-price').textContent = value.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб.";
} 