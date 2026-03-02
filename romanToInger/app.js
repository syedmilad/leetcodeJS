/**
 * @param {string}
 * @return {number}
 */

var romanToInger = function (s) {
  const characters = ["I", "V", "X", "L", "C", "D", "M"];

  const isValid = [...s].every((s) => characters.includes(s));

  if (!isValid) {
    throw new Error("input is not valid!");
  }

  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const current = symbols[s[i]];
    const next = symbols[s[i + 1]];

    if (current && next && current < next) {
      sum -= current;
    } else {
      sum += current;
    }
  }

  console.log(sum)
};

romanToInger("MCMXCIV");
