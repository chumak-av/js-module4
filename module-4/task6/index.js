const array = [-100, 50, 20, -20, 3, 2, 385, -7, 85];
let sum = Number("");
for (let i = 0; i < 9; i += 1) {
    if (array[i] > 0) {
        sum += array[i];
    } else {
        continue;
    }
}
console.log(sum);