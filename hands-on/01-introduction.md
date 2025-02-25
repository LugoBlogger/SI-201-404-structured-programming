# Modul praktikum - Minggu 01 - Pengantar

Dosen pengampu: **Henokh Lugo Hariyanto**  
Asisten mata kuliah: **Dahayu Azhka Daeshawnda - (10231027)**; **Dyno Fadhillah Ramadhani- (10231033)**

**Tujuan**: 
- Mampu menjalankan program JavaScript di *browser* maupun di Node.js.
- Mampu menuliskan laporan sederhana menggunakan *markdown*.

Pada modul praktikum ini, kita akan mempelajari sedikit tentang JavaScript, 
menjalankan program sederhana di *Web Browser*, instalasi VSCode, instalasi
Node.js, menjalankan kode JavaScript di Node.js. 

> Tips belajar bahasa pemrograman adalah mengetik ulang perintah yang kita 
> temukan di buku atau di internet, lalu kita ubah-ubah untuk menguji pemahaman
> kita sudah tepat atau belum. Faktor bermain-main dan eksplorasi sangat 
> diperlukan untuk memahami setiap perintah bahasa pemrograman yang kita pelajari.

## Sedikit hal tentang JavaScript

Bagian ini hanya menambahkan sedikit yang akan (sudah?) dijelaskan dalam kuliah.  
JavaScript bermula dari pengembangan *web browser* Netscape Navigator. 
Dalam rilis Navigator tahun 1995, Brendan Eich mengembangkan bahasa pemrograman
JavaScript. *Web browser* sebelumnya masih sangat statis (tidak dapat 
menampilkan hal yang bergerak / animasi). Berikut sedikit gambaran web statis
sebelum JavaScript

<img src="../img-resources/ncsa-mosaic-1.0.jpg" width="400">

Pada release perdana JavaScript di *web browser* Netscape Navigator 2.0, saat itu JavaScript hanya mampu menampilkan 
*dialog alert box*, belum seperti tampilan pada zaman sekarang

<img src="../img-resources/netscape2-first-release-javascript.png" width="400">"

(video selengkapnya dapat dilihat [disini](https://cdn.auth0.com/blog/js-history/netscape2.mp4))

Untuk saat ini di tahun 2024, JavaScript di _web browser_ sudah mampu untuk 
memberikan fitur *onlide coding* dan menampilkan hasilnya di *web browser* 
(sumber: [Squid Game - Opening Title](https://codepen.io/Mamboleoo/pen/abybJZN))   

<img src="../img-resources/squid-game-opening-title-anim.gif" width="400">   
<!--
(sumber: [CodePen: CSS Trigonometric function DNA strand 🤓](https://codepen.io/jh3y/pen/GRBVNJE))   

<img src="../img-resources/animation-using-javascript.png" width="600">   
-->

Di bagian berikutnya kita akan membahas hal yang lebih sederhana yaitu 
cara untuk menjalankan kode JavaScript di *web browser*.

## Menjalankan kode JavaScript di *Web Browser*

Berikutnya kita akan mencoba menjalankan kode JavaScript berikut

```js
  console.log("Hello world!");
```

Untuk dapat menjalankan perintah tersebut kita akan melalui berbagai tahapan
berikut:
1. Kita siapkan terlebih dahulu direktori untuk menampung semua berkas 
   JavaScript dan satu tambahan berkas HTML. Misal kita buat nama direktory
   `hello`. Di dalam direktori tersebut, kita isi berkas berekstensi
   JavaScript, `.js`, dengan nama `hello.js` yang berisikan kode
   JavaScript di atas. Untuk membuat kedua berkas tersebut dapat menggunakan
   *text editor* seperti Notepad, Notepad++, GEdit, atau VSCode (yang
   akan kita jelaskan di bagian berikutnya).
   
2. Berikutnya kita buat berkas HTML berekstensi `.html` dan berisi kode 
   HTML berikut:   
    ```html
    <script src="hello.js"></script>
    ```
   Kita namakan berkas tersebut `hello.html`.

3. Setelah kedua berkas dibuat, buka *web browser* favorit kalian.
   Pada contoh ini, kita akan menggunakan Google Chrome *web browser*
   yang terpasang pada sistem operasi Linux. Buka halaman baru, 
   lalu tekan `Ctrl + O` untuk membuka berkas `hello.html`.
   Maka halaman baru tersebut hanya menampilkan halaman berwarna putih
   kosong   
   <img src="../img-resources/web-browser-open-hello-world-html.png" width="400">
   
4. Selanjutnya, tekan tombol `F12` untuk masuk ke jendela *Developer Tools*
   dari Google Chrome *web browser*. Maka akan muncul keluaran dari program
   yaitu menuliskan `"Hello World!"` pada bagian `console`   
   <img src="../img-resources/hello-world-output.png" width="400">

5. Kita dapat mengubah-ubah isi dari `hello.js`, lalu kita perlu
   me-*refresh* halaman `hello.html` untuk melihat perubahan di jendela
   *console* Google Chrome. Pada tahap ini kita dapat melihat bahwa sebenarnya
   *web browser* sudah memuat suatu program untuk menerjemahkan kode
   JavaScript tanpa perlu menginstal program tambahan   
   <img src="../img-resources/three-windows-to-edit-refresh-update.png" width="400">

## Instalasi VSCode

Ada banyak tutorial di internet dan YouTube mengenai instalasi VSCode di 
Windows, Mac, dan Linux. Namun disini hanya disampaikan secara singkat 
instalasi VSCode.

1. Pertama-tama, unduh berkas *installer* di tautan berikut: 
   https://code.visualstudio.com/download.    
   Pilih sesuai dengan jenis sistem operasi yang kita miliki.   
   <img src="../img-resources/2025-download-vscode-installer.png" width="400">

2. Setelah itu jalankan *installer* Windows dan ikuti perintah yang ditampilkan
   pada dialog instalasi.

3. Jika telah selesai dilakukan instalasi, maka akan muncul tampilan jendela
   *Welcome page*   
   <img src="../img-resources/2025-welcome-page-vscode.png" width="400">   
   Berikutnya dapat dipilih *working directory* tempat menaruh berkas-berkas
   kode JavaScript yang akan dipelajari sepanjang sesi praktikum. 
   Agar lebih tertata-rapi buat di dalamnya direktori tambahan yang memisahkan
   berkas-berkas untuk tiap pertemuan, misal: `week-01`, `week-02`, dst.

## Instalasi `Node.js`

Untuk `Node.js` yang digunakan adalah versi LTS (Long-Term Support) 22.14.0
yang ter-*update* sampai bulan Februari 2025. Versi `Node.js` ini harus
di-instal dengan versi NPM (Node Package Manager) yang bersesuaian 
yaitu versi 10.9.2. Kesesuaian antara versi `Node.js` dan NPM dapat dilihat 
di halaman ["Node.js Releases"](https://nodejs.org/en/about/previous-releases).

Agar bisa menggunakan berbagai versi `Node.js`, maka diperlukan NVM 
(Node Version Manager). Versi yang akan kita gunakan adalah versi 1.2.2
yang ter-*update* hingga January 2025. Versi NVM ini adalah versi NVM for Windows.  
Di tahun-tahun berikutnya akan ada rencana untuk mengganti NVM ini dengan 
aplikasi yang lebih baru yaitu **Runtime**. Silahkan cek untuk lebih lengkap di 
halaman GitHub [nvm-windows](https://github.com/coreybutler/nvm-windows).
Untuk Linux atau Mac, versi terbaru NVM adalah 0.40.1 yang dirilis di bulan August 2024.

Tahapan instalasi `Node.js` untuk Window tidak sederhana, namun panduannya bisa
diikuti dari 
1. [NVM for Windows](https://github.com/coreybutler/nvm-windows/wiki#manual-installation), atau 
2. [Install NodeJS on Windows](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows) (update 2024/Dec/13)

Catatan: Setelah instalasi untuk dilakukan restart supaya dapat menjalankan
perintah `node` di PowerShell.

Perlu diingat NVM for Windows sangat berbeda dengan
NVM yang ada untuk Mac dan Linux. Saya menyarankan untuk mengikuti panduan 
nomor 2, meskipun sebenarnya kedua panduan melakukan instalasi file yang sama.

Untuk tahapan instalasi Linux atau Mac sangat mudah, tinggal mengetikan baris- baris perintah berikut di Terminal
```sh
# Unduh dan jalankan script untuk menginstall NVM versi 0.40.1
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Untuk memverifikasi proses instalasi
nvm -v 

# Install node.js dan NPM yang bersesuain dengan versi node js 22.14.0 
nvm install 22.14.0
```

## Menjalankan kode JavaScript di Node.js
Setelah proses instalasi VSCode dan Node.js telah berhasil dilakukan, maka
kita dapat melakukan proses pembelajaran JavaScript lebih mudah.

Di dalam direktori yang telah dibuat di _workspace_ VSCode, dan setelah membuat 
berkas `.js`, kita dapat menjalankan kode JavaScript tersebut pada bagian 
terminal di VSCode. Jika bagian terminal di VSCode belum muncul, klik menu 
"Terminal" dan pilih "New Terminal". Menu "Terminal" kadang-kadang tertutupi 
oleh "Search Box" yang terletak di posisi atas tengah dari jendela VSCode.
Untuk itu perlu di klik ". . .", agar menu "Terminal" terlihat.

Arahkan direktory di tempat berkas JavaScript yang ingin dijalankan berada,
lalu ketik perintah berikut di terminal VSCode.
```bash
node nama_file.js
```

Berikut gambaran menggunakan `Node.js` dan VScode beserta penulisan kode
JavaScript   
<img src="../img-resources/nodejs-and-vscode.png" width="400">


## Tutorial singkat Markdown

Bisa mengikuti panduan berikut: [Markdown Guide](https://www.markdownguide.org/basic-syntax/).
Di dalam panduan tersebut, kita bisa mencoba satu per satu sintaks yang 
dimiliki oleh Markdown. Namun kita bisa mencoba kode Markdown yang diberikan
pada gambar di bawah ini

<img src="../img-resources/markdown-example.png" width="400">

Untuk bisa menampilkan kode Markdown dalam bentuk seperti yang disebelah kanan, 
perlu di-install VSCode extension: [**Markdown Preview Github Styling**](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles).

## Tugas (Exercise - 01)
> Laporan harus ditulis dan dikumpulkan dalam bentuk berkas 
> *markdown* atau berkas berekstensi `.md`. Apabila laporan memuat lebih 
> dari satu berkas, misal memuat berkas gambar `.png` atau `.jpg`, maka
> berkas disatukan menjadi berkas `.zip`.   
> **PASTIKAN** berkas `md` sudah dilakukan *preview*, sehingga kode *markdown*
> bisa di-*preview* dengan benar.  
> Format penamaan file: `NIM_NAMA.md` atau `NIM_NAMA.zip` (boleh nama
> lengkap atau nama panggilan.

1. Tuliskan pengalaman belajar mulai dari awal praktikum hingga praktikum 
   selesai. Bisa menyertakanan *screenshot*, atau potongan kode selama
   praktikum.
2. Berikan kelebihan dan kekurangan menggunakan *browser* dan *Node.js*.
3. Jalankan program berikut melalui *Node.js*.  
    ```js
    let randomQuote;
    const quotes = [
      "The best way to predict the future is to create it.",
      "Be the change you wish to see in the world.",
      "Innovation distinguishes between a leader and a follower.",
      "Believe you can and you're halfway there.",
      "Your time is limited, don't waste it living someone else's life."];

    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(randomQuote);
    ``` 
    Selanjutnya apakah yang terjadi jika secara terus menerus hanya menjalankan dua baris terakhir?