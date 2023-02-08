let burger = document.querySelector('nav .fa-bars');
let nav = document.querySelector('nav ul');

document.addEventListener('click' , (e)=> {
    console.log(e.target.className);
    if (e.target.className == 'fas fa-bars') {
        nav.classList.add('active-nav');
        console.log(e.className);
        document.body.classList.add('dark');
    }
    else {
        nav.classList.remove('active-nav')
        document.body.classList.remove('dark');
    }
})