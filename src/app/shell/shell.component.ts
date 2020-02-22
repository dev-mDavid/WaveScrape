import { Component, OnInit } from '@angular/core';
import { Breakpoints } from "@angular/cdk/layout";
import { DeviceResponsiveService } from "../share/device-responsive.service";

@Component({
  selector: 'nav-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.sass']
})
export class ShellComponent implements OnInit {
  isHandsetPortrait$: any;
  isDesktopSize$: any;

  constructor(
    DRS: DeviceResponsiveService
  ) {
    this.isHandsetPortrait$ = DRS.whatDevice(Breakpoints.HandsetPortrait);
    this.isDesktopSize$ = DRS.whatDevice(Breakpoints.TabletLandscape);
  }

  ngOnInit(): void {
  }

}
