import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות לאפריקה: כל הטיפים שאתם צריכים לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מדריך מקיף זה יעזור לכם למצוא טיסות זולות לאפריקה. אנחנו מציעים טיפים מעשיים, כלים ומתודות שיסייעו לכם למקסם את החסכון ש... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, אפריקה, חסכון, נסיעות',
  openGraph: {
    title: 'טיסות זולות לאפריקה: כל הטיפים שאתם צריכים לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקיף זה יעזור לכם למצוא טיסות זולות לאפריקה. אנחנו מציעים טיפים מעשיים, כלים ומתודות שיסייעו לכם למקסם את החסכון ש... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-12-15',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","אפריקה","חסכון","נסיעות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5',
        width: 800,
        height: 600,
        alt: 'טיסות זולות לאפריקה: כל הטיפים שאתם צריכים לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות לאפריקה: כל הטיפים שאתם צריכים לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקיף זה יעזור לכם למצוא טיסות זולות לאפריקה. אנחנו מציעים טיפים מעשיים, כלים ומתודות שיסייעו לכם למקסם את החסכון ש... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5'],
  },
  alternates: {
    canonical: '/blog/flights-cheap-tips-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיסות זולות לאפריקה: כל הטיפים שאתם צריכים לדעת',
    excerpt: 'מדריך מקיף זה יעזור לכם למצוא טיסות זולות לאפריקה. אנחנו מציעים טיפים מעשיים, כלים ומתודות שיסייעו לכם למקסם את החסכון שלכם.',
    publishedAt: '2025-12-15',
    readTime: 12,
    category: 'טיפים לנוסעים',
    tags: ["טיסות","אפריקה","חסכון","נסיעות"],
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">אם אתם מתכננים נסיעה לאפריקה, כדאי לדעת איך למצוא טיסות זולות. זה לא תמיד משימה פשוטה, אך עם כמה כלים ומתודות, ניתן למצוא דילים מעולים. בפוסט הזה, אנו נתאר איך להשתמש באתרי השוואת מחירים, איך להשתמש בתוכניות נאמנות, ועוד טיפים שיסייעו לכם למקסם את החסכון שלכם.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון. הכלי 'Price Forecast' של Kayak מנבא אם המחיר יעלה או יירד.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תוכניות נאמנות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם מטיסים באופן קבוע, כדאי להשתמש בתוכניות נאמנות. חברות תעופה רבות מציעות תוכניות שמאפשרות לצבור נקודות או מיילים על כל טיסה שאתם מבצעים, ולהחליף אותם בהטבות כמו טיסות חינם, שדרוג כיתה, ועוד. חשוב לבחור בתוכנית נאמנות שמתאימה לכם, ולבדוק את התנאים וההגבלות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">זמן ההזמנה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">התקנה נפוצה היא שככל שמזמינים טיסה מוקדם יותר, המחיר יהיה נמוך יותר. אך זה לא תמיד נכון. לפעמים, חברות התעופה מציעות מבצעים והנחות ברגע האחרון. אם יש לכם גמישות בתאריכים, כדאי לבדוק את המחירים באופן קבוע ולמצוא את הדיל הכי טוב.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיסות עם עצירה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים, טיסות עם עצירה יכולות להיות זולות יותר מטיסות ישירות. אם אתם מוכנים להקריב קצת זמן בשביל לחסוך כסף, זו אופציה מעולה. אתרים כמו Skyscanner וKayak מאפשרים לחפש טיסות עם עצירה, ולפעמים החיסכון יכול להגיע למאות דולרים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים ואפליקציות לדילים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ישנם אתרים ואפליקציות מרובות שמפרסמות דילים לטיסות זולות. אתרים כמו Secret Flying, Airfarewatchdog וScott's Cheap Flights מפרסמים דילים שנמצאים על ידי מומחים. אם אתם מגייסים את האתרים הללו לעזרתכם, ייתכן שתוכלו למצוא טיסות במחירים שלא תאמינו שהם אמיתיים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסות זולות לאפריקה יכולה להיות משימה מאתגרת, אך עם הכלים והמתודות הנכונות, אפשר להשיג חסכון משמעותי. זכרו שהמחיר הזול ביותר לא תמיד הוא המשתלם ביותר, ושחשוב לבחון את כל האפשרויות. בהצלחה בחיפוש הטיסה שלכם!</p>

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
