---
name: Disha
publicName: Grocery delivery platform
permission: true
ownedByStudio: false
layers: [mobile, api, dashboard]
summary: "An online grocery store: customer app, admin dashboard and API, run live."
role: Maintenance and new features across app, API and dashboard
color: "#b6cfae"
order: 3
shots:
  - src: "/work/disha-app-1.webp"
    alt: "The customer app home screen with product offers"
    kind: phone
    width: 720
    height: 1561
  - src: "/work/disha-app-2.webp"
    alt: "The customer app with daily needs and one delivery"
    kind: phone
    width: 720
    height: 1561
  - src: "/work/disha-app-3.webp"
    alt: "The customer app with 24 hour delivery"
    kind: phone
    width: 720
    height: 1561
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
