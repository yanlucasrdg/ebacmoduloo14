const images = document.querySelectorAll('.carousel-image');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentIndex = 0;

// Função para atualizar a posição das imagens
function updateCarousel() {
    images.forEach((img, index) => {
        img.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
}

// Botão "Próximo"
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

// Botão "Anterior"
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

// Inicializa o carrossel na posição correta
updateCarousel();

// script.js
document.getElementById('toggle-menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});
