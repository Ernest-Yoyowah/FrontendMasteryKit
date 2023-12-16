function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // write your code here
  let appleCount = 0;
  let orangeCount = 0;

  for (let appleDistance of apples) {
    const applePosition = a + appleDistance;
    if (applePosition >= s && applePosition <= t) {
      appleCount++;
    }
  }

  for (let orangeDistance of oranges) {
    const orangePosition = b + orangeDistance;
    if (orangePosition >= s && orangePosition <= t) {
      orangeCount++;
    }
  }

  console.log(orangeCount);
  console.log(appleCount);
}

// Example Usage:
const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);
