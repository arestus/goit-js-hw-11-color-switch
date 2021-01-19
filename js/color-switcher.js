import colors from "./colors.js";

const bodyBackgroundRef = document.querySelector("body");
const buttonStartRef = document.querySelector('button[data-action="start"]');
const buttonStopRef = document.querySelector('button[data-action="stop"]');
let timerId = null;

// вешаем слушатели на кнопки
buttonStartRef.addEventListener("click", startColorSwitcher);
buttonStopRef.addEventListener("click", stopColorSwitcher);

function changeColor() {
  bodyBackgroundRef.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
}

// запуск свитчера и деактивация кнопки "start"
function startColorSwitcher() {
  buttonStartRef.disabled = true;
  buttonStartRef.textContent = "Inactive, click on 'Stop'";
  timerId = setInterval(changeColor, 800);
}

// функция останавливает свитчер, активирует кнопку "start" для повторного запуска и очищает интервал таймера
function stopColorSwitcher() {
  buttonStartRef.disabled = false;
  buttonStartRef.textContent = "Start";
  clearInterval(timerId);
}
// Функция генирации случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
