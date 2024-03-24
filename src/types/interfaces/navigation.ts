import { NavigateOptions, To } from "react-router-dom";

export enum Routes {
  "/",
  "/register-company",
  "/company-profile",
}

export type Navigate = (
  to: keyof typeof Routes | To,
  options?: NavigateOptions | undefined
) => void;
