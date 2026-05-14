import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מסמכים נדרשים לנסיעה לחו"ל: הכל מהכל - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מסמך מזהה בעל תוקף, ויזה תקנית, או שובר ביטוח חובה? יש לכם את כל מה שנדרש לנסיעה לחו"ל? הכנו מדריך מקיף שיסייע לכם להכין... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, נסיעה לחו"ל, מסמכים, מדריך, ויזה',
  openGraph: {
    title: 'מסמכים נדרשים לנסיעה לחו"ל: הכל מהכל - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מסמך מזהה בעל תוקף, ויזה תקנית, או שובר ביטוח חובה? יש לכם את כל מה שנדרש לנסיעה לחו"ל? הכנו מדריך מקיף שיסייע לכם להכין... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-05-14',
    authors: ['צוות טיסות זולות'],
    tags: ["נסיעה לחו\"ל","מסמכים","מדריך","ויזה"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
        width: 800,
        height: 600,
        alt: 'מסמכים נדרשים לנסיעה לחו"ל: הכל מהכל - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מסמכים נדרשים לנסיעה לחו"ל: הכל מהכל - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מסמך מזהה בעל תוקף, ויזה תקנית, או שובר ביטוח חובה? יש לכם את כל מה שנדרש לנסיעה לחו"ל? הכנו מדריך מקיף שיסייע לכם להכין... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c'],
  },
  alternates: {
    canonical: '/blog/-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מסמכים נדרשים לנסיעה לחו"ל: הכל מהכל',
    excerpt: 'מסמך מזהה בעל תוקף, ויזה תקנית, או שובר ביטוח חובה? יש לכם את כל מה שנדרש לנסיעה לחו"ל? הכנו מדריך מקיף שיסייע לכם להכין את כל המסמכים בצורה נכונה.',
    publishedAt: '2026-05-14',
    readTime: 12,
    category: 'חבילות נסיעה',
    tags: ["נסיעה לחו\"ל","מסמכים","מדריך","ויזה"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">לפני שאתם מתכננים את הנסיעה הבאה שלכם, חשוב לדעת אילו מסמכים נדרשים בשביל להגיע ליעד הרצוי. זו תהליך שצריך להתחיל עוד לפני שאתם מחפשים טיסות זולות או מזמינים מלון. בפוסט זה, נדבך לעומק הנושא ונספק לכם את כל המידע הנחוץ בנוגע למסמכים הנדרשים לנסיעה לחו"ל.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">דרכון</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הדרכון הוא המסמך הבסיסי ביותר שאתם צריכים לנסיעה לחו"ל. חשוב לוודא שהדרכון שלכם בתוקף לפחות שישה חודשים מיום החזרה מהנסיעה. תהליך החידוש או ההוצאה של דרכון עשוי לקחת זמן, ולכן מומלץ לבדוק את תאריך התוקף של הדרכון שלכם מראש.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ויזה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לכמה מדינות נדרשת ויזה או הסכם כניסה מראש. התהליך לקבלת ויזה עשוי לקחת מספר שבועות או אפילו חודשים, ולכן חשוב לבדוק את דרישות הויזה של המדינה שאליה אתם מתכננים לנסוע. ניתן לבדוק את דרישות הויזה באמצעות אתר החוץ של מדינת היעד, או באמצעות חברות שירות ויזה מוסמכות כמו iVisa או VisaHQ.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אישורים מיוחדים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">למדינות מסוימות יש דרישות מיוחדות בנוגע לאישורים מיוחדים. לדוגמא, לנסיעה לאינדיה נדרש תעודת חיסון נגד חומת הטיפוס, ולנסיעה לברזיל נדרש תעודת חיסון נגד החמתת. חשוב לבדוק את הדרישות המיוחדות הללו מראש.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ביטוח נסיעה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חלק מהמדינות דורשות ממטיילים להציג אישור ביטוח נסיעה בעת הכניסה. הביטוח צריך לכסות סכומים מסוימים במקרה של אירועים מסוימים, כמו תאונות, מחלות או איבוד מזוודה. חברות כמו Clalit Travel או Harel Insurance מציעות מגוון של תוכניות ביטוח נסיעה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תעודת זהות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">במקרים מסוימים, תעודת הזהות שלכם יכולה לשמש כמסמך מזהה עבור הכניסה למדינה. לדוגמה, לנסיעה למדינות הברית האירופית אין צורך בויזה, אך תעודת הזהות שלכם חייבת להיות בתוקף.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">במסקנה, הכנה מראש של כל המסמכים הנדרשים לנסיעה לחו"ל היא צעד חיוני בתהליך ההכנה לנסיעה. חשוב לזכור שכל נסיעה היא שונה, ולכן חשוב לבדוק את הדרישות המסוימות של המדינה שאליה אתם מתכננים לנסוע. בהצלחה בהכנות!</p>

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
