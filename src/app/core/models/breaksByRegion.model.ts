export interface BreakByRegion {
  region?: string;
  breaks?: StringArray[];
};

export interface StringArray {
  [index: number]: string;
};