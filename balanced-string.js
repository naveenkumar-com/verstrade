function getBalancedSubstrings(S) {
  const result = [];
  const charCounts = new Map();
  for (let i = 0; i < S.length; i++) {
    charCounts.set(S[i], (charCounts.get(S[i]) || 0) + 1);
    if (charCounts.size > 2) {
      charCounts.clear();
    } else if (charCounts.size === 2) {
      const [char1, count1] = charCounts.entries().next().value;
      const [char2, count2] = charCounts.entries().next().value;
      if (count1 === count2) {
        result.push(S.slice(i - count1 + 1, i + 1));
      }
    }
  }
  return result;
}
