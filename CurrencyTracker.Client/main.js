// URL of your backend API
const API_BASE_URL = "http://localhost:5276/api";

// Fetch Currency Rates
async function getCurrencyRates() {
    try {
        const response = await fetch(`${API_BASE_URL}/currencies`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const currencyData = await response.json();
        displayCurrencyRates(currencyData);
    } catch (error) {
        console.error('Error fetching currency rates:', error);
    }
}

// Display Currency Rates in the DOM
function displayCurrencyRates(currencies) {
    const currencyRatesSection = document.getElementById('currency-rates').querySelector('.grid');
    currencyRatesSection.innerHTML = ''; // Clear existing content

    currencies.forEach(currency => {
        const currencyItem = document.createElement('div');
        currencyItem.className = 'p-4 bg-white rounded-lg shadow-md';
        currencyItem.innerHTML = `
            <h3 class="text-xl font-bold">${currency.name}</h3>
            <p class="text-gray-600">${currency.symbol}</p>
        `;
        currencyRatesSection.appendChild(currencyItem);
    });
}

// Initialize the app
function init() {
    getCurrencyRates();
}

// Run init when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
