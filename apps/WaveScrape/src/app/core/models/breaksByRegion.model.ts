export interface BreaksByRegion {
  id?: string;
  region?: string;
  breaks?: StringArray[];
};

export interface StringArray {
  [index: number]: string;
  // break?: string;
};