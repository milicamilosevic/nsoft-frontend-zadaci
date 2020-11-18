var textContainer = document.getElementsByClassName('text-container')[0];
var spinnerContainer = document.getElementsByClassName('spinner-container')[0];
var clockwise = true;

textContainer.addEventListener('click', function () {
    spinnerContainer.style.animationDirection = (clockwise) ? "reverse" : "normal";
    clockwise = !clockwise;
});