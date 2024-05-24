const loadingText = document.querySelector('.loading-text');
const content = document.querySelector('.content');

// Waiting for the end of the animation of the loading text
loadingText.addEventListener('animationend', () => {
    // Starting the animation
    content.style.animation = 'fadeIn 1s ease-in-out forwards';
});

document.addEventListener('DOMContentLoaded', () => {
    const loadingText = document.querySelector('.loading-text');
    const content = document.querySelector('.content');
    const toggleButton = document.getElementById('toggle-language');
    const elementsToTranslate = document.querySelectorAll('[data-en][data-ru]');
    let currentLanguage = 'ru';

    const updateLanguage = () => {
        elementsToTranslate.forEach(element => {
            element.textContent = element.getAttribute(`data-${currentLanguage}`);
        });
        if (currentLanguage == 'ru')
            {
                toggleButton.textContent = "EN";
            }
            else
            {
                toggleButton.textContent = "RU";
            }
        
    };

    toggleButton.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
        updateLanguage();
    });

    // Initial language setup
    updateLanguage();

    // Wait for loading text animation to end
    loadingText.addEventListener('animationend', () => {
        content.style.opacity = '1';
        content.style.animation = 'fadeIn 1s ease-in-out forwards';
    });
});

