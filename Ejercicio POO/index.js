class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  objDetalles = function () {
    console.log(
      `Persona. Nombre: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}. `
    );
  };
}
const persona1 = new Persona("Jon", 23, "Masculino");
persona1.objDetalles();

class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  registrar = function () {
    console.log(
      `Estudiante. Nombre: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}, curso: ${this.curso}, grupo: ${this.grupo}`
    );
  };
}

const estudiante1 = new Estudiante(
  "Jane",
  22,
  "Femenino",
  "Web Development",
  3
);
estudiante1.registrar();

class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  asignar = function () {
    console.log(
      `Profesor. Nombre: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}, asignatura: ${this.asignatura}, nivel: ${this.nivel}`
    );
  };
}
const profesor1 = new Profesor("Clark", 55, "Masculino", "Matematicas", "Alto");
profesor1.asignar();
