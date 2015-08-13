function largestOfFour(arr) {
  // You can do this!
  var largest = [];
  for (var i in arr) {
    largest[i] = arr[i].reduce( function(previous_value, current_value) {
      return Math.max(previous_value, current_value);
    });
  }
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);