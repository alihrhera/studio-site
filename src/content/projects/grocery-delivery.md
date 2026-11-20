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
done:
  - "An AI-powered query builder, fully integrated, that turns plain-language questions into queries"
  - "An AI-powered report builder that generates reports from plain-language requests"
  - "An app for order preparers"
  - "A redesign of the customer app"
  - "Improvements and optimisation across the app"
  - "AI integration when creating or editing a product"
ar:
  publicName: "منصة توصيل بقالة"
  summary: "متجر بقالة إلكتروني: تطبيق للعملاء ولوحة إدارة وواجهة API، تعمل فعليًا."
  role: "صيانة وميزات جديدة في التطبيق والـ API ولوحة التحكم"
  problem: "نشاط بقالة يعمل فعليًا احتاج إلى تغيير المنتجات والأسعار والشاشات دون انتظار إصدار جديد للتطبيق."
  solution: "شاشات يقودها الخادم داخل تطبيق الموبايل، فتصل تغييرات التصميم من لوحة التحكم، مع لوحة إدارة للطلبات والكتالوج."
  done:
    - "منشئ استعلامات (Query Builder) متكامل ومدعوم بالذكاء الاصطناعي، يحوّل السؤال بلغة طبيعية إلى استعلام"
    - "منشئ تقارير مدعوم بالذكاء الاصطناعي، يولّد التقرير من طلب بلغة طبيعية"
    - "تطبيق لمحضّري الطلبات"
    - "إعادة تصميم تطبيق العميل"
    - "تحسينات وتحسين أداء في التطبيق"
    - "تكامل الذكاء الاصطناعي في إنشاء المنتج وتعديله"
  alts: ["الشاشة الرئيسية لتطبيق العميل مع عروض المنتجات", "تطبيق العميل مع احتياجات اليوم وتوصيلة واحدة", "تطبيق العميل مع التوصيل خلال ٢٤ ساعة"]
fragment:
  kind: dashboard
  title: Orders
  rows:
    - ["Order received", "Waiting"]
    - ["Packing", "In progress"]
    - ["Out for delivery", "On the way"]
    - ["Delivered", "Done"]
---
