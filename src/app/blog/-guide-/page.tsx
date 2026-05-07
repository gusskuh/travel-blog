import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'המסמכים הנדרשים לנסיעה לחו"ל - מדריך מקיף - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'תכנון נסיעה לחו"ל הוא תהליך מרתק אך גם מסובך, שמחייב ביצוע של מספר פעולות והשגת מסמכים. במאמר זה נסקור את המסמכים הנדרשי... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, נסיעה לחו"ל, מסמכים, השגת מסמכים',
  openGraph: {
    title: 'המסמכים הנדרשים לנסיעה לחו"ל - מדריך מקיף - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'תכנון נסיעה לחו"ל הוא תהליך מרתק אך גם מסובך, שמחייב ביצוע של מספר פעולות והשגת מסמכים. במאמר זה נסקור את המסמכים הנדרשי... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-05-07',
    authors: ['צוות טיסות זולות'],
    tags: ["נסיעה לחו\"ל","מסמכים","טיסות זולות","השגת מסמכים"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
        width: 800,
        height: 600,
        alt: 'המסמכים הנדרשים לנסיעה לחו"ל - מדריך מקיף - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'המסמכים הנדרשים לנסיעה לחו"ל - מדריך מקיף - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'תכנון נסיעה לחו"ל הוא תהליך מרתק אך גם מסובך, שמחייב ביצוע של מספר פעולות והשגת מסמכים. במאמר זה נסקור את המסמכים הנדרשי... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c'],
  },
  alternates: {
    canonical: '/blog/-guide-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'המסמכים הנדרשים לנסיעה לחו"ל - מדריך מקיף',
    excerpt: 'תכנון נסיעה לחו"ל הוא תהליך מרתק אך גם מסובך, שמחייב ביצוע של מספר פעולות והשגת מסמכים. במאמר זה נסקור את המסמכים הנדרשים לנסיעה לחו"ל.',
    publishedAt: '2026-05-07',
    readTime: 12,
    category: 'ביטוח נסיעות',
    tags: ["נסיעה לחו\"ל","מסמכים","טיסות זולות","השגת מסמכים"],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">אחת מהפעולות המרכזיות בתכנון נסיעה לחו"ל היא השגת המסמכים הנדרשים. ללא אישורים, ויזות ומסמכים נוספים, אי אפשר להמריא לחו"ל, ולכן חשוב להקדים לכן ולדאוג לכל הנדרש מראש.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">דרכון</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">המסמך הבסיסי ביותר לנסיעה לחו"ל הוא דרכון חוקי. חשוב לוודא שהדרכון שלכם בתוקף, ולא מסתיים בזמן הנסיעה או תקופה קצרה לאחר מכן. לדוגמה, מדינות כמו סין דורשות שהדרכון שלך יהיה בתוקף לפחות שישה חודשים מאז תאריך ההגעה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ויזה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לאחר שוודאתם את תוקף הדרכון, השלב הבא הוא לבדוק אם אתם צריכים ויזה למדינה שאליה אתם ממונים. הפרטים אודות הויזה ניתן למצוא באתר של משרד החוץ של מדינת ישראל, ובאתרים של שגרירויות ושליחויות של המדינות שאליהן אתם מתכננים לטוס.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ביטוח נסיעות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ביטוח נסיעות הוא אחד מהמסמכים החיוניים במהלך נסיעה לחו"ל. חברות כמו כלל והפניקס מציעות מגוון מסלולים של ביטוחים, כולל כיסוי לבריאות, תאונות, מזוודה ועוד. אפשר לבחור במסלול המתאים לכם בהתאם לצרכים ולתקציב.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תעודות בריאות וחיסונים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לפעמים, במסגרת הדרישות לקבלת ויזה או לכניסה למדינה מסוימת, נדרשת הצגת תעודות בריאות או חיסונים. לדוגמה, לפני הגעה למדינות כמו אנגולה או בוליביה, נדרש להיחסן מפני חום הילד. מידע נוסף על החיסונים הנדרשים ניתן למצוא באתר של משרד הבריאות או באתר של ה-CDC.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אישורים נוספים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לפעמים, ישנם מסמכים נוספים נדרשים. למשל, אם אתם מטיילים עם ילדים, יתכן שתצטרכו להציג אישור הורה שני או אישור חמותי. בנוסף, יתכן שתדרשו להציג אישור נהיגה בינלאומי אם אתם מתכננים להשכיר רכב.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">תכנון נסיעה לחו"ל הוא תהליך מורכב שמחייב הכנה מראש. השגת המסמכים הנדרשים היא אחת מהפעולות החשובות ביותר בהכנה לנסיעה. חשוב לבדוק מה המסמכים הנדרשים למדינה שאליה אתם ממונים, ולטפל בהם מראש כדי למנוע דיכאונות אחרונה.</p>

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
