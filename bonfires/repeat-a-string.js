function repeat(str, num) {
  // repeat after me
  return num < 0 ? '' : str.repeat(num); // String.prototype.repeat(num) is part of ECMAScript 2015 (ES6) standard, thus not compatible in all browsers.
}

repeat('abc', 3);