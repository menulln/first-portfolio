const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('click', (e) => {
        const modal = document.querySelector(`.m-${e.target.parentElement.classList[1]}`);
        const close = modal.firstElementChild.querySelector('.close');
        console.log(modal);
        console.log(close);
        modal.style.cssText = 'display: block';
        close.addEventListener('click', () => {
            modal.style.cssText = 'display: none;';
        });
        window.addEventListener('click', (e) => {
            if (e.target.classList[0] === 'header' || e.target.classList[0] === 'main-wrapper' || e.target.classList[0] === 'cards') {
                modal.style.cssText = 'display: none;';
            }
        });
    })
});