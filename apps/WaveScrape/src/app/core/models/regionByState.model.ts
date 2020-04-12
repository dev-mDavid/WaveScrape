export interface RegionsByState {
  state?: string;
  regions?: StringArray[];
};

export interface StringArray{
  [index: number]: string;
};