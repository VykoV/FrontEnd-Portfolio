export class ExperienciaLaboral {
    id?: number;
    descripcion:String;
    imgEmpresa:String;
    nombreEmpresa: String;
    periodoPuestoFin: String;
    periodoPuestoInicio: String;
    puesto: String;

    constructor(descripcion: String, imgEmpresa: String, nombreEmpresa: String,periodoPuestoFin: String, periodoPuestoInicio: String,puesto: String){
        this.descripcion=descripcion;
        this.imgEmpresa = imgEmpresa;
        this.nombreEmpresa = nombreEmpresa;
        this.periodoPuestoFin = periodoPuestoFin;
        this.periodoPuestoInicio=periodoPuestoInicio;
        this.puesto=puesto;
    }
}
