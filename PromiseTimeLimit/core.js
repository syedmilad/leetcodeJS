const timeLimitd = (fn, t) => {
  return function (...args) {
    return new Promise((res, rej) => {
      const timeout = setTimeout(() => {
        rej("Time limit exceeded");
      }, t);
      fn(...args)
        .then((result) => {
          clearTimeout(timeout);
          res(result);
        })
        .catch((err) => {
          clearTimeout(timeout);
          rej(err);
        });
    });
  };99
};

const limited = timeLimitd(
  (t) => new Promise((res) => setTimeout(res, t), 100)
);
limited(150).then(console.log).catch(console.error);
