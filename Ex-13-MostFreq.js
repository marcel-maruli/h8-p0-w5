function sorting(arrNumber) {
    // code di sini
    // var arrHasil = [];
    var hasil = arrNumber.sort(function (a,b){ return b - a})
    // arrHasil.push(arrNumber)
    return hasil
    }
  
  function getTotal(arrNumber) {
    // code di sini
    console.log ("           ")
    var palingBesar = arrNumber[0];
    var jumlah = 0;
    for (var i = 0; i < arrNumber.length; i++){
      if (arrNumber[i] >= palingBesar){
        jumlah++
      }
    }
    var Hasil = "angka paling besar adalah " + palingBesar + " dan jumlah kemunculan sebanyak " + jumlah + " kali"
    if (arrNumber.length == 0){
      return "''"
    } else {
      return Hasil
    }   
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  // 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''