/* assets/js/pop.js  –  zero-cost social-proof pop-ups */
(() => {
  const names = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Sophia', 'Jackson', 'Isabella'];
  const cities = ['SF', 'NYC', 'London', 'Berlin', 'Toronto', 'Austin', 'Bangalore', 'Sydney'];
  const plans = ['Growth', 'Scale'];

  function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function showPop() {
    const pop = document.createElement('div');
    pop.id = 'pop';
    pop.className = 'fixed bottom-5 right-5 bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-lg max-w-xs text-sm z-30';
    pop.innerHTML = `🔥 <strong>${rand(names)} from ${rand(cities)}</strong> just upgraded to <strong>${rand(plans)}</strong>`;
    document.body.appendChild(pop);
    setTimeout(() => pop.remove(), 4000);
  }

  /* first pop after 5 s, then every 45 s */
  window.addEventListener('load', () => {
    setTimeout(showPop, 5000);
    setInterval(showPop, 45000);
  });
})();