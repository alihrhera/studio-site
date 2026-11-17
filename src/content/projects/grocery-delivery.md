---
name: Disha
publicName: Grocery delivery platform
permission: false
ownedByStudio: false
layers: [mobile, api, dashboard]
summary: "An online grocery store: customer app, admin dashboard and API, run live."
role: Maintenance and new features across app, API and dashboard
color: "#b6cfae"
order: 3
shots:
  - src: "/work/disha-site.webp"
    alt: "The grocery platform website and customer app preview"
    kind: wide
problem: A live grocery business needed changes to products, prices and screens without waiting for an app release.
solution: Server-driven screens in the mobile app, so layout changes ship from the dashboard, plus an admin panel for orders and catalogue.
fragment:
  kind: dashboard
  title: Orders
  rows:
    - ["Order received", "Waiting"]
    - ["Packing", "In progress"]
    - ["Out for delivery", "On the way"]
    - ["Delivered", "Done"]
---
