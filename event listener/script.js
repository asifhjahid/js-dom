
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