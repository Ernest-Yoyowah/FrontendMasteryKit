// promise example

const getData = () => {
  return new Promise((resolve, reject) => {
    // Fetch Data
    resolve("Data fetched");
    reject("some err");
  });
};

getData().then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
