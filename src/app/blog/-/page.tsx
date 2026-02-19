import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מהן ההכנות הנדרשות לפני נסיעה לחו"ל? - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'בפוסט זה נדון במסמכים הנדרשים לנסיעה לחו"ל, ואיך להכין את עצמך לטיול בצורה מקצועית וממוקדת. נסקור את המסמכים החיוניים, ה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, מסמכים לנסיעה לחו"ל, אשראי עם חברת הטיסה, הכנה לטיול',
  openGraph: {
    title: 'מהן ההכנות הנדרשות לפני נסיעה לחו"ל? - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'בפוסט זה נדון במסמכים הנדרשים לנסיעה לחו"ל, ואיך להכין את עצמך לטיול בצורה מקצועית וממוקדת. נסקור את המסמכים החיוניים, ה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-02-19',
    authors: ['צוות טיסות זולות'],
    tags: ["מסמכים לנסיעה לחו\"ל","אשראי עם חברת הטיסה","הכנה לטיול"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
        width: 800,
        height: 600,
        alt: 'מהן ההכנות הנדרשות לפני נסיעה לחו"ל? - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מהן ההכנות הנדרשות לפני נסיעה לחו"ל? - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'בפוסט זה נדון במסמכים הנדרשים לנסיעה לחו"ל, ואיך להכין את עצמך לטיול בצורה מקצועית וממוקדת. נסקור את המסמכים החיוניים, ה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c'],
  },
  alternates: {
    canonical: '/blog/-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מהן ההכנות הנדרשות לפני נסיעה לחו"ל?',
    excerpt: 'בפוסט זה נדון במסמכים הנדרשים לנסיעה לחו"ל, ואיך להכין את עצמך לטיול בצורה מקצועית וממוקדת. נסקור את המסמכים החיוניים, המסמכים הנוספים, ואת האשראי עם חברת הטיסה.',
    publishedAt: '2026-02-19',
    readTime: 12,
    category: 'ביטוח נסיעות',
    tags: ["מסמכים לנסיעה לחו\"ל","אשראי עם חברת הטיסה","הכנה לטיול"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">למרות שהכנה לנסיעה לחו"ל כוללת גם את התכנון של האטרקציות, המלונות והמסעדות, הצד הלא פחות חשוב הוא ההכנה של המסמכים הנדרשים. ישנם מסמכים חיוניים שלא ניתן לנסוע בלעדיהם, ומסמכים נוספים שיכולים לשפר את חווית הנסיעה שלכם. בנוסף, חשוב לדעת איך לבצע את האשראי שלכם עם חברת הטיסה.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מסמכים חיוניים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">המסמכים החיוניים הם דרכון, ויזה (אם נדרשת), ותעודת זהות. הדרכון חייב להיות תקף לפחות שישה חודשים מתאריך ההגעה ליעד. ויזה נדרשת למדינות מסויימות, ותלויה בדרכון שאיתו אתם מטיילים. כדאי לבדוק מראש את הדרישות באתר של שגרירות המדינה שאליה אתם מתכננים לנסוע.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מסמכים נוספים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מעבר למסמכים החיוניים, ישנם מסמכים נוספים שיכולים לשפר את חווית הנסיעה שלכם. כרטיסי ביטוח נסיעות, למשל, יכולים לשרת אתכם במקרה של בעיות בריאות או בעיות אחרות במהלך הטיול. כמו כן, אם אתם מתכננים לנהוג, כדאי להביא את הרשיון שלכם ולבדוק אם נדרש לכם רשיון בינלאומי.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אשראי עם חברת הטיסה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לפני שאתם מתחילים את הטיול שלכם, חשוב לבצע את האשראי שלכם עם חברת הטיסה. זה מאפשר לכם לחסוך זמן בשדה התעופה, ולוודא שאתם מקבלים את המקום שאתם רוצים במטוס. ניתן לבצע את האשראי דרך אתר החברה או באמצעות יישום החברה בסמארטפון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ההכנה לנסיעה לחו"ל היא תהליך שלא ניתן להתעלם ממנו. הדאגה למסמכים הנדרשים, ולאשראי עם חברת הטיסה, יכולה להבטיח שהנסיעה תתנהל בצורה חלקה ונעימה. כך, תוכלו להתמקד במה שבאמת משנה - ליהנות מהנסיעה!</p>

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
