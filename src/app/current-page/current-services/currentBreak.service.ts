import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";
import { AngularFirestore } from "@angular/fire/firestore";
import { CurrentBreak } from "../../core/models/currentBreak.model";

@Injectable({
  providedIn: 'root'
})
export class CurrentBreakService {
  constructor(private db: AngularFirestore) {}
  
  /**
   * Gets all data for each break
   */
  getCurrentBreakData(currentBreakId: string) {
    return this.db
    .collection<CurrentBreak>('currentBreaks') // collection
    .doc(currentBreakId)
    .valueChanges();    
  }

  

}