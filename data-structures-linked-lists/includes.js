export default function includes(list, value) {
  let node = list;
  while (node !== null) {
    if (node.data === value) {
      return true;
    }
    node = node.next;
  }
  return false;
}
