import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'איך לארוז נכון לנסיעה: טיפים מקצועיים ורעיונות מעשיים - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'אנו נחלוק איתכם טיפים, רעיונות ואסטרטגיות משובחות לאריזה נכונה ויעילה לנסיעה. תלמדו כיצד לארוז נכון, לחסוך מקום ולהפוך א... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, אריזה, נסיעה, טיפים, אביזרים',
  openGraph: {
    title: 'איך לארוז נכון לנסיעה: טיפים מקצועיים ורעיונות מעשיים - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'אנו נחלוק איתכם טיפים, רעיונות ואסטרטגיות משובחות לאריזה נכונה ויעילה לנסיעה. תלמדו כיצד לארוז נכון, לחסוך מקום ולהפוך א... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-11-20',
    authors: ['צוות טיסות זולות'],
    tags: ["אריזה","נסיעה","טיפים","אביזרים"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
        width: 800,
        height: 600,
        alt: 'איך לארוז נכון לנסיעה: טיפים מקצועיים ורעיונות מעשיים - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'איך לארוז נכון לנסיעה: טיפים מקצועיים ורעיונות מעשיים - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'אנו נחלוק איתכם טיפים, רעיונות ואסטרטגיות משובחות לאריזה נכונה ויעילה לנסיעה. תלמדו כיצד לארוז נכון, לחסוך מקום ולהפוך א... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828'],
  },
  alternates: {
    canonical: '/blog/-tips-professional-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'איך לארוז נכון לנסיעה: טיפים מקצועיים ורעיונות מעשיים',
    excerpt: 'אנו נחלוק איתכם טיפים, רעיונות ואסטרטגיות משובחות לאריזה נכונה ויעילה לנסיעה. תלמדו כיצד לארוז נכון, לחסוך מקום ולהפוך את תהליך האריזה לפשוט ונוח יותר.',
    publishedAt: '2025-11-20',
    readTime: 12,
    category: 'יעדים מומלצים',
    tags: ["אריזה","נסיעה","טיפים","אביזרים"],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">אחת המשימות המאתגרות בכל נסיעה היא האריזה. איך אפשר לוודא שלא שכחנו דבר? איך לארוז בצורה היעילה ביותר? בפוסט זה, אנו נספק לכם טיפים מקצועיים ומומלצים לאריזה נכונה שתעזור לכם להפוך את תהליך האריזה לפשוט ונוח יותר.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תכנון האריזה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">התחילו עם רשימה של כל הפריטים שאתם צריכים לארוז. שימו לב לכל פריט שאתם מוסיפים לרשימה, האם אתם באמת צריכים אותו? האם אתם באמת תשתמשו בו במהלך הנסיעה? זכרו, כל פריט שאתם לא מוסיפים למזוודה שלכם, מחסוך לכם מקום ומשקל.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אריזה יעילה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם נסיעה למקום שיש בו מזג אויר משתנה, שיקלו לארוז בצורה של שכבות. זאת אומרת, להתלבש במספר שכבות קלות שאפשר להוסיף או להסיר לפי הצורך. כמו כן, שימו לב לארוז את הפריטים הכבדים בתחתית המזוודה, כדי למנוע מהם לדרוס פריטים מורכבים יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אריזת בגדים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ישנם שני דרכים נפוצות לאריזת בגדים: קיפול וגלילה. קיפול הוא הדרך המסורתית והיא יכולה לעבוד היטב לבגדים שאינם מתקמטים בקלות. גלילה, מצד שני, יכולה לחסוך מקום ולמנוע קמטים. נסו את שני השיטות וגלו איזו מהן מתאימה לכם יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אריזת אביזרים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">השתמשו בתיקים קטנים לאריזת אביזרים קטנים. זה יעזור לכם לשמור על הסדר במזוודה ולמצוא בקלות את מה שאתם צריכים. אל תשכחו לארוז ערכת ראשונות עזרה קטנה ותרופות שאתם עשויים לצרוך.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אריזת מזוודה קטנה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אריזת מזוודה קטנה מחייבת התאמה ותכנון. אם אתם מתכננים לטוס עם מזוודה קטנה בלבד, הקפידו לארוז רק את החיוני ביותר, ולבחור בפריטים שאפשר לשלב עם מספר שאר הבגדים שלכם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">האריזה לנסיעה יכולה להיות משימה מאתגרת, אך עם קצת תכנון וארגון נכונים, אתם יכולים להפוך את התהליך לפשוט ונוח יותר. אנו מקווים שהטיפים שחלקנו איתכם יעזרו לכם לנצל את המקום במזוודה שלכם בצורה הטובה ביותר ולהכין את עצמכם לנסיעה מהנה וחסרת דאגות.</p>

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
