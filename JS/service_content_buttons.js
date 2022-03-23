{
    function makeButtons() {

        const buttonArea = document.getElementsByClassName('card__button');

        for(element of buttonArea) {
            const button = document.createElement('div');
            button.innerHTML = '<img src=../service_content/arrow_down.svg>';
            button.style.transform = 'rotate(540deg)';
            button.style.transition = 'all 1.5s cubic-bezier(.31,1.75,.24,-0.57)'
            button.style.cursor = 'pointer';
            button.classList.add('js-button');
            element.append(button);
        }
    }

    makeButtons();
}

function addButtonsListeners() {

    const collection = document.getElementsByClassName('js-button');

    const buttons = Array.from(collection);

    const contents = [];

    for(button of buttons) {
        let element = button.parentNode.nextSibling.nextSibling;
        contents.push(element);
    }

    function openCloseMenu(button, content) {
        if(button.style.transform == 'rotate(0deg)'){
            button.style.transform = 'rotate(540deg)';
        } else button.style.transform = 'rotate(0deg)';
        content.classList.toggle('opened');
    }

    for(let i=0; i < buttons.length; i++) {
        let button = buttons[i];
        let content = contents[i];
        button.addEventListener('click', () => {openCloseMenu(buttons[i], contents[i])});
    };
};

addButtonsListeners();


