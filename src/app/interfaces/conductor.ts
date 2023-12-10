import { Usuario } from "./usuario"

export interface Conductor {
    nombre:string,
    apellido:string,
    email:string,
    password:string,
    matricula:string,
    Id:any
    perfil: "conductor"

    
}

export interface Viaje {
    Desde:string,
    Hasta:string,
    Asientos:any,
    Valor:any,
    Id:string
    pasajeros?:[]
}