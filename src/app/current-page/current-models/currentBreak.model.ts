export interface CurrentBreak {
  breakName?: string;
  regionName?: string;
  today?: Today[];
  tomorrow?: Tomorrow[];
};

export interface Day {
  date?: firebase.firestore.FieldValue;
  waterQuality?: string;
  moonPhase?: string
  sunData?: SunData[];
  tideData?: TideData[];
  timeSlots?: TimeSlot[];
};

export interface SunData {
  sunRise?: firebase.firestore.FieldValue;
  sunSet?: firebase.firestore.FieldValue;
  firstLight?: firebase.firestore.FieldValue;
  lastLight?: firebase.firestore.FieldValue;
};
  
export interface TideData {
  highTide?: HighTide[];
  lowTide?: LowTide[];
};

export interface HighTide {
  tideTime?: firebase.firestore.FieldValue;
  tideHeight?: number;
};

export interface LowTide {
  tideTime?: firebase.firestore.FieldValue;
  tideHeight?: number;
};

export interface TimeSlot {
  time?: firebase.firestore.FieldValue;  
  waveSize?: string;
  waveEnergy?: string;
  swellDirection?: string;
  swellSize?: string | number;
  swellPeriod?: string | number;
  tideHeight?: number;
  // tideDirection?: null;
  windSpeed?: number;
  windDirection?: string;
  tempAir?: number;
  tempWater?: number;
};

export interface Today extends Day {};
export interface Tomorrow extends Day {};