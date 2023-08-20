function check(str, bracketsConfig) {
  let stack = [];
  let bracketsMap = bracketsConfig.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc
  }, {});
  for (let char of str) {
    if (stack.length > 0 && char === bracketsMap[stack.slice(-1)]) {
      stack.pop()
    }
    else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
module.exports = check;