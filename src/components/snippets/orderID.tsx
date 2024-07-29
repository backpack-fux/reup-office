//TODO: Create a snippet for the order ID

import { Snippet } from "@nextui-org/snippet";

import { generatePlaceholderOrderID } from "@/utils/helpers";

export function OrderID() {
  const placeholderOrderID = generatePlaceholderOrderID();

  return (
    <Snippet className="max-w-xs" color="default" size="sm" symbol="#">
      {placeholderOrderID}
    </Snippet>
  );
}
