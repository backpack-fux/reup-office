export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Reup Office",
  description: "Where winners come to win more and stuff.",
  navItems: [
    {
      label: "Services",
      href: "http://localhost:3000",
    },
    {
      label: "Office",
      href: "/",
    },
    {
      label: "Accounts",
      href: "/accounts",
    },
    {
      label: "Rewards",
      href: "/rewards",
    },
    {
      label: "Support",
      href: "/support",
    },
  ],
  navMenuItems: [
    {
      label: "Services",
      href: "http://localhost:3000",
    },
    {
      label: "Office",
      href: "/",
    },
    {
      label: "Accounts",
      href: "/accounts",
    },
    {
      label: "Rewards",
      href: "/rewards",
    },
    {
      label: "Support",
      href: "/support",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "telegram",
    twitter: "phone",
    docs: "email",
    discord: "farcaster",
    signout: "signout",
  },
};
