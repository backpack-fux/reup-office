import { ActionsCell } from "@/components/cells/actions";
import { UserCell } from "@/components/cells/user";
import { StatusCell } from "@/components/cells/user-status";
import { determineUserStatus } from "@/hooks/determineUserStatus";
import { User } from "@/types";
import React from "react";

export const useCellRenderers = (
  userStatusColorMap: Record<string, string>,
  paymentStatusColorMap: Record<string, string>
) => {
  const cellRenderers = {
    customer: (user: User) => <UserCell user={user} />,
    userStatus: (user: User) => (
      <StatusCell
        user={user}
        status={determineUserStatus(user)}
        colorMap={userStatusColorMap}
      />
    ),
    paymentStatus: (user: User) => (
      <StatusCell
        user={user}
        status={user.paymentStatus}
        colorMap={paymentStatusColorMap}
      />
    ),
    actions: (user: User) => <ActionsCell user={user} />,
  };

  const renderCell = React.useCallback(
    (user: User, columnKey: keyof User | "actions") => {
      if (columnKey in cellRenderers) {
        return cellRenderers[columnKey as keyof typeof cellRenderers](user);
      }
      return user[columnKey as keyof User] as React.ReactNode;
    },
    [cellRenderers]
  );

  return { renderCell };
};
