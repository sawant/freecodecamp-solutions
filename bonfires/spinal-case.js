function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  if (!str.match(/[ _]/g)) {
    return str.replace(/([A-Z])/g, function(match, p1) {
      return '-' + p1.toLowerCase();
    });
  } else {
    return str.replace(/[\s_]/g, '-').toLowerCase();
  }
}

spinalCase('This Is Spinal Tap');