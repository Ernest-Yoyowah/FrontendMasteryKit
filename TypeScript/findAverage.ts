const sampleArray: number[] = [2, 4, 6, 8, 10];

const sum = sampleArray.reduce((acc, val) => acc + val);

console.log(sum / sampleArray.length);
