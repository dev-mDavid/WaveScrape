import { Component, OnInit } from '@angular/core';
import { Breakpoints } from "@angular/cdk/layout";
import { DeviceResponsiveService } from "../share/device-responsive.service";

@Component({
  selector: 'nav-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.sass']
})
export class ShellComponent implements OnInit {
  isHandset$: any;
  isHandsetPortrait$: any;

  constructor(
    DRS: DeviceResponsiveService
  ) {
    this.isHandset$ = DRS.whatDevice(Breakpoints.Handset);
    this.isHandsetPortrait$ = DRS.whatDevice(Breakpoints.HandsetPortrait);
  }

  ngOnInit(): void {
  }

}
