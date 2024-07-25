import { Button, ButtonGroup } from "@nextui-org/button";
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
import { User } from "@nextui-org/user";
import React from "react";

import { columns, users } from "../data";
import {
  DeleteIcon,
  DownloadIcon,
  EditIcon,
  EyeIcon,
  MoneyIcon,
  XIcon,
} from "../icons";

interface UserData {
  id: number;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  userStatus: "active" | "review" | "refuse" | "nope";
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
  worldpayResponse: {
    transactionId: string;
    responseCode: string;
    responseMessage: string;
    authCode: string;
    riskScore: string;
    timestamp: string;
  };
  history: {
    previousStatuses: string[];
    previousPaymentStatuses: string[];
  };
}

const userStatusColorMap: Record<
  UserData["userStatus"],
  "success" | "warning" | "danger" | "default"
> = {
  active: "success",
  review: "warning",
  refuse: "danger",
  nope: "default",
};

const determineUserStatus = (user: UserData): UserData["userStatus"] => {
  const riskScore = parseInt(user.worldpayResponse.riskScore);
  if (riskScore < 30) return "active";
  if (riskScore < 60) return "review";
  if (riskScore < 90) return "refuse";
  return "nope";
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
        case "userStatus":
          const userStatus = determineUserStatus(user);
          return (
            <Chip
              className="capitalize"
              color={userStatusColorMap[userStatus]}
              size="sm"
              variant="flat">
              {userStatus}
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
            <div className="flex items-center gap-2 relative">
              <Popover placement="left">
                <PopoverTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <EyeIcon className="text-lg" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">
                      Worldpay Response
                    </div>
                    <div className="text-tiny">
                      Transaction ID: {user.worldpayResponse.transactionId}
                    </div>
                    <div className="text-tiny">
                      Response: {user.worldpayResponse.responseMessage}
                    </div>
                    <div className="text-tiny">
                      Auth Code: {user.worldpayResponse.authCode}
                    </div>
                    <div className="text-tiny">
                      Risk Score: {user.worldpayResponse.riskScore}
                    </div>
                    <div className="text-tiny">
                      Timestamp: {user.worldpayResponse.timestamp}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Popover placement="left">
                <PopoverTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <MoneyIcon className="text-lg" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">
                      Customer LTV Metrics
                    </div>
                    {/* Add LTV metrics here */}
                  </div>
                </PopoverContent>
              </Popover>
              <Popover placement="left">
                <PopoverTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <DeleteIcon className="text-lg text-danger" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">
                      {user.paymentStatus === "pending" ||
                      user.paymentStatus === "incomplete"
                        ? "Cancel Order"
                        : "Set Inactive"}
                    </div>
                    <Button
                      color="danger"
                      size="sm"
                      onPress={() => {
                        // Add logic to cancel order or set inactive
                      }}>
                      Confirm
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              <Popover placement="left">
                <PopoverTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <XIcon className="text-lg" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">Refund Customer</div>
                    {/* Add refund form or confirmation here */}
                  </div>
                </PopoverContent>
              </Popover>
              <Popover placement="left">
                <PopoverTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <EditIcon className="text-lg" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">
                      Modify User Status
                    </div>
                    <ButtonGroup size="sm">
                      <Button
                        onPress={() => {
                          /* Set user status to refuse */
                        }}>
                        Refuse
                      </Button>
                      <Button
                        onPress={() => {
                          /* Set user status to nope */
                        }}>
                        Nope
                      </Button>
                      <Button
                        onPress={() => {
                          /* Set user status to active */
                        }}>
                        Active
                      </Button>
                    </ButtonGroup>
                  </div>
                </PopoverContent>
              </Popover>
              <Popover placement="left">
                <PopoverTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <DownloadIcon className="text-lg" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">
                      Export User History
                    </div>
                    <Button
                      size="sm"
                      onPress={() => {
                        // Add logic to export user history as CSV
                      }}>
                      Download CSV
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
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
      selectedKeys={selectedKeys}
      selectionMode="multiple"
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
                {renderCell(item as UserData, columnKey as keyof UserData)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
