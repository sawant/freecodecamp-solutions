function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substr(str.length - target.length, target.length) === target;
}

end('Bastian', 'n');