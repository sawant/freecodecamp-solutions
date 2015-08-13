function truncate(str, num) {
  // Clear out that junk in your trunk
  return num >= str.length ? str : str.slice(0, num-3) + '...';
}

truncate('A-tisket a-tasket A green and yellow basket', 11);