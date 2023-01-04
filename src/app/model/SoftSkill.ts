export class SoftSkill{
    id?: number;
    icono:String;
    nombreSkill:String;
    nivelSkill: String;
    porcentaje: number;

    constructor(icono:String, nombreSkill:String, nivelSkill: String, porcentaje: number){
        this.icono=icono;
        this.nombreSkill = nombreSkill;
        this.nivelSkill = nivelSkill;
        this.porcentaje = porcentaje;
        
    }
}