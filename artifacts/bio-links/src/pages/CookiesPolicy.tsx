import { Link } from "wouter";
import { ArrowRight, Cookie } from "lucide-react";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-background policy-page" dir="rtl">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 mb-6 transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          العودة للرئيسية
        </Link>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
            <Cookie className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">سياسة ملفات تعريف الارتباط</h1>
            <p className="text-xs text-muted-foreground">آخر تحديث: مارس 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm policy-content">
          <p>
            يستخدم موقع شركة التأمين ملفات تعريف الارتباط (الكوكيز) وتقنيات مماثلة لتحسين تجربتك
            وضمان عمل الموقع بشكل صحيح. توضح هذه الصفحة ماهية هذه الملفات وكيفية استخدامها.
          </p>

          <h2>١. ما هي ملفات تعريف الارتباط؟</h2>
          <p>
            ملفات تعريف الارتباط هي ملفات نصية صغيرة تُخزَّن على جهازك (حاسوب، هاتف، أو جهاز لوحي)
            عند زيارتك لموقعنا. تساعدنا هذه الملفات على التعرف على جهازك عند زيارتك التالية وتذكر
            تفضيلاتك.
          </p>

          <h2>٢. أنواع الكوكيز التي نستخدمها</h2>

          <h3>أ) الكوكيز الضرورية</h3>
          <p>
            هذه الكوكيز أساسية لعمل الموقع ولا يمكن تعطيلها. تشمل:
          </p>
          <ul>
            <li>كوكيز جلسة المستخدم لتسجيل الدخول والحفاظ على الأمان.</li>
            <li>كوكيز تحديد تفضيلات اللغة والمنطقة.</li>
            <li>كوكيز موازنة الحمل لضمان استقرار الموقع.</li>
          </ul>

          <h3>ب) كوكيز الأداء والتحليل</h3>
          <p>
            تساعدنا هذه الكوكيز على فهم كيفية استخدام الزوار لموقعنا:
          </p>
          <ul>
            <li>إحصاءات الزيارات (عدد الزوار، الصفحات المشاهدة).</li>
            <li>مصادر حركة المرور إلى موقعنا.</li>
            <li>تحديد الصفحات الأكثر والأقل شعبية.</li>
            <li>قياس أوقات تحميل الصفحات.</li>
          </ul>

          <h3>ج) كوكيز الوظائف والتفضيلات</h3>
          <p>تتيح هذه الكوكيز للموقع تذكر خياراتك مثل:</p>
          <ul>
            <li>تفضيلات اللغة والمنطقة.</li>
            <li>وضع العرض (فاتح/داكن).</li>
            <li>المعلومات التي أدخلتها في النماذج لتسهيل الاستخدام.</li>
          </ul>

          <h3>د) كوكيز التسويق والإعلان</h3>
          <p>
            قد نستخدم هذه الكوكيز لعرض إعلانات مناسبة لاهتماماتك على منصات أخرى. هذه الكوكيز
            اختيارية ويمكنك رفضها.
          </p>

          <h2>٣. مدة الاحتفاظ بالكوكيز</h2>
          <ul>
            <li>
              <strong>كوكيز الجلسة:</strong> تُحذف تلقائياً عند إغلاق المتصفح.
            </li>
            <li>
              <strong>الكوكيز الدائمة:</strong> تبقى لفترة محددة (من يوم واحد حتى سنتين) حسب الغرض منها.
            </li>
          </ul>

          <h2>٤. كوكيز الأطراف الثالثة</h2>
          <p>
            قد يضع بعض مزودو الخدمات الخارجيين كوكيز على جهازك عند زيارة موقعنا، مثل:
          </p>
          <ul>
            <li>Google Analytics لتحليل بيانات الاستخدام.</li>
            <li>بوابات الدفع الإلكتروني.</li>
            <li>خدمات خرائط Google لتحديد المواقع.</li>
          </ul>
          <p>
            هذه الكوكيز خاضعة لسياسات الخصوصية الخاصة بمزوديها.
          </p>

          <h2>٥. كيفية التحكم في الكوكيز</h2>
          <p>يمكنك التحكم في الكوكيز بعدة طرق:</p>
          <ul>
            <li>
              <strong>إعدادات المتصفح:</strong> يمكنك تعديل إعدادات المتصفح لمنع الكوكيز أو حذفها.
              تذكر أن تعطيل بعض الكوكيز قد يؤثر على وظائف الموقع.
            </li>
            <li>
              <strong>أدوات الرفض:</strong> يمكنك رفض كوكيز التحليل عبر{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                أداة رفض Google Analytics
              </a>.
            </li>
            <li>
              <strong>إعدادات الإعلانات:</strong> يمكنك إدارة تفضيلات الإعلانات عبر{" "}
              <a
                href="http://www.youronlinechoices.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                YourOnlineChoices
              </a>.
            </li>
          </ul>

          <h2>٦. تحديثات السياسة</h2>
          <p>
            قد نقوم بتحديث هذه السياسة من وقت لآخر. سنخطرك بالتغييرات الجوهرية عبر إشعار بارز على الموقع.
          </p>

          <h2>٧. التواصل معنا</h2>
          <p>لأي استفسارات حول سياسة الكوكيز:</p>
          <ul>
            <li>البريد الإلكتروني: cookies@insurance.com</li>
            <li>الهاتف: +966 xx xxx xxxx</li>
          </ul>
        </div>

        {/* Footer links */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <Link href="/privacy-policy" className="text-xs text-primary hover:underline">
            سياسة الخصوصية
          </Link>
          <span className="text-border">|</span>
          <Link href="/terms-conditions" className="text-xs text-primary hover:underline">
            الشروط والأحكام
          </Link>
        </div>
      </div>
    </div>
  );
}
