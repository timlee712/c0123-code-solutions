export default function maxValue(stack) {
  let max = -Infinity;
  let current = stack.peek();
  while (current !== undefined) {
    if (current > max) {
      max = current;
    }
    stack.pop();
    current = stack.peek();
  }
  return max;
}
