export default function takeTop(stack) {
  const top = stack.pop();
  if (typeof top === 'undefined') {
    return undefined;
  } else {
    return top;
  }
}
