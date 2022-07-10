let edad = parseInt(prompt('Cual es tu edad? (si sos mayor de 60 años no puedes participar)'));

if (edad >= 18){
    document.write('podes conducir')
}else if(edad<18){
    document.write('no puedes conducir')
}
