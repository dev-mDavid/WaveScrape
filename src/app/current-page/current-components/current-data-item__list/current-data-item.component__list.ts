import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

// import { firestore } from 'firebase';

// import { Subscription } from "rxjs";
import { CurrentBreak } from "../../current-models/currentBreak.model";
// import { CurrentBreakService } from "../../current-services/currentBreak.service";

// import * as firebase from "firebase/app";

// import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
// import { Observable } from "rxjs";

// export interface CurrentBreak { breakName: string; }
@Component({
  selector: 'current-data-item__list',
  templateUrl: './current-data-item.component__list.html',
  styleUrls: ['./current-data-item.component__list.sass']
})

// export class CurrentDataItemListComponent implements OnInit {        
export class CurrentDataItemListComponent{        

// @Input() currentBreak;   

private currentBreakDoc: AngularFirestoreDocument<CurrentBreak>;
currentBreak: Observable<CurrentBreak>;

  constructor(
    private db: AngularFirestore 
    // private currentBreakService: CurrentBreakService
  ) {
    this.currentBreakDoc = db.doc<CurrentBreak>('currentBreaks/laJollaShores');
    this.currentBreak = this.currentBreakDoc.valueChanges();
  }
  update(currentBreak: CurrentBreak) {
    this.currentBreakDoc.update(currentBreak);
  }
  
  ngOnInit() {    
    console.log(
      this.db
      .collection('currentBreaks')
      
      // .snapshotChanges()
      );
    
    

    // console.dir(
      
    // this.db
    //   .collection('currentBreaks')
    //   .doc('laJollaShores')
    //   // .valueChanges({ idField: 'breakName' })
    // ) 
  }

  ngOnDestroy() {
  }









/* _______________________________________________*/




  breaksCurrentData = {
    breakName: "La Jolla Shores",
    regionName: "San Diego — North Side",
    today: {
      date: null,
      waterQuality: null,
      moonPhase: null,
      sunData: {
        sunRise: null,
        sunSet: null,
        firstLight: null,
        lastLight: null,
      }, 
      tideData: {
        highTide: [
          {
            tideTime: null,
            tideHeight: null
          }
        ],
        lowTide: [],
      },
      timeSlots: [
        {
          time: 4,
          meridiem: "am",
          waveSize: "2-3ft",
          waveEnergy: null,
          swellDirection: null, 
          swellSize: null,
          swellPeriod: null,
          tideHeight: null,
          tideDirection: null,
          windSpeed: null,
          windDirection: null,
          tempAir: null,
          tempWater: null,                    
        }
      ],
    },
    tomorrow: {
    }
  }

  regionCurrentData = {
    quickPreview: {
      waterQuality: "check",
      suitType: "3/2 Wetsuit",
      waveSize: "8-12ft",
      swellDirection: "SSW"
    }
  }
        
          

  break1 = {
    name: 'La Jolla Shores'
  }

  breaksCurrentTodayTimeSlotTime = 
    this
    .breaksCurrentData
    .today
    .timeSlots.find(x=>x.time === 4)
    .time + 'am';

   
  breaksCurrentTodayTimeSlotWaveSize = 
  this
  .breaksCurrentData
  .today
  .timeSlots.find(x=>x.time === 4)
  .waveSize

  

  expandState: boolean = true;
  expandIcon: string = "expand_more";

  toggleExpand() {
    this.expandState = !this.expandState;
    this.expandIcon = (this.expandIcon == "expand_more") ? "expand_less" : "expand_more";
  }
}
