let texto = prompt("ingrese un texto").toLowerCase();
const Vocales = [];
let contadorDVocales = 0;

while(contadorDVocales < frase.length-1){
  if(
    frase.charAt(contadorDVocales) === "a" ||
    frase.charAt(contadorDVocales) === "á" ||
    frase.charAt(contadorDVocales) === "e" ||
    frase.charAt(contadorDVocales) === "é" ||
    frase.charAt(contadorDVocales) === "i" ||
    frase.charAt(contadorDVocales) === "í" ||
    frase.charAt(contadorDVocales) === "o" ||
    frase.charAt(contadorDVocales) === "ó" ||
    frase.charAt(contadorDVocales) === "u" ||
    frase.charAt(contadorDVocales) === "ú"
  ) 
  {
    document.write(contadorDVocales);
  }
  contadorDVocales++
}
document.write('Vocales encontradas en la frase son:' + contadorDVocales);
