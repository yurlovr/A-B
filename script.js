"use strict"

document.body.onclick = function (e) {  // назначаем обработчик кликов

    let target = e.target;

    if (target.closest('.gamezone__btn-plus')) {
        Game.gameStart(target);
    }
    if (target.closest('.gamezone__btn-minus')) {
        Game.gameStart(target);
    }

    if (target.closest('.header-home')) {
        Game.gameHome();
    }

    if (target.closest('.header-options')) {
        Game.gameOptions();
    }

    if (target.closest('.ask')){
        switch (target.id){
            case 'ask1' : { console.log('ask1'); break;}
            case 'ask2' : { console.log('ask2'); break;}
            case 'ask3' : { console.log('ask3'); break;}
            case 'ask4' : { console.log('ask4'); break;}
        }
    }
};


    let Game =  {

        field: document.querySelector('.gamezone'),
        buttons: document.querySelectorAll('.btn'),

        gameStart: function(elem) { // создаем верхнее меню
           /* console.log(elem);*/

            for (let i = 0; i < this.buttons.length; i++) {
                this.buttons[i].style.display = 'none';
            }

            this.field.style.backgroundColor = "dodgerblue";
            let header = document.createElement('div');
            header.classList.add('header');

            let headerOptions = document.createElement('div');
            headerOptions.classList.add('header-options' , 'header-all');


            let headerTimer = document.createElement('div');
            headerTimer.classList.add('header-timer', 'header-all');


            let headerHome = document.createElement('div');
            headerHome.classList.add('header-home', 'header-all');


            this.field.style.marginTop = '0px';

            this.field.before(header);
            header.appendChild(headerHome);
            header.appendChild(headerTimer);
            header.appendChild(headerOptions);
            bodyGame.apply(this, arguments)

        },

        gameHome: function () { // выходим на стартовую страницу
            console.log('home');

           document.body.firstElementChild.remove();
           document.querySelector('.gamezone').firstElementChild.remove();

            this.field.style.backgroundColor = 'limegreen';
            this.field.style.marginTop = '10%';
            for(let i = 0; i < this.buttons.length; i++) {
                this.buttons[i].style.display = 'block';
            }
        },
        gameOptions: function () { // открываем опции
            console.log('options');
        },

    };

function bodyGame(elem) {
    let fieldObj = {};
        render(fieldObj);
    if(elem.closest('.gamezone__btn-plus')) { // если нажато сложение
        console.log('plus');
        console.log(fieldObj);
    }
    if (elem.closest('.gamezone__btn-minus')){ // если нажато вычитание
        console.log('minus');
    }
};

function render(obj){ // рисуем блоки с вопросом и ответами
    /*console.log ('будем рисовать блоки');*/
    obj.ask = [];
    obj.question = document.createElement('div');
    obj.question.classList.add('question');

    obj.questionBlock = document.createElement('div');
    obj.questBlockNewString = document.createElement('div');
    obj.questionBlock.classList.add('question-block');
    obj.questBlockNewString.classList.add('new-string');

    obj.askBlock = document.createElement('div');
    obj.askBlock.classList.add('ask-block');

    for (let i = 0; i < 4; i++) {
        obj.ask[i] = document.createElement('div');
        obj.ask[i].id = 'ask' + (i+1);
        obj.ask[i].classList.add('ask');
    }

    Game.field.prepend(obj.question);
    obj.question.prepend(obj.questionBlock);
    obj.question.appendChild(obj.questBlockNewString);
    obj.question.appendChild((obj.askBlock));
    for (let i = 0; i < obj.ask.length; i++) {
        obj.askBlock.appendChild(obj.ask[i]);
    }
    return obj; // возвращаем объект с дом элементами
 };

function randomInteger(min, max) { // создаем случайное целое число
    return Math.floor(min + Math.random() * (max + 1 - min));
}


