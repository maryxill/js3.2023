'use strict';
// Задача 1
// Запрограммируйте поведение кнопки по нажатию на нее (она меняет текст в 
// span)

function buttonClick1(){
    let elem = document.getElementById('elem');
    elem.innerHTML = 'Ку-ку! А я <b>жирный</b>!';
}


// Задача 2
// Запрограммируйте  поведение кнопки по нажатию на нее (она меняет span на тег b, 
// не изменяя при этом текст внутри тега)

function buttonClick2(){
    let elem = document.getElementById('elem2');
    elem.innerHTML = 'Абзац превратился в h3!'
    elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>';
}


// Задача 3
// Дан HTML код. Поменяйте содержимое абзацев на их порядковый номер в 
// коде.

function buttonClick3(){
    let elem = document.getElementById('elem3');
    elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>';
}


// Задача 4
// Дан HTML код. Поменяйте содержимое элементов с классом "а" на их 
// порядковый номер в коде.

function slog(){
    var input1 = +document.getElementById('input1').value;
    var input2 = +document.getElementById('input2').value;
    var result = document.getElementById('result');
    result.innerHTML = input1 + input2;
}


// Задача 5
// Дан HTML код. Поменяйте содержимое абзацев с классом "а" на их 
// порядковый номер в коде

function func(){
    var elements = document.getElementsByTagName('p');
    for (let i = 0; i < elements.length; i++){
        elements[i].innerHTML = i;
    }
}
