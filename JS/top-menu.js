function addButtonsListeners() {

    const button = document.getElementById('menu__btn');
    const menu = document.getElementById('header-banner');

    function openCloseMenu(button, menu) {
        menu.classList.toggle('menu-opened');
    }

    button.addEventListener('click', () => {openCloseMenu(button, menu)});
};

addButtonsListeners();


