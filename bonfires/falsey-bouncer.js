function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter ( function(value) {
    return Boolean(value).valueOf() !== false;
  });
}

bouncer([7, 'ate', '', false, 9]);