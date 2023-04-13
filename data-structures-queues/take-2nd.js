export default function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const firstValue = queue.dequeue();
    queue.enqueue(firstValue);
    const secondValue = queue.dequeue();
    return secondValue;
  } else {
    return undefined;
  }
}
