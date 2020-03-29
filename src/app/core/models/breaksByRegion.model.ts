export interface BreaksByRegion {
  region?: string;
  breaks?: StringArray[];
};

export interface StringArray {
  [index: number]: string;
};