import { Column, User } from "@/types";

const columns: Column[] = [
  { name: "CUSTOMER", uid: "customer" },
  { name: "USER STATUS", uid: "userStatus" },
  { name: "PAYMENT STATUS", uid: "paymentStatus" },
  { name: "ORDER ID", uid: "orderId" },
  { name: "TOTAL", uid: "total" },
];

const users: User[] = [
  {
    id: 1,
    customer: {
      name: "Rick Sanchez",
      email: "rick.sanchez@example.com",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
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
      timestamp: "2023-04-01T12:34:56Z"
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: []
    }
  },
  {
    id: 2,
    customer: {
      name: "Summer Smith",
      email: "summer.smith@example.com",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    userStatus: "paused" as const,
    paymentStatus: "pending" as const,
    orderId: "ORD-002",
    total: "$75.50",
    paymentNetworkResponse: {
      transactionId: "WP12345678",
      responseCode: "A",
      responseMessage: "Authorised",
      authCode: "123456",
      riskScore: "31",
      timestamp: "2023-04-01T12:34:56Z"
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: []
    }
  },

  {
    id: 3,
    customer: {
      name: "Morty Smith",
      email: "morty.smith@example.com",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
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
      timestamp: "2023-04-01T12:34:56Z"
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: []
    }
  },
  {
    id: 4,
    customer: {
      name: "Sterling Archer",
      email: "sterling.archer@example.com",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    },
    userStatus: "vacation" as const,
    paymentStatus: "paid" as const,
    orderId: "ORD-004",
    total: "$380.00",
    paymentNetworkResponse: {
      transactionId: "WP12345678",
      responseCode: "A",
      responseMessage: "Authorised",
      authCode: "123456",
      riskScore: "61",
      timestamp: "2023-04-01T12:34:56Z"
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: []
    }
  },
  {
    id: 5,
    customer: {
      name: "Mallory Archer",
      email: "mallory.archer@example.com",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
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
      timestamp: "2023-04-01T12:34:56Z"
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: []
    }
  },
  {
    id: 6,
    customer: {
      name: "Cheryl Tunt",
      email: "cheryl.tunt@example.com",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    },
    userStatus: "active" as const,
    paymentStatus: "dispute" as const,
    orderId: "ORD-005",
    total: "$125.75",
    paymentNetworkResponse: {
      transactionId: "WP12345678",
      responseCode: "A",
      responseMessage: "Authorised",
      authCode: "123456",
      riskScore: "1",
      timestamp: "2023-04-01T12:34:56Z"
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: []
    }
  },
  {
    id: 7,
    customer: {
      name: "Launa Kane",
      email: "launa.kane@example.com",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    },
    userStatus: "active" as const,
    paymentStatus: "chargeback" as const,
    orderId: "ORD-005",
    total: "$125.75",
    paymentNetworkResponse: {
      transactionId: "WP12345678",
      responseCode: "A",
      responseMessage: "Authorised",
      authCode: "123456",
      riskScore: "1",
      timestamp: "2023-04-01T12:34:56Z"
    },
    history: {
      previousStatuses: [],
      previousPaymentStatuses: []
    }
  },
];

export { columns, users };
