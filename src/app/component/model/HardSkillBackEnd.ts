export class HardSkillBackEnd{
    id?: number;
    icono:String;
    nombreBackEnd:String;
    nivelBackEnd: String;
    porcentaje: number;

    constructor(icono:String, nombreBackEnd:String, nivelBackEnd: String, porcentaje: number){
        this.icono=icono;
        this.nombreBackEnd = nombreBackEnd;
        this.nivelBackEnd = nivelBackEnd;
        this.porcentaje = porcentaje;
        
    }
}