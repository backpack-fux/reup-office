import { Chip } from "@nextui-org/chip";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";
import { User } from "@nextui-org/user";
import React from "react";
import { columns, users } from "../data";
import { DeleteIcon, EditIcon, EyeIcon } from "../icons";

interface UserData {
  id: number;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  status: "active" | "paused" | "vacation";
  paymentStatus:
    | "incomplete"
    | "pending"
    | "failed"
    | "paid"
    | "refund"
    | "dispute"
    | "chargeback";
  orderId: string;
  total: string;
}

const statusColorMap: Record<
  UserData["status"],
  "success" | "danger" | "warning"
> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const paymentStatusColorMap: Record<
  UserData["paymentStatus"],
  "success" | "danger" | "warning" | "primary"
> = {
  incomplete: "danger",
  pending: "primary",
  failed: "danger",
  paid: "success",
  refund: "danger",
  dispute: "danger",
  chargeback: "danger",
};

export default function PaymentsTable() {
  const renderCell = React.useCallback(
    (user: UserData, columnKey: keyof UserData | "actions") => {
      const cellValue = user[columnKey as keyof UserData];

      switch (columnKey) {
        case "customer":
          return (
            <User
              avatarProps={{ radius: "lg", src: user.customer.avatar }}
              description={user.customer.email}
              name={user.customer.name}>
              {user.customer.email}
            </User>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[user.status]}
              size="sm"
              variant="flat">
              {user.status}
            </Chip>
          );
        case "paymentStatus":
          return (
            <Chip
              className="capitalize"
              color={paymentStatusColorMap[user.paymentStatus]}
              size="sm"
              variant="flat">
              {user.paymentStatus}
            </Chip>
          );
        case "orderId":
        case "total":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">
                {cellValue?.toString()}
              </p>
            </div>
          );
        case "actions":
          return (
            <div className="flex justify-center items-center gap-2">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Tooltip>
              <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return <span>{cellValue?.toString()}</span>;
      }
    },
    []
  );

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            className={column.uid === "actions" ? "text-center" : ""}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell
                className={columnKey === "actions" ? "text-center" : ""}>
                {renderCell(item, columnKey as keyof UserData | "actions")}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
