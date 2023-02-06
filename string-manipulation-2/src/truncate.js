/* exported truncate */

function truncate(length, string) {
  let shrunk = string;
  if (string.length > length) {
    shrunk = string.slice(0, length) + '...';
  } else if (string.length < length) {
    shrunk += '...';
  }
  return shrunk;
}
