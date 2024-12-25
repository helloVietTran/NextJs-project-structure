import { ReactElement } from "react";

export enum ESettingsType {
  PERSONAL = "personal",
  PREFERENCES = "preferences",
  SECURITY = "security",
  PAYMENT = "payment",
  PRIVACY = "privacy",
  NOTIFICATIONS = "notifications",
  OTHER_TRAVELERS = "other-travelers",
}

export interface ISliderListItems {
  image: string;
  name: string;
  description?: string;
  point?: number;
  rank?: string;
  review?: string;
  price?: string;
}

export interface IFilterOptions {
  label: ReactElement;
  value: string;
}
