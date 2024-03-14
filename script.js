// ************************ DOM Manipulation **************************

//  getElementById()

// const title = document.getElementById('main-heading');
// console.log(title);

// getElementsByClassName()

// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);

// getElementsByTagName()

// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// querySelector()

// const div = document.querySelector('div');
// console.log(div);

// querySelectorAll()

// const divs = document.querySelectorAll('div');
// console.log(divs);

// styling elements

// const title = document.querySelector('h1');
// title.style.color = 'red';
// console.log(title);

// const listItems = document.querySelectorAll("li");

// listItems.style.fontSize = "40px"; // This doesn't work

// for(let i=0;i<listItems.length;i++){
// listItems[i].style.fontSize = "40px";
// }

// Creating elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// Adding elements
// ul.append(li);
// console.log(ul);

// Modifying text

// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// li.innerText = 'X-men'

// Modifying Attributes and classes

// li.setAttribute('class', 'list-items');
// li.removeAttribute('class');

// const title = document.getElementById('main-heading');

// console.log(title.getAttribute('id'));

// li.classList.add('list-items');

// li.classList.remove('list-items');

// console.log(li.classList.contains('list-items'));

// li.remove();

// Traverse the DOM

// Parent Node Traversal

// let ul = document.querySelector("ul");

// console.log(ul.parentNode);
// console.log(ul.parentElement);

// const html1 = document.documentElement;

// console.log(html1.parentNode);
// console.log(html1.parentElement);

// Child Node Traversal

// let ul = document.querySelector("ul");

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.lastChild.style.backgroundColor = "red";

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traversal

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// const div = document.querySelector('div');

// console.log(div.childNodes);