let num = 1000;
let counter = 0;
while (num / 2 > 50) {
    num = num / 2;
    counter++;
}
console.log(`Количество итераций: ${counter}`);