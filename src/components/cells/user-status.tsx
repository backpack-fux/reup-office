import { Chip } from "@nextui-org/chip";

import { User } from "@/types";

interface StatusCellProps {
  user: User;
  status: string;
  colorMap: Record<string, string>;
}

export const StatusCell: React.FC<Omit<StatusCellProps, "user">> = ({
  status,
  colorMap,
}) => (
  <Chip
    className="capitalize"
    color={
      colorMap[status] as
        | "default"
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger"
        | undefined
    }
    size="sm"
    variant="flat"
  >
    {status}
  </Chip>
);
