import { PaymentStatus, UserStatus } from "@/types";

export const useStatusColorMap = (): Record<
  UserStatus,
  "success" | "warning" | "danger" | "default"
> => {
  return {
    active: "success",
    review: "warning",
    refuse: "danger",
    nope: "default",
  };
};

export const usePaymentStatusColorMap = (): Record<
  PaymentStatus,
  "default" | "primary" | "secondary" | "success" | "warning" | "danger"
> => {
  return {
    incomplete: "danger",
    pending: "warning",
    failed: "danger",
    paid: "success",
    refund: "secondary",
    dispute: "primary",
    chargeback: "default",
  };
};
