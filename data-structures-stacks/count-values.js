export default function countValues(stack) {
  let count = 0;
  let current = stack.peek();
  while (current !== undefined) {
    count++;
    stack.pop();
    current = stack.peek();
  }
  return count;
}
