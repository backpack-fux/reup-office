import { Input } from "@nextui-org/input";
import { account } from "../data";

export default function AccountTab() {
  return (
    <form className="space-y-4">
      <Input label="FID" value={account.fid.toString()} readOnly />
      <Input
        label="Settlement Address"
        value={account.settlementAddress}
        readOnly
      />
      <Input label="Account Name" value={account.accountName} readOnly />
      <Input
        label="Compliance Status"
        value={account.complianceStatus}
        readOnly
      />
      <Input label="App Version" value={account.appVersion} readOnly />
    </form>
  );
}
