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

  mockData = [
    {
      id: 123,
      name: "hello World"
    },{
      id: 124
    }
  ]
  breaksCurrent = [
    {
      id: 123,
      breakName: "La Jolla Shores",
      regionName: "San Diego — North Side",
      regionQuickPreview: {
        waterQuality: "check",
        suitType: "3/2 Wetsuit",
        waveSize: "8-12ft",
        swellDirection: "SSW"
      },      
      today: {
        date: "01/01/20",
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
            { tideTime: null,
              tideHeight: null
            }
          ],
          lowTide: [],
        },
        timeSlots: [
          {
            time: 4,
            meridiem: "am",
            waveSize: null,
            waveEnergy: null,
            swellDirection: null, 
            swellSize: null,
            swellPeriod: null,
            tideHeight: null,
            tideDireciton: null,
            windSpeed: null,
            windDirection: null,
            tempAir: null,
            tempWater: null,                    
          }
        ]
        
      },
      tomorrow: {
        date: "01/02/20"
      }


    },
    {
      id: 124
    }
  ];
  

  break1 = {
    name: 'La Jolla Shores'
  }

  LaJollaShoresTimeSlotTime = 
    this
    .breaksCurrent.find(x=>x.id === 123)
    .today
    .timeSlots.find(x=>x.time === 4)
    .time + 'am';



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
