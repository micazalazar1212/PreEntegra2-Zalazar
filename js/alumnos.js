class Alumno {
    constructor(id, nombre, apellido, promedio, curso, anio, genero){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.promedio = promedio;
        this.curso = curso.toUpperCase();
        this.anio = anio;
        this.genero = genero;
    }
}

const alumnos = [
    {id:1, nombre:"Marta",apellido:"Espinosa", promedio:8, curso:"C", anio:4, genero:"F"},
    {id:2, nombre:"Ana",apellido:"Gonzales", promedio:3.4, curso:"A", anio:3, genero:"F"},
    {id:3, nombre:"Federico",apellido:"Gapar", promedio:7, curso:"B", anio:2, genero:"M"},
    {id:4, nombre:"Exequiel",apellido:"Mercado", promedio:8.9, curso:"A", anio:1, genero:"M"},
    {id:5, nombre:"Sandra",apellido:"Delgado", promedio:9, curso:"C", anio:3, genero:"F"},
    {id:6, nombre:"Beto",apellido:"Monserrat", promedio:6, curso:"B", anio:4, genero:"M"},
    {id:7, nombre:"Susana",apellido:"Juanes", promedio:4, curso:"B", anio:5, genero:"F"},
    {id:8, nombre:"Micaela",apellido:"Velez", promedio:10, curso:"C", anio:6, genero:"F"}
]