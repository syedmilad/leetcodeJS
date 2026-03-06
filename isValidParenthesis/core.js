var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (stack.length) {
      const last = stack[stack.length - 1];

      if (isPair(curr, last)) {
        stack.pop();
        continue;
      }
    }

    stack.push(curr);
  }

  return stack.length === 0;
};

var isPair = function (curr, last) {
  return (
    (last === "(" && curr === ")") ||
    (last === "{" && curr === "}") ||
    (last === "[" && curr === "]")
  );
};
console.log(isValid("({})"));
