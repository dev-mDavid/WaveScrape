import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'current-data-item',
  templateUrl: './current-data-item.component.html',
  styleUrls: ['./current-data-item.component.sass']
})
export class CurrentDataItemComponent implements OnInit {


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
