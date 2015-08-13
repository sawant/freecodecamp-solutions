function chunk(arr, size) {
  // Break it up.
  var arr2 = [];
  var index = 0;
  
  for (var i = 0; i < Math.ceil(arr.length/size); i++) {
    var temporary = [];
    for (var j = 0; j < size; j++) {
      if (index >= arr.length) break;
      temporary.push( arr[index] );
      index++;
    }

    arr2.push(temporary);
  }
  return arr2;
}

chunk(['a', 'b', 'c', 'd'], 2);