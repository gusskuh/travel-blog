import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מציאת טיסות זולות לחופשת הפסח: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'המדריך הזה מסביר איך למצוא טיסות זולות לחופשת הפסח. נתמקד באתרי השוואת מחירים, כלים חינמיים, וטכניקות שימושיות שיסייעו ל... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, חופשת פסח, השוואת מחירים, חסכון',
  openGraph: {
    title: 'מציאת טיסות זולות לחופשת הפסח: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך הזה מסביר איך למצוא טיסות זולות לחופשת הפסח. נתמקד באתרי השוואת מחירים, כלים חינמיים, וטכניקות שימושיות שיסייעו ל... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-05-11',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","חופשת פסח","השוואת מחירים","חסכון"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'מציאת טיסות זולות לחופשת הפסח: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מציאת טיסות זולות לחופשת הפסח: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך הזה מסביר איך למצוא טיסות זולות לחופשת הפסח. נתמקד באתרי השוואת מחירים, כלים חינמיים, וטכניקות שימושיות שיסייעו ל... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-guide-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מציאת טיסות זולות לחופשת הפסח: מדריך מקצועי',
    excerpt: 'המדריך הזה מסביר איך למצוא טיסות זולות לחופשת הפסח. נתמקד באתרי השוואת מחירים, כלים חינמיים, וטכניקות שימושיות שיסייעו לכם לחסוך כסף.',
    publishedAt: '2026-05-11',
    readTime: 12,
    category: 'תיירות ונופש',
    tags: ["טיסות זולות","חופשת פסח","השוואת מחירים","חסכון"],
    image: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">חופשת הפסח היא הזמן המושלם לטיול משפחתי או לחופשה זוגית. אם אתם מחפשים טיסות זולות, ישנם מספר כלים וטכניקות שיכולים לעזור לכם למצוא את הדיל הטוב ביותר. במדריך זה, נדריך אתכם צעד אחר צעד בתהליך החיפוש.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights, Skyscanner, ו-Kayak הם רק כמה מהאתרים שיש לכם לבדוק. מומלץ לבדוק מספר אתרים, מכיוון שכל אחד מהם מציע מחירים שונים. כמו כן, שימו לב להשתמש במצב 'incognito' בדפדפן שלכם, כדי למנוע מהאתרים להעלות את המחירים בהתאם להיסטוריית החיפוש שלכם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חיפוש גמיש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם יכולים להיות גמישים עם התאריכים שלכם, זה יכול לחסוך לכם המון כסף. Google Flights ו-Skyscanner מאפשרים לכם לראות מחירים על פני חודש שלם, כך שאתם יכולים למצוא את התאריכים הזולים ביותר. כמו כן, הכלי 'Everywhere' של Skyscanner מציג לכם יעדים זולים לפי התקציב שלכם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חיפוש מתקדם</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">כלי ה-'Hacker Fares' של Kayak מציג לכם טיסות שהן עם חברות שונות לכל כיוון, מה שיכול לחסוך לכם כסף. כמו כן, הכלי 'Price Forecast' של Kayak מנבא אם המחיר יעלה או יירד בעתיד הקרוב, וזה יכול לעזור לכם לקבוע מתי הזמן הטוב ביותר לרכוש את הטיסה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">רכישת טיסות בתקופות שקטות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם יכולים להיות גמישים עם התאריכים שלכם, נסו לרכוש טיסות בתקופות שקטות, כמו באמצע השבוע במקום בסוף השבוע. זה יכול לחסוך לכם כסף משמעותי, מכיוון שהמחירים נטים להיות זולים יותר בתקופות אלו.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הרשמה לרשימת תפוצה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הרבה אתרים וחברות תעופה מציעים רשימות תפוצה ששולחות הודעות דוא"ל עם דילים והנחות. אם אתם מתכננים לטוס ליעד מסוים, הרשמו לרשימת התפוצה של החברות שמטיסות ליעד הזה, כדי להיות הראשונים לדעת כאשר ישנם דילים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מחיפוש גמיש, דרך השוואת מחירים באתרים שונים, ועד להרשמה לרשימות תפוצה של חברות תעופה - ישנם המון דרכים למצוא טיסות זולות לחופשת הפסח. תכננו מראש, היו גמישים והשתמשו בכלים הנכונים, ואתם בטוח תמצאו את הדיל המושלם לכם.</p>

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
