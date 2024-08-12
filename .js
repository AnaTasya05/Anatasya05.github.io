// Mendapatkan elemen-elemen yang diperlukan
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Pastikan ini sesuai dengan kelas yang Anda gunakan

let sections = document.querySelectorAll('section'); // Perbaiki 'selection' menjadi 'section'
let navLinks = document.querySelectorAll('header nav a'); // Pastikan ini sesuai dengan selector yang digunakan

// Event listener untuk scroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Perbaiki 'offseTop' menjadi 'offsetTop'
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // Perbaiki 'set' menjadi 'sec'

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active'); // Perbaiki selector
            });
        }
    });
};
menuIcon.onlick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}