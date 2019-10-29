function prime(num){
  var primeArray[];
  var subArray[];
  var retString;
  for (var i = 0; i < num - 1; i++){
    primeArray.push(i + 2);
  }
  for (var i = 0; i < (primeArray.length/2) + 1; i++){
    for (var j = 2; j < (array.length/2) + 1; j++) {
      subArray.push(primeArray[i] * j);
    }
  }
  for (var i = 0; i < primeArray.length; i++){
    for (var j = 0; j < subArray.length; j++){
      if (primeArray[i] === subArray[j]){
        primeArray.splice(i,1);
      }
    }
  }
  for (var i = 0; i < primeArray.length; i++){
    retString = retString + " " + primeArray[i];
    alert(primeArray[i]);
  }
  alert(retString);
}

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var numb = parseInt($("#enteredNum").val());
    alert(numb);
    prime(numb);
  });
});
// function prime(number){
//   for (var index = 2; index < num; i++){
// } if  (num % i == 0) {
//   alert(num + "is not a prime number")
// }
// }
// });
