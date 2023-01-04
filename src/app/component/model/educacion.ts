export class Educacion {
    id?: number;
    logo:String;
    nombreCurso:String;
    carreraCurso: String;
    titulo: String;
    periodoEstudiosFin: String;
    periodoEstudiosInicio: String;

    constructor(logo:String, nombreCurso:String, carreraCurso: String, titulo: String,periodoEstudiosFin: String, periodoEstudiosInicio: String){
        this.logo=logo;
        this.nombreCurso = nombreCurso;
        this.carreraCurso = carreraCurso;
        this.titulo = titulo;
        this.periodoEstudiosFin=periodoEstudiosFin;
        this.periodoEstudiosInicio=periodoEstudiosInicio;
    }
}
