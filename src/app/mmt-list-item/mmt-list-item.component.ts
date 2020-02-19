import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mmt-list-item',
  templateUrl: './mmt-list-item.component.html',
  styleUrls: ['./mmt-list-item.component.sass']
})
export class MmtListItemComponent implements OnInit {
  expandState: boolean = true;
  expandIcon: string = "expand_more";

  toggleExpand(){  
    this.expandState = !this.expandState;
    this.expandIcon = (this.expandIcon == "expand_more") ? "expand_less" : "expand_more";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
