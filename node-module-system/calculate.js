import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);
const operation = process.argv[3];

let result;

if (operation === 'plus') {
  result = add(num1, num2);
} else if (operation === 'minus') {
  result = subtract(num1, num2);
} else if (operation === 'times') {
  result = multiply(num1, num2);
} else if (operation === 'over') {
  result = divide(num1, num2);
}

console.log(`result: ${result}`);
