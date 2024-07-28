import { User } from "@/types";

export const PaymentNetworkResponse: React.FC<{ user: User }> = ({ user }) => (
  <>
    <div className="text-tiny">
      Transaction ID: {user.paymentNetworkResponse.transactionId}
    </div>
    <div className="text-tiny">
      Response: {user.paymentNetworkResponse.responseMessage}
    </div>
    <div className="text-tiny">
      Auth Code: {user.paymentNetworkResponse.authCode}
    </div>
    <div className="text-tiny">
      Risk Score: {user.paymentNetworkResponse.riskScore}
    </div>
    <div className="text-tiny">
      Timestamp: {user.paymentNetworkResponse.timestamp}
    </div>
  </>
);
