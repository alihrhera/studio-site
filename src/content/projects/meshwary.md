---
name: Meshwary
publicName: Meshwary
permission: true
ownedByStudio: true
layers: [api, dashboard]
summary: A car-booking platform where owners list cars and renters book them.
role: API and admin dashboard
color: "#a6cdd3"
order: 9
problem: Booking a car from its owner involves identity checks, payments and payouts that have to stay consistent.
solution: A modular API for cars, bookings, identity, payments, wallets and payouts, and an admin dashboard for approving identities and managing users.
fragment:
  kind: dashboard
  title: Bookings
  rows:
    - ["Booking", "Confirmed"]
    - ["Identity check", "Waiting"]
    - ["Payout", "Paid"]
    - ["Car", "Listed"]
---
