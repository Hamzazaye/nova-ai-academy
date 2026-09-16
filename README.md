# NOVA AI Academy

واجهة عربية RTL احترافية لأكاديمية تدريب متخصصة في الذكاء الاصطناعي، مبنية بـ React وVite وCSS مخصص، وتعمل كواجهة static بدون خادم أو API.

## تشغيل محلي

```bash
pnpm install
pnpm dev
```

## بناء نسخة الإنتاج

```bash
pnpm vite build
```

يتم إنشاء ملفات النشر داخل `dist/public`.

## النشر على GitHub Pages

المشروع يحتوي على workflow جاهز داخل `.github/workflows/deploy-pages.yml`. بعد رفع المشروع إلى GitHub:

1. افتح **Settings → Pages** في المستودع.
2. اختر **GitHub Actions** كمصدر النشر.
3. ادفع التعديلات إلى فرع `main` أو شغّل workflow يدويًا من تبويب **Actions**.

تم ضبط `base: "./"` في Vite حتى تعمل الأصول مع مستودعات GitHub Pages التي تستخدم مسار المشروع.

## ملاحظات

- الصفحة باللغة العربية مع اتجاه RTL.
- تشمل تصفية المسارات، نموذج تسجيل تفاعلي، FAQ accordion، carousel لآراء المتدربين، newsletter form، وحركات reveal متجاوبة.
- الأصول البصرية مضمّنة محليًا داخل `client/public` لتعمل من دون اعتماد على خدمة صور خارجية.
