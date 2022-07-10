let frase = prompt("ingrese frase").toLowerCase();
const vocales = [];
let contadorDCaracteres = 0;

while(contadorDCaracteres < frase.length){
  if(
    frase.charAt(contadorDCaracteres) === "a" ||
    frase.charAt(contadorDCaracteres) === "e" ||
    frase.charAt(contadorDCaracteres) === "i" ||
    frase.charAt(contadorDCaracteres) === "o" ||
    frase.charAt(contadorDCaracteres) === "u"
  ){
    vocales.push(frase.charAt(contadorDCaracteres));
  }
  contadorDCaracteres++
}
document.write('Vocales encontradas en la frase son:' + vocales);
