import { Component, OnInit } from '@angular/core';
import 'firebase/firestore';

import { Observable } from "rxjs";
// import {  } from "../../../core/models/";

import { AdminBreaksService } from "../../services/admin-breaks.service";
import { RegionByState } from "../../../core/models/regionsByState.model";

@Component({
  selector: 'app-admin-breaks',
  templateUrl: './admin-breaks.component.html',
  styleUrls: ['./admin-breaks.component.sass']
})
export class AdminBreaksComponent implements OnInit {
regionByState: Observable<RegionByState>;

  constructor(
    public adminBreaksService: AdminBreaksService
    ) { }
  
  ngOnInit() {
    
    // this.regionByState =
    // this.
    
    

  }

}
