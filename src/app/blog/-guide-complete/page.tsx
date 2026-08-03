import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'השכרת רכב בחו"ל - המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מדריך מקיף זה יעזור לכם להבין את העולם של השכרת רכבים בחו"ל, כולל טיפים לחיסכון, נושאי ביטוח, השוואת מחירים ועוד. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, השכרת רכב, חסכון, חו"ל',
  openGraph: {
    title: 'השכרת רכב בחו"ל - המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקיף זה יעזור לכם להבין את העולם של השכרת רכבים בחו"ל, כולל טיפים לחיסכון, נושאי ביטוח, השוואת מחירים ועוד. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-08-03',
    authors: ['צוות טיסות זולות'],
    tags: ["השכרת רכב","חסכון","טיסות זולות","חו\"ל"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'השכרת רכב בחו"ל - המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'השכרת רכב בחו"ל - המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקיף זה יעזור לכם להבין את העולם של השכרת רכבים בחו"ל, כולל טיפים לחיסכון, נושאי ביטוח, השוואת מחירים ועוד. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/-guide-complete',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'השכרת רכב בחו"ל - המדריך המלא',
    excerpt: 'מדריך מקיף זה יעזור לכם להבין את העולם של השכרת רכבים בחו"ל, כולל טיפים לחיסכון, נושאי ביטוח, השוואת מחירים ועוד.',
    publishedAt: '2026-08-03',
    readTime: 12,
    category: 'נסיעות וטיולים',
    tags: ["השכרת רכב","חסכון","טיסות זולות","חו\"ל"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">אם אתם מתכננים לטוס לחו"ל ואתם רוצים להשכיר רכב, יש לכם הרבה דברים לשקול. מהמחיר המשתלם ביותר ועד לביטוח הרכב, כל אלה הם נושאים שחשוב לדעת עליהם לפני שאתם מזמינים את הרכב.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרים כמו Expedia, Orbitz ו-Rentalcars מאפשרים לכם להשוות מחירים בין חברות שונות שמשכירות רכבים. כדאי לבדוק גם את האתרים של החברות עצמן, שכן לפעמים יש להם מבצעים שאינם מוצגים באתרים המשווים מחירים. חשוב לבחון את האפשרויות מבחינת מחיר, סוג הרכב ותנאים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ביטוח</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חשוב לברר את נושא הביטוח לפני שאתם משכירים רכב. חלק מהאתרים מציעים אפשרות לקנות ביטוח דרכם, אך לפעמים הביטוח של חברת האשראי שלכם יכול לכלול כיסוי להשכרת רכב. חשוב לבדוק את זה לפני שאתם מחליטים לקנות ביטוח נוסף.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מגבלת קילומטראז'</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חלק מחברות ההשכרה מגבילות את מספר הקילומטרים שאתם יכולים לנסוע ברכב. גם אם המחיר הוא הזול ביותר, אם יש לכם מגבלת קילומטראז', זה יכול להפוך להיות יקר ביותר. כדאי לחפש את החברות שמציעות קילומטראז' ללא הגבלה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מידע נוסף</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חשוב לקרוא את התנאים וההגבלות של החברה לפני שאתם משכירים רכב. למשל, יתכן שחברות מסוימות לא מאפשרות לכם לנהוג ברכב באזורים מסוימים או שיש להן תנאים מיוחדים לנהגים מתחת לגיל 25.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיפים נוספים לחיסכון</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם יכולים להיות גמישים עם תאריכים, כדאי לבדוק את המחירים בתאריכים שונים. כמו כן, יתכן שזה יהיה זול יותר להשכיר רכב ממיקום שאינו שדה התעופה. לסיום, אם אתם מתכננים לנסוע למדינות מרובות, בדקו את האפשרות להחזיר את הרכב במיקום שונה ממקום האיסוף.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">השכרת רכב בחו"ל יכולה להיות מסובכת, אך עם הכנה מראש וחקירה יסודית, אתם יכולים למצוא את הדיל הכי טוב עבורכם. זכרו להשוות מחירים, לבדוק את תנאי הביטוח, להבין את ההגבלות ולהקפיד על קריאת התנאים לפני שאתם חותמים על החוזה.</p>

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
