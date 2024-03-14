let customer = {
  'address01': 'Jl. Merdeka No. 10, Balikpapan Utara',
  'address02': 'Jl. Jendral Sudirman No. 25, Balikpapan Selatan',
  'address03': 'Perumahan Taman Kencana, Blok F5 No. 12, Balikpapan Barat',
  'address04': 'Jl. Pangeran Antasari No. 33, Balikpapan Timur',
  'address05': 'Kompleks Klandasan Indah, Blok A7 No. 8, Balikpapan Kota',
  'address06': 'Jl. MT Haryono No. 28, Balikpapan Tengah',
  'address07': 'Perumahan Bukit Damai, Blok D4 No. 18, Balikpapan Baru',
  'address08': 'Jl. Mulawarman No. 15, Balikpapan Selatan',
  'address09': 'Perumahan Griya Lestari, Blok B3 No. 11, Balikpapan Timur',
 'address10': 'Jl. Jenderal Ahmad Yani No. 43, Balikpapan Kota'}


let addr = '';
for (let i = 0; i < 10; i++) {
  index = 
  addr += customer[(`address${(i+1).toString().padStart(2, '0')}`)] + '\n';
}
console.log(addr);
