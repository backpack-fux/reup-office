import React from "react";

import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import {
  Selection,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";
import { User } from "@nextui-org/user";

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
  "default" | "primary" | "secondary" | "success" | "warning" | "danger"
> = {
  incomplete: "danger",
  pending: "warning",
  failed: "danger",
  paid: "success",
  refund: "secondary",
  dispute: "primary",
  chargeback: "default",
};

export default function PaymentsTable() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );

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
        case "actions":
          return (
            <div className="flex items-center gap-4 relative">
              <Popover placement="left">
                <PopoverTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <EyeIcon className="text-lg" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">Network Details</div>
                    <div className="text-tiny">Name: {user.customer.name}</div>
                    <div className="text-tiny">
                      Email: {user.customer.email}
                    </div>
                    <div className="text-tiny">Status: {user.status}</div>
                    <div className="text-tiny">
                      Payment: {user.paymentStatus}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Tooltip content="Edit user">
                <Button isIconOnly size="sm" variant="light">
                  <EditIcon className="text-lg" />
                </Button>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <Button isIconOnly size="sm" variant="light">
                  <DeleteIcon className="text-lg text-danger" />
                </Button>
              </Tooltip>
            </div>
          );
        default:
          return cellValue as React.ReactNode;
      }
    },
    []
  );

  return (
    <Table
      aria-label="Example table with custom cells"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}>
      <TableHeader columns={[...columns, { name: "Actions", uid: "actions" }]}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                {renderCell(item, columnKey as keyof UserData)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
