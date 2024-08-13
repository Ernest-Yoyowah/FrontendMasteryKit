const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const convertUnit = () => {
  //declare constants
  const cm_per_inch = 2.54;
  const inch_per_feet = 12;

  // declare variables
  let feet, cm, inch;

  // accept input for feet
  rl.question("Enter Lenght(feet): ", (feetInput) => {
    feet = parseFloat(feetInput);
    console.log(`Lenght in feet: ${feet}`);

    // accept input for  inches
    rl.question("Enter lenght(inches): ", (inchInput) => {
      inch = parseFloat(inchInput);
      console.log(`Lenght in inches ${inch}`);

      // calculate totalInches
      var totalInches = feet * inch_per_feet + inch;

      // calculate conversion
      cm = totalInches * cm_per_inch;

      // output the result
      console.log(`Lenght in Centimeters: ${cm.toFixed(2)}`);

      rl.close();
    });
  });
};

convertUnit();
