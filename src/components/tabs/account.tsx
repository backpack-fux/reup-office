import { Input } from "@nextui-org/input";

import { account } from "../data";

export default function AccountTab() {
  return (
    <form className="space-y-4">
      <Input readOnly label="FID" value={account.fid.toString()} />
      <Input
        readOnly
        label="Settlement Address"
        value={account.settlementAddress}
      />
      <Input readOnly label="Account Name" value={account.accountName} />
      <Input
        readOnly
        label="Compliance Status"
        value={account.complianceStatus}
      />
      <Input readOnly label="App Version" value={account.appVersion} />
    </form>
  );
}
