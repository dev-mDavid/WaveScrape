import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DeviceResponsiveService {

  /* Makes the device size into an observable for dynamic responsiveness */     
  whatDevice(deviceType: string[]): Observable<boolean> {
    return this.breakpointObserver.observe(deviceType)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  constructor(private breakpointObserver: BreakpointObserver) { }

}

/* How to Use on a component:
import { Breakpoints } from "@angular/cdk/layout";
import { DeviceResponsiveService } from "../share/device-responsive.service";

export class ComponentName implements OnInit {
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
*/