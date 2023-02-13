/* exported defaults */
object-manipulation-2

function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
=======
main
