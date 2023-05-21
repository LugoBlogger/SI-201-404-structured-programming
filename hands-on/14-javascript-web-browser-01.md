# Modul praktikum - Minggu 14 - *JavaScript in Web Browser* (bagian 1)

Dosen pengampu: **Henokh Lugo Hariyanto**  
Asisten mata kuliah: **Feriyanto - (10191031)**

**Tujuan**:
- Mampu memahami beberapa aplikasi JavaScript dalam web browser

Pada tahap ini kita akan belajar salah satu framework yang populer untuk
untuk pembuatan program menggunakan bahasa pemrograman JavaScript, 
yaitu React.

React ini merupakan JavaScript library yang diperuntukkan untuk membangun
tampilan antarmuka (*user interface*). Tiga fitur utama dari React adalah
- Deklaratif
- Berbasis pada komponen
- Bisa digunakan untuk membangun aplikasi di berbagai platform (
  di server menggunakan Node.js dan di perangkat mobile menggunakan 
  React Native)

Berikut ini akan diuraikan tutorial sederhana membangun aplikasi game
sederhana *Tic-Tac-Toe* yang diambil panduan awal di dalam dokumentasi
*library* React.

Tutorial ini akan dibagi menjadi 4 tahap, yaitu:
- Instalasi dan persiapan *workspace* untuk pemgembangan game *Tic-Tac-Toe*
- Gambaran singkat terkait gagasan fundamental di dalam React
- Menyelesaikan pembuatan game

Di akhir tutorial ini, kita akan mengerti cara membuat game Tic-Tac-Toe seperti
pada gambar di bawah ini:

<img src="../img-resources/tic-tac-toe-finish-game.png" width=600>

##  Instalasi dan persiapan 

Tutorial ini dapat juga diakses melalui [codesandbox.io](https://codesandbox.io/s/ljg0t8`) 
tanpa perlu melakukan instalasi secara lokal. Namun kita
akan melakukan tutorial untuk versi lokal supaya dapat memahami juga
proses instalasi dan persiapan untuk menyusun program menggunakan 
React. 

Langkah-langkah untuk mempersiapkan *workspace*
1. Install Node.js (lihat kembali pertemuan 1)

2. Disini kita tidak menggunakan React project initialization
   secara langsung karena alasan keamanan 
   (lihat tulisan berikut: [npm audit: Broken by Design](https://overreacted.io/npm-audit-broken-by-design/)). Disini kita akan 
   menggunakan Next.js sebagai React framework.    
   Buatlah direktori `tic-tac-toe` sebagai *workspace*

3. Didalam direktori `tic-tac-toe`, buatlah file `package.json` 
   dengan isi *empty object* sebagai berikut:     
   ```json
   {
   }
   ```
   Buka terminal di VSCode, dan pindah lokasi 
   *working directory* ke dalam direktori 
   `tic-tac-toe`. Lalu jalankan perintah berikut melalui terminal di VSCode, 
   ```bash
   npm install react react-dom next
   ```

4. Setelah menjalankan perintah di atas struktur direktori
   menjadi seperti berikut: 
   ```
   tic-tac-toe/
   ├─ node_modules/
   ├─ package-lock.json
   ╰─ package.json 
   ```
5. Susun secara rapi data JSON dalam `package.json` dan tambahkan
   *property* berikut:
   ```json
   // package.json
   {
    "scripts": {
      "dev": "next dev"
    },
    ...
   }
   ```
   *Property* tersebut akan memberikan kita perintah untuk 
   menjalankan `npm run dev` menggunakan Next.js framework.

7. Download dua folder `pages` dan `styles` di
   []()

6. Jalankan `npm run dev` di terminal dan buka alamat berikut
   di web browser: `localhost:3000`. Jika berhasil akan
   didapatkan tampilan seperti berikut:

   <img src="../img-resources/tic-tac-toe-initial-program.png" width=400>



> Tips belajar bahasa pemrograman adalah mengetik ulang perintah yang kita 
> temukan di buku atau di internet, lalu kita ubah-ubah untuk menguji pemahaman
> kita sudah tepat atau belum. Faktor bermain-main dan eksplorasi sangat 
> diperlukan untuk memahami setiap perintah bahasa pemrograman yang kita pelajari.
> Setiap potongan kode di bawah dapat ditulis dalam berkas `.js` lalu
> dapat di-*running* dengan Node.js atau dijalankan bersamaa
> dengan berkasi .html dan .css di dalam web browser





## Self-exercise
> Self-exercise ini tidak perlu dikumpulkan, hanya sebagai
> tambahan bagi yang ingin melakukan eskplorasi lebih dalam
> terkait JavaScript dan game Tic-Tac-Toe. Self-exercise
> ini diambil dari Tutorial: Tic-Tac-Toe di dalam dokumentasi
> React.

1. Gantilah text dalam tombol *history*, sehingga menjadi 
   tertulis "You are at move #...".
2. Tulis ulang komponen `Board` menggunakan dua *loops*.
3. Tambahkan tombol on-off (*toggle button*) 
   untuk mengurutkan urutan langkah dari awal sampai akhir 
   (atau susunan sebaliknya)
4. Ketika ada pemain yang menang, tambahkan penanda
   (*highlight*) ke kotak-kotak `Board` Tic-Tac-Toe 
   untuk pemain yang menang. Jika terjadi *draw*, 
   tampilkan pesan bahwa terjadi hasil pertandingan *draw*
   (seimbang)
5. Tampilkan lokasi setiap langkah dalam format (baris, kolom)
   di setiap daftar *history* langkah.
