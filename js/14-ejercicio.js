let frase = prompt('ingresa una frase');
contadorDCaracteres =0;
while(contadorDCaracteres<frase.length){
    document.write(frase.charAt(contadorDCaracteres)+ '-');
    contadorDCaracteres++
}