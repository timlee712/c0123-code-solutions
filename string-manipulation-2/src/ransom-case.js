/* exported ransomCase */

function ransomCase(string) {
  var ransom = '';
  for (var i = 0; i < string.length; i++) {
    var even = i % 2 === 0;
    if (even) {
      ransom += string[i].toLowerCase();
    } else {
      ransom += string[i].toUpperCase();
    }
  }
  return ransom;
}
