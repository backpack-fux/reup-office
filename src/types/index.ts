import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Column = {
  name: string;
  uid: string;
};

export type UserStatus = "active" | "review" | "refuse" | "nope";
export type PaymentStatus =
  | "incomplete"
  | "pending"
  | "failed"
  | "paid"
  | "refund"
  | "dispute"
  | "chargeback";

export type User = {
  id: number;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  userStatus: UserStatus;
  paymentStatus: PaymentStatus;
  orderId: string;
  total: string;
  paymentNetworkResponse: {
    transactionId: string;
    responseCode: string;
    responseMessage: string;
    authCode: string;
    riskScore: string;
    timestamp: string;
  };
  history: {
    previousStatuses: UserStatus[];
    previousPaymentStatuses: PaymentStatus[];
  };
};

type OrderID = string;

export type Order = {
  id: OrderID;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  amount: number;
};

export type CountryCode = {
  [key: string]: {
    areaCode: string;
    country: string;
  };
};

// TODO: create a list of all the major countries with their area codes
export const countryCodes: CountryCode = {
  "US": {
    areaCode: "+1",
    country: "United States",
  },
  "GB": {
    areaCode: "+44",
    country: "United Kingdom",
  },
  "SP": {
    areaCode: "+34",
    country: "Spain",
  },
  "FR": {
    areaCode: "+33",
    country: "France",
  },
  "IT": {
    areaCode: "+39",
    country: "Italy",
  },
  "DE": {
    areaCode: "+49",
    country: "Germany",
  },
  "JP": {
    areaCode: "+81",
    country: "Japan",
  },
  "AU": {
    areaCode: "+61",
    country: "Australia",
  },
  "CA": {
    areaCode: "+1",
    country: "Canada",
  },
  "MX": {
    areaCode: "+52",
    country: "Mexico",
  },
  "IN": {
    areaCode: "+91",
    country: "India",
  },
  "BR": {
    areaCode: "+55",
    country: "Brazil",
  },
  "ZA": {
    areaCode: "+27",
    country: "South Africa",
  },
  "NZ": {
    areaCode: "+64",
    country: "New Zealand",
  },
  "SG": {
    areaCode: "+60",
    country: "Singapore",
  },
};




