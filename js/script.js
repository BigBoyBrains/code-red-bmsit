// Custom circular cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Cursor position on mousemove
document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
    cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
});

// Overlap subtraction effect
document.querySelectorAll('h1').forEach((heading) => {
    heading.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(6)';
        cursor.classList.add('over-text');  // add blend-mode class
    });
    
    heading.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.classList.remove('over-text');  // remove blend-mode class
    });
});

// Make nav-link red on click (active)
document.querySelectorAll('.nav-link').forEach((navLink) => {
    navLink.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
