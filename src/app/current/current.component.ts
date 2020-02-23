import { Component, OnInit } from '@angular/core';
import { Breakpoints } from "@angular/cdk/layout";
import { DeviceResponsiveService } from "../share/device-responsive.service";

@Component({
  selector: 'current-page',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.sass']
})
export class CurrentComponent implements OnInit {
  isHandset$: any;
  isTablet$: any;
  isWeb$: any;

  constructor(
    DRS: DeviceResponsiveService
  ) {
    this.isHandset$ = DRS.whatDevice([Breakpoints.XSmall]);
    this.isTablet$ = DRS.whatDevice([Breakpoints.Small]);
    this.isWeb$ = DRS.whatDevice([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]);
  }

  ngOnInit(): void {
  }

}
