import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Column = {
  name: string;
  uid: string;
}

export type UserStatus = "active" | "review" | "refuse" | "nope";
export type PaymentStatus = "incomplete" | "pending" | "failed" | "paid" | "refund" | "dispute" | "chargeback";

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
}
