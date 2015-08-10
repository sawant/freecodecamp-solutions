function palindrome(str) {
  str = str.toLowerCase().replace(/[\s,.]/g, '');
  if (str === str.split('').reverse().join('')) return true;
  return false;
}

palindrome("eye");