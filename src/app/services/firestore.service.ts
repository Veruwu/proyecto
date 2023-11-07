import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection,addDoc } from '@angular/fire/firestore';
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore';
import { Viaje } from '../interfaces/conductor';
import { AlertController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

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

  deleteDoc(viaje:Viaje, id:string){
    return this.firestone.collection('viaje').doc(id).delete()
  }

  async presentAlert(texto:string, subtitulo:string) {
    const alert = await this.alertController.create({
      header: texto,
      subHeader: subtitulo,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            return true;
          },
        },
      ]
    });

    await alert.present();
    await alert.onDidDismiss();
  }
}
