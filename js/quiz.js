console.log('Lets Code! {^_^}');
console.log('Часть 4. Урок 11.');

const cards = document.querySelectorAll('.plate');

// Прячем все карточки
cards.forEach(function(card) {card.classList.add('none')});
 
// Для перемещения по карточкам
let currentCard = 0;
// Отображение прогресса между карточками
let currentProgres = 0;

// скрываем кнопку "назад" на первой карточке
cards[currentCard].querySelector('[data-nav = "prev"]').remove();

// отображение 1й карточки
cards[currentCard].classList.remove('none');
cards[currentCard].classList.add('visible');

console.log('currentCard', currentCard);

// Прогрессбар 0%
updateProgressBar();
 
// перемещение по карточкам
window.addEventListener ('click', function (event) {
     
    // Движение вперед
    if(event.target.closest('[data-nav = "next"]')) {
        console.log('next page');

        const result = checkOnAnsver(cards[currentCard]);
        const answersWrapper = cards[currentCard].querySelector('[data-answers]');

        if(result) {
            // Прогрессбар
            updateProgressBar('next');
             

            // Перемещение
            setTimeout(function() {
                // скрываем текущую с анимацией
                cards[currentCard].classList.remove('visible');
                // убираем со страницы
                setTimeout(function(){
                    cards[currentCard].classList.add('none');

                    // показываем след , готовим к анимации
                    currentCard = currentCard + 1;
                    cards[currentCard].classList.remove('none');
                    setTimeout(function() {
                        // отображаем след карточку с анимацией
                        cards[currentCard].classList.add('visible');    
                    }, 100);
 
                }, 500);


                answersWrapper.classList.remove('required');
                 // увеличиваем индекс массива с карточками
     
            }, 500);

         } else {
            answersWrapper.classList.add('required');
            alert('Выберите вариант ответа что бы продолжить');
        } 

        // скрываем текущую карточку
         console.log('currentCard', currentCard);
    }

    if(event.target.closest('[data-nav = "prev"]')) {
        console.log('prev page');     
        
        // Прогресс бар
        updateProgressBar('prev');

        
        // Перемещение
        setTimeout(function() {
            if(currentCard === 0) return;
        
            cards[currentCard].classList.remove('visible');

            
            setTimeout(function() {
                cards[currentCard].classList.add('none');

                currentCard = currentCard - 1;
                cards[currentCard].classList.remove('none');    
                // отображаем предыдущую карточку с анимацией
                setTimeout(function() {
                    cards[currentCard].classList.add('visible');
                }, 100) 
                 
            }, 500)
            
 
            console.log('currentCard', currentCard);    
        }, 500);
     }
})


// проверка полей на заполенность
function checkOnAnsver(card) {
     // проверка радио кнопки
    const radioBtns = card.querySelectorAll('input[type="radio"]');

    if(radioBtns.length > 0) {
        for (let radio of radioBtns) if(radio.checked) return true;
    }

    // проверка на чекбоксы
    const checkBoxes = card.querySelectorAll('input[type="checkbox"]');
    if(checkBoxes.length > 0) {
        for(let checkBox of checkBoxes) {
            if(checkBox.checked) return true;
        }
    }


}  


// функция отвечает за отображения прогресса в прохождении теста
function updateProgressBar (direction = 'start') {

    if(direction === 'next') {
        currentProgres = currentProgres + 1;
    } else if (direction === 'prev') {
        currentProgres = currentProgres - 1;
    }
    
    
    const progressValue = document.querySelectorAll('.progress__label strong');
    const progressLineBar = document.querySelectorAll('.progress__line-bar');
    const countCards = document.querySelectorAll('[data-progress]').length;
    
    const progress = Math.round((currentProgres * 100) / countCards);

    progressValue.forEach(function(item) {
        item.innerText = progress + '%';

    })

    progressLineBar.forEach(function(item) {
        item.style.width = progress + '%';
        
    })

}


// маска телефона
mask('#tel');
 
const resultBtn = document.querySelector('#submitForm');
const telInput = document.querySelector('#tel');

resultBtn.onclick = function () {
    if(telInput.value === '+' || telInput.value.length <6 ) {
        telInput.value = '';
        console.log('Меньше 6ти символов');
    }
}


// Фокус для чекбокса

const checkBoxPolicy = document.querySelector('#policy');

checkBoxPolicy.addEventListener('focus', function () {
    this.closest('label').classList.add('hovered');
})

checkBoxPolicy.addEventListener('blur', function () {
    this.closest('label').classList.remove('hovered');
})


// скрипт для анимации
