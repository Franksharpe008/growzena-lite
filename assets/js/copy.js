/* 1-click copy + tiny confetti */
async function copyCTA() {
  const dummy = document.createElement('input');
  dummy.value = 'https://app.growzena.com/signup';
  document.body.appendChild(dummy);
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
  alert('Signup link copied! Paste into browser to start trial.');
}