const display = document.querySelector('.number');
const buttons = document.querySelectorAll('.int');

let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.textContent;

    if (value === 'X') value = '*';

    if (value === 'AC') {
      expression = '';
      display.value = '';
    }

    else if (value === 'DEL') {
      expression = expression.slice(0, -1);
      display.value = expression;
    }

    else if (value === '=') {
      try {
        expression = eval(expression);
        display.value = expression;
      } catch {
        display.value = 'Error';
        expression = '';
      }
    }

    else {
      expression += value;
      display.value = expression;
    }
  });
});
    