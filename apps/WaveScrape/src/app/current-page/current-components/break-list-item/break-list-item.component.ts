import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'break-list-item',
  templateUrl: './break-list-item.component.html',
  styleUrls: ['./break-list-item.component.sass']
})
export class BreakListItemComponent implements OnInit {

  @Input() breakName: string

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
