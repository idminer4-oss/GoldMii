// script.js

// Inisialisasi Data (Ambil dari penyimpanan HP/Browser)
let balance = parseFloat(localStorage.getItem('gold_balance')) || 0.0000;
let hashrate = parseFloat(localStorage.getItem('hashrate')) || 1.0;

// Update tampilan di semua halaman
function updateUI() {
    const balEl = document.getElementById('bal-gold');
    const idrEl = document.getElementById('bal-idr');
    const hsEl = document.getElementById('current-hs');

    if(balEl) balEl.innerText = balance.toFixed(4);
    if(idrEl) idrEl.innerText = '≈ Rp ' + (balance * 1000).toLocaleString('id-ID');
    if(hsEl) hsEl.innerText = hashrate + ' Hs';
    
    // Simpan data terbaru
    localStorage.setItem('gold_balance', balance);
    localStorage.setItem('hashrate', hashrate);
}

// Fungsi Tambang (Klaim)
function claimGold() {
    let yield = 0.5000 * hashrate;
    balance += yield;
    alert("Berhasil Klaim " + yield.toFixed(4) + " EMAS");
    updateUI();
}

// Fungsi Beli Hashrate
function buyHash(price, power) {
    if (balance >= price) {
        balance -= price;
        hashrate += power;
        alert("Pembelian Berhasil! Kecepatan + " + power);
        updateUI();
    } else {
        alert("Saldo EMAS tidak cukup!");
    }
}

// Jalankan update saat halaman dibuka
window.onload = updateUI;