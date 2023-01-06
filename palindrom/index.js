const array = ['092289', '992299', '12291', '982289', '22022022', '2301', '2013', '1001', '756564', '1011', '766567', '756546', '2002', '91019', '765567'];
const palindromes = [];

array.forEach((s) => {
  let isPalindrome = true;
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  if (isPalindrome) {
    palindromes.push(s);
  }
});

console.log(palindromes);