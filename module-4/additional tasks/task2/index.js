const randomNumber = Math.round(Math.random() * (100 - 1) + 1);
console.log(randomNumber);
let yourNumber = parseInt(prompt('Попробуйте угадать загаданное число'));
do {
    if (yourNumber > randomNumber) {
        yourNumber = prompt("Задуманное число меньше. Попробуйте еще раз");
    };
    if (yourNumber < randomNumber) {
        yourNumber = prompt("Задуманное число больше. Попробуйте еще раз");
    };
} while (yourNumber != randomNumber);
if (yourNumber == randomNumber) {
    alert("Вы угадали! Поздравляем!!!");
};