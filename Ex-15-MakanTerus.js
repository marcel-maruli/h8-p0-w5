function makanTerusRekursif(waktu) {
    // you can only write your code here!
    // console.log ("             ")
    var bisaMakan = 0
    if (waktu == 0){return 0}
    else if (waktu <= 15){
      return 1
    }
    else { bisaMakan+=1;
      return bisaMakan + makanTerusRekursif(waktu-15) }
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 15-15-15-15-6
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0