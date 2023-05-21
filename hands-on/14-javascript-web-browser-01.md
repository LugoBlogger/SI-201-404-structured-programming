# Modul praktikum - Minggu 14 - *JavaScript in Web Browser* (bagian 1)

Dosen pengampu: **Henokh Lugo Hariyanto**  
Asisten mata kuliah: **Feriyanto - (10191031)**

**Tujuan**:
- Mampu memmbuat aplikasi menggunakan JavaScript
  yang dapat dijalankan di dalam *web browser*.

> Tips belajar bahasa pemrograman adalah mengetik ulang perintah yang kita 
> temukan di buku atau di internet, lalu kita ubah-ubah untuk menguji pemahaman
> kita sudah tepat atau belum. Faktor bermain-main dan eksplorasi sangat 
> diperlukan untuk memahami setiap perintah bahasa pemrograman yang kita pelajari.
> Di bagian ini kita akan mencoba membuat suatu program sederhana.
> Perhatian dengan seksama diperlukan agar saat mengikuti petunjuk
> tidak terjadi error.

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
- Menambahkan fitur *time travel* atau *history* permainan
  (opsional)

Di akhir tutorial ini, kita akan mengerti cara membuat game Tic-Tac-Toe seperti
pada gambar di bawah ini:

<img src="../img-resources/tic-tac-toe-finish-game.png" width=400>

Bagian sebelah kanan yang menunjukkan *history* 
permainan dapat dilewati jika dirasa tutorial cukup
panjang.

##  Instalasi dan persiapan 

Tutorial ini dapat juga diakses melalui [codesandbox.io](https://codesandbox.io/s/ljg0t8`) 
tanpa perlu melakukan instalasi secara lokal. Namun kita
akan melakukan tutorial untuk versi lokal supaya dapat memahami juga
proses instalasi dan persiapan untuk menyusun program menggunakan 
React. 

Disini kita tidak menggunakan React project initialization
secara langsung karena alasan keamanan 
(lihat tulisan berikut: [npm audit: Broken by Design](https://overreacted.io/npm-audit-broken-by-design/)). Disini kita akan 
menggunakan Next.js sebagai React framework.  

Langkah-langkah untuk mempersiapkan *workspace*
1. Install Node.js (lihat kembali pertemuan 1)

2. Buatlah direktori `tic-tac-toe` sebagai *workspace*

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

7. Download dua folder `pages` dan `styles` beserta isinya di
   [GitHub repository SI-201-404-structured-programming](https://github.com/LugoBlogger/SI-201-404-structured-programming/tree/master/examples/tic-tac-toe). Letakkan kedua folder tersebut
   di dalam *working directory* `tic-tac-toe`, sehingga
   didapatkan susunan direktori sebagai berikut:
   ```
   tic-tac-toe/
   ├─ node_modules/
   ├─ pages/
   │  ├─ _app.js
   │  ├─ App.js
   │  ╰─ index.js
   ├─ styles/
   │  ╰─ styles.css
   ├─ package-lock.json
   ╰─ package.json 
   ```

6. Jalankan `npm run dev` di terminal (posisi *working directory*
   berada di direktori `tic-tac-toe`).
   Tunggu sampai Next.js selesai melakukan *compiling* 
   seperti pada gambar di bawah ini

   <img src="../img-resources/tic-tac-toe-npm-run-dev.png" width=600>

   dan kemudian buka alamat berikut
   di web browser: `localhost:3000`. Jika berhasil akan
   didapatkan tampilan seperti berikut:

   <img src="../img-resources/tic-tac-toe-initial-program.png" width=400>


## Gambaran singkat terkait program dan React

Selama pengembangan program ini kita akan membuka secara bersamaan
VSCode dan web browser (dalam contoh ini akan di pakai Google
Chrome Web Browser). Ketika kita mengetikkan perintah di terminal
`npm run dev`, Next.js framework akan senantias terus menerus
melakukan `fast refresh` ketika ada di perubahan dalam program
yang kita ketikan di VScode, sehingga setiap perubahan 
(selama kode benar) akan segera di tampilkan ke web browser.
Apabila terjadi sesuatu yang tidak semestinya seperti *bug*, 
maka cukup dilakukan perintah penghentian *localhost* dengan
menekan tombol Ctrl+C di terminal VSCode.

<img src="../img-resources/tic-tac-toe-vscode-and-browser.png"
 width=800> 


 
### Isi folder `pages` dan `styles`.

Selama proses pembuatan program Tic-Tac-Toe, kita akan 
sering mengedit file `App.js`.

#### `App.js`
Di dalam file `App.js` terdapat potongan kode JavaScript berikut:
```js
export default function Square() {
  return <button className="square">X</button>;
}
```
Potongan kode di atas merupakan fungsi JavaScript bernama 
`Square()` tanpa parameter (input). Keyword `export` menunjukkan
bahwa fungsi ini akan di-*export* supaya bisa dipanggil oleh berkas
lain (yaitu `index.js`). Keyword `default` merupakan penunjuk
bahwa secara *default* fungsi ini akan di-*export* apabila
terdapat lebih dari satu fungsi di dalam file `App.js`.

Fungsi `Square()` ini akan dipanggil dan memberikan output di 
*web browser* sebagai suatu kotak yang berisi huruf "X".

Pada bagian `return`, kita melihat terdapat HTML element `<button>`
dengan attribute `className="square"`. Attribute ini akan 
secara otomatis melakukan *look-up* terhadap `styles.css` yang
terdapat dalam folder `styles`. Kita melihat disini terdapat
campuran sintaks HTML dan JavaScript, kode semacam ini 
disebut JSX (JavaScript XML).

<img src="../img-resources/tic-tac-toe-square-class-names.png"
   width=600>

#### `styles.css`

Merupakan file yang digunakan untuk mengatur *styling* dari
HTML element, seperti elemen `<button>` yang diatur
oleh `className="square"` yang secara otomatis 
memanggil styling `.square` dari file `styles.css`. 
Ada beberapa `classNames` yang telah diatur styling nya 
dan akan digunakan selama pembuatan 
program:
- `.board-row`
- `.status`
- `.game`
- `.game-info`


#### `index.js`

```js
import App from './App';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Document</title>
      </Head>
      <div id="root">
        <App />
      </div>
    </>
  );
}
```

Dua baris `import` di atas digunakan untuk memanggil fungsi 
`Square` di `App.js` yang akan memberikan keluaran (*return value*)
berupa element `<button>`. Element `<button>` ini akan diapit
(*wrapped*) dalam element `<div id="root">  </div>`.
Element `<Head>` merupakan komponen dalam Next.js yang digunakan
untuk menambahkan komponen di dalam element `<head>` HTML.

File ini menjadi jembatan antara `App.js` dan *web browser*.
Di dalam tutorial ini, kita tidak akan menyentuh file ini.


#### `_app.js`

```js
import '../styles/styles.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

Merupakan file default dari Next.js framework yang harus ada
untuk menjembatani antara styling `styles.css` dan HTML 
yang di-*generate* oleh React. Semua file `.css` yang
ada di dalam folder `styles` ini akan mempengaruhi styling 
website secara global. Untuk melakukan styling secara tersendiri
untuk masing-masing halaman web dapat dilihat pada tutorial
[Create Your First App](https://nextjs.org/learn/basics/assets-metadata-css/layout-component) di dokumentasi Next.js.
Disini kita tidak menggunakan prosedur tersebut.


### Membuat papan permainan Tic-Tac-Toe

Untuk membuat papan permainan Tic-Tac-Toe yang terdiri
dari 9 kotak yang disusun dalam grid 3x3, pertama
kita mencoba untuk menggandakan setiap `<button>` element
di dalam file `App.js`.

<img src="../img-resources/tic-tac-toe-three-squares.png" width=600>


### React `props` untuk data manipulasi komponen `Square`

### Menambahkan *interactivity*


## Menyelesaikan program Tic-Tac-Toe

### Menggunakan React `useState` untuk menyatakan `state` permainan

### Kondisi untuk menambahkan pergantian pemain


### Menambahkan fitur notifikasi untuk pemenang


## 







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
