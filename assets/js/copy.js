/* copy + confetti + redirect to free form */
function fireConfetti(){
  import('https://cdn.skypack.dev/canvas-confetti').then(m=>m.default({particleCount:120,spread:70,origin:{y:0.6}}));
}
function copyLink(){
  const url='https://tally.so/r/w4xBkp';
  navigator.clipboard.writeText(url).then(()=>{
    fireConfetti();
    /* open form in new tab */
    window.open(url,'_blank');
  });
}