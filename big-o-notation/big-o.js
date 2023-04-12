/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // n * 1 = O(n)
    i++                             // n * 1 = O(n)
  ) {
    const word = words[i];          // n * 1 = O(n)
    if (!seen[word]) {              // n * 1 = O(n)
      seen[word] = true;            // n * 1 = O(n)
      unique[unique.length] = word; // n * 1 = O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // n * 1 = O(n)
    i++                             // n * 1 = O(n)
  ) {
    const word = words[i];          // n * 1 = O(n)
    let isUnique = true;            // n * 1 = O(n)
    for (
      let c = 0;                    // n * 1 = O(n)
      c < i;                        // n * n = O(n^2)
      c++                           // n * n = O(n^2)
    ) {
      const comparing = words[c];   // n * n = O(n^2)
      if (comparing === word) {     // n * n = O(n^2)
        isUnique = false;           // n * n = O(n^2)
      }
    }
    if (isUnique) {                 // n * 1 = O(n)
      unique[unique.length] = word; // n * 1 = O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
