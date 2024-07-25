"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";

import { tabsConfig } from "@/config/tabs";
import AccountTab from "./account";
import CreateOrderTab from "./create-order";
import PaymentsTab from "./payments";
import SettingsTab from "./settings";
import SupportTab from "./support";

export default function PartnerTabs() {
  const [selectedPartner, setSelectedPartner] = useState<string>(
    tabsConfig[0].id
  );

  const renderTabContent = (tabId: string) => {
    switch (tabId) {
      case "payments":
        return <PaymentsTab />;
      case "create-order":
        return <CreateOrderTab />;
      case "account":
        return <AccountTab />;
      case "settings":
        return <SettingsTab />;
      case "support":
        return <SupportTab />;
      default:
        return <div>Tab content not found</div>;
    }
  };

  return (
    <div className="w-full">
      <Tabs
        aria-label="Partner options"
        className="w-full"
        selectedKey={selectedPartner}
        onSelectionChange={(key) => setSelectedPartner(key as string)}>
        {tabsConfig.map((tab) => (
          <Tab key={tab.id} title={tab.label}>
            <Card className="bg-charyo-500/60 backdrop-blur-sm border-none">
              <CardHeader className="flex flex-col items-start">
                <h3 className="text-lg font-semibold">{tab.label} Services</h3>
                <p className="text-small text-default-500">{tab.content}</p>
              </CardHeader>
              <Divider />
              <CardBody>{renderTabContent(tab.id)}</CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
