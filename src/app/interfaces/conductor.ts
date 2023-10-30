export interface Conductor {
    nombre:string,
    apellido:string,
    fecha_nacimiento:Date,
    email:string,
    password:string,
    tipo_auto:string,
    matricula:string,
    asientos:number
}

export interface Viaje {
    Desde:string,
    Hasta:string
}