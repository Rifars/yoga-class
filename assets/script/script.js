const hamburgerButton = (items, chenges) => {
    const item = document.querySelector(items);
    const chenge = document.querySelector(chenges);


    item.addEventListener('click',() => {
        return chenge.classList.toggle('on');
        
    });
}

hamburgerButton('.navbar-hamburger','.navbar-items');
let rowLeft = document.querySelector('.left i');
let rowRight = document.querySelector('.right i');
let card = Array.from(document.querySelectorAll('.cards .card'));
let cards = document.querySelector('.cards');
let number = 0;

cards.addEventListener('click',(e) => {
    let numb = 0;
    if(e.target.classList.contains('fa-arrow-circle-right')){
        numb = number++;
        numb++;

        if(number > 2){
            number = 0;
        }
        card[number].style.display="inline-block";
        card[numb-1].style.display="none";

    }else if (e.target.classList.contains('fa-arrow-circle-left')){
        numb = number--;
        numb--
        if(number < 0){
            number = 2;
        }
        card[number].style.display="inline-block"
        card[numb+1].style.display="none";
    }
    // console.log(card[number]);
});



let hamburger = document.querySelector('.navbar-hamburger');
let itemsHamburger = Array.from(document.querySelectorAll('.navbar-hamburger .line'));
hamburger.addEventListener('click',() => {
    itemsHamburger.map(item => item.classList.toggle('active'));
});

