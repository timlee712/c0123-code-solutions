export default function getTop(stack) {
  const top = stack.peek();
  if (typeof top === 'undefined') {
    return undefined;
  } else {
    return top;
  }
}
