import { Button } from "@nextui-org/button";

import {
  DeleteIcon,
  DownloadIcon,
  EditIcon,
  EyeIcon,
  MoneyIcon,
  XIcon,
} from "@/components/icons";
import { ActionPopover } from "@/components/popover/actions";
import { PaymentNetworkResponse } from "@/components/popover/payment-network-response";
import { ModifyUserStatus } from "@/components/popover/user-modify";
import { User } from "@/types";

export const ActionsCell: React.FC<{ user: User }> = ({ user }) => (
  <div className="flex items-center gap-2 relative">
    <ActionPopover icon={<EyeIcon />} title="Worldpay Response">
      <PaymentNetworkResponse user={user} />
    </ActionPopover>
    <ActionPopover icon={<MoneyIcon />} title="Customer LTV Metrics">
      {/* TODO: Add LTV metrics component here */}
      <div>LTV Metrics placeholder</div>
    </ActionPopover>
    <ActionPopover
      icon={<DeleteIcon className="text-danger" />}
      title={
        user.paymentStatus === "pending" || user.paymentStatus === "incomplete"
          ? "Cancel Order"
          : "Set Inactive"
      }
    >
      <Button
        color="danger"
        size="sm"
        onPress={() => {
          /* Add logic */
        }}
      >
        Confirm
      </Button>
    </ActionPopover>
    <ActionPopover icon={<XIcon />} title="Refund Customer">
      {/* TODO: Add refund form or confirmation component here */}
      <div>Refund form placeholder</div>
    </ActionPopover>
    <ActionPopover icon={<EditIcon />} title="Modify User Status">
      <ModifyUserStatus />
    </ActionPopover>
    <ActionPopover icon={<DownloadIcon />} title="Export User History">
      <Button
        size="sm"
        onPress={() => {
          /* Add export logic */
        }}
      >
        Download CSV
      </Button>
    </ActionPopover>
  </div>
);
