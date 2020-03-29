import { Component, OnInit, OnDestroy } from '@angular/core';
import 'firebase/firestore';

import { Observable, Subscription } from "rxjs";

import { AdminBreaksService } from "../../services/admin-breaks.service";
import { RegionsByState, StringArray  } from "../../../core/models/regionByState.model";
import { BreaksByRegion } from "../../../core/models/breaksByRegion.model";
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-admin-breaks',
  templateUrl: './admin-breaks.component.html',
  styleUrls: ['./admin-breaks.component.sass']
})
export class AdminBreaksComponent implements OnInit {

regionsByStates: RegionsByState[];
breaksByRegions: BreaksByRegion[];
sub: Subscription
  constructor(
    private db: AngularFirestore,
    public adminBreaksService: AdminBreaksService
    ) { }
  
  // selectThisRegion() {}
  
    
  ngOnInit() {
    this.sub = this.adminBreaksService
      .readRegionsByState(        
        "California"
        )
      .subscribe(regionsByStates => (this.regionsByStates = regionsByStates))

    this.sub = this.adminBreaksService
    .readBreaksbyRegion('San Diego — North County')
    .subscribe(breaksByRegions => (this.breaksByRegions = breaksByRegions))
  }



  OnDestroy() {
    this.sub.unsubscribe();
  }

}
