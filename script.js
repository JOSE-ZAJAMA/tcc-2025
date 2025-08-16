// Dark mode toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

// Responsive menu toggle
const menuBtn = document.getElementById('menu-toggle');
const menuList = document.querySelector('.navbar ul');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
});