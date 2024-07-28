import { Column, MerchantAccount, PylonSettings, SettlementCurrency, SettlementNetwork, User } from "@/types";
import { getOpepenAvatar } from "@/utils/helpers";

export const columns: Column[] = [
  { name: "CUSTOMER", uid: "customer" },
  { name: "USER STATUS", uid: "userStatus" },
  { name: "PAYMENT STATUS", uid: "paymentStatus" },
  { name: "ORDER ID", uid: "orderId" },
  { name: "TOTAL", uid: "total" },
];

export const telegramSupport = "https://t.me/+aQkhaA6ncVpmNzY5";

export const users: User[] = [
  {
    id: 1,
    customer: {
      name: "Rick Sanchez",
      email: "rick.sanchez@example.com",
      avatar: getOpepenAvatar("Rick Sanchez", 150),
    },
    userStatus: "active" as const,
    paymentStatus: "incomplete" as const,
    orderId: "ORD-001",
    total: "$100.00",
    paymentNetworkResponse: {
      transactionId: "WP12345678",
      responseCode: "A",
      responseMessage: "Authorised",
      authCode: "123456",
      riskScore: "20",
      timestamp: "2023-04-01T12:34:56Z",
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: [],
    },
  },
  {
    id: 2,
    customer: {
      name: "Summer Smith",
      email: "summer.smith@example.com",
      avatar: getOpepenAvatar("Summer Smith", 150),
    },
    userStatus: "review" as const,
    paymentStatus: "pending" as const,
    orderId: "ORD-002",
    total: "$75.50",
    paymentNetworkResponse: {
      transactionId: "WP12345678",
      responseCode: "A",
      responseMessage: "Authorised",
      authCode: "123456",
      riskScore: "31",
      timestamp: "2023-04-01T12:34:56Z",
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: [],
    },
  },

  {
    id: 3,
    customer: {
      name: "Morty Smith",
      email: "morty.smith@example.com",
      avatar: getOpepenAvatar("Morty Smith", 150),
    },
    userStatus: "active" as const,
    paymentStatus: "failed" as const,
    orderId: "ORD-003",
    total: "$250.00",
    paymentNetworkResponse: {
      transactionId: "WP12345678",
      responseCode: "10000",
      responseMessage: "Authorized",
      authCode: "123456",
      riskScore: "1",
      timestamp: "2023-04-01T12:34:56Z",
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: [],
    },
  },
  {
    id: 4,
    customer: {
      name: "Sterling Archer",
      email: "sterling.archer@example.com",
      avatar: getOpepenAvatar("Sterling Archer", 150),
    },
    userStatus: "review" as const,
    paymentStatus: "paid" as const,
    orderId: "ORD-004",
    total: "$380.00",
    paymentNetworkResponse: {
      transactionId: "WP12345678",
      responseCode: "A",
      responseMessage: "Authorised",
      authCode: "123456",
      riskScore: "61",
      timestamp: "2023-04-01T12:34:56Z",
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: [],
    },
  },
  {
    id: 5,
    customer: {
      name: "Mallory Archer",
      email: "mallory.archer@example.com",
      avatar: getOpepenAvatar("Mallory Archer", 150),
    },
    userStatus: "active" as const,
    paymentStatus: "refund" as const,
    orderId: "ORD-005",
    total: "$125.75",
    paymentNetworkResponse: {
      transactionId: "WP12345678",
      responseCode: "A",
      responseMessage: "Authorised",
      authCode: "123456",
      riskScore: "91",
      timestamp: "2023-04-01T12:34:56Z",
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: [],
    },
  },
  {
    id: 6,
    customer: {
      name: "Cheryl Tunt",
      email: "cheryl.tunt@example.com",
      avatar: getOpepenAvatar("Cheryl Tunt", 150),
    },
    userStatus: "refuse" as const,
    paymentStatus: "dispute" as const,
    orderId: "ORD-005",
    total: "$125.75",
    paymentNetworkResponse: {
      transactionId: "WP12345678",
      responseCode: "A",
      responseMessage: "Authorised",
      authCode: "123456",
      riskScore: "1",
      timestamp: "2023-04-01T12:34:56Z",
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: [],
    },
  },
  {
    id: 7,
    customer: {
      name: "Launa Kane",
      email: "launa.kane@example.com",
      avatar: getOpepenAvatar("Launa Kane", 150),
    },
    userStatus: "nope" as const,
    paymentStatus: "chargeback" as const,
    orderId: "ORD-005",
    total: "$125.75",
    paymentNetworkResponse: {
      transactionId: "WP12345678",
      responseCode: "A",
      responseMessage: "Authorised",
      authCode: "123456",
      riskScore: "1",
      timestamp: "2023-04-01T12:34:56Z",
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: [],
    },
  },
];

export const account: MerchantAccount = {
  fid: 1,
  settlementAddress: "0xdeadbeef",
  accountName: "Acme, Inc",
  complianceStatus: "active",
  appVersion: "1.0.0",
};

export const pylon: PylonSettings = {
  networkType: "testnet",
  settlementNetwork: SettlementNetwork.BASE,
  settlementStablecoin: SettlementCurrency.USDC,
  onRamp: {
    widget: "",
    widgetURL: "",
    apiKey: ""
  }
}
