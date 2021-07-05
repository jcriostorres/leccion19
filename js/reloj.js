// con funcion flecha
const mostrarReloj = () => {
    let fecha = new Date(); //objeto contiene la fecha actual
    let hr = formatoHora(fecha.getHours()); // nos estrae la hora
    let min = formatoHora(fecha.getMinutes()); // nos estrae los min 
    let sec = formatoHora(fecha.getSeconds()); // nos estrae los segundos
    document.getElementById('hora').innerHTML = `${hr}:${min}:${sec}`;

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'jul', 'Ágo', 'Sep', 'Oct', 'NOv', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()]; // recuperar dias de la semana
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia}, ${mes}`; //sustitye el texto de html por la fecha
    //ahora recuperar el docuemnto
    document.getElementById('fecha').innerHTML = fechaTexto;
    //apagador o interruptor
    document.getElementById('contenedor').classList.toggle('animar');
}


//se adjunta un cero en caso de que tenga un digito la hora
const formatoHora = (hora) => {
    if (hora < 10)
        hora = '0' + hora;
    return hora;
}

//mostrarReloj se debe llamar cada segundo para que muestre la hora actualizada, mandar a llamar setInterval
setInterval(mostrarReloj, 1000);