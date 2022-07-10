let person1 = prompt("Ingrese su nombre");
let edadPerson1 = parseInt(prompt("Ingrese su edad"));

let person2 = prompt("Ingrese su nombre");
let edadPerson2 = parseInt(prompt("Ingrese su edad"));

let person3 = prompt("Ingrese su nombre");
let edadPerson3 = parseInt(prompt("Ingrese su edad"));

if (edadPerson1 === edadPerson2 && edadPerson2 === edadPerson3) {
  document.write("todas las personas tienen la misma edad");
} else {
  if (
    edadPerson1 === edadPerson2 &&
    edadPerson1 === Math.max(edadPerson1, edadPerson2, edadPerson3)
  ) {
    document.write(
      person1 + " y " + person2 + " son los mayores y tienen " + edadPerson1
    );
  } else {
    if (
      edadPerson2 === edadPerson3 &&
      edadPerson2 === Math.max(edadPerson1, edadPerson2, edadPerson3)
    ) {
      document.write(
        person2 + " y " + person3 + " son los mayores y tienen " + edadPerson2
      );
    } else {
      if (
        edadPerson1 === edadPerson3 &&
        edadPerson1 === Math.max(edadPerson1, edadPerson2, edadPerson3)
      ) {
        document.write(
          person1 + " y " + person3 + " son los mayores y tienen " + edadPerson1
        );
      } else {
        if (edadPerson1 === Math.max(edadPerson1, edadPerson2, edadPerson3)) {
          document.write(person1 + "es el mayor");
        } else {
          if (edadPerson2 === Math.max(edadPerson1, edadPerson2, edadPerson3)) {
            document.write(person2 + "es el mayor");
          } else {
            if (edadPerson3 === Math.max(edadPerson1, edadPerson2, edadPerson3))
              document.write(person3 + "es el mayor");
          }
        }
      }
    }
  }
}
