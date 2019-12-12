function changeVocals (str) {
  //code di sini
  var arrVocal = [
    ["a","b"],
    ["i","j"],
    ["u","v"],
    ["e","f"],
    ["o","p"],
    ["A","B"],
    ["I","J"],
    ["U","V"],
    ["E","F"],
    ["O","P"]
  ]
  var inisiasi = false
  var hasilStr = ""
  for (var j = 0; j < str.length;j++){
    for (var i = 0; i < arrVocal.length; i++){
      if (arrVocal[i][0]==str[j]){
        inisiasi = true;
        hasilStr += arrVocal[i][1]
        
      }
    }
    if (!inisiasi){
      hasilStr += str[j]
    }
    inisiasi =false
  }
   return hasilStr
}
  
  function reverseWord (str) {
    //code di sini
    var hasilStr = "";
    for (var i = str.length-1; i >= 0; i--){
      hasilStr += str[i]
    }
    return hasilStr
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var hasilStr = ""
    for (var i = 0; i < str.length; i++){
      if (str[i]==str[i].toUpperCase()){
        hasilStr += str[i].toLowerCase()
      }
      else if (str[i]==str[i].toLowerCase()){
        hasilStr += str[i].toUpperCase()
      }
    }
    return hasilStr
  }
  
  function removeSpaces (str) {
    //code di sini
    var hasilStr = ""
    for (var i = 0; i < str.length; i++){
      if (str[i]!==" "){
        hasilStr += str[i]
      }
    }
    return hasilStr
  }
  
  function passwordGenerator (name) {
    //code di sini
    var vocal = changeVocals(name);
    var reverse = reverseWord(vocal);
    var lowUp = setLowerUpperCase(reverse);
    var spaces = removeSpaces(lowUp);
    if (name.length < 5){
      spaces = 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return spaces
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'