import { Input } from "@nextui-org/input";

export default function EmailInput({
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
      label="Customer Email"
      placeholder="rick@sanchez.com"
      type="text"
      value={value}
      onValueChange={onChange}
    />
  );
}
