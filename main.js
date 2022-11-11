let burger = document.querySelector('.burger')
let popup = document.querySelector('.popup')
let exit = document.querySelector('.exit')

burger.onclick = function () {
    popup.classList.add('add');
};

exit.onclick = function () {
    popup.classList.remove('add')
}
