import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  constructor(
    public ngFireAuth: AngularFireAuth,
    private firestore: AngularFirestore
    ) { }


  async registerUser(email:string, password:string){
    return await this.ngFireAuth.createUserWithEmailAndPassword(email,password)
  }

  async loginUser(email:string,password:string){
    return await this.ngFireAuth.signInWithEmailAndPassword(email,password)
  }

  async resetPassword(email:string){
    return await this.ngFireAuth.sendPasswordResetEmail(email)
  }

  async signOut(){
    return await this.ngFireAuth.signOut()
  }

  async getProfile(){
    return await this.ngFireAuth.currentUser
  }

  stateUser(){
    return this.ngFireAuth.authState
  }

  tomarViaje(viajeId: string, nombre: string) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        const userId = user.uid;
        // Asociar el usuario al viaje en Firestore
        this.firestore.collection('viaje').doc(viajeId).update({
          Pasajeros: firebase.firestore.FieldValue.arrayUnion(nombre),
        });
      } else {
        // El usuario no ha iniciado sesión
      }
    });
  }

  obtenerNombreUsuario(path: string ,uid: string): Observable<any> {
    return this.firestore.collection(path).doc(uid).valueChanges()
      
  }

  obtenerUsuariosDelViaje(viajeId: string): Observable<string[]> {
    return this.firestore.collection('viaje').doc(viajeId).valueChanges()
      .pipe(map((viaje: any) => viaje.Pasajeros || []));
  }

  async obtenerNombreYApellido(uid: string): Promise<{ nombre: string, apellido: string }> {
    try {
      // Consultar la colección "usuarios"
      const usuarioDoc = this.firestore.collection('pasajero').doc(uid).valueChanges();
      const driveDoc = this.firestore.collection('conductor').doc(uid).valueChanges();

      if (usuarioDoc) {
        // Obtener datos del documento "usuarios"
        const datosUsuario: any = usuarioDoc.pipe(map((data: any) => data.data()));
        const nombre = datosUsuario.nombre;
        const apellido = datosUsuario.apellido;

        return { nombre, apellido };
      } else {
        // const datosUsuario: any = driveDoc.data();
        // const nombre = datosUsuario.nombre;
        // const apellido = datosUsuario.apellido;

        // return { nombre, apellido };
        throw new Error('No existe un documento con el UID especificado.');

      }
    } catch (error) {
      console.error('Error al obtener datos del usuario:', error);
      throw error;
    }
  }

  // async signInWithPhoneNumber(phoneNumber: string) {
    
  //   const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  //   const confirmationResult = await this.ngFireAuth.signInWithPhoneNumber(phoneNumber, appVerifier)
  //   const verificationCode = window.prompt(phoneNumber + 'Enter the verification code');
    
  //   if (verificationCode) {
  //     const userCredential = await confirmationResult.confirm(verificationCode);
  //     // User is now signed in
  //     console.log(userCredential.user);
  //   }
  // }
}
