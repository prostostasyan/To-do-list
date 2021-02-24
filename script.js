
//Клонируем первый элемент и в дальнейшем будем использовать при создании нового элемента
const allList = document.querySelector('ul');
const list = document.querySelectorAll('li');
const list_prime = list[0].cloneNode(true).innerHTML;
// Далее срабатывает обрабочик событий при добавлении элемента
let add = document.querySelector('.add');

let newDo = function(){
    let input =  document.querySelector('.new_business');
    if(input.value === '') return null;
    let newList = document.createElement('li');
    newList.innerHTML = list_prime;
    newList.querySelector('.list').textContent = input.value;
    allList.append(newList);
    input.value = '';
}

add.addEventListener("click",newDo);

document.querySelector('.new_business').addEventListener('keydown', (eevent) => {
    if (event.keyCode === 13) newDo();
})


// При помощи делегирования событий, срабатывающий на клик элемента с id=container,
// мы разделяем события по некоторым условиям
container.onclick = (event) => {
    if(event.target.className == 'delete'){
        let delElems = event.target.parentElement;
        delElems.remove();
    }
    if(event.target.className == 'list' || event.target.className == 'list undoList' ){
        let list = event.target.closest('.list');
        let check = list.previousElementSibling;
        check.classList.toggle('check');
        list.classList.toggle('undoList');
    }
}
