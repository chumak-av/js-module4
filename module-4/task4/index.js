let name = "";
do {
    name = prompt("Введите имя вашего любимого героя");
    if (name.length >= 6) {
        break;
    }
    alert(name);
} while (name.length < 6);