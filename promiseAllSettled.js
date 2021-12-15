const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 resolvida");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise 2 rejeitada");
  }, 3000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3 resolvida");
  }, 4000);
});

const promises = [promise1, promise2, promise3];

Promise.allSettled(promises).then((resp) => {
  resp.forEach((item) => {
    if (item.status === "fulfilled") {
      console.log(`Promise resolvida`, item);
    } else {
      console.log(`Promise não resolvida`, item);
    }
  });
});
