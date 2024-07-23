const columns = [
  {name: "CUSTOMER", uid: "customer"},
  {name: "STATUS", uid: "status"},
  {name: "PAYMENT STATUS", uid: "paymentStatus"},
  {name: "ORDER ID", uid: "orderId"},
  {name: "TOTAL", uid: "total"},
];

const users = [
  {
    id: 1,
    customer: {
      name: "Rick Sanchez",
      email: "rick.sanchez@example.com",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    status: "active" as const,
    paymentStatus: "incomplete" as const,
    orderId: "ORD-001",
    total: "$100.00",
  },
  {
    id: 2,
    customer: {
      name: "Summer Smith",
      email: "summer.smith@example.com",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    status: "paused" as const,
    paymentStatus: "pending" as const,
    orderId: "ORD-002",
    total: "$75.50",
  },
  {
    id: 3,
    customer: {
      name: "Morty Smith",
      email: "morty.smith@example.com",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    },
    status: "active" as const,
    paymentStatus: "failed" as const,
    orderId: "ORD-003",
    total: "$250.00",
  },
  {
    id: 4,
    customer: {
      name: "Sterling Archer",
      email: "sterling.archer@example.com",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    },
    status: "vacation" as const,
    paymentStatus: "paid" as const,
    orderId: "ORD-004",
    total: "$380.00",
  },
  {
    id: 5,
    customer: {
      name: "Mallory Archer",
      email: "mallory.archer@example.com",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    },
    status: "active" as const,
    paymentStatus: "refund" as const,
    orderId: "ORD-005",
    total: "$125.75",
  },
  {
    id: 6,
    customer: {
      name: "Kristen Copper",
      email: "kristen.cooper@example.com",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    },
    status: "active" as const,
    paymentStatus: "dispute" as const,
    orderId: "ORD-005",
    total: "$125.75",
  },
  {
    id: 7,
    customer: {
      name: "Kristen Copper",
      email: "kristen.cooper@example.com",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    },
    status: "active" as const,
    paymentStatus: "chargeback" as const,
    orderId: "ORD-005",
    total: "$125.75",
  },
];

export { columns, users };

