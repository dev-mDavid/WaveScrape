import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import 'firebase/firestore';

import { Observable, Subscription, } from "rxjs";

import { AdminBreaksService } from "../../services/admin-breaks.service";
import { RegionsByState, StringArray  } from "../../../core/models/regionByState.model";
import { BreaksByRegion } from "../../../core/models/breaksByRegion.model";
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-admin-breaks',
  templateUrl: './admin-breaks.component.html',
  styleUrls: ['./admin-breaks.component.sass']
})
export class AdminBreaksComponent implements OnInit, OnDestroy{

regionsByStates: RegionsByState[];
breaksByRegions: BreaksByRegion[];
sub: Subscription;

  constructor(
    private db: AngularFirestore,
    public adminBreaksService: AdminBreaksService,
    ) { }  

  
  showBreaksOfThisRegion(selectedRegion: string){
      return this.sub = this.adminBreaksService
        .readBreaksByRegion(
          selectedRegion
        )
        .subscribe(breaksByRegions => (this.breaksByRegions = breaksByRegions))  
    }
    
  ngOnInit() {

    // this.selectThisRegion()
    this.sub = this.adminBreaksService
      .readRegionsByState(        
        "California"
        )              
      .subscribe(regionsByStates => (this.regionsByStates = regionsByStates))

    // return this.sub = this.adminBreaksService
    // .readBreaksByRegion(
    //   'San Diego — North County'      
    //   // this.selectedRegion      
    //   )
    // .subscribe(breaksByRegions => (this.breaksByRegions = breaksByRegions))  

  }

  
  ngOnChanges() {
    
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}
