export interface RegionByState {
  state?: string;
  regions?: StringArray[];
};

export interface StringArray{
  [index: number]: string;
};