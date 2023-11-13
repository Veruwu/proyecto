export interface Conductor {
    nombre:string,
    apellido:string,
    email:string,
    password:string,
    matricula:string,
    Id:string

    
}

export interface Viaje {
    Desde:string,
    Hasta:string,
    Asientos:any,
    Valor:any,
    Id:string
}