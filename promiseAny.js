const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 resolvida");
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolvida");
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3 resolvida");
  }, 4000);
});

let promises = [promise1, promise2, promise3];

// pega a primeira promisse a ser resolvida e pára
Promise.any(promises).then((res) => console.log(res));
