const lists = document.querySelectorAll('.list');
const elems = document.querySelectorAll('.elem');
const title = document.getElementById('title');

//добавляет текст в зависиомости от метода ("аргумент", "текст")
// title.insertAdjacentText('beforebegin', 'beforebegin')
// title.insertAdjacentText('afterend', 'afterend')
// title.insertAdjacentText('beforeend', ' beforeend')
// title.insertAdjacentText('afterbegin', 'afterbegin ')

//добавляет элемент в зависиомости от метода ("аргумент", "элемент")
// title.insertAdjacentElement('beforebegin', elems[0])
// title.insertAdjacentElement('afterend', elems[1])
// title.insertAdjacentElement('beforeend', elems[2])
// title.insertAdjacentElement('afterbegin', elems[3])

//добавляет верстку в зависиомости от метода ("аргумент", "верстка")
// title.insertAdjacentHTML('beforebegin', '<span>step 1</span>')
// title.insertAdjacentHTML('afterend', '<span>step 2</span>')
// title.insertAdjacentHTML('beforeend', '<span>step 3</span>')
// title.insertAdjacentHTML('afterbegin', '<span>step 4</span>')

//старые методы
lists[1].appendChild(elems[5]) //нельзя добавить строку и несколько элементов одновременно, замена append
lists[1].insertBefore(elems[5], elems[1]) // before
lists[1].replaceChild(elems[5], elems[1]) // replaceWith
lists[1].removeChild(elems[5]) // remove


// elems[2].remove(); //удаляет элемент со страницы
// elems[4].remove(); 

// lists[1].append(elems[4]) //добавляет элемент в начало 
// lists[1].prepend(elems[5]) //добавляет элемент в конец

// lists[0].before(lists[1]) //добавляет элемент перед элементом
// lists[0].after(lists[1]) //добавляет элемент после элемента

// elems[3].after(elems[0])

// elems[4].replaceWith(elems[2]) //меняет значение элемента

// const cloneElem = elems[3].cloneNode(true) //клонирует узел, при значение тру также копирует содержимое

// cloneElem.classList.add('green-color'); 
// cloneElem.innerHTML = '<strong>step 6</strong>' //заменяет данные в HTML

// lists[1].append(cloneElem)

// console.log(cloneElem);

// const newElem = document.createElement('li') // создает узел

// newElem.textContent = 'step 6'
// newElem.classList.add('elem')

// lists[1].append(newElem)

// console.log(newElem)