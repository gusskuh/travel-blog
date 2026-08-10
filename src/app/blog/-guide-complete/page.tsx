import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מסמכים נדרשים לנסיעה לחו"ל: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מתכננים נסיעה לחו"ל? איזה מסמכים נדרשים? פוסט זה מספק מדריך מקיף למסמכים הכרחיים לנסיעה לחו"ל. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, נסיעה לחו"ל, מסמכים, תיירות',
  openGraph: {
    title: 'מסמכים נדרשים לנסיעה לחו"ל: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מתכננים נסיעה לחו"ל? איזה מסמכים נדרשים? פוסט זה מספק מדריך מקיף למסמכים הכרחיים לנסיעה לחו"ל. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-08-10',
    authors: ['צוות טיסות זולות'],
    tags: ["נסיעה לחו\"ל","מסמכים","טיסות זולות","תיירות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
        width: 800,
        height: 600,
        alt: 'מסמכים נדרשים לנסיעה לחו"ל: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מסמכים נדרשים לנסיעה לחו"ל: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מתכננים נסיעה לחו"ל? איזה מסמכים נדרשים? פוסט זה מספק מדריך מקיף למסמכים הכרחיים לנסיעה לחו"ל. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c'],
  },
  alternates: {
    canonical: '/blog/-guide-complete',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מסמכים נדרשים לנסיעה לחו"ל: המדריך המלא',
    excerpt: 'מתכננים נסיעה לחו"ל? איזה מסמכים נדרשים? פוסט זה מספק מדריך מקיף למסמכים הכרחיים לנסיעה לחו"ל.',
    publishedAt: '2026-08-10',
    readTime: 12,
    category: 'חבילות נסיעה',
    tags: ["נסיעה לחו\"ל","מסמכים","טיסות זולות","תיירות"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">נסיעה לחו"ל היא חוויה מרתקת, אך הכנה לנסיעה דורשת תכנון והכנה מקדימה. חלק בלתי נפרד מתהליך ההכנה הוא איסוף של מסמכים שונים שנדרשים לנסיעה. ללא המסמכים המתאימים, ייתכן שתיתקעו בשלב מוקדם של הנסיעה. כדי למנוע מצבים מבאסים כאלה, אספנו לכם מדריך מקיף למסמכים הנדרשים לנסיעה לחו"ל.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">דרכון</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">דרכון הוא מסמך הזהות הבינלאומי החשוב ביותר. כמעט כל מדינה בעולם דורשת דרכון לכניסה. ניתן להתקשר למשרד הפנים או לבדוק באתר הרשמי שלהם לבדיקת תוקף דרכון. בכמה מדינות, הדרכון חייב להיות בתוקף לפחות ששה חודשים מיום ההגעה. כדאי לבדוק את הדרישות של המדינה שאליה אתם מתכננים לנסוע.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ויזה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">כמה מדינות דורשות ויזה מתיירים זרים. התהליך לקבלת ויזה יכול לכלול מספר שלבים ולקחת זמן מה, ולכן עדיף להתחיל בו מספיק מוקדם. אתרי המשרדים הרשמיים של המדינות בהן אתם מתכננים לבקר יכולים לספק מידע על התהליך, העלויות והזמנים הנדרשים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ביטוח נסיעה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ביטוח נסיעה הוא מומלץ מאוד לנסיעה לחו"ל. זה יכול להכיל כיסוי לבעיות בריאות, איבוד מזוודות, ביטול נסיעה ועוד. חברות ביטוח רבות כמו כלל, מגדל והפניקס מציעות פוליסות ביטוח נסיעה שונות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">רישיון נהיגה בינלאומי</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם מתכננים להשכיר רכב בחו"ל, ייתכן שתצטרכו רישיון נהיגה בינלאומי. הרישיון הבינלאומי הוא תרגום של הרישיון שלכם למספר שפות, וניתן להשיגו באמצעות האיגוד הישראלי לאוטוביה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תעודות חיסונים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חלק מהמדינות דורשות תעודות חיסונים מסוימים. כדאי לבדוק באתר של משרד הבריאות או עם השגרירות של המדינה שאליה אתם מתכננים לנסוע. במקרים אלו, יש להכין את החיסונים בהתאם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תעודת נסיעה לחו"ל</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בחלק מהמדינות, עשוי להיות נדרש מסמך נוסף בשם תעודת נסיעה לחו"ל. זהו מסמך שמוכח שאתם יכולים לשוב לישראל לאחר הנסיעה. ניתן לקבל את המסמך ממשרד הפנים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הכנה מראש לנסיעה לחו"ל עשויה להרגיש מעייפת, אך היא מפתח לנסיעה ללא בעיות. בוודאי שבעזרת ההכנה הנכונה ואיסוף כל המסמכים הנדרשים, תוכלו ליהנות מנסיעה מדהימה וללא דאגות. עכשיו שאתם מבינים את המסמכים הנדרשים לנסיעה לחו"ל, הגיע הזמן להתחיל בתכנון הנסיעה הבאה שלכם!</p>

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
