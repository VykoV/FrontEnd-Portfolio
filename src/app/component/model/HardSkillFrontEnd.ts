export class HardSkillFrontEnd{
    id?: number;
    icono:String;
    nombreFrontEnd:String;
    nivelFrontEnd: String;
    porcentaje: number;

    constructor(icono:String, nombreFrontEnd:String, nivelFrontEnd: String, porcentaje: number){
        this.icono=icono;
        this.nombreFrontEnd = nombreFrontEnd;
        this.nivelFrontEnd = nivelFrontEnd;
        this.porcentaje = porcentaje;
        
    }
}