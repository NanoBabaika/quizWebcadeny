console.log('Lets Code! {^_^}');
console.log('Урок 7. Прогресс бар. Часть 1');

const cards = document.querySelectorAll('.plate');
 
let currentCard = 0;
// скрываем кнопку "назад" на первой карточке
cards[currentCard].querySelector('[data-nav = "prev"]').remove();
// отображение 1й карточки
cards[currentCard].classList.add('visible');
console.log('currentCard', currentCard);
 
// перемещение по карточкам
window.addEventListener ('click', function (event) {
     
    // Движение вперед
    if(event.target.closest('[data-nav = "next"]')) {
        console.log('next page');

        const result = checkOnAnAnser(cards[currentCard]);
        const answersWrapper = cards[currentCard].querySelector('[data-answers]');

        if(result) {
            answersWrapper.classList.remove('required');
            cards[currentCard].classList.remove('visible');
            // увеличиваем индекс массива с карточками
            currentCard = currentCard + 1;
            // показываем карточку с обновленным индексом
            cards[currentCard].classList.add('visible');    
        } else {
            answersWrapper.classList.add('required');
            alert('Выберите ответ что бы продолжить');
        } 

        // скрываем текущую карточку
         console.log('currentCard', currentCard);
    }

    if(event.target.closest('[data-nav = "prev"]')) {
        console.log('prev page');     
        
        
        if(currentCard === 0) return;
        
        cards[currentCard].classList.remove('visible');
        
        // тоже самое но индекс уменьшаем
        currentCard = currentCard - 1;
 
        cards[currentCard].classList.add('visible');
        
        console.log('currentCard', currentCard);
    }
})


// проверка полей на заполенность

function checkOnAnAnser(card) {
     // проверка радио кнопки
    const radioBtns = card.querySelectorAll('input[type="radio"]');

    if(radioBtns.length > 0) {
        for (let radio of radioBtns) if(radio.checked) return true;
    }

    // проверка на чекбоксы
    const checkBoxes = card.querySelectorAll('input[type="checkbox"]');
    console.log(checkBoxes);
    if(checkBoxes.length > 0) {
        for(let checkBox of checkBoxes) {
            if(checkBox.checked) return true;
        }
    }


}  


