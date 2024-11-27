// Ambil semua link
const links = document.querySelectorAll('a');

// Menambahkan efek zoom saat diklik
links.forEach(link => {
    link.addEventListener('mousedown', (e) => {
        e.target.style.transform = 'scale(0.95)'; // Zoom out saat klik
        e.target.style.transition = 'transform 0.2s ease'; // Menambahkan transisi
    });

    link.addEventListener('mouseup', (e) => {
        e.target.style.transform = 'scale(1)'; // Kembali ke ukuran normal setelah klik dilepaskan
    });

    link.addEventListener('mouseout', (e) => {
        e.target.style.transform = 'scale(1)'; // Pastikan saat mouse keluar kembali ke ukuran normal
    });
});