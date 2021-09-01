// let colorChange = document.getElementsByClassName('author');
// // console.log(colorChange);
// for(let i=0; i<colorChange.length;i++){
//     let element = colorChange[i];
//     // console.log(element.innerText);
//     // console.log(element.innerHTML);
//     element.innerHTML = 'Lekhok ' + (i+1);
//     element.style.color= 'red';
//     element.style.backgroundColor = 'green';
    
// }

document.body.style.backgroundColor  = 'lightblue'

let colorChange = document.querySelectorAll('.special h3');
for(let i=0; i<colorChange.length;i++){
        let element = colorChange[i];
        // console.log(element.innerText);
        // console.log(element.innerHTML);
        element.innerHTML = 'Lekhok ' + (i+1);
        element.style.color= 'red';
        element.style.backgroundColor = 'green';
        
     }

//set title when we are mouse over the text

let addTitle = document.querySelector('#title');
addTitle.setAttribute('title','I am heading')


//create new element and add text

let article = document.querySelector('#first');
let newParagraph = document.createElement('p');
newParagraph.innerHTML='added new text by javascript';
article.appendChild(newParagraph)


//add one more gift item

let giftItem = document.querySelector('#gift-list');
let newItem = document.createElement('li');
newItem.innerHTML='JavaScript';
giftItem.appendChild(newItem);

