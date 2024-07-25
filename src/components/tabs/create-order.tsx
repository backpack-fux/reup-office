import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";

export default function CreateOrderTab() {
  return (
    <form className="space-y-4">
      <Input label="Customer Name" placeholder="Enter customer name" />
      <Input
        label="Order Amount"
        placeholder="Enter order amount"
        type="number"
      />
      <Select label="Order Type" placeholder="Select order type">
        <SelectItem key="product">Product</SelectItem>
        <SelectItem key="service">Service</SelectItem>
      </Select>
      {/* Add more form fields as needed */}
    </form>
  );
}
