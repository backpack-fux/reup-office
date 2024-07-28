import { Input } from "@nextui-org/input";

export default function NameInput({
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
      label="Customer Name"
      placeholder="Rick Sanchez"
      type="text"
      value={value}
      onValueChange={onChange}
    />
  );
}
