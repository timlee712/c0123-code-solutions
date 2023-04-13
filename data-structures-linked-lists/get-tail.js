export default function getTail(list) {
  if (!list) {
    return null;
  }
  let currentNode = list;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  return currentNode.data;
}
