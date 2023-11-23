const makeError = () => {
  try {
    const name = "Ernest";
    name = "Yoyowah";
  } catch (err) {
    console.error(err);
  }
};

makeError();
