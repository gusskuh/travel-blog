import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות ליוון: המדריך המלא למציאת והזמנת טיסות במחירים משתלמים - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'את המדריך הזה כתבנו עבורכם, ישראלים המחפשים טיסות זולות ליוון. בו תמצאו טיפים וכלים לחיפוש טיסות, הבנת מדיניות הביטול וה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, יוון, טיפים לנסיעה',
  openGraph: {
    title: 'טיסות זולות ליוון: המדריך המלא למציאת והזמנת טיסות במחירים משתלמים - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'את המדריך הזה כתבנו עבורכם, ישראלים המחפשים טיסות זולות ליוון. בו תמצאו טיפים וכלים לחיפוש טיסות, הבנת מדיניות הביטול וה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-05-28',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","יוון","טיסות זולות","טיפים לנסיעה"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'טיסות זולות ליוון: המדריך המלא למציאת והזמנת טיסות במחירים משתלמים - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות ליוון: המדריך המלא למציאת והזמנת טיסות במחירים משתלמים - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'את המדריך הזה כתבנו עבורכם, ישראלים המחפשים טיסות זולות ליוון. בו תמצאו טיפים וכלים לחיפוש טיסות, הבנת מדיניות הביטול וה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/flights-cheap-guide-complete-flights-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיסות זולות ליוון: המדריך המלא למציאת והזמנת טיסות במחירים משתלמים',
    excerpt: 'את המדריך הזה כתבנו עבורכם, ישראלים המחפשים טיסות זולות ליוון. בו תמצאו טיפים וכלים לחיפוש טיסות, הבנת מדיניות הביטול והחזרים, וכן עצות לחסכון נוסף.',
    publishedAt: '2026-05-28',
    readTime: 12,
    category: 'נסיעות',
    tags: ["טיסות","יוון","טיסות זולות","טיפים לנסיעה"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">מציאת טיסות זולות ליוון לא חייבת להיות משימה מסובכת. בעידן הדיגיטלי, קיימות הרבה דרכים למצוא טיסות במחירים משתלמים. במדריך זה, נשתף אתכם בכלים, אתרים וטיפים שיסייעו לכם למצוא את הדיל הטוב ביותר עבורכם.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מדיניות ביטולים והחזרים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לפני שאתם מזמינים טיסה, חשוב להבין את מדיניות הביטולים וההחזרים של החברה. חלק מהחברות מאפשרות ביטול מלא במהלך 24 שעות הראשונות לאחר ההזמנה, אך ישנן חברות שאינן מציעות החזר כלל. אתרים כמו Expedia או Booking.com מציעים בדרך כלל את מדיניות הביטול של החברות השונות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">זמן טיסה ותאריכים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הזמן שבו אתם מזמינים את הטיסה יכול להשפיע מאוד על המחיר. כחוק כללי, מזמינים טיסות במראה מוקדם יותר או מאוחר יותר ביום מציעים מחירים זולים יותר. בנוסף, טיסות במהלך ימי השבוע (במיוחד יום שלישי ויום רביעי) נוטות להיות זולות יותר מאשר טיסות בסוף השבוע.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">בחירת חברת התעופה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חברות תעופה זולות כמו Ryanair, Easyjet או Wizz Air מציעות טיסות ליוון במחירים המתחילים מסביב ל-50 דולר. הן יכולות להיות אפשרות טובה אם אתם מחפשים טיסה זולה, אך שימו לב שהן לעיתים קרובות דורשות תשלום נוסף עבור מזוודות מטענים, מקום ישיבה מועדף ומוצרים נוספים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">בונוסים ותוספות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרים כמו eDreams או Lastminute.com מציעים טיסות במחירים זולים, אך יש להם גם הרבה הצעות עם בונוסים ותוספות. אתם יכולים לקבל הכל כולל ארוחות, מקום ישיבה מועדף, מזוודות מטענים ואפילו הסעה לשדה התעופה. תמיד כדאי לבדוק את האפשרויות לפני שאתם מזמינים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אז, למרות שמציאת טיסות זולות ליוון יכולה להרגיש כמו משימה מורכבת, עם הכלים והטיפים הנכונים, זה לא צריך להיות כך. תזכורו לבדוק את מדיניות הביטולים וההחזרים, לשקול את הזמן ותאריכי הטיסה, לבחור בחברת התעופה המתאימה ביותר ולבדוק את הבונוסים והתוספות המוצעים. בהצלחה!</p>

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
