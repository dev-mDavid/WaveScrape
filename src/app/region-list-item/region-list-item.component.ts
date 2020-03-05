import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'region-list-item',
  templateUrl: './region-list-item.component.html',
  styleUrls: ['./region-list-item.component.sass']
})
export class RegionListItemComponent implements OnInit {

  // interface Break {
  //   name: string;
  // }

  break1 = {
    name: 'Blacks Beach'
  }



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
