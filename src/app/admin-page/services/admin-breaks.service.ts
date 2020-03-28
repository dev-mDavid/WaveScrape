import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";


import { RegionByState, StringArray } from "../../core/models/regionByState.model";

@Injectable({
  providedIn: 'root'
})
export class AdminBreaksService {

  constructor(private afs: AngularFirestore) {}

  /**
   * Get Array of All Regions (from regionsByState)
   */
  // getRegions() {
    
  //   return this.afs.collection<RegionByState>(
  //     'regionsByState', ref => ref.where(
  //       'state', '==', 'California' 
  //     )
  //   )

      
  // }
  /**
   * Get Array of Breaks by Region (from breaksByRegion)
   */
  
  /**
   * Create New Break
   */

  /**
   * Provide matching Break
   */
  

}
