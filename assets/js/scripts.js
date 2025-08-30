const toggleTheme = document.getElementById('toggleTheme');

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
