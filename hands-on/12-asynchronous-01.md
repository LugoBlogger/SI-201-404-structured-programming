# Modul praktikum - Minggu 12 - *JavaScript Standard Library*

Dosen pengampu: **Henokh Lugo Hariyanto**  
Asisten mata kuliah: **Feriyanto - (10191031)**

**Tujuan**:
- Mampu mengerti gagasan dasar *asynchronous programming*

> Tips belajar bahasa pemrograman adalah mengetik ulang perintah yang kita 
> temukan di buku atau di internet, lalu kita ubah-ubah untuk menguji pemahaman
> kita sudah tepat atau belum. Faktor bermain-main dan eksplorasi sangat 
> diperlukan untuk memahami setiap perintah bahasa pemrograman yang kita pelajari.
> Setiap potongan kode di bawah dapat ditulis dalam berkas `.js` lalu
> dapat di-*running* dengan Node.js.

Dalam pertemuan ini akan dibagi dua tahap, tahap pertama adalah mengenal 
pemrograman asinkronus yang merupakan fitur utama dari bahasa pemrograman
JavaScript dan juga pengenalan mengenai Promise object.

Di tahap kedua (praktikum minggu depan), kita akan melihat lebih dalam 
terkait objek Promise ini dan juga pengunaan await expression dan 
async Function.

Di tahap pertama ini kita akan membahas dua hal berikut:
- Mengenal pemrograman asinkronus    
- Contoh program asinkronus sederhana


## Mengenal pemrograman asinkronus

## Contoh program asinkronus

**timer-set-timeout.js**
```js
// Only run once after put a delay of 2 secons

console.log("delay two seconds from now");

const callbackFunc = () => {console.log("run after two seconds")};
setTimeout(callbackFunc, 2_000);
```

**timer-set-interval.js**
```js
// The following program will print sequentially
// numbers from 1 to 10 with each one second delay

let state = {num: 0}

let callbackFunc = () => {
  state.num += 1;
  console.log(state.num)};

// Call callbackFunc in one second and then again repeat
// every second after that
let updateIntervalId = setInterval(callbackFunc, 1_000);


// setInterval() returns a value that we can use to stop the
// repeated invocations by calling clearInterval()

function stop_callbackFunc() {
  clearInterval(updateIntervalId);
}

setTimeout(stop_callbackFunc, 10_500);   // add a little bit milliseconds
                                         // from 10 secs.

```

Untuk contoh terakhir, program terdiri dari tiga berkas yaitu 
`events-demo.html`, `events-demo.css`, dan `events-demo.js`.
Program ini akan memberikan kita tampilan di berkas `.html`
berupa tombol untuk mengubah-ubah warna suatu teks.

**events-demo.html**
```html
<html>
  <head>
    <link rel="stylesheet" href="./events-demo.css"></style>
  </head>
  <body>
    <div id="output">
      <h3>Hello world!</h3>
    </div>
    <button id="change">Change color</button>

    <script src="./events-demo.js"></script>
  </body>
</html> 
```


**events-demo.css**
```css
.red {
  color: red;
}

.green {
  color: green;
}
```


**events-demo.js**
```js
function changeColor() {
  outElement = document.getElementById("output");
  // console.log(outElement.className);
  
  let currentClass = outElement.className;
  if (currentClass === "" || currentClass === "green") {
    outElement.className = "red";
  } else { 
    outElement.className = "green";
  } 
}

// changeColor()

let btnChange = document.getElementById("change");

btnChange.addEventListener("click", changeColor);
```

## Tugas (Exercise - 09)
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


1. [30 poin] Bacalah topik mengenai pemrograman asinkronus di dalam 
   buku [(Haverbeke, 2018) - Bab 11](https://eloquentjavascript.net/11_async.html). 
   Jelaskan dan gambarkan keterkaitan hal apa saja yang telah kalian pahami
   di subbab *Asynchronicity*, *Crow Tech*, dan *Callbacks*. 
   Catatan: Jawaban setiap
   mahasiswa harus berbeda. Jawaban yang sama akan dibagi ke jumlah mahasiswa
   yang menjawab jawaban sama persis

2. [70 poin] Pelajari penggunaan Web API fetch dari blog berikut: 
   [JavaScript fetch API Ultimate Guide](https://blog.webdevsimplified.com/2022-01/js-fetch-api/)
   Tuliskan hal yang kalian benar-benar pahami.
   Dan tuliskan juga hal yang belum bisa kalian pahami daari tulisan dalam
   *blog* tersebut.