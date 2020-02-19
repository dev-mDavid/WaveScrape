import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mmt-list-item',
  templateUrl: './mmt-list-item.component.html',
  styleUrls: ['./mmt-list-item.component.sass']
})
export class MmtListItemComponent implements OnInit {
  expandState: boolean = true;

  toggleExpand(){  
    this.expandState = !this.expandState;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
