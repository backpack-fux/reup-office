import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { telegramSupport } from "../data";

export default function SupportTab() {
  return (
    <div className="space-y-4">
      <p>Jump to Telegram support</p>
      <Button
        as={Link}
        color="primary"
        href={telegramSupport}
        rel="noopener noreferrer"
        target="_blank"
      >
        Join Telegram Support Channel
      </Button>
    </div>
  );
}
