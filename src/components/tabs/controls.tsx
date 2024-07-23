"use client";

import { useState } from "react";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Tab, Tabs } from "@nextui-org/tabs";

import PaymentsTable from "../tables/payments";

export default function PartnerTabs() {
  const tabs = [
    {
      id: "payments",
      label: "Payments",
      content:
        "These are all your customer transactions, orders that become transactions",
    },
    {
      id: "create-order",
      label: "Create Order",
      content: "This is where you create orders for customers",
    },
    {
      id: "account",
      label: "Account",
      content: "This is where you manage your account",
    },
    {
      id: "settings",
      label: "Settings",
      content: "This is where you manage your settings",
    },
    {
      id: "support",
      label: "Support",
      content: "This is where you manage your support",
    },
  ];

  const [selectedPartner, setSelectedPartner] = useState<string>(tabs[0].id);

  return (
    <div className="w-full">
      <Tabs
        aria-label="Partner options"
        selectedKey={selectedPartner}
        onSelectionChange={(key) => setSelectedPartner(key as string)}
        className="w-full">
        {tabs.map((tab) => (
          <Tab key={tab.id} title={tab.label}>
            <Card className="bg-charyo-500/60 backdrop-blur-sm border-none">
              <CardHeader className="flex flex-col items-start">
                <h3 className="text-lg font-semibold">{tab.label} Services</h3>
                <p className="text-small text-default-500">{tab.content}</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <PaymentsTable />
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
