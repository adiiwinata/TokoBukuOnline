const books = [
  { title: 'Belajar HTML & CSS', author: 'Andi Prasetyo', price: 'Rp50.000' },
  { title: 'Dasar-Dasar JavaScript', author: 'Rina Setiawan', price: 'Rp65.000' },
  { title: 'Web Programming untuk Pemula', author: 'Budi Santoso', price: 'Rp75.000' },
  { title: 'Database MySQL', author: 'Citra Dewi', price: 'Rp80.000' },
  { title: 'Python untuk Pemula', author: 'Eka Saputra', price: 'Rp90.000' },
  { title: 'Pemrograman PHP Modern', author: 'Lina Wulandari', price: 'Rp88.000' },
  { title: 'Laravel untuk Semua', author: 'Joko Prabowo', price: 'Rp100.000' },
  { title: 'Desain UI/UX', author: 'Mira Kartika', price: 'Rp70.000' },
  { title: 'React Dasar', author: 'Fahmi Nur', price: 'Rp95.000' },
  { title: 'Node.js Praktis', author: 'Bayu Rahman', price: 'Rp110.000' },
  { title: 'Membuat API dengan Express', author: 'Rizky Andika', price: 'Rp98.000' },
  { title: 'Bootstrap untuk Web Modern', author: 'Sari Putri', price: 'Rp76.000' },
  { title: 'Algoritma dan Logika Pemrograman', author: 'Tommy Susanto', price: 'Rp85.000' },
  { title: 'Pemrograman Java OOP', author: 'Rika Handayani', price: 'Rp92.000' },
  { title: 'Flutter Dasar', author: 'Anwar Malik', price: 'Rp120.000' },
];

const bookListContainer = document.getElementById('bookList');

books.forEach(book => {
  const card = document.createElement('div');
  card.className = 'book-card';
  card.innerHTML = `
    <h3>${book.title}</h3>
    <p>Penulis: ${book.author}</p>
    <p>Harga: ${book.price}</p>
  `;
  card.onclick = () => showDetail(book.title, book.author, book.price);
  bookListContainer.appendChild(card);
});

function showDetail(title, author, price) {
  document.getElementById('detail-title').textContent = title;
  document.getElementById('detail-author').textContent = 'Penulis: ' + author;
  document.getElementById('detail-price').textContent = 'Harga: ' + price;
  document.getElementById('book-detail').classList.remove('hidden');
}

function closeDetail() {
  document.getElementById('book-detail').classList.add('hidden');
}
