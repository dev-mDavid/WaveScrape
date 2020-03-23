import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {
    constructor(private afAuth: AngularFireAuth) {}

    @HostListener('click')
    onclick() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log('hello google auth');
    }
}

/* How to Use

  * Component Template
<div *ngIf="!(afAuth.authState | async)">
  <button appGoogleSignin>
     Login with Google
  </button>
</div>

<div *ngIf="afAuth.authState | async as user" class="logout">
  <p> Logged in as {{ user.email }} </p>
  <button (click)="afAuth.auth.signOut()">Logout</button>
</div>

  * Component Logic: add the following 
import { AngularFireAuth } from '@angular/fire/auth';
constructor(public afAuth: AngularFireAuth) { }

 */
