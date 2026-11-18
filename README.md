# CV Hanifan Octoza Al F.

Website CV satu halaman menggunakan React 19 dan Vite. Struktur dibuat sederhana: konten CV ada di `src/data/profile.js`, komponen tampilan ada di `src/components`, sedangkan layout utama ada di `src/App.jsx`.

## Menjalankan proyek

Pastikan Node.js dan npm sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Untuk membuat build produksi: `npm run build`.

## Memperbarui data CV

Edit `src/data/profile.js`. Setiap riwayat pengalaman dan pendidikan menggunakan objek berikut:

```js
{ period: '2024 — 2025', title: 'Jabatan / gelar', organization: 'Nama organisasi', location: 'Kota', description: 'Ringkasan kontribusi.' }
```

Kontak yang belum tersedia dibiarkan kosong agar tidak menampilkan tautan palsu. File CV PDF diletakkan di `public/cv-hanifan.pdf` dan dipakai sebagai unduhan dari tombol di halaman utama.
