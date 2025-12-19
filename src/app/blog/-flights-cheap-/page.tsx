import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'כיצד למצוא טיסות זולות לתאילנד - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מדריך מקיף למציאת טיסות זולות לתאילנד. המדריך מכיל דרכים, טיפים ואסטרטגיות שיסייעו לכם לחסוך בעלות הטיסה שלכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, תאילנד, חיפוש טיסות, אתרים להשוואת מחירים',
  openGraph: {
    title: 'כיצד למצוא טיסות זולות לתאילנד - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקיף למציאת טיסות זולות לתאילנד. המדריך מכיל דרכים, טיפים ואסטרטגיות שיסייעו לכם לחסוך בעלות הטיסה שלכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-12-04',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","תאילנד","חיפוש טיסות","אתרים להשוואת מחירים"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
        width: 800,
        height: 600,
        alt: 'כיצד למצוא טיסות זולות לתאילנד - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'כיצד למצוא טיסות זולות לתאילנד - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקיף למציאת טיסות זולות לתאילנד. המדריך מכיל דרכים, טיפים ואסטרטגיות שיסייעו לכם לחסוך בעלות הטיסה שלכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1552465011-b4e21bf6e79a'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'כיצד למצוא טיסות זולות לתאילנד',
    excerpt: 'מדריך מקיף למציאת טיסות זולות לתאילנד. המדריך מכיל דרכים, טיפים ואסטרטגיות שיסייעו לכם לחסוך בעלות הטיסה שלכם.',
    publishedAt: '2025-12-04',
    readTime: 12,
    category: 'תיירות',
    tags: ["טיסות זולות","תאילנד","חיפוש טיסות","אתרים להשוואת מחירים"],
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">תאילנד היא אחת היעדים הפופולריים ביותר למטיילים ישראלים. אך, המחירים של הטיסות לא תמיד נמוכים ולכן חשוב לדעת איך למצוא את הדילים הזולים ביותר. במדריך זה אנו נכיר לכם את הטיפים והטריקים שיכולים לעזור לכם לחסוך בעלות הטיסה שלכם לתאילנד.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">השוואת מחירים באתרים שונים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לאחר שבחרתם בתאריכים הרצויים לטיסה שלכם, השוו את המחירים באתרים שונים. כל אתר יכול להציע מחירים שונים, ולכן מומלץ לבדוק במספר אתרים לפני שאתם מבצעים הזמנה. אתרים כמו Expedia, Booking.com וMomondo יכולים להיות מקורות מצויינים להשוואת מחירים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הימנעות מהזמנות בסופי שבוע</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מחקרים מראים שהמחירים של הטיסות מתנפחים בסוף השבוע. הסיבה לכך היא שרוב האנשים מתכננים את נסיעותיהם בסופי שבוע. לכן, נסו להזמין את הטיסה שלכם באמצע השבוע, כאשר המחירים הם הזולים ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הרשמה להתראות מחיר</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מרבית אתרי ההשוואות מציעים אפשרות להירשם להתראות מחיר. כאשר המחיר של הטיסה שאתם מחפשים יורד, אתם מקבלים התראה באימייל או באפליקציה. זוהי דרך מצוינת לחסוך במחיר הטיסה, מבלי לבזבז זמן על חיפושים יומיות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיסות מעבר</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם מוכנים להקריב קצת יותר זמן, טיסות מעבר יכולות להיות זולות יותר מטיסות ישירות. עליכם לחפש את הטיסות המעבר באותם אתרי ההשוואות שהוזכרו לעיל. המחירים של הטיסות המעבר משתנים בהתאם לכמות העצירות ולמשך העצירה, כך שתשקלו את האופציות שלכם בהתאם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">שימוש בנקודות או מיילים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם יש לכם נקודות או מיילים מצטברים מכרטיסי אשראי או מתכניות נאמנות של חברות תעופה, זה יכול להימצא דרך מצוינת לחסוך במחיר הטיסה. חשוב לבדוק את התנאים של החברה לפני שאתם ממירים את הנקודות שלכם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסה זולה לתאילנד יכולה להיות משימה מאתגרת, אך עם קצת מחקר והכנה, תוכלו למצוא דילים מצויינים. השתמשו באתרי השוואת מחירים, הימנעו מהזמנות בסופי שבוע, הירשמו להתראות מחיר ובחרו בטיסות מעבר אם אתם מוכנים להקריב קצת יותר זמן. ואל תשכחו, תמיד אפשר להשתמש בנקודות או מיילים אם יש לכם.</p>

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
      
      <Footer />
    </div>
  );
}
