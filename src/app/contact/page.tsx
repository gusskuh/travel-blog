import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "צור קשר | טיסות זולות",
  description: "יצירת קשר עם צוות טיסות זולות / SheepFlights — שאלות, הצעות ושיתופי פעולה.",
};

export default function ContactPage() {
  const contactEmail = "sheepflights@gmail.com";

  return (
    <div className="min-h-screen bg-[#fdfbf3]">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center hebrew-text">
              צור קשר
            </h1>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-6 text-lg text-gray-600 hebrew-text leading-relaxed">
              <p>
                נשמח לשמוע מכם — שאלות על המאמרים, רעיונות לתוכן, או הצעות לשיתוף פעולה.
                ננסה לחזור אליכם בהקדם האפשרי.
              </p>

              <div className="rounded-xl bg-gray-50 border border-gray-100 p-6 text-center">
                <p className="text-sm text-gray-500 mb-2 hebrew-text">דוא״ל</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-xl font-semibold text-primary-600 hover:text-primary-700 break-all"
                >
                  {contactEmail}
                </a>
              </div>

              <p className="text-base text-gray-500 hebrew-text">
                אין לפרסם בדוא״ל פרטי כרטיס אשראי או מידע רגיש אחר. לענייני הזמנות וטיסות פנו ישירות
                לספק שבו ביצעתם את הרכישה.
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
