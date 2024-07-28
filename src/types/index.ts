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

export type ChainAddress = `0x${string}`;

export enum SettlementNetwork {
  ETHEREUM = "ethereum",
  POLYGON = "polygon",
  ARBITRUM = "arbitrum",
  AVALANCHE = "avalanche",
  OPTIMISM = "optimism",
  SOLANA = "solana",
  STELLAR = "stellar",
  BASE = "base",

}

export enum SettlementCurrency {
  USDC = "usdc",
  USDT = "usdt",
  DAI = "dai",
  GLO = "glo"
  // Add other currencies as needed
}
export type MerchantAccount = {
  fid: number;
  settlementAddress: ChainAddress;
  accountName: string;
  complianceStatus: string;
  appVersion: string;
};

export type PylonSettings = {
  networkType: "testnet" | "mainnet";
  settlementNetwork: SettlementNetwork;
  settlementStablecoin: SettlementCurrency;
  onRamp: {
    widget: string;
    widgetURL: string;
    apiKey: string;
  },
}

// Create a temporary type for the order ID
export type OrderID = `${string}-${string}-${string}-${string}`;

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




