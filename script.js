// Функция для перемещения кнопки "No" в случайное место
function moveButton() {
    const noButton = document.getElementById("noButton");
    const container = document.querySelector(".container");

    // Получаем размеры контейнера
    const containerRect = container.getBoundingClientRect();

    // Генерируем случайные координаты внутри контейнера
    const newX = Math.random() * (containerRect.width - noButton.clientWidth);
    const newY = Math.random() * (containerRect.height - noButton.clientHeight);

    // Устанавливаем новое положение кнопки
    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

// Функция для перехода на страницу yes.html
function nextPage() {
    window.location.href = "yes.html";
}

// Добавляем обработчик события на кнопку "No"
document.getElementById("noButton").addEventListener("click", moveButton);