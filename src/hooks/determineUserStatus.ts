import { User, UserStatus } from "@/types";

export const determineUserStatus = (user: User): UserStatus => {
const riskScore = parseInt(user.paymentNetworkResponse.riskScore);
  if (riskScore < 30) return "active";
  if (riskScore < 60) return "review";
  if (riskScore < 90) return "refuse";
  return "nope";
};