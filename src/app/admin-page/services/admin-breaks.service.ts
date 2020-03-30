import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";


import { RegionsByState, StringArray } from "../../core/models/regionByState.model";
import { BreaksByRegion } from "../../core/models/breaksByRegion.model";

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
    .valueChanges()
  }
  
  /**
   * Create New Break
   */

  /**
   * Provide matching Break
   */
  

}
