import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מציאת טיסות זולות ליפן: כלים, טיפים ואסטרטגיות - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'חופשה ביפן היא חוויה מרהיבה, אך המחירים של הטיסות יכולים להיות גבוהים. בפוסט הזה, נדריך אתכם כיצד למצוא טיסות זולות ליפן... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, יפן, תכנון טיול, חיסכון',
  openGraph: {
    title: 'מציאת טיסות זולות ליפן: כלים, טיפים ואסטרטגיות - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'חופשה ביפן היא חוויה מרהיבה, אך המחירים של הטיסות יכולים להיות גבוהים. בפוסט הזה, נדריך אתכם כיצד למצוא טיסות זולות ליפן... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-08-06',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","יפן","תכנון טיול","חיסכון"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
        width: 800,
        height: 600,
        alt: 'מציאת טיסות זולות ליפן: כלים, טיפים ואסטרטגיות - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מציאת טיסות זולות ליפן: כלים, טיפים ואסטרטגיות - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'חופשה ביפן היא חוויה מרהיבה, אך המחירים של הטיסות יכולים להיות גבוהים. בפוסט הזה, נדריך אתכם כיצד למצוא טיסות זולות ליפן... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-tips-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מציאת טיסות זולות ליפן: כלים, טיפים ואסטרטגיות',
    excerpt: 'חופשה ביפן היא חוויה מרהיבה, אך המחירים של הטיסות יכולים להיות גבוהים. בפוסט הזה, נדריך אתכם כיצד למצוא טיסות זולות ליפן עם כלים, אסטרטגיות וטיפים מעשיים.',
    publishedAt: '2026-08-06',
    readTime: 12,
    category: 'טיסות',
    tags: ["טיסות זולות","יפן","תכנון טיול","חיסכון"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">יפן היא אחת היעדים המרגשים והייחודיים בעולם, אך המחירים של הטיסות לשם יכולים להיות מאתגרים. עם מעט יזמה, מחקר ושימוש בכלים הנכונים, ניתן למצוא טיסות זולות ליפן. במאמר זה נדריך אתכם כיצד למצוא את הדילים הטובים ביותר.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. כמו כן, אתר Momondo מציע חיפוש של טיסות ממגוון רחב של חברות תעופה, כולל חברות תעופה זולה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אסטרטגיות זמן רכישה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">התכנון המוקדם יכול לחסוך לכם המון כסף. מחקרים מציינים שהזמן הטוב ביותר לקנות כרטיסים ליפן הוא בין 60 ל-90 יום לפני המועד המיועד. בנוסף, שימו לב שרבות החברות מפרסמות מבצעים בימי שני עד רביעי, כך שכדאי לבדוק את האתרים באותם הימים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיסות עם עצירה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אחת מהאסטרטגיות להפחתת מחיר הטיסה היא לבחור טיסה עם עצירה. למשל, ניתן לקנות טיסה לסינגפור או הונג קונג ומשם טיסה ליפן. זה יכול להיות מסלול מרהיב שמאפשר לכם לראות עוד מדינה בדרך. אתרים כמו Kiwi.com מציעים אפשרות לחיפוש טיסות מרובות במהלך החיפוש.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">עקיבה אחרי מבצעים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ישנם אתרים וקבוצות במדיה החברתית המתמחים במציאת מבצעים לטיסות. למשל, Secret Flying או Scott’s Cheap Flights. אלו מפרסמים מבצעים בעזרת התראות בדואר האלקטרוני או במדיה החברתית. כדאי להצטרף לרשימת התפוצה שלהם ולקבל התראות על מבצעים ליפן.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">גמישות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">היכולת להיות גמיש עם תאריכים ושעות הטיסה שלכם יכולה לעזור לכם לחסוך כסף. השוואת מחירים בין ימים שונים בשבוע או בין שעות שונות ביום יכולה לחשוף מחירים נמוכים יותר. אתרים כמו Skyscanner או Google Flights מאפשרים גמישות זו.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בעזרת הכלים, האסטרטגיות והטיפים שדיברנו עליהם, אתם יכולים למצוא טיסות זולות ליפן ולחסוך כסף. זכרו, המפתח הוא להיות גמישים, לעקוב אחרי מבצעים, ולהשתמש באתרים הנכונים לחיפוש טיסות. תוכלו להתחיל את החיפוש שלכם עכשיו וליהנות מחוויית טיסה זולה ונעימה ליפן.</p>

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
