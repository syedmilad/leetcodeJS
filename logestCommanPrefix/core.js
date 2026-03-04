var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    console.log(strs[i], strs[i].indexOf(prefix) !== 0);
    while (strs[i].indexOf(prefix) !== 0) {
      /** !strs[i].startWith(prefix) does flow start with flower? !No = true then iterate while loop */
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
