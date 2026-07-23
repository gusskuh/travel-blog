import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'איך לארוז נכון לנסיעה: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'האריזה לנסיעה יכולה להיות משימה מאתגרת. במאמר זה, אנו מתמקדים בטיפים מעשיים ועצות בנושא אריזה לנסיעה שיסייעו לכם להכין א... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, אריזה לנסיעה, כלים לאריזה, חברות טיסות',
  openGraph: {
    title: 'איך לארוז נכון לנסיעה: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'האריזה לנסיעה יכולה להיות משימה מאתגרת. במאמר זה, אנו מתמקדים בטיפים מעשיים ועצות בנושא אריזה לנסיעה שיסייעו לכם להכין א... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-07-23',
    authors: ['צוות טיסות זולות'],
    tags: ["אריזה לנסיעה","טיסות זולות","כלים לאריזה","חברות טיסות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'איך לארוז נכון לנסיעה: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'איך לארוז נכון לנסיעה: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'האריזה לנסיעה יכולה להיות משימה מאתגרת. במאמר זה, אנו מתמקדים בטיפים מעשיים ועצות בנושא אריזה לנסיעה שיסייעו לכם להכין א... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/-guide-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'איך לארוז נכון לנסיעה: מדריך מקצועי',
    excerpt: 'האריזה לנסיעה יכולה להיות משימה מאתגרת. במאמר זה, אנו מתמקדים בטיפים מעשיים ועצות בנושא אריזה לנסיעה שיסייעו לכם להכין את המזוודה שלכם בצורה מקצועית.',
    publishedAt: '2026-07-23',
    readTime: 12,
    category: 'ביטוח נסיעות',
    tags: ["אריזה לנסיעה","טיסות זולות","כלים לאריזה","חברות טיסות"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">כאשר מגיע הזמן להתכונן לנסיעה, אחת המשימות המרכזיות היא האריזה. האריזה המתאימה יכולה לקל עליכם את הנסיעה, לפחות את הדאגה מפריטים ששכחתם, ולחסוך לכם את עלות המזוודה הנוספת. נסקור את הטיפים המרכזיים לאריזה מתאימה וכמה כלים שיכולים לעזור לכם במשימה זו.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תכנון האריזה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">השלב הראשון בתהליך האריזה הוא התכנון. רשמו רשימה של כל הפריטים שאתם צריכים לקחת איתכם. זכרו לחלק את הרשימה לקטגוריות: בגדים, תרופות, מוצרי טיפוח, מוצרי אלקטרוניקה וכו'. אתרים כמו Packtor יכולים לעזור לכם ליצור רשימת אריזה מותאמת אישית.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">בחירת המזוודה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בחירת המזוודה המתאימה יכולה להשפיע על כמות הבגדים והפריטים שאתם יכולים לקחת איתכם. חברות כמו Samsonite ו American Tourister מציעות מגוון רחב של מזוודות בגדלים שונים, כך שאתם יכולים למצוא את המזוודה המתאימה לצרכים שלכם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אריזת הבגדים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אחד החלקים המשמעותיים ביותר של האריזה הוא אריזת הבגדים. שיטות אריזה כמו Rolling Method או Bundle Wrapping יכולות לחסוך לכם מקום רב במזוודה. בנוסף, שימוש באביזרים כמו מארזי ואקום של STAYHOLD יכול להקטין את נפח הבגדים ולחסוך מקום נוסף במזוודה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אריזת מוצרי הטיפוח</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אריזת מוצרי הטיפוח דורשת תשומת לב מיוחדת. שימוש בבקבוקים קטנים ניתן למילוי מחודש יכול לחסוך לכם מקום רב. חברות כמו Muji או GoToob מציעות בקבוקים קטנים, ניתנים למילוי מחודש, שמותאמים לתקנות הטיסה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אריזת מוצרי האלקטרוניקה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אריזת מוצרי האלקטרוניקה דורשת זהירות מיוחדת. חברות כמו BUBM ו Bagsmart מציעות מארזים מיוחדים למוצרי אלקטרוניקה שמאפשרים לכם לארוז את המוצרים בבטחה ולמנוע נזקים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">בדיקת האריזה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לאחר שארזתם את כל הפריטים, בדקו מה חסר לכם. אתרים כמו Packtor מאפשרים לכם לשמור על הרשימה שלכם באופן אונליין ולוודא שלא שכחתם דבר. בדקו שגם המשקל של המזוודה מתאים לדרישות החברה האווירית.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אריזה נכונה לנסיעה מצריכה תכנון, בחירה מושכלת של המזוודה ושימוש בטכניקות אריזה מתאימות. זכרו לבחון את הרשימה שלכם לפני היציאה לנסיעה ולוודא שאתם מקיימים את כל הדרישות של חברת התעופה. במילים אחרות, תיהנו מהנסיעה!</p>

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
