// Core
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Observable, Subscription, } from "rxjs";
// import { map } from 'rxjs/add/operator/map';

// Database, Services, 
import { AdminBreaksService } from "../../services/admin-breaks.service";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { database } from 'firebase';

// Interfaces, Models
import { RegionsByState, StringArray } from "../../../core/models/regionByState.model";
import { BreaksByRegion } from "../../../core/models/breaksByRegion.model";

// Dialogs
import { MatDialog } from "@angular/material/dialog";
import { AddBreakDialogComponent } from "../../dialogs/add-break-dialog.component";
import { map } from 'rxjs/operators';


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
selectedBreak: string;

  constructor(
    private db: AngularFirestore,
    public adminBreaksService: AdminBreaksService,
    public dialog: MatDialog,
    
    ) { }  

  showBreaksOfThisRegion(selectedRegion: string){

      return this.sub = this.adminBreaksService
        .readBreaksByRegion(
          selectedRegion
        )
        .subscribe(breaksByRegions => (this.breaksByRegions = breaksByRegions));  
        
  }

  showDetailsOfThisBreak(breakName: string){
    return this.selectedBreak = breakName;
    // console.log(item)
    // console.log('hello')
  }

  openAddBreakDialog(idData: string, regionData: string): void{
    console.log('openAddBreakDialog');
    const dialogRef = this.dialog.open(AddBreakDialogComponent,{
      width: '400px',
      data:{id: idData, region: regionData}
    });

   dialogRef.afterClosed().subscribe(result => {
     if (result) {
       this.adminBreaksService.updateAddBreakToRegionDoc(result.id, result.break)
     }
   }) 
  }
    
  ngOnInit() {
    this.sub = this.adminBreaksService
      .readRegionsByState(        
        "California"
        )              
      .subscribe(regionsByStates => (this.regionsByStates = regionsByStates))
  }

  
  ngOnChanges() {
    
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}
