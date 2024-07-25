import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";

export default function AccountTab() {
  return (
    <form className="space-y-4">
      <Input label="Customer Name" placeholder="Enter customer name" />
      <Input
        label="Order Amount"
        placeholder="Enter order amount"
        type="number"
      />
      <Select label="Order Type" placeholder="Select order type">
        <SelectItem key="product">Account</SelectItem>
        <SelectItem key="service">Stuff</SelectItem>
      </Select>
      {/* Add more form fields as needed */}
    </form>
  );
}
