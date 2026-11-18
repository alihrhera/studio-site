---
name: KN
publicName: Content and jobs platform
permission: true
ownedByStudio: false
layers: [api, dashboard]
summary: A dashboard that runs short videos, job posts and news for a content product.
role: Backend and dashboard
color: "#e9d9a1"
order: 5
shots:
  - src: "/work/kn-dashboard.webp"
    alt: "The admin dashboard of the content and jobs platform"
    kind: wide
    height: 726
  - src: "/work/kn-login.webp"
    alt: "The sign-in screen of the platform admin"
    kind: wide
problem: Editors needed to publish reels, jobs and news from one place without a developer.
solution: A dashboard and API for reels, job posts and news, with an editorial workflow.
ar:
  publicName: "منصة محتوى ووظائف"
  summary: "لوحة تحكم تدير الفيديوهات القصيرة والوظائف والأخبار لمنتج محتوى."
  role: "الخلفية ولوحة التحكم"
  problem: "احتاج المحررون إلى نشر الفيديوهات القصيرة والوظائف والأخبار من مكان واحد دون مطوّر."
  solution: "لوحة تحكم وواجهة API للفيديوهات القصيرة والوظائف والأخبار، مع سير عمل تحريري."
  alts: ["لوحة إدارة منصة المحتوى والوظائف", "شاشة تسجيل الدخول لإدارة المنصة"]
fragment:
  kind: dashboard
  title: Content
  rows:
    - ["Reel", "Published"]
    - ["Job post", "Draft"]
    - ["News", "Scheduled"]
    - ["Reel", "Published"]
---
