// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var outputFizzBuzz = document.getElementById('lista-fizz-buzz');
outputFizzBuzz.innerHTML = '';
var numero=0;
var risultato='';
for(i=1;i<=100;i++){
  numero = i;
  risultato='';
  if (((numero % 3) == 0) && ((numero / 3) >= 1)){
    risultato+='Fizz';
  }
  if (((numero % 5) == 0) && ((numero / 5) >= 1)){
    risultato+='Buzz';
  }

  if (risultato !== ''){
    outputFizzBuzz.innerHTML += '<li>' + risultato + '</li>';
  }else{
    outputFizzBuzz.innerHTML += '<li>' + numero + '</li>';
  }

}
