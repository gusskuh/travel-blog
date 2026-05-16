import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "מדיניות פרטיות | טיסות זולות",
  description: "מדיניות הפרטיות של אתר טיסות זולות — איסוף מידע, עוגיות ושירותי ניתוח.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf3]">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center hebrew-text">
              מדיניות פרטיות
            </h1>

            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-lg text-gray-600 hebrew-text leading-relaxed">
              <p>
                עודכן לאחרונה בהתאם לשימוש באתר. האתר נועד לספק מידע על טיסות זולות ונסיעות.
                השימוש באתר מהווה הסכמה לתנאים המפורטים להלן, בכפוף לעדכונים עתידיים.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 hebrew-text">איסוף מידע</h2>
              <p>
                אנו עשויים לאסוף מידע טכני סטנדרטי במהלך הגלישה, כגון כתובת IP, סוג דפדפן,
                דפים שנצפו וזמני ביקור, לצורך תפעול שוטף, אבטחה והבנת מגמות שימוש כלליות.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 hebrew-text">עוגיות וניתוח (Analytics)</h2>
              <p>
                האתר עשוי להשתמש בעוגיות ובכלי ניתוח (למשל Google Analytics) כדי למדוד תעבורה
                ולשפר את חוויית המשתמש. ניתן לנהל או לחסום עוגיות בהגדרות הדפדפן שלכם.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 hebrew-text">קישורים חיצוניים</h2>
              <p>
                באתר עשויים להופיע קישורים לאתרים של צד שלישי. איננו אחראים למדיניות הפרטיות
                או לתוכן של אתרים חיצוניים. מומלץ לעיין במדיניות של כל אתר בנפרד.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 hebrew-text">תוכניות שותפים וקישורי צד שלישי (Affiliate Links)</h2>
              <p>
              האתר משתתף בתוכניות שותפים (כגון Kayak Affiliate Network). כאשר אתם לוחצים על קישור או משתמשים במערכת חיפוש באתר המובילה לאתר חיצוני, אתר הצד השלישי עשוי להשתמש בקבצי Cookie משלו כדי לעקוב אחר ההפניה לצורך תשלום עמלה. 
              מדיניות פרטיות זו חלה אך ורק על אתר SheepFlights ואינה מכסה את נוהלי הפרטיות של אתרי צד שלישי. אנו ממליצים לעיין במדיניות הפרטיות של כל אתר אליו אתם מופנים.              </p>

              <h2 className="text-2xl font-bold text-gray-900 hebrew-text">יצירת קשר</h2>
              <p>
                לשאלות בנוגע למדיניות פרטיות זו, ניתן ליצור קשר דרך פרטי הקשר המופיעים באתר
                (כאשר יפורסמו).
              </p>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold hebrew-text"
              >
                חזרה לדף הבית
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
