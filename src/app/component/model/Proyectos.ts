export class Proyectos{
    id?: number;
    nombreProyecto:String;
    descripcionProyecto:String;
    urlImgProyecto: String;
    urlRepositorio: String;

    constructor(nombreProyecto:String, descripcionProyecto:String, urlImgProyecto: String, urlRepositorio: String){
        this.nombreProyecto=nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.urlImgProyecto = urlImgProyecto;
        this.urlRepositorio = urlRepositorio;
        
    }
}