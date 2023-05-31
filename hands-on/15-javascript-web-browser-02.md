# Modul praktikum - MingVgu 15 - JavaScript dalam Web Browser (bagian 2)

Dosen pengampu: **Henokh Lugo Hariyanto**  
Asisten mata kuliah: **Feriyanto - (10191031)**

**Tujuan**:
- Mampu menerapakan pemahaman JavaScript ke dalam aplikasi berbasis
  *web browser*
- Mampu memahami penggunaan *JavaScript library* `d3.js` 

> Tips belajar bahasa pemrograman adalah mengetik ulang perintah yang kita 
> temukan di buku atau di internet, lalu kita ubah-ubah untuk menguji pemahaman
> kita sudah tepat atau belum. Faktor bermain-main dan eksplorasi sangat 
> diperlukan untuk memahami setiap perintah bahasa pemrograman yang kita pelajari.
> Setiap potongan kode di bawah dapat dijalankan secara lokal (bersamaan
> dengan file .html dan .css) menggunakan ekstensi VSCode `Preview on Web Server`

Pada minggu ini, kita akan belajar salah satu topik yang *mungkin*
sangat menarik yaitu *data visualization* menggunakan *JavaScript library*
`d3.js`. Kita akan belajar dan memahami penggunaan `d3.js` berdasarkan
referensi [(Murray, 2017) - Interactive Data Visualization for the Web](https://www.oreilly.com/library/view/interactive-data-visualization/9781491921296/).  
Referensi ini merupakan referensi standar dalam 
pembelajaran terkait visualisasi (lihat online course 
[CS 171 - Visualization](https://www.cs171.org/2022/resources/#) 
dari Harvard University) 

Sedikit penjelasan tentang `d3.js` adalah merupakan *JavaScript*
library yang merupakan singkatan dari *Data-Driven Documents*. 
Library ini dibangun oleh Mike Bostock (dan beberapa kontributor
lainnya) yang dapat dilihat di dalam repositori berikut 
[GitHub: D3.js](https://github.com/d3/d3/wiki)

Di akhir tutorial ini kita akan mencoba membuat plot batas administrasi 
kecamatan kota Balikpapan. Ada banyak manfaat dari penerapan plot ini
terutama untuk *programmer* yang bekerja di dunia GIS (Geospatial Information
System). GIS ini bisa dikatakan merupakan cabang ilmu dari Information System.

## Instalasi `d3.js`

Pertama-tama siapkan tiga buah files (.html, .css, .js). Untuk file .html
akan berperan sebagai *viewer* (atau interface antara file .js dengan
web browser). Untuk file .css akan berperan sebagai *styling* document .html.

Berikut isi standard untuk ketiga berkas tersebut:

- **`main.html`**
  ```html
  <html>
    <head>
      <link rel="stylesheet" href="./styles.css">
      <script src="../lib/d3.v7.min.js"></script> 
    </head>
    <body>
      <script src="./plotd3.js"></script>
    </body>
  </html>
  ```
- **`styles.css`**
  ```css
  * {
    font-family: "IBM Plex Sans", "Helvetica Neue", 
              Arial, sans-serif;
  }
  ```

- **`plotd3.js`**
  ```js
  // Akan kita isi dengan fungsi plot dari d3.js
  ```

Ketiga file tersebut harus di taruh di tempat yang sama. Sebagai contoh
kita menggunakan *working directory*: `example-viz`. Maka direktori kita
akan terlihat seperti berikut:
```
...
├─ example-viz/
│  ├─ main.html
│  ├─ plotd3.js
│  ╰─ styles.css
├─ lib/
│  ╰─ d3.v7.min.js
...
```

Pada contoh di atas terdapat tambahan folder `lib` yang merupakan tempat 
*library* d3.js. File `d3.v7.min.js` dapat didownload di 
[link berikut](https://d3js.org/d3.v7.min.js) (Klik kanan lalu pilih "Save as...")

Berikutnya kita akan membuat versi "Hello World!" untuk d3.js
(file keseluruhan dapat dilihat di dalam direktori 
[`d3-hello-world`](./week-15-scripts/d3-hello-world/)). 
Perintah berikut kita tambahkan ke dalam `plotd3.js`
```js
d3.select("body").append("p").text("Hello World!");
```

Perintah diatas mengatakan bahwa menggunakan library d3.js, 
kita memanggil fungsi `.select()` untuk memilih HTML element `<body>`.
Lalu di dalam HTML element `<body>` ini kita tambahkan (*append*)
dengan HTML element `<p>`. Dan terakhir di dalam HTML element 
paragraph `<p>`, kita isi dengan text "Hello World!".

Jika prosedur yang diikut benar, maka kita akan mendapatkan hasil
berikut di *web browser* (setelah menjalankan VSCode extension: 
Preview on Web Server)

<img src="../img-resources/d3-js-hello-world.png">


## Working with Data

Berikutnya kita akan melakukan pembacaan data dari file berformat
`.csv`. Dalam tutorial ini kita akan menggunakan file `food.csv`
(yang didapat didownload [disini](./week-15-scripts/datasets/food.csv))
yang berisi data berikut:
```csv
Food,Deliciousness
Apples,9
Green Beans,5
Egg Salad Sandwich,4
Cookies,10
Liver,0.2
Burrito,7
```

Kemudian kita buat *working directory* baru, dan kita namakan
`d3-binding-data` dengan isi `plotd3.js` sebagai berikut:
```js
function readData(data) {
  console.log(data);
}

d3.csv("../datasets/food.csv")
  .then(readData);
```

Program di atas melakukan pembacaan file `.csv` dengan fungsi `.csv`
dari d3.js. Keluaran dari `d3.csv()` adalah suatu *Promise object*
maka kita dapat sisipkan *callback function* dengan method `.then()`
Fungsi *callback* ini akan membaca data dan hasilnya ditampilkan 
di console. Selengkapnya lihat direktori 
[d3-binding-data](./week-15-scripts/d3-binding-data)

Jika prosedur dijalankan dengan benar maka akan didapatkan data
yang tercetak di bagian Console Web Browser seperti gambar
di bawah ini

<img src="../img-resources/d3-js-load-csv.png">


## Drawing with Data

Pada bagian ini kita akan menggambar data yang dibaca dari `.csv`

## Making Balikpapan Administration District Border.

## Self-exercises