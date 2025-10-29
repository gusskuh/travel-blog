import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות מישראל - המדריך המלא ל-2025',
  description: 'מדריך מקיף למציאת טיסות זולות מישראל לכל היעדים הפופולריים. כולל טיפים מקצועיים, כלים מומלצים ואסטרטגיות מתקדמות לחיסכון על טיסות.',
  keywords: 'טיסות זולות מישראל, טיסות מישראל, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, טיסות לחו"ל, נסיעות זולות',
  openGraph: {
    title: 'טיסות זולות מישראל - המדריך המלא ל-2025',
    description: 'מדריך מקיף למציאת טיסות זולות מישראל לכל היעדים הפופולריים. כולל טיפים מקצועיים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-10-28',
    authors: ['צוות טיסות זולות'],
    tags: ['טיסות זולות', 'מישראל', 'מדריך מקיף', 'חיסכון', '2025'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
        width: 800,
        height: 600,
        alt: 'טיסות זולות מישראל',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות מישראל - המדריך המלא ל-2025',
    description: 'מדריך מקיף למציאת טיסות זולות מישראל לכל היעדים הפופולריים.',
    images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-israel-guide-2025',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'כיצד למצוא את הטיסות הזולות ביותר לישראלים: מדריך מקצועי לשנת 2025',
    excerpt: 'מדריך זה יעזור לכם למצוא את הטיסות הכי זולות הזמינות לישראלים. הוא מכיל מגוון טיפים וטכניקות מקצועיות שמטרתן לחסוך לכם כסף בהזמנת טיסות.',
    publishedAt: '2025-10-26',
    readTime: 12,
    category: 'מדריכים מקצועיים',
    tags: ["טיסות","חיסכון","מחירים","חופשה"],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    authorName: 'צוות טיסות זולות',
    authorAvatar: '/author-avatar.svg',
    authorBio: 'מומחים בתחום הטיסות והנסיעות עם ניסיון של שנים במציאת טיסות זולות.',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="blog" />

      {/* Article */}
      <article className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto p-6">
            {/* Back to blog */}
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 space-x-reverse text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hebrew-text">חזור למאמרים</span>
            </Link>

            {/* Article header */}
            <header className="mb-12">
              <div className="mb-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium hebrew-text">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 hebrew-text">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 hebrew-text">
                {post.excerpt}
              </p>

              {/* Article meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <User className="h-4 w-4" />
                  <span className="hebrew-text">{post.authorName}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('he-IL')}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Clock className="h-4 w-4" />
                  <span className="hebrew-text">{post.readTime} דקות קריאה</span>
                </div>
              </div>

              {/* Featured image */}
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hebrew-text"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article content */}
            <div className="prose prose-lg max-w-none hebrew-text">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">המחירים הגבוהים של טיסות מישראל לחו"ל יכולים להיות מרתיחים. אך, עם מידע מקצועי וכמה טיפים שימושיים, ניתן למצוא טיסות במחירים זולים יותר. במדריך זה, נדרוך יחד את השלבים הדרושים למציאת הטיסות הזולות ביותר, תוך שימוש באתרים, כלים וחברות מסוימות.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">השתמשו במצב incognito</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">השתמשו במצב incognito בזמן החיפוש שלכם כדי למנוע מאתרים להעלות את המחירים בהתאם להיסטוריית החיפוש שלכם. מדובר בטכניקה מקובלת שמשתמשים רבים מתעלמים ממנה. בתוך הגדרות הדפדפן שלכם, בחרו באפשרות 'פתיחת חלון גלישה פרטית' או 'incognito'.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חפשו טיסות לאורחת</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חלק מהחברות המובילות מציעות מחירים מוזלים לנוסעים שמזמינים את הטיסה לאורחת. תחברות כמו EasyJet, Ryanair ו-Wizz Air מציעות מחירים זולים לנוסעים שמזמינים טיסות ראשונות בבוקר או מאוחרות בלילה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הימנעו מטיסות בתקופות העומס</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">השאיפה למצוא טיסות זולות תחייב ממכם להתמקד בתקופות שלא בעונת השיא. טיסות בתקופת החגים, חופשות הקיץ הארוכות או חגים אמריקאיים מרכזיים מכילות את המחירים הגבוהים ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמינו בהתראה מוקדמת</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מחקרים מראים שההזמנה של טיסות בערך 60 ימים לפני הטיסה המתוכננת מציעה את המחירים הזולים ביותר. כמובן, ישנם חריגים, אך בכלל, ככל שתזמינו מוקדם יותר, כך תחסכו יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הימנעו מהזמנת טיסות בסוף השבוע</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מחקרים מראים שהזמנת טיסות בימי שישי ושבת מציעה את המחירים הגבוהים ביותר. במקום זאת, נסו להזמין את הטיסות שלכם בשאר ימות השבוע, במיוחד ביום שני או שלישי.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסות זולות היא משימה שדורשת מחקר, סבלנות וגמישות. אם תעקבו אחר המדריך והטיפים שהוצגו כאן, תהיו מסוגלים למצוא טיסות במחירים תחרותיים ולחסוך כסף בהזמנת הטיסה הבאה שלכם.</p>

            </div>

            {/* Author bio */}
            <div className="mt-16 p-8 lg:p-10 bg-gray-100 rounded-2xl">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={post.authorAvatar}
                    alt={post.authorName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hebrew-text">
                    {post.authorName}
                  </h3>
                  <p className="text-gray-600 hebrew-text">
                    {post.authorBio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✈</span>
              </div>
              <span className="text-xl font-bold hebrew-text">טיסות זולות</span>
            </div>
            <p className="text-gray-400 hebrew-text">
              המדריך המלא לטיסות זולות ונסיעות חכמות
            </p>
          </div>
        </div>
      </footer>
      <Footer />
    </div>
  );
}
