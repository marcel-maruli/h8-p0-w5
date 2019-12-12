function meleeRangedGrouping (str) {
    //your code here
    // var splitAwal = str.split (",")
    var splitAwal2 = str.split ("-")
    var Ranged = []
    var Melee = []
    var hasil = []
    console.log (splitAwal2)
    // for (var i = 0; i < splitAwal2; i++){
    //     var splitAwal = splitAwal2[i].split(",")
    // }

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []