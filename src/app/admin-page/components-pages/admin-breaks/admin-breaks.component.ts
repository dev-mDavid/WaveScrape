import { Component, OnInit, OnDestroy } from '@angular/core';
import 'firebase/firestore';

import { Observable, Subscription } from "rxjs";

// import { AdminBreaksService } from "../../services/admin-breaks.service";
import { RegionByState, StringArray  } from "../../../core/models/regionByState.model";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin-breaks',
  templateUrl: './admin-breaks.component.html',
  styleUrls: ['./admin-breaks.component.sass']
})
export class AdminBreaksComponent implements OnInit {

items: RegionByState[];
sub: Subscription
  constructor(
    private db: AngularFirestore,
    // public adminBreaksService: AdminBreaksService
    ) { }
  
  getRegions() {    
    // return this.db
    // .collection<RegionByState>('regionsByState')
    // .doc('XR35zoWWfIXq2OohErgA')
    // .valueChanges()

    return this.db
    .collection<RegionByState>('regionsByState', ref => 
    ref.where('state', '==', 'California'))
    .valueChanges()
  }
  
    
  ngOnInit() {
    // console.log(this.getRegions())
      // this.regionByState$ = this.getRegions()
      // console.log(
        this.sub = this.getRegions()
        .subscribe(items => (this.items = items))
      // );
      
    
  }
  OnDestroy() {
    this.sub.unsubscribe();
  }

}
