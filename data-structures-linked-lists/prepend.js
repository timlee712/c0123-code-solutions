import LinkedList from './lib/linked-list';

export default function prepend(list, value) {
  const newNode = new LinkedList(value);
  if (list === null) {
    return newNode;
  }
  newNode.next = list;
  return newNode;
}
