var matrica = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];

var btn = document.getElementById('izracunaj-btn');
var textInput = document.getElementById('text-input');
var result = document.getElementsByClassName('result')[0];
var messageField = document.getElementsByClassName('message')[0];

function izracunaj() {
    var found = false;
    var m, n;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (matrica[i][j] == textInput.value) {
                found = true;
                m = i;
                n = j;
                break;
            }
        }
    }
    result.innerHTML = ""
    textInput.value = "";
    if (found) {
        var sum = 0;
        for (var i = m - 1; i <= m + 1; i++)
            for (var j = n - 1; j <= n + 1; j++)
                if (i >= 0 && i < 10 && j >= 0 && j < 10)
                    sum += matrica[i][j];
        result.innerHTML = sum;
        messageField.innerHTML = "Rezultat je:";
    } else {
        messageField.innerHTML = "Neispravan unos!";
    }
};

btn.addEventListener("click", izracunaj);
textInput.addEventListener("keyup", function (e) {
    if (e.key == 'Enter')
        izracunaj();
});