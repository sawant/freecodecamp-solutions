function where(collection, source) {
  var arr = [];
  for (var search_value in source) {
    for (var item in collection) {
      var obj = collection[item];
      if (obj.hasOwnProperty(search_value) && obj[search_value] === source[search_value])
        arr.push(obj);
    }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });