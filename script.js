const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === '=') {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Maths Error';
      }
    } else if (buttonText === 'Del') {
      display.value = ''; 
    } else {
      display.value += buttonText;
    }
  });
});

// Advanced functions (add these within the script.js file)

function sqrt() { display.value = Math.sqrt(eval(display.value)); }
function sin() { display.value = Math.sin(eval(display.value) * Math.PI / 180); }
function cos() { display.value = Math.cos(eval(display.value) * Math.PI / 180); }
function tan() { display.value = Math.tan(eval(display.value) * Math.PI / 180); }
function log() { display.value = Math.log10(eval(display.value)); }
function ln() { display.value = Math.log(eval(display.value)); }
function INV() { display.value = Math.inv(eval(display.value)); }
function e() { display.value = Math.e(eval(display.value)); }

// ... (Button event handling as before) ...

// Advanced functions ... 

// Add classes to buttons for styling
buttons.forEach(button => {
    if (/[+\-*/]/.test(button.textContent)) {
      button.classList.add('operator');
    } else if (/[sqrt sin cos tan log ln ^ inv ! % e]/.test(button.textContent)) {
      button.classList.add('function');
    }
  });

 


