import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import 'firebase/firestore';


import { CurrentBreak } from "../../../core/models/currentBreak.model";
import { CurrentBreakService } from "../../current-services/currentBreak.service";


@Component({
  selector: 'current-data-item__list',
  templateUrl: './current-data-item.component__list.html',
  styleUrls: ['./current-data-item.component__list.sass']
})

export class CurrentDataItemListComponent implements OnInit {        
currentBreak: Observable<CurrentBreak>;

  constructor(    
    public currentBreakService: CurrentBreakService
  ) {} 
  

  ngOnInit() {    
    this.currentBreak = 
    this.currentBreakService
    .getCurrentBreakData('laJollaShores');
  }

  ngOnDestroy() {
  }

  expandState: boolean = true;
  expandIcon: string = "expand_more";

  toggleExpand() {
    this.expandState = !this.expandState;
    this.expandIcon = (this.expandIcon == "expand_more") ? "expand_less" : "expand_more";
  }
}
