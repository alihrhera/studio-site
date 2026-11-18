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
ar:
  publicName: "Meshwary"
  summary: "منصة حجز سيارات يعرض فيها الملّاك سياراتهم ويحجزها المستأجرون."
  role: "واجهة API ولوحة إدارة"
  problem: "حجز سيارة من مالكها يتضمن التحقق من الهوية والمدفوعات والتحويلات، ويجب أن تبقى كلها متسقة."
  solution: "واجهة API معيارية للسيارات والحجوزات والهوية والمدفوعات والمحافظ والتحويلات، ولوحة إدارة لاعتماد الهويات وإدارة المستخدمين."
  alts: []
fragment:
  kind: dashboard
  title: Bookings
  rows:
    - ["Booking", "Confirmed"]
    - ["Identity check", "Waiting"]
    - ["Payout", "Paid"]
    - ["Car", "Listed"]
---
