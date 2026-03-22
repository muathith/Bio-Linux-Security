import { Link } from "wouter";
import {
  Shield,
  FileText,
  Cookie,
  ClipboardList,
  Phone,
  Mail,
  ExternalLink,
  ChevronLeft,
} from "lucide-react";

const links = [
  {
    icon: Shield,
    title: "سياسة الخصوصية",
    description: "كيف نجمع ونستخدم ونحمي بياناتك الشخصية",
    href: "/privacy-policy",
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    internal: true,
  },
  {
    icon: Cookie,
    title: "سياسة ملفات تعريف الارتباط",
    description: "معلومات حول الكوكيز وكيفية استخدامها في موقعنا",
    href: "/cookies-policy",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
    internal: true,
  },
  {
    icon: ClipboardList,
    title: "الشروط والأحكام",
    description: "شروط استخدام خدماتنا التأمينية وأحكامها",
    href: "/terms-conditions",
    color: "from-purple-500 to-purple-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
    internal: true,
  },
  {
    icon: FileText,
    title: "وثيقة التأمين النموذجية",
    description: "تحميل نموذج وثيقة التأمين الموحدة",
    href: "#",
    color: "from-emerald-500 to-green-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    internal: false,
  },
];

const contactLinks = [
  {
    icon: Phone,
    label: "اتصل بنا",
    value: "+966 xx xxx xxxx",
    href: "tel:+966xxxxxxxx",
  },
  {
    icon: Mail,
    label: "راسلنا",
    value: "info@insurance.com",
    href: "mailto:info@insurance.com",
  },
];

export default function BioLinksHome() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="max-w-lg mx-auto px-4 py-10">
        {/* Header / Profile */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg mb-4">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-1">شركة التأمين</h1>
          <p className="text-muted-foreground text-sm">
            نحمي ما يهمك — تأمين موثوق وشفاف
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs text-emerald-600 font-medium">مرخصة من هيئة التأمين</span>
          </div>
        </div>

        {/* Main Links */}
        <div className="space-y-3 mb-8">
          {links.map((link) => {
            const Icon = link.icon;
            const content = (
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:border-primary/30 group cursor-pointer">
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-xl ${link.bgLight} flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 ${link.textColor}`} />
                </div>
                <div className="flex-1 text-right">
                  <p className="font-semibold text-foreground text-sm">{link.title}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{link.description}</p>
                </div>
                <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
            );

            if (link.internal) {
              return (
                <Link key={link.title} href={link.href}>
                  {content}
                </Link>
              );
            }
            return (
              <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-xs text-muted-foreground">تواصل معنا</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs">{item.label}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{item.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} شركة التأمين — جميع الحقوق محفوظة
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <Link href="/privacy-policy" className="text-xs text-primary hover:underline">
              سياسة الخصوصية
            </Link>
            <span className="text-border">|</span>
            <Link href="/cookies-policy" className="text-xs text-primary hover:underline">
              الكوكيز
            </Link>
            <span className="text-border">|</span>
            <Link href="/terms-conditions" className="text-xs text-primary hover:underline">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
