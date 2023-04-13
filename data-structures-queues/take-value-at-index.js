export default function takeValueAtIndex(queue, index) {
  if (queue.peek() !== undefined) {
    for (let i = 0; i < index; i++) {
      queue.enqueue(queue.dequeue());
    }
    return queue.dequeue();
  } else {
    return undefined;
  }
}
