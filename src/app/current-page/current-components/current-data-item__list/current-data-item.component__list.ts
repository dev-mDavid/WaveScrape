import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'current-data-item__list',
  templateUrl: './current-data-item.component__list.html',
  styleUrls: ['./current-data-item.component__list.sass']
})

export class CurrentDataItemListComponent implements OnInit {
 

  // interface Break {
  //   name: string;
  // }
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
  constructor() {     
   
  }

  ngOnInit(): void {
  }

}
