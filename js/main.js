
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

onresize = (event) => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

let  btn = document.getElementsByClassName('menu_show')[0];
let  menu = document.getElementsByClassName('menu_wrap')[0];
btn.addEventListener('click', ()=> {
   toggle(menu);
},false);

function toggle(el) {
    el.style.display = (el.style.display == 'none') ? 'block' : 'none'
}

window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.menu')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
        menu.style.display = 'none';
    }
})
