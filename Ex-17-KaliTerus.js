function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var sAngka = String(angka);
   if (sAngka.length == 1){
     return sAngka
   }else {
     var number = Number(sAngka[0])
     var slice =  Number(sAngka.slice(1))
     var hasil = number * kaliTerusRekursif(slice)
     return kaliTerusRekursif(hasil)
    }
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6