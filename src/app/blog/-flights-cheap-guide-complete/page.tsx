import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מציאת טיסות זולות להודו: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'במדריך זה אנו נדריך אתכם צעד אחר צעד כיצד למצוא טיסות זולות להודו, אילו אתרים להשתמש ואיך לנצל את המבצעים הכי טובים ברשת... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, הודו, חיפוש טיסות, מדריך',
  openGraph: {
    title: 'מציאת טיסות זולות להודו: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'במדריך זה אנו נדריך אתכם צעד אחר צעד כיצד למצוא טיסות זולות להודו, אילו אתרים להשתמש ואיך לנצל את המבצעים הכי טובים ברשת... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-03-09',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","הודו","חיפוש טיסות","מדריך"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'מציאת טיסות זולות להודו: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מציאת טיסות זולות להודו: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'במדריך זה אנו נדריך אתכם צעד אחר צעד כיצד למצוא טיסות זולות להודו, אילו אתרים להשתמש ואיך לנצל את המבצעים הכי טובים ברשת... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-guide-complete',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מציאת טיסות זולות להודו: המדריך המלא',
    excerpt: 'במדריך זה אנו נדריך אתכם צעד אחר צעד כיצד למצוא טיסות זולות להודו, אילו אתרים להשתמש ואיך לנצל את המבצעים הכי טובים ברשת.',
    publishedAt: '2026-03-09',
    readTime: 12,
    category: 'מדריכים',
    tags: ["טיסות זולות","הודו","חיפוש טיסות","מדריך"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">אחד היעדים המרתקים ביותר למטייל הישראלי הוא הודו. המדינה האסייתית מציעה תרבות עשירה, נופים מרהיבים ואטרקציות מיוחדות. אך המחירים של הטיסות להודו יכולים להיות גבוהים. לכן, נביא במדריך זה מספר טריקים וכלים שיאפשרו לכם למצוא טיסות זולות להודו.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם כלי חשוב במציאת טיסות זולות. אתרים כמו Google Flights, Skyscanner ו-Kayak מאפשרים לכם להשוות מחירים של מספר חברות תעופה. לדוגמא, ב-Google Flights ניתן לראות מחירים על פני חודש שלם, מה שמאפשר למצוא את התאריכים הזולים ביותר. ב-Skyscanner יש אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. וב-Kayak ישנה האפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">איך להזמין</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">התחילו את החיפוש שלכם באתר השוואת מחירים, כמו Google Flights או Skyscanner. הקלידו את יעד הנחיתה שלכם (הודו) והתאריכים שאתם מעוניינים לטוס. זכרו לבדוק את האפשרות 'גמיש' או 'הכי זול בחודש' כדי לראות את התאריכים הזולים ביותר. לאחר שמצאתם טיסה שאתם מרוצים ממחירה, עברו לאתר החברה המבצעת את הטיסה והזמינו שם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיפים לחיסכון</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">למעשה, ישנן מספר תכניות שיכולות לעזור לכם לחסוך על טיסה להודו. חברת התעופה El Al מציעה את תוכנית הנאמנות 'Matmid' שבה ניתן לאסוף נקודות בכל טיסה ולמרות שימוש בהן לטיסות עתידיות. בנוסף, חברות כמו Booking.com מציעות מבצעים למשתמשים הרשומים באתר. תחפשו באתרים אלו את המבצעים הכי טובים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ביטולים והחזרים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">במקרה של ביטול טיסה או שינוי תאריכים, חשוב לדעת את הזכויות שלכם. החוק בישראל מקנה לנוסעים זכויות מסוימות, כמו החזר כספי או טיסה חלופית. במקרה של ביטול, רוב החברות מציעות החזר כספי מלא, אך חשוב לבדוק את מדיניות החברה באתר שלה. במקרה של שינוי תאריכים, יתכנו עלויות נוספות, ולכן מומלץ לבחור באופציה של טיסה גמישה בעת ההזמנה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">בחירת הזמן הנכון לטיול</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">תכנון הטיול להודו לא צריך להתחיל ולהסתיים בהזמנת הטיסה. בחירת הזמן המתאים לטיול יכולה להיות מכרעת במחיר הטיסה. לדוגמה, תקופת המונסון בהודו, שבה המזג אויר פחות נעים לטיול, מציעה מחירים נמוכים יותר לטיסות. לעומתם, תקופת החגים בישראל, כמו פסח או סוכות, מגדילה את הביקוש ולכן גם את מחיר הטיסות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסה זולה להודו היא משימה שדורשת מחקר ותכנון. אך בעזרת הכלים והטריקים שהוזכרו במדריך זה, אתם תוכלו למצוא טיסות במחירים משתלמים. זכרו, המחיר הנמוך ביותר לא תמיד הוא הטוב ביותר, וחשוב לקחת בחשבון את העלויות הנלוות, כמו ביטולים, שינוי תאריכים ותנאים נוספים של החברה. בהצלחה בחיפוש הטיסה הבאה שלכם להודו!</p>

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
