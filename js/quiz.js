console.log('Lets Code! {^_^}');
console.log('Движение вперед. Несущ. карточка 3:20');

const cards = document.querySelectorAll('.plate');
 
let currentCard = 0;
// скрываем кнопку "назад" на первой карточке
cards[currentCard].querySelector('[data-nav = "prev"]').remove();
// отображение 1й карточки
cards[currentCard].classList.add('visible');
console.log('currentCard', currentCard);
 
// перемещение по карточкам
window.addEventListener ('click', function (event) {
     
    if(event.target.closest('[data-nav = "next"]')) {
        console.log('next page');

        // if(currentCard === cards.length -1) {
        //     return;
        // }

        // скрываем текущую карточку
        cards[currentCard].classList.remove('visible');
        // увеличиваем индекс массива с карточками
        currentCard = currentCard + 1;
        // показываем карточку с обновленным индексом
        cards[currentCard].classList.add('visible');
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

function checkOnAnAnser() {
    // проверка радио кнопки
    


}
