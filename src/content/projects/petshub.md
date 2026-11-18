---
name: Petshub
publicName: Petshub
permission: true
ownedByStudio: true
layers: [api, dashboard]
summary: A pet-supplies platform with shops, vet consultations and adverts behind one API.
role: API and dashboard
color: "#e8b695"
order: 8
problem: A pet-supplies marketplace needs its shops, consultations and adverts managed in one place.
solution: An API for the apps, and an admin dashboard for shops, specialities, adverts, consultations and app modes.
ar:
  publicName: "Petshub"
  summary: "منصة مستلزمات حيوانات أليفة بمتاجر واستشارات بيطرية وإعلانات خلف واجهة API واحدة."
  role: "واجهة API ولوحة تحكم"
  problem: "سوق مستلزمات الحيوانات الأليفة يحتاج إلى إدارة متاجره واستشاراته وإعلاناته في مكان واحد."
  solution: "واجهة API للتطبيقات، ولوحة تحكم لإدارة المتاجر والتخصصات والإعلانات والاستشارات وأوضاع التطبيق."
  alts: []
fragment:
  kind: dashboard
  title: Shops
  rows:
    - ["Pet shop", "Active"]
    - ["Advert", "Scheduled"]
    - ["Consultation", "Answered"]
    - ["Shop request", "Waiting"]
---
