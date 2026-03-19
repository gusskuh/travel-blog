import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מסמכים נדרשים לנסיעה לחו"ל: כל מה שאתה צריך לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'בדקנו עבורך את כל המסמכים הנדרשים לנסיעה לחו"ל, עם דגש על כל הנושאים הרלוונטיים והמעודכנים ביותר. מסמכים לטיסה, ביטוחי נ... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, נסיעות, חו"ל, מסמכים, טיסות',
  openGraph: {
    title: 'מסמכים נדרשים לנסיעה לחו"ל: כל מה שאתה צריך לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'בדקנו עבורך את כל המסמכים הנדרשים לנסיעה לחו"ל, עם דגש על כל הנושאים הרלוונטיים והמעודכנים ביותר. מסמכים לטיסה, ביטוחי נ... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-03-19',
    authors: ['צוות טיסות זולות'],
    tags: ["נסיעות","חו\"ל","מסמכים","טיסות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
        width: 800,
        height: 600,
        alt: 'מסמכים נדרשים לנסיעה לחו"ל: כל מה שאתה צריך לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מסמכים נדרשים לנסיעה לחו"ל: כל מה שאתה צריך לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'בדקנו עבורך את כל המסמכים הנדרשים לנסיעה לחו"ל, עם דגש על כל הנושאים הרלוונטיים והמעודכנים ביותר. מסמכים לטיסה, ביטוחי נ... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c'],
  },
  alternates: {
    canonical: '/blog/-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מסמכים נדרשים לנסיעה לחו"ל: כל מה שאתה צריך לדעת',
    excerpt: 'בדקנו עבורך את כל המסמכים הנדרשים לנסיעה לחו"ל, עם דגש על כל הנושאים הרלוונטיים והמעודכנים ביותר. מסמכים לטיסה, ביטוחי נסיעה, ועוד.',
    publishedAt: '2026-03-19',
    readTime: 12,
    category: 'יעדים מומלצים',
    tags: ["נסיעות","חו\"ל","מסמכים","טיסות"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">כאשר אתם מתכננים נסיעה לחו"ל, ישנם מספר מסמכים שחשוב להכין מראש. מדובר במסמכים שלא תוכלו להימנע מהם ולכן חשוב לדעת מהם. במאמר זה אסביר לכם אילו מסמכים נדרשים לנסיעה לחו"ל ואיך להכין אותם בצורה הכי טובה ויעילה.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">דרכון</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">המסמך החשוב ביותר לנסיעה לחו"ל הוא כמובן הדרכון. חשוב לוודא שהדרכון שלכם בתוקף לפחות שישה חודשים מיום החזרה מהחו"ל. במידה והדרכון שלכם לא בתוקף, תוכלו לחדש אותו באתר של משרד הפנים. התהליך כולל תשלום דמי חידוש, העלאת תמונה דיגיטלית ובקשה לקבלת תור לאיסוף הדרכון החדש בלשכת הפנים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ויזה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לאחר שהדרכון שלכם מוכן, חשוב לבדוק אם המדינה אליה אתם מתכננים לנסוע דורשת ויזה. ניתן לבדוק זאת באתר של משרד החוץ. במידה ואתם צריכים ויזה, תוכלו לפנות לשגרירות של המדינה הרלוונטית ולבקש מידע על תהליך הבקשה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ביטוח נסיעה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ביטוח נסיעה הוא מסמך נוסף שחשוב להכין לפני הנסיעה. חברות כמו Clal, Harel וMigdal מציעות ביטוחים שונים המכסים את הנסיעה שלכם. הם יכולים להכיל סעיפים שונים, כולל ביטוח בריאות, ביטוח מזוודה ואף ביטוח מכונית שכורה. חשוב לקרוא את הפוליסה בקפידה לפני הנסיעה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תעודת חיסון</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בימים אלו, עם הפריצה של מגפת הקורונה, תעודת חיסון יכולה להיות נדרשת בחלק מהמדינות. ניתן להוריד את תעודת החיסון שלכם מאתר משרד הבריאות. אם אתם לא מחוסנים, ייתכן שתדרשו לבצע בדיקת קורונה לפני הנסיעה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">רישיון נהיגה בינלאומי</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם מתכננים לנהוג במהלך הנסיעה שלכם, ייתכן שתזדקקו לרישיון נהיגה בינלאומי. ניתן להגיש בקשה לרישיון נהיגה בינלאומי באתר של משרד התחבורה. התהליך כולל תשלום דמי רישיון והגשת בקשה באינטרנט.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הכנת מסמכים לנסיעה לחו"ל היא תהליך הכרחי וחשוב להתחיל בו מראש. חשוב לשמור על כל המסמכים במקום בטוח ולקחת אותם איתכם לשדה התעופה. זכרו, ללא המסמכים המתאימים, לא תוכלו לצאת לנסיעה. בהצלחה בהכנות!</p>

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
