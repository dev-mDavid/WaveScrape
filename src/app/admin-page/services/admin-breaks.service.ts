import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from 'firebase/app';


import { RegionsByState, StringArray } from "../../core/models/regionByState.model";
import { BreaksByRegion } from "../../core/models/breaksByRegion.model";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminBreaksService {

  constructor(private db: AngularFirestore) {}

  /**
   * Read all Docs from regionsByState (collection) by the value of the state
   */    
  readRegionsByState(   
    stateValue: string
  ) {
    return this.db
      .collection<RegionsByState>("regionsByState", ref =>
        ref.where('state', '==', stateValue))
      .valueChanges()
  }
      
  // }
  /**
   * Reads all Docs from breaksByRegion (collection) by the value of the region
   */
  readBreaksByRegion(
    regionValue: string
  ) {       
    return this
    .db.collection<BreaksByRegion>("breaksByRegion", ref =>
      ref.where('region', '==', regionValue))
      .snapshotChanges()
        .pipe(map( actions => actions
          .map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            // console.log(id)
            return {id, ...data}
          })))
    // .valueChanges()
    
  }
  
  


  /**
   * Update & add a new reak breaks array of the selected region doc by Id
   */
  
  updateAddBreakToRegionDoc(docId: string, breakName: string){
  return this.db.collection<BreaksByRegion>("breaksByRegion")
    .doc(docId)
    .update({ breaks: firebase.firestore.FieldValue.arrayUnion(breakName)})
  }
  
  

  /**
   * Provide matching Break
   */
  

}
