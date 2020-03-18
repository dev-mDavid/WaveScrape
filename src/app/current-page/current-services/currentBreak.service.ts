import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";
import { AngularFirestore } from "@angular/fire/firestore";
import { CurrentBreak } from "../current-models/currentBreak.model";

@Injectable({
  providedIn: 'root'
})
export class CurrentBreakService {
  constructor(private db: AngularFirestore) {}
  
  /**
   * Gets all data for each break
   */
  getCurrentBreakData(boardId: string) {
    return this.db
    .collection('currentBreaks')
      .doc(boardId)
    // )
      // .valueChanges({idField: 'breakName'})
  }

  

}