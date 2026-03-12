# RAGEOMATICS Website (Static) — Arabic/English

هذا الموقع Static (HTML/CSS/JS) ومستضاف على GitHub Pages مع دومين:
- https://www.rageomatics.me/

## هيكل المشروع
- `index.html` الصفحة الرئيسية (عربي)
- `en.html` صفحة إنجليزية قديمة (يمكن لاحقًا استبدالها بـ `/en/index.html`)
- `about.html` من نحن (عربي)
- `contact.html` تواصل (عربي)
- `projects/index.html` المشاريع (عربي)
- `blog/index.html` المدونة (عربي)
- `blog/sample-post.html` مقال تجريبي (عربي)

### النسخة الإنجليزية
داخل مجلد `en/`:
- `en/about.html`
- `en/contact.html`
- `en/projects/index.html`
- `en/blog/index.html`
- `en/blog/sample-post.html`

### ملفات مشتركة
- `assets/css/site.css` تنسيق عام بسيط للصفحات الجديدة
- `assets/js/site.js` وظائف JS مشتركة
- `data/projects.json` بيانات المشاريع
- `data/posts.json` بيانات المقالات
- `sitemap.xml` خريطة الموقع لمحركات البحث
- `robots.txt`

## كيف تضيف مشروع جديد؟
1) افتح `data/projects.json`
2) انسخ عنصر JSON موجود (Project) والصقه في نهاية القائمة
3) عدّل الحقول مثل:
- `title_ar`, `title_en`
- `category`, `year`
- `location_ar`, `location_en`
- `image` (ضع الصورة داخل `images/` ثم اكتب مسارها مثل `../images/your-image.jpg`)
- `excerpt_ar`, `excerpt_en`

ثم Commit — صفحة المشاريع ستتحدث تلقائيًا.

## كيف تضيف مقال جديد؟
1) أنشئ صفحة مقال جديدة:
- عربي: داخل `blog/` مثل `blog/my-post.html`
- إنجليزي: داخل `en/blog/` مثل `en/blog/my-post.html`

2) افتح `data/posts.json` وأضف عنصر جديد يحتوي:
- `title_ar`, `title_en`
- `date`, `tags`
- `excerpt_ar`, `excerpt_en`
- `url_ar` و `url_en` (مثال: `my-post.html`)

## النشر (GitHub Pages)
- يتم النشر تلقائيًا عند أي Commit على فرع `main`.
- إعدادات Pages: Settings → Pages.

## ملاحظة SEO
- تم إضافة `sitemap.xml` و `robots.txt`.
- يفضل لاحقًا توحيد النسخة الإنجليزية إلى `/en/index.html` بدل `en.html`.
