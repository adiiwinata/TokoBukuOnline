function showDetail(title, author, price) {
  document.getElementById('detail-title').innerText = title;
  document.getElementById('detail-author').innerText = "Penulis: " + author;
  document.getElementById('detail-price').innerText = "Harga: " + price;
  document.getElementById('book-detail').classList.remove('hidden');
}

function closeDetail() {
  document.getElementById('book-detail').classList.add('hidden');
}
