import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { telegramSupport } from "../data";

export default function SupportTab() {
  return (
    <div className="space-y-4">
      <p>Jump to Telegram support</p>
      <Button
        as={Link}
        href={telegramSupport}
        target="_blank"
        rel="noopener noreferrer"
        color="primary">
        Join Telegram Support Channel
      </Button>
    </div>
  );
}
