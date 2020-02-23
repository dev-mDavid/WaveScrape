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
*/