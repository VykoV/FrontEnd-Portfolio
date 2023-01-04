export class persona{
    id?: number;
    imgBanner:String;
    imgPerfil:String;
    nombrePerfil: String;
    titulo: String;

    constructor(imgBanner:String, imgPerfil:String, nombrePerfil: String, titulo: String){
        this.imgBanner=imgBanner;
        this.imgPerfil = imgPerfil;
        this.nombrePerfil = nombrePerfil;
        this.titulo = titulo;
        
    }
}