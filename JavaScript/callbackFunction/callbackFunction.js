const myFunc = (callbackFunc) => {
  let value = 2;
  callbackFunc(value);
};

myFunc((value) => {
  console.log(value);
});
