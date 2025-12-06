// DOM Elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const themeToggle = document.getElementById('toggle-theme');
const body = document.body;

let currentInput = '';
let resultDisplayed = false;

// Button Clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const btnValue = button.textContent;

        if(button.classList.contains('number')) {
            if(resultDisplayed) {
                currentInput = '';
                resultDisplayed = false;
            }
            currentInput += btnValue;
            display.textContent = currentInput;
        } else if(button.classList.contains('operator')) {
            if(currentInput === '') return;
            currentInput += btnValue;
            display.textContent = currentInput;
            resultDisplayed = false;
        } else if(button.classList.contains('clear')) {
            currentInput = '';
            display.textContent = '0';
        } else if(button.classList.contains('delete')) {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
        } else if(button.classList.contains('equal')) {
            try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
                resultDisplayed = true;
            } catch {
                display.textContent = 'Error';
                currentInput = '';
            }
        }
    });
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    themeToggle.textContent = body.classList.contains('dark') ? '☀' : '🌙';
});