// Loader
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
});

// Accordion Interactivity
document.querySelectorAll('.accordion').forEach(section => {
    section.addEventListener('click', () => {
        const content = section.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
    });
});

document.querySelectorAll('.accordion').forEach(item => {
    item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle('show');
    });
});

// Sticky Navbar Color Change
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#007860';
        nav.style.transition = '0.5s';
    } else {
        nav.style.backgroundColor = '#000000';
    }
});
