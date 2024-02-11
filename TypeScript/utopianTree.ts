// 1 sprint = double
// 1 summer = +1 in height

/*
if n = 5
0 - 1
1 - 2
2 - 3
3 - 6
4 - 7
5 - 14

*/

let growthCycles = 1;

const utoPianTree = (numberOfGrowthCycle: number): number => {
  for (let i = 0; i < numberOfGrowthCycle; i++) {
    if (i % 2 === 0) {
      growthCycles *= 2;
    } else {
      growthCycles++;
    }
  }

  return growthCycles;
};

let numberOfGrowthCycle = 5;
const output = utoPianTree(numberOfGrowthCycle);
console.log(output);
