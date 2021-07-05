// vamos a declarar un areglo, una variable para poder acceder desdecualquier archivo
const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('catalina', 'Rios'),
    new Persona('johana', 'torres'),
];

function mostrarPersonas() {
    console.log('mostrar personas....?!');
    let texto = '';
    for (let persona of personas) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona() {
    const forma = document.forms['forma']; //recuperamos un formulario sin utilizar 'ducumentogetelementByID'
    const nombre = forma['nombre']; // recuperar campo de nombre
    const apellido = forma['apellido']; // recueperar campo de apellido
    const persona = new Persona(nombre.value, apellido.value);
    if (nombre.value != '' && apellido.value != '') { //cuando value es diferente de vacio, entonces se agrega el nuevo objeto persona
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona); //El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
        mostrarPersonas(); // cuando se modifica el arreglo se debe mostrar el nuevo objeto cuando se agrega un anuev persona
    } else { // de lo contrario no hay info que agregar en console
        console.log('No hay informacion para agregar');
    }

}