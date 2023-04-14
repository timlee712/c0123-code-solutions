export default function getLength(list) {
  let count = 0;
  let node = list;
  while (node !== null) {
    count++;
    node = node.next;
  }
  return count;
}
