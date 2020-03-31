// Core
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Observable, Subscription, } from "rxjs";

// Database, Services, 
import { AdminBreaksService } from "../../services/admin-breaks.service";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { database } from 'firebase';

// Models
import { RegionsByState, StringArray } from "../../../core/models/regionByState.model";
import { BreaksByRegion } from "../../../core/models/breaksByRegion.model";

// Dialogs
import { MatDialog } from "@angular/material/dialog";
import { AddBreakDialogComponent } from "../../dialogs/add-break-dialog.component";


@Component({
  selector: 'app-admin-breaks',
  templateUrl: './admin-breaks.component.html',
  styleUrls: ['./admin-breaks.component.sass']
})
export class AdminBreaksComponent implements OnInit, OnDestroy{

regionsByStates: RegionsByState[];
breaksByRegions: BreaksByRegion[];
sub: Subscription;
// dialog: MatDialog;

  constructor(
    private db: AngularFirestore,
    public adminBreaksService: AdminBreaksService,
    public dialog: MatDialog,
    ) { }  


  devToAddBreak(breakName: string) {
    
    return this
      // .db.collection<BreaksByRegion>("breaksByRegion", ref =>
      //   ref.where('region', '==', 'San Diego — North County'))
      // .valueChanges().

      .db.collection<BreaksByRegion>("breaksByRegion")      
      .doc('roOmpIS8v81jEI7byT7h')
      .update({ breaks: firebase.firestore.FieldValue.arrayUnion(breakName)})

      // .update({ breaks: 'dance' })

    // return this
      // .db.collection<BreaksByRegion>
      // ("breaksByRegion", ref =>
      //   ref.where('region', '==', 'San Diego — North County'))      
      // .add({
        // breaks: StringArray[]
        // break:  'fantastic' 
      // })
          
        
    
  }  

  
    
    
    
  
  showBreaksOfThisRegion(selectedRegion: string){
      return this.sub = this.adminBreaksService
        .readBreaksByRegion(
          selectedRegion
        )
        .subscribe(breaksByRegions => (this.breaksByRegions = breaksByRegions))  
  }

  openAddBreakDialog(): void{
    console.log('openAddBreakDialog');
    const dialogRef = this.dialog.open(AddBreakDialogComponent,{
      width: '400px',
      data:{}
    });

   dialogRef.afterClosed().subscribe(result => {
     if (result) {}
   }) 
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
