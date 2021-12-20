let promise = new Promise((resolve, reject) => {
  try {
    //throw new Error("opa deu um erro");

    setTimeout(() => {
      resolve("promise done with success");
    }, 3000);
  } catch (e) {
    setTimeout(() => {
      reject(e);
    }, 3000);
  }
});

promise.then((response) => {
  console.log(response);
});

async function teste() {
  let promise = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("Função async");
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        reject(error);
      }, 5000);
    }
  });

  await promise.then((response) => {
    console.log(response);
  });
}

teste();
