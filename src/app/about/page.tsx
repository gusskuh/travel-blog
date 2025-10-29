import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="about" />

      {/* About Content */}
      <main className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center hebrew-text">
              אודות האתר
            </h1>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">המטרה שלנו</h2>
              <p className="text-lg text-gray-600 mb-6 hebrew-text">
                האתר שלנו נוצר כדי לעזור לכם למצוא טיסות זולות ולהבין את העולם המורכב של מחירי הטיסות.
                אנחנו מספקים טיפים מקצועיים, מדריכים מפורטים ומידע עדכני שיעזור לכם לחסוך כסף על הטיסות הבאות שלכם.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">מה תמצאו כאן</h2>
              <ul className="list-disc list-inside text-lg text-gray-600 mb-6 space-y-2 hebrew-text">
                <li>טיפים מקצועיים למציאת טיסות זולות</li>
                <li>מדריכים מפורטים ליעדים שונים</li>
                <li>השוואות מחירים וחברות תעופה</li>
                <li>טריקים לחיסכון על טיסות</li>
                <li>מידע עדכני על מחירי טיסות</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">הצוות שלנו</h2>
              <p className="text-lg text-gray-600 hebrew-text">
                אנחנו צוות של מומחי טיסות ותיירות עם ניסיון של שנים בתחום.
                המטרה שלנו היא לחלוק את הידע והניסיון שלנו כדי לעזור לכם לחסוך כסף ולמצוא את הטיסות הטובות ביותר.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center space-x-2 space-x-reverse bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <span className="hebrew-text">קראו את המאמרים שלנו</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
