function agregarAlumno() {
    const nom = prompt("Ingrese el nombre: ");
    const ap = prompt("Ingrese el apellido: ");
    const prom = prompt("Ingrese el promedio: ");
    const cur = prompt("Ingrese el curso: ");
    const anio = prompt("Ingrese el año: ");
    const gen = prompt("Ingrese el genero: ")

    const nuevoAlumno = new Alumno((alumnos.length + 1), nom, ap, prom, cur,anio,gen);
    alumnos.push(nuevoAlumno)
    console.log(nuevoAlumno)
    
}

function modificarAlumno(alumnos) {
    do {
        opc = parseInt(prompt("Qué desea realizar: \n1. Modificar promedio.\n2. Eliminar alumno. \n0. Salir."));
        switch(opc) {
            case 1:
                modPromedio(alumnos);
                break
            case 2:
                eliAlumno(alumnos);
                break
            case 0:
                break
        }
    } while (opc !== 0);
}

function modPromedio(alumnos) {
    idN = parseInt(prompt("Ingrese el ID del estudiante al que desea modificar el promedio: "))
    alumnos.forEach(el => {
        if ((el.id) === idN) {
            el.promedio = parseInt(prompt("Ingrese el nuevo promedio:"));
        }
    });
    console.log(alumnos[idN-1])
}

function eliAlumno(alumnos) {
    eliminado = parseInt(prompt("Ingrese el ID del estudiante al que desea eliminar: "))
    alumnos.splice(eliminado-1,1)
    console.log(alumnos)
}

function alumnosApellido(alumnos){
    alumnos.sort((a,b) => {
        if(a.apellido > b.apellido) {
            return 1;
        }
        if(a.apellido < b.apellido) {
            return -1;
        }
        return 0
    })
    console.log(alumnos)
}

function abanderados(alumnos) {
    //En esta funcion primero se filtran todos los estudiantes con promedio +8 y se agregan a un array que se ordena de mayor a menor para elegir los 3 alumnos con notas mas altas y mostrarlos despues.
    const mejoresNotas = alumnos.filter((el) => el.promedio >= 8);
    console.log(mejoresNotas)
    mejoresNotas.sort((a,b) => {
        if(a.promedio < b.promedio) {
            return 1;
        }
        if(a.promedio > b.promedio) {
            return -1;
        }
        return 0
    })
    //let tresAbanderados = []
    alert("Los abanderados de este año son: ");
    for(let i=0; i < 3; i++) {
        //tresAbanderados.push(mejoresNotas[i])
        alert("Alumno " + mejoresNotas[i].nombre + " " + mejoresNotas[i].apellido + ", con promedio de: " + mejoresNotas[i].promedio);
    }
}

function filtrarAlumnos(alumnos) {
    const curso = prompt("Ingrese el curso que desea ver: ").toUpperCase();
    const alumnosPorCurso = alumnos.filter((el) => el.curso === curso)
    for(est in alumnosPorCurso){
        alert("ID: " + alumnosPorCurso[est].id + "\nNombre: " + alumnosPorCurso[est].nombre + " "  + alumnosPorCurso[est].apellido + "\nPromedio: " + alumnosPorCurso[est].promedio + "\nCurso: " + alumnosPorCurso[est].curso + "\nAño: " + alumnosPorCurso[est].anio + "\nGenero: " + alumnosPorCurso[est].genero);
    }
}


do {
    op = parseInt(prompt("Bienvenido a su sistema de Gestión de Alumnos (GDA). Ingrese la opción que desea realizar hoy: \n1_Agregar alumno nuevo.\n2_ Modificar alumno.\n3_ Listar alumnos por apellido.\n4_Definir abanderados.\n5_ Filtrar alumnos por curso.\n 0_ Salir."))
    switch (op){
        case 1:
            agregarAlumno();
            break
        case 2:
            modificarAlumno(alumnos);
            break
        case 3:
            alumnosApellido(alumnos);
            break
        case 4:
            abanderados(alumnos);
            break    
        case 5:
            filtrarAlumnos(alumnos);
            break
        case 0:
            break    
    }
}while(op !== 0)