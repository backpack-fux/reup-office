export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Reup Office",
  description: "Where winners come to win more and stuff.",
  navItems: [
    {
      label: "Payments",
      href: "/",
    },
    {
      label: "Performance",
      href: "/performance",
    },
    {
      label: "Actions",
      href: "/actions",
    },
    {
      label: "Customers",
      href: "/customers",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
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
    sponsor: "signout",
  },
};
