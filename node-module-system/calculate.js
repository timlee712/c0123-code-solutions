import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const num1 = process.argv[2];
const num2 = process.argv[4];
const operation = process.argv[3];

let result;

if (operation === 'plus') {
  result = add(Number(num1), Number(num2));
} else if (operation === 'minus') {
  result = subtract(Number(num1), Number(num2));
} else if (operation === 'times') {
  result = multiply(Number(num1), Number(num2));
} else if (operation === 'over') {
  result = divide(Number(num1), Number(num2));
}

console.log(`result: ${result}`);
