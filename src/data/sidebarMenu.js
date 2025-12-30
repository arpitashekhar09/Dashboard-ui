export const sidebarMenu = [
  {
    section: "Sales list",
    items: [
      {
        label: "Dashboard",
        children: [
          { label: "Codename" },
          { label: "Cargo2go" },
          { label: "Cloudz3r", badge: 2 },
          { label: "Idioma" },
          { label: "Syllables" },
          { label: "x-0b" },
        ],
      },
    ],
  },
  {
    section: "Reports",
    items: [
      {
        label: "Shared with me",
        children: [
          { label: "Deals by user" },
          { label: "Deal duration" },
        ],
      },
      {
        label: "My reports",
        children: [
          { label: "Emails received" },
          { label: "Deal duration" },
          { label: "New report", highlight: true, badge: 7 },
          { label: "Analytics" },
        ],
      },
    ],
  },
];
