import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'current-data-item__horizontal-scroll',
  templateUrl: './current-data-item__horizontal-scroll.component.html',
  styleUrls: ['./current-data-item__horizontal-scroll.component.sass']
})
export class CurrentDataItemHorizontalScrollComponent implements OnInit {


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
