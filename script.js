// Define a function to fetch the prices from prices.json
function fetchPrices() {
  fetch("prices.json")
    .then((response) => response.json())
    .then((data) => {
        const title = data[0].item;
        const priceMin = data[0].price_min;
        const priceMax = data[0].price_max;
        const priceAvg = data[0].price_avg;
    
        const priceVal = document.getElementById('title');
        const priceMinEl = document.getElementById('price-min');
        const priceMaxEl = document.getElementById('price-max');
        const priceAvgEl = document.getElementById('price-avg');
    
        priceVal.innerHTML = title;
        priceMinEl.innerHTML = 'Minimum<br>'+priceMin;
        priceMaxEl.innerHTML = 'Maximum<br>'+priceMax;
        priceAvgEl.innerHTML = 'Average<br>'+priceAvg;
    })
    .catch((error) => console.error(error));
}

// Call the fetchPrices function initially
fetchPrices();

// Set an interval to fetch the prices every 5 seconds
setInterval(fetchPrices, 5000);