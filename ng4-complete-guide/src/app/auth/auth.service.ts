import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { auth } from 'firebase';
@Injectable()
export class AuthService {
token:string;
  constructor() { }

  signupUser(email: string, password: string){
   firebase.auth().createUserWithEmailAndPassword(email, password)
   .catch(
     error => console.log(error)
   );

  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        firebase.auth().currentUser.getToken()
        .then(
          (token: string) => this.token = token
        )
      }
    )
    .catch(
      error => console.log(error)
    );

   }

   getToken() {
      firebase.auth().currentUser.getToken()
     .then(
      (token: string) => this.token = token
    );
    return this.token;
   }

}