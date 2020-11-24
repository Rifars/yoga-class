const hamburgerButton = (items, chenges) => {
    const item = document.querySelector(items);
    const chenge = document.querySelector(chenges);


    item.addEventListener('click',() => {
        return chenge.classList.toggle('on');
        
    });
}
hamburgerButton('.navbar-hamburger','.navbar-items');
