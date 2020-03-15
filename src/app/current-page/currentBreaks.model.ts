import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface CurrentBreaks {
  breakName?: string;
  regionName?: string;
  today?: Today[];
};

export interface Today {
  date?: firebase.firestore.Timestamp;
  waterQuality?: string;
  moonPhase?: string
  sunData?: SunData[];
  tideData?: TideData[];
  timeSlots?: TimeSlots[];
};

export interface SunData {
  sunRise?: firebase.firestore.Timestamp;
  sunSet?: firebase.firestore.Timestamp;
  firstLight?: firebase.firestore.Timestamp;
  lastLight?: firebase.firestore.Timestamp;
};
  
export interface TideData {
  highTide?: HighTide[];
  lowTide?: LowTide[];
};

export interface HighTide {
  tideTime?: firebase.firestore.Timestamp;
  tideHeight?: number;
};

export interface LowTide {
  tideTime?: firebase.firestore.Timestamp;
  tideHeight?: number;
};

export interface TimeSlots {
  time?: firebase.firestore.Timestamp;  
  waveSize?: string;
  waveEnergy?: string;
  swellDirection?: string;
  swellSize?: string | number;
  swellPeriod?: string | number;
  tideHeight?: number;
  // tideDirection?: null;w
};