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

  break1 = {
    name: 'La Jolla Shores'
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
