import LinkedList from './lib/linked-list.js';

export default function append(list, value) {
  const newNode = new LinkedList(value);
  if (list === null) {
    return newNode;
  }
  let node = list;
  while (node.next !== null) {
    node = node.next;
  }
  node.next = newNode;
  return list;
}
