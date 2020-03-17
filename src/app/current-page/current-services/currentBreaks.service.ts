import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";
import { AngularFirestore } from "@angular/fire/firestore";
import { CurrentBreak } from "../current-models/currentBreak.model";

@Injectable({
  providedIn: 'root'
})
export class CurrentBreaksService {
  constructor(private db: AngularFirestore) {}
  
  /**
   * Gets all data for each break
   */
  getCurrentBreakData() {
   const ref = this.db.collection<CurrentBreak>('currentBreaks');
   return ref.valueChanges({idField: 'breakName'})
  //  return ref.valueChanges()
    
  
}  

}