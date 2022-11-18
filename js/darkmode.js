const buttonToggle = document.querySelector('.button-darkmode');
let darkmode = false;

buttonToggle.addEventListener('click', () => {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const modals = document.querySelectorAll('.modal');
    const mHeaders = document.querySelectorAll('.modal-header');
    const githubLinks = document.querySelectorAll('.modal-github');
    const githubIcons = document.querySelectorAll('.github-icon');
    const demoLinks = document.querySelectorAll('.modal-live');
    body.classList.toggle('darkmode-background');
    header.classList.toggle('darkmode-header');
    main.classList.toggle('darkmode-main');
    footer.classList.toggle('darkmode-footer');
    modals.forEach((modal) => {
        modal.classList.toggle('darkmode-element');
    });
    mHeaders.forEach((header) => {
        header.classList.toggle('darkmode-m-header');
    });
    if (darkmode === false) {
        darkmode = true;
        buttonToggle.textContent = String.fromCodePoint(0x1F315);
        githubLinks.forEach((link) => {
            link.style.cssText = 'color: #FAFAFA;';
        });
        demoLinks.forEach((link) => {
            link.style.cssText = 'color: #FAFAFA;';
        });
        githubIcons.forEach((icon) => {
            icon.src = './img/icons/GitHub-Mark-Light-32px.png';
        });
    } else {
        darkmode = false;
        buttonToggle.textContent = String.fromCodePoint(0x1F311);
        githubLinks.forEach((link) => {
            link.style.cssText = 'color: #000000;';
        });
        demoLinks.forEach((link) => {
            link.style.cssText = 'color: #000000;';
        });
        githubIcons.forEach((icon) => {
            icon.src = './img/icons/GitHub-Mark-32px.png';
        });
    }
});