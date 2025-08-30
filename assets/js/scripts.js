const toggleTheme = document.getElementById('toggleTheme');
const accordionHeaders = document.querySelectorAll('.accordion__header');
const menuLinks = document.querySelectorAll('.menu__link');
toggleTheme.addEventListener('click', changeTheme);

function changeTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon();
}

function updateIcon() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    toggleTheme.classList.toggle('bi-moon-stars', currentTheme === 'light');
    toggleTheme.classList.toggle('bi-sun', currentTheme === 'dark');
}

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const body = accordionItem.querySelector('.accordion__body');
        body.style.display = body.style.display === 'block' ? 'none' : 'block';
    });
});

menuLinks.forEach(item => {
    item.addEventListener('click', () => {
        const menuItem = item.parentElement;
        menuItem.classList.toggle('active');
    });
});