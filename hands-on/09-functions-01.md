# Modul praktikum - Minggu 09 - *Functions* bagian 1

Dosen pengampu: **Henokh Lugo Hariyanto**  
Asisten mata kuliah: **Feriyanto - (10191031)**

**Tujuan**:
- Mampu memahami terminologi dasar terkait *functions*.
- Mampu mendefinisikan suatu *function* di JavaScript
- Mampu melakukan pemanggilan (*invocation*) suatu *function*.

> Tips belajar bahasa pemrograman adalah mengetik ulang perintah yang kita 
> temukan di buku atau di internet, lalu kita ubah-ubah untuk menguji pemahaman
> kita sudah tepat atau belum. Faktor bermain-main dan eksplorasi sangat 
> diperlukan untuk memahami setiap perintah bahasa pemrograman yang kita pelajari.
> Setiap potongan kode di bawah dapat ditulis dalam berkas `.js` lalu
> dapat di-*running* dengan Node.js.

Fungsi merupakan suatu bentuk abstraksi untuk mewakili proses yang menghubungkan
input dan output. Beberapa bahas pemrograman lain yang cukup lama
seperti C, C++, dan Fortran, menyebuh fungsi sebagai *subroutine* atau 
*procedure*.

Maksud dari proses abstraksi tersebut adalah, dengan menggunakan fungsi
kita bisa mewakili suatu prosedur yang panjang dan dipakai berulang 
dan menamakan prosedur tersebut sebagai suatu fungsi. Hal ini tentunya
akan mempermudah pekerjaan kita, ketika kita dihadapkan dengan masalah
yang hampir serupa, dan kita cukup menggunakan (memanggil) fungsi tersebut
tanpa harus mengetik berulang-ulang proses yang diwakili fungsi tersebut.

Kemampuan berabstraski sangat diperlukan untuk bisa menyusun fungsi yang
benar dan efisien. Pembuatan fungsi dimulai dengan menuliskan prosedur
secara modular (terpisah-pisah), setelah terlihat strukturnya kita
bisa menggabungkan prosedur tersebut ke dalam suatu fungsi.

Dengan fungsi, kita juga dapat mengimplementasi berbagai macam 
algoritma-algoritma pemecahan masalah. Di akhir pertemuan tentang
fungsi ini, kita akan mencoba untuk menyusun algoritma sederhana

Beberapa hal yang akan kita pelajari di sesi ini adalah:
1. Istilah-istilah dasar dalam fungsi 
2. Cara mendeklarasikan fungsi
3. Pemanggilan fungsi


## Istilah-istilah dasar dalam fungsi

## Function declaration
- menggunakan nama fungsi 

- variable yang bernilai suatu fungsi

- *arrow function*

- Fungsi yang memuat fungsi (*nested* function)

## Function invocation
- fungsi dipanggil sebagai fungsi
- fungsi dipanggil sebagai method
- pemanggilan fungsi secara tidak langsung



## Tugas (Exercise - 06)
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

1. [30 poin] Sebutkan 3 kegiatan yang kalian lakukan sehari-hari yang 
   dapat diubah menjadi suatu fungsi. 
   Implementasi fungsi tersebut kedalam JavaScript. Berikan juga contoh
   penggunaanya.

   Berikut contoh salah satu kegiatan yang mungkin.
   ```js
   // Berikut adalah fungsi untuk menggambarkan kegiatan makan
   function angkatSendok(n) {
     for (let i = 0; i < n; i++>) {
       console.log(`menangangkat sendork yang ke-${i+1} kali`);
     }
   }

   angkatSendok(4);
   ```
   

2. [70 poin] Buatlah suatu fungsi untuk mengkonversi suatu bilangan ke
   bentuk string yang merupakan pembacaan bilangan tersebut:
   - 1, menjadi 'satu',
   - 2, menjadi 'dua',
   - 3, menjadi 'tiga',
   - 4, menjadi 'empat',
   - 5, menjadi 'lima',
   - dst.
   Fungsi yang akan kalian buat tersebut harus mampu mengkonversi
   hingga bilangan ke-100.