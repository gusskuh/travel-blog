import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ביטוח נסיעות לחו"ל - כל מה שצריך לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'ביטוח נסיעות לחו"ל הוא נושא חשוב לכל נוסע ישראלי. המדריך הזה מספק טיפים לבחירת ביטוח המתאים, דרכים לחסוך בעלות, ומידע חי... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, ביטוח נסיעות, נסיעה לחו"ל, טיפים לנוסע',
  openGraph: {
    title: 'ביטוח נסיעות לחו"ל - כל מה שצריך לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'ביטוח נסיעות לחו"ל הוא נושא חשוב לכל נוסע ישראלי. המדריך הזה מספק טיפים לבחירת ביטוח המתאים, דרכים לחסוך בעלות, ומידע חי... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-03-30',
    authors: ['צוות טיסות זולות'],
    tags: ["ביטוח נסיעות","נסיעה לחו\"ל","טיפים לנוסע"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596120236172-231999844ade?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'ביטוח נסיעות לחו"ל - כל מה שצריך לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ביטוח נסיעות לחו"ל - כל מה שצריך לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'ביטוח נסיעות לחו"ל הוא נושא חשוב לכל נוסע ישראלי. המדריך הזה מספק טיפים לבחירת ביטוח המתאים, דרכים לחסוך בעלות, ומידע חי... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1596120236172-231999844ade?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/-travel-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'ביטוח נסיעות לחו"ל - כל מה שצריך לדעת',
    excerpt: 'ביטוח נסיעות לחו"ל הוא נושא חשוב לכל נוסע ישראלי. המדריך הזה מספק טיפים לבחירת ביטוח המתאים, דרכים לחסוך בעלות, ומידע חיוני על מה לעשות במקרה של תאונה או חירום.',
    publishedAt: '2026-03-30',
    readTime: 12,
    category: 'טיפים לנוסעים',
    tags: ["ביטוח נסיעות","נסיעה לחו\"ל","טיפים לנוסע"],
    image: 'https://images.unsplash.com/photo-1596120236172-231999844ade?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">ביטוח נסיעות לחו"ל הוא חלק בלתי נפרד מכל טיול או נסיעה לחו"ל. הוא מספק הגנה כלכלית מפני אירועים בלתי צפויים כמו תאונות, מחלות, בעיות בטיסות ועוד. במדריך זה, אנו מספקים לכם את כל הכלים והמידע שנדרשים כדי לבחור את הביטוח הנכון עבורכם, לחסוך בעלות הביטוח, ולדעת מה לעשות במקרה של חירום.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">איך לבחור ביטוח נסיעות?</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בחירת ביטוח נסיעות נכונה מתחילה בהבנה של הצרכים שלך. אתרים כמו 'כלנית ביטוח' או 'ביטוח ישיר' מציעים מגוון ביטוחים עם תכליתים שונות. אם אתה מתכנן לנסוע למקומות בהם הטיפול הרפואי יקר, עלול להיות שתרצה לשקול ביטוח עם כיסוי רפואי גבוה. אם אתה נוסע למקומות עם מזג אויר לא יציב, שקל לקחת ביטוח שמכסה ביטולים ועיכובים של טיסות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">דרכים לחסוך בביטוח נסיעות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">המחירים של ביטוח נסיעות יכולים להשתנות מאתר לאתר. מומלץ להשוות מחירים באתרים כמו 'כלנית ביטוח', 'ביטוח ישיר' או 'ביטוח נסיעות חינם'. אם אתה נוסע הרבה, ביטוח מרובה נסיעות יכול להיות אפשרות חסכונית. אל תשכח לבדוק את הכיסוי של כרטיס האשראי שלך - יתכן שהוא מכסה חלק מהמחיר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מה לעשות במקרה של תאונה או חירום?</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">במקרה של תאונה או חירום, הצעד הראשון הוא לפנות לחברת הביטוח שלך. רוב החברות, כמו 'כלנית ביטוח' או 'ביטוח ישיר', מציעות שירות חירום 24/7. אם יש לך בריאות חמורה, קרא למספר החירום של הביטוח והם ידאגו להובלתך לבית החולים הקרוב ביותר. אם מדובר בתאונה קלה, יתכן שתוכל לקבוע פגישה עם רופא או לקנות תרופות בעצמך ולקבל זיכוי מאוחר יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">איך להגיש תביעה לביטוח נסיעות?</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">כדי להגיש תביעה לביטוח נסיעות, יש לפנות לחברת הביטוח שלך ולמלא טופס תביעה. יש לשמור על כל המסמכים הרלוונטיים, כולל חשבונות רפואיים, קבלות ודוחות של המשטרה. חברות כמו 'כלנית ביטוח' או 'ביטוח ישיר' מציעות אפשרות להגיש תביעות באופן אונליין, דרך האתר שלהם. התהליך יכול לקחת מספר שבועות, אז חשוב להיות סבלני.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מה לעשות אם התביעה נדחתה?</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם התביעה שלך נדחתה, יש לקרוא את המדיניות שלך ולהבין את הסיבות. אם אתה חושב שהתביעה שלך נדחתה באופן שגוי, ניתן להגיש ערעור. חברות כמו 'כלנית ביטוח' או 'ביטוח ישיר' מציעות תהליך ערעור מסודר. אם הערעור שלך נדחה, ניתן לפנות לגורמים מחוץ לחברת הביטוח, כמו המשרד להגנת הצרכן או למשנה לביטוח במשרד האוצר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ביטוח נסיעות לחו"ל הוא כלי חיוני לכל נוסע. על פי מה שלמדנו, חשוב להבין את הצרכים שלך, להשוות מחירים, לדעת איך להתמודד עם מקרים חירום ואיך להגיש תביעה. אם תעקוב אחר הטיפים שלנו, תוכל ליהנות מנסיעה מוגנת ומרגיעה.</p>

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
