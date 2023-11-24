import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection,addDoc } from '@angular/fire/firestore';
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore';
import { Viaje, Conductor } from '../interfaces/conductor';
import { Usuario } from '../interfaces/usuario';
import { AlertController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {


  editviaje:Viaje;

  constructor(private firestone:AngularFirestore, private alertController: AlertController) { }

  getId(){
    return this.firestone.createId();
  }

  creatDoc(Viaje:Viaje, id:string){
    const elviaje = this.firestone.collection('viaje')
    return elviaje.doc(id).set(Viaje)
  }


  obtData(){
    return this.firestone.collection('viaje').valueChanges();
  }

  obtDataid(path:string ,id:string){
    return this.firestone.collection(path).doc(id).valueChanges();
  }

  deleteDoc(viaje:Viaje, id:string){
    return this.firestone.collection('viaje').doc(id).delete()
  }


  creaUser(usuario:Usuario, id:any){
    const elviaje = this.firestone.collection('pasajero')
    return elviaje.doc(id).set(usuario)
  }


  obtUser(){
    return this.firestone.collection('pasajero').valueChanges();
  }

  deleteUser(usuario:Usuario, id:string){
    return this.firestone.collection('pasajero').doc(id).delete()
  }


  creatDriver(conductor:Conductor, id:any){
    const elviaje = this.firestone.collection('conductor')
    return elviaje.doc(id).set(conductor)
  }


  obtDriver(){
    return this.firestone.collection('conductor').valueChanges();
  }

  deleteDriver(conductor:Conductor, id:string){
    return this.firestone.collection('conductor').doc(id).delete()
  }

  mostrarViaje(viaje:Viaje){
    this.editviaje = viaje;
  }

  pasarViaje(){
    return this.editviaje
  }

  getElDriver<tipo>(path:string, id:any){
    return this.firestone.collection(path).doc<tipo>(id).valueChanges()

  }

}
