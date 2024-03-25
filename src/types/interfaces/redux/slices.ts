import { ICompany, IDriver, ITruck, IVehicle } from "../properties";

export interface HandleMenu {
  menu: boolean;
}

export interface HandleSpinner {
  loading: boolean;
}

export interface HandleError {
  error: boolean;
}

export interface HandleModal {
  isVisible: boolean;
}

export interface HandlePage {
  page: number;
}

export interface HandleCompany {
  company: ICompany;
}

export interface HandleDriver {
  driver: IDriver;
}

export interface HandleTruck {
  truck: ITruck;
}

export interface HandleTrailer {
  trailer: IVehicle;
}

export interface HandleProperties {
  drivers: IDriver[];
  trucks: ITruck[];
  trailers: IVehicle[];
}

export interface HandleDriversNotification {
  drivers: boolean;
}
export interface HandleTrailersNotification {
  trailers: boolean;
}
export interface HandleTrucksNotification {
  trucks: boolean;
}
