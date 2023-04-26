# Modul praktikum - Minggu 11 - *JavaScript Standard Library*

Dosen pengampu: **Henokh Lugo Hariyanto**  
Asisten mata kuliah: **Feriyanto - (10191031)**

**Tujuan**:
- Mampu memahami *parameters* dan *arguments* dari suatu fungsi
- Mampu memahami nilai yang dihasilkan fungsi, maupun *side effect*
- Mampu memahami dasar *functional programming* di JavaScript

> Tips belajar bahasa pemrograman adalah mengetik ulang perintah yang kita 
> temukan di buku atau di internet, lalu kita ubah-ubah untuk menguji pemahaman
> kita sudah tepat atau belum. Faktor bermain-main dan eksplorasi sangat 
> diperlukan untuk memahami setiap perintah bahasa pemrograman yang kita pelajari.
> Setiap potongan kode di bawah dapat ditulis dalam berkas `.js` lalu
> dapat di-*running* dengan Node.js.



## Tugas (Exercise - 08)
> Laporan harus ditulis dan dikumpulkan dalam bentuk berkas 
> *markdown* atau berkas berekstensi `.md`. Apabila laporan memuat lebih 
> dari satu berkas, misal memuat berkas gambar `.png` atau `.jpg`, maka
> berkas disatukan menjadi berkas `.zip`.   
> **PASTIKAN** berkas `md` sudah dilakukan *preview*, sehingga kode *markdown*
> bisa di-*preview* dengan benar.  
> Format penamaan file: `NIM_NAMA.md` atau `NIM_NAMA.zip` (boleh nama
> lengkap atau nama panggilan).
> 
> **Contoh format laporan atau jawaban (`NIM_NAMA.md`)**    
> Nama: [NAMA LENGKAP]   
> NIM: [NIM]
> 1. (Jawaban nomor 1)
> 2. (Jawaban nomor 2)

Di minggu ini kita akan membahas beberapa *standard library* atau bisa
dibilang *function* dan *class* yang tersedia secara *default* dalam
bahasa pemrograman JavaScript

Ada beberapa *library* yang akan kita bahas. 
- Sets and Maps
- Typed Arrays and Binary Data
- Regular Expression
- Dates and Times
- Console API
- Timer

*Library* yang disebutkan diatas hanyalah segelintir dari berbagai macam
*standar library* dan *built-in object* dalam JavaScript. Lebih lengkap dapat
melihat dokumentasi di Mozilla Documentation Network tentang 
[Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) 
dan [Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

## Sets and Maps

*Sets* merupakan dasar di JavaScript yang digunakan untuk mewakili
objek matematis himpunan (ingat kembali di mata kuliah matematika
diskrit terkait himpunan). Secara singkat yang menjadi ciri khas
objek *Sets* ini adalah seluruh elementnya idak memperboleh
ada yang duplikat. Bisa dikatakan *Sets* merupakan bentuk
khusus dari *Array* yang mengharuskan elementnya tidak ada yang 
duplikat/ganda.

Empat hal yang akan kita jelajahi dalam objek *Sets* ini adalah
- membuat objek *Sets*    
  **create-set.js**     
  ```js
  let s = new Set();        // Membuat set s tanpa element/anggota
  let t = new Set([1, s])   // Membuat set t dengan dua anggota

  // Membuat set u dari string
  let unique_str = new Set("Balikpapan");   // huruf a dan p akan dihitung sekali
  ```

- memanipulasi objek *Sets*      
  **manipulate-set.js**    
  ```js
  let s = new Set();    // Membuat set s tanpa element
  console.log(s);

  s.add(1);             // Menambahkan element 1
  console.log(s);

  s.add(1);             // Menambahkan element yang sama tidak mengubah apapun
  console.log(s);

  s.add(true);          // Menambahkan element selain 1, yaitu true
  console.log(s);

  s.add([1, 2, 3]);     // Menambahkan element berupa array [1,. 2, 3]
  console.log(s);

  s.delete(1);          // Menghapus element 1
  console.log(s);

  s.delete("test")      // Menghapus element yang tidak ada, tidak mengubah apapun
  console.log(s);

  s.delete(true);       // Menghapus element true
  console.log(s)

  s.delete([1, 2, 3])   // Menghapus array [1, 2, 3] gagal karena array yang dicari dan yang ada di set s memiliki referensi yang berebeda
  console.log(s);

  s.clear();             // Menghapus semua element set s
  ```

- menguji keanggotaan suatu element dalam *Sets*     
  **membership-set.js**    
  ```js
  let result;
  let oneDigitPrimes = new Set([2, 3, 5, 7]);

  result = oneDigitPrimes.has(2);   // 2 ada di dalam set oneDigitPrimes
  console.log(result);

  result = oneDigitPrimes.has(4);   // 4 tidak ada di dalam set oneDigitPrimes
  console.log(result);
  ```

- Melakukan iterasi element *Sets*   
  Sepertinya halnya *array*, iterasi juga dapat dilakukan ke masing-masing
  element dari *Sets*    
  **iterate-set.js**
  ```js
  let result;
  
  // Membuat set yang tersusun dari 4 buah bilangan prima berdigit tunggal
  let oneDigitPrimes = new Set([2, 3, 5, 7]);

  // Menghitung jumlahan keseluruhan element oneDigitPrimes
  let sum = 0;
  for (let p of oneDigitPrimes) {
    sum += p;
  }
  console.log(sum)

  // Spread operator dapat juga diterapkan untuk menjadikan
  // set sebagai array
  result = [...oneDigitPrimes];
  console.log(result instanceof Array);
  ```


Objek berikutnya adalah *Map*. Secara garis besar, *Map* merupakan
perluasan/perumuman dari objek *array*. Objek *Map* ini sangat
miirp dengan objek *dict* pada Python. Di dalam objek *Map* ini
tersusun atas serangkaian pasangan *key* dan *value*.


## Typed Arrays and Binary Data

## Pattern Matching with Regular Expression

## Dates and Times

## Console API

## Timers

1. [30 poin]

2. [70 poin] Teknik *obfusticating* digunakan untuk menutupi identitas
   sebenarnya dari suatu data. Seorang *software engineer* memiliki data
   mahasiswa program studi ITK yang mengambil mata kuliah 
   Pemrograman Terstruktur (unduh berkas JSON disini)