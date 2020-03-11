import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'region-list-item',
  templateUrl: './region-list-item.component.html',
  styleUrls: ['./region-list-item.component.sass']
})
export class RegionListItemComponent implements OnInit {

  // interface Break {
  //   name: string;
  // }

  @Input() regionName: string;
  @Input() regionWaterQuality: boolean;
  @Input() regionTempSuit: string;
  @Input() regionWaveSize: string;
  @Input() regionSwellDirection: string;

  // regions = [
  //   {
  //     name: 'San Diego — North County'
  //   },
  //   {
  //     name: 'San Diego — South County'
  //   }
  // ];



  expandState: boolean = true;
  expandIcon: string = "expand_more";

  toggleExpand() {
    this.expandState = !this.expandState;
    this.expandIcon = (this.expandIcon == "expand_more") ? "expand_less" : "expand_more";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
