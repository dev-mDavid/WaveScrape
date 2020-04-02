import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";


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
   * Update & add a new Break to the Region Selected
   */
  // updateAddBreak(
  //   // data: BreaksByRegion, 
  //   regionValue: string,
  //   breaks: StringArray[]
  //   ) {
  //   return this
  //     .db.collection("breaksByRegion", ref =>
  //       ref.where('region', '==', regionValue))
  //       // .add({
  //       //   ...data,
  //       //   breaks: []
  //       // })
  //     .update({ breaks })
  // }

  /**
   * Provide matching Break
   */
  

}
