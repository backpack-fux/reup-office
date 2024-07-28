import { Button } from "@nextui-org/button";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

interface ActionPopoverProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export const ActionPopover: React.FC<ActionPopoverProps> = ({
  icon,
  title,
  children,
}) => (
  <Popover placement="left">
    <PopoverTrigger>
      <Button isIconOnly size="sm" variant="light">
        {icon}
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="px-1 py-2">
        <div className="text-small font-bold">{title}</div>
        {children}
      </div>
    </PopoverContent>
  </Popover>
);
