//TODO: Create a snippet for the order ID

import { Snippet } from "@nextui-org/snippet";

import { generatePlaceholderOrderID } from "@/utils/helpers";

export function OrderID() {
  const placeholderOrderID = generatePlaceholderOrderID();

  return (
    <Snippet symbol="#" color="default" size="sm" className="max-w-xs">
      {placeholderOrderID}
    </Snippet>
  );
}
