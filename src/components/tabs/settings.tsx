import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Switch } from "@nextui-org/switch";
import { useState } from "react";

import { pylon } from "../data";

import { SettlementCurrency, SettlementNetwork } from "@/types";

export default function SettingsTab() {
  const [isMainnet, setIsMainnet] = useState(false);

  return (
    <form className="space-y-4">
      <div className="flex items-center justify-between">
        <span>Network Type:</span>
        <Switch
          checked={isMainnet}
          size="sm"
          onChange={(e) => setIsMainnet(e.target.checked)}
        >
          {isMainnet ? "Mainnet" : "Testnet"}
        </Switch>
      </div>
      <Select
        label="Settlement Network"
        placeholder="Select settlement network"
      >
        {Object.values(SettlementNetwork).map((network) => (
          <SelectItem key={network} value={network}>
            {network}
          </SelectItem>
        ))}
      </Select>
      <Select
        label="Settlement Currency"
        placeholder="Select settlement currency"
      >
        {Object.values(SettlementCurrency).map((currency) => (
          <SelectItem key={currency} value={currency}>
            {currency}
          </SelectItem>
        ))}
      </Select>
      <Input readOnly label="Pylon Widget" value={pylon.onRamp.widget} />
    </form>
  );
}
