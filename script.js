document.addEventListener('DOMContentLoaded', () => {
    // Список всех видеофайлов (от 1 до 10)
    const videoList = [
        "video1.mp4",
        "video2.mp4",
        "video3.mp4",
        "video4.mp4",
        "video5.mp4",
        "video6.mp4",
        "video7.mp4",
        "video8.mp4",
        "video9.mp4",
        "video10.mp4"
    ];

    let currentVideoIndex = 0; // Начинаем с первого видео (индекс 0)

    const videoElement = document.getElementById('video-display');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const counterElement = document.getElementById('video-counter');

    /**
     * Обновляет видео и счетчик
     */
    function updateVideo() {
        // Устанавливаем новый источник видео
        videoElement.src = videoList[currentVideoIndex];
        
        // Перезагружаем видео, чтобы применить новый src
        videoElement.load(); 
        
        // Обновляем счетчик
        counterElement.textContent = `${currentVideoIndex + 1} / ${videoList.length}`;
    }

    // Обработчик для кнопки "Назад"
    prevButton.addEventListener('click', () => {
        // Уменьшаем индекс, если не первое видео. Если первое, переходим к последнему.
        currentVideoIndex = (currentVideoIndex - 1 + videoList.length) % videoList.length;
        updateVideo();
    });

    // Обработчик для кнопки "Вперед"
    nextButton.addEventListener('click', () => {
        // Увеличиваем индекс. Если последнее видео, переходим к первому (цикличность).
        currentVideoIndex = (currentVideoIndex + 1) % videoList.length;
        updateVideo();
    });

    // Инициализация при загрузке страницы
    updateVideo();
});