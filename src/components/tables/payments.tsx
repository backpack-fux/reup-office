import React from "react";

import {
  Selection,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import { columns, users } from "@/components/data";
import { User } from "@/types";

import { useCellRenderers } from "@/hooks/useCellRenderers";
import {
  usePaymentStatusColorMap,
  useStatusColorMap,
} from "@/hooks/useColorMap";

export default function PaymentsTable() {
  const userStatusColorMap = useStatusColorMap();
  const paymentStatusColorMap = usePaymentStatusColorMap();
  const { renderCell } = useCellRenderers(
    userStatusColorMap,
    paymentStatusColorMap
  );
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
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
                {renderCell(item as User, columnKey as keyof User)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
