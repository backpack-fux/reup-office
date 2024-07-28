import { Input } from "@nextui-org/input";

export default function PhoneInput({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  error: string;
}) {
  return (
    <Input
      className="max-w-xs"
      errorMessage={error}
      isInvalid={!!error}
      label="Customer Phone"
      placeholder="+1 (XXX) XXX-XXXX"
      type="text"
      value={value}
      onValueChange={onChange}
    />
  );
}
