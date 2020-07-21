let pricing = document.querySelectorAll('.pricing');
let typing_bubble = document.querySelector('.typing__bubble');


setTimeout(()=>{
    typing_bubble.classList.add('hide');
    
    pricing.forEach((el)=>{
        el.classList.add('show');
    })
}, 2500)

