import {
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import { HandleTrailer, HandleTruck } from "../redux/slices";
import { ICompany, IDriver, ITruck, IVehicle } from "../properties";

export interface IBlock {
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
}

export interface IHeader {
  title: React.ReactNode;
  style?: React.CSSProperties;
}

export interface IFlex {
  gap?: string;
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  number: number;
}

export interface IFlexColumn {
  gap?: string;
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
}

export interface IFlexRow {
  gap?: string;
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
}

export interface IButton {
  title: React.ReactNode;
  icon?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IMotion {
  children: JSX.Element | JSX.Element[];
}

export interface ICompanyCard {
  company: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  street: string | undefined;
  number: string | undefined;
  zip: string | undefined;
  city: string | undefined;
  licenseNum: string | undefined;
  id: string | undefined;
}

export interface IModal {
  children: JSX.Element | JSX.Element[];
  isVisible?: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  style?: React.CSSProperties;
}

export interface IModalContent {
  url: string;
  header: string;
  mainText: string;
  secondaryText: string;
}

export interface IPropertyCard {
  property: JSX.Element | JSX.Element[] | string;
  quantity: number;
  notification: JSX.Element | string;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  style?: React.CSSProperties | null;
}

export interface ISection {
  message: string;
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLSpanElement> | undefined;
}

export interface ICardButton {
  title: string;
  style?: React.CSSProperties;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IDateSelecter {
  name: string;
  label: string;
  views: ("year" | "month" | "day")[];
  format: string;
  value: string | null;
  onChange:
    | ((
        value: string | null,
        context: PickerChangeHandlerContext<DateValidationError>
      ) => void)
    | undefined;
  error?: boolean;
  style?: React.CSSProperties;
  width?: string;
  errorText: JSX.Element;
}

export interface IBackButton {
  title: string;
}

export interface IMainInfo {
  onEdit: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

type IDispatchTruck = {
  (truck: ITruck):
    | {
        payload: HandleTruck;
        type: string;
      }
    | undefined;
};
type IDispatchTrailer = {
  (vehicle: IVehicle):
    | {
        payload: HandleTrailer;
        type: string;
      }
    | undefined;
};

export interface IVehicleMainInfo {
  dispatch: IDispatchTruck | IDispatchTrailer;
  nextHU: string;
  nextSP: string;
  reqUrl: string;
  pathTo: string;
  brand: string;
  type: string;
  weight: string;
  nextTachograph?: string;
}

export interface IVehicleSecondaryInfo {
  nextHU: string;
  nextSP: string;
  nextTachograph?: string;
}

export interface IVehicleProfile {
  title: string;
  indicator: string;
  url: string;
  firstChild: JSX.Element;
  secondChild: JSX.Element;
  getVehicleProfile: () => Promise<void> | undefined;
}

export interface IInputField {
  name: string;
  label: string;
  value: string;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  error: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  type?: string;
}

export interface ISelector {
  name: string;
  label: string;
  value: string;
  onChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  children: JSX.Element[];
  error: boolean;
  errorText: JSX.Element;
}

export interface ITable {
  headers: string[];
  propsChildren: JSX.Element[] | JSX.Element | any | undefined;
  property: IDriver[] | IVehicle[] | ITruck[] | ICompany[];
  first: number;
  last: number;
  setFirst: (value: React.SetStateAction<number>) => void | undefined;
  setLast: (value: React.SetStateAction<number>) => void | undefined;
  sort?: React.ReactNode;
  sortFunction?: React.MouseEventHandler<HTMLDivElement> | undefined;
}
