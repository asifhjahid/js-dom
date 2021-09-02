
let btn = document.querySelector('#last-btn');
btn.addEventListener('click',()=>{
    document.body.style.color = 'tomato'
})




// Event Bubble

document.querySelector('#container').addEventListener('click',()=>{
    console.log(` container Clicked`);
    
})

document.querySelector('#ulList').addEventListener('click',()=>{
    console.log(` Ul Clicked`);
    event.stopPropagation();
})


document.querySelector('#first').addEventListener('click',()=>{
    console.log(` li Clicked`);
    // event.stopPropagation();
})




//this or event.target.innerText


let allItems = document.getElementsByClassName('item');

for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];
    item.addEventListener('click',(event)=>{
        event.target.parentNode.removeChild(event.target)
        // console.log(event.target.innerText);
        // console.log(event.target.parentNode)
    })

    
}


 document.querySelector('#newBtn').addEventListener('click',()=>{
     let itemParent = document.querySelector('#ulList');
     let newItem = document.createElement('li');
     newItem.innerText = 'Brand new item';
     itemParent.appendChild(newItem);
 })


 document.querySelector('#ulList').addEventListener('click',(event)=>{
     event.target.parentNode.removeChild(event.target);
 })
