let string = "";
const array = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < 6; i += 1) {
    string += `${array[i]}-`;
}
console.log(string);