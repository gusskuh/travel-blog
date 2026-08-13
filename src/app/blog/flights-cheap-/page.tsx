import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות ליפן: כיצד למצוא את הדיל המשתלם ביותר - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מחפשים טיסות זולות ליפן? המדריך הזה ידריך אתכם צעד אחר צעד כיצד למצוא את הדילים הטובים ביותר, תוך שמירה על איכות הטיסה ו... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, יפן, רכישת טיסות',
  openGraph: {
    title: 'טיסות זולות ליפן: כיצד למצוא את הדיל המשתלם ביותר - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים טיסות זולות ליפן? המדריך הזה ידריך אתכם צעד אחר צעד כיצד למצוא את הדילים הטובים ביותר, תוך שמירה על איכות הטיסה ו... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-08-13',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","יפן","טיסות זולות","רכישת טיסות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
        width: 800,
        height: 600,
        alt: 'טיסות זולות ליפן: כיצד למצוא את הדיל המשתלם ביותר - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות ליפן: כיצד למצוא את הדיל המשתלם ביותר - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים טיסות זולות ליפן? המדריך הזה ידריך אתכם צעד אחר צעד כיצד למצוא את הדילים הטובים ביותר, תוך שמירה על איכות הטיסה ו... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e'],
  },
  alternates: {
    canonical: '/blog/flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיסות זולות ליפן: כיצד למצוא את הדיל המשתלם ביותר',
    excerpt: 'מחפשים טיסות זולות ליפן? המדריך הזה ידריך אתכם צעד אחר צעד כיצד למצוא את הדילים הטובים ביותר, תוך שמירה על איכות הטיסה והנוחות.',
    publishedAt: '2026-08-13',
    readTime: 12,
    category: 'יעדים מומלצים',
    tags: ["טיסות","יפן","טיסות זולות","רכישת טיסות"],
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">יפן היא יעד מרהיב ומגוון, אך לעיתים המחירים של הטיסות לשם יכולים להיות מניבים. לכן, חשוב לדעת איך למצוא דילים טובים ולחסוך במחיר הטיסה. במאמר זה אנו נתמקד באיך למצוא טיסות זולות ליפן.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנה מוקדמת ואחרונה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">באופן כללי, ככל שאתם מזמינים את הטיסה מוקדם יותר, המחירים נמוכים יותר. בדרך כלל, מומלץ להזמין טיסה לפחות 3 חודשים לפני הטיסה. אך אם הינכם גמישים, הזמנות אחרונות יכולות להיות גם משתלמות. אתרים כמו Last Minute Travel ו-Secret Flying מציעים דילים חמים של הזמנות אחרונות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מנויים לרשימות דואר</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חברות התעופה ואתרים של השוואת מחירים לעיתים קרובות מציעים דילים והנחות למנויים של רשימת הדואר שלהם. חשוב להירשם לרשימות אלה כדי לקבל עדכונים על דילים והפתעות שמתקיימות לעיתים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיסות עם עצירות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים קרובות, טיסות עם עצירה או שניים יהיו זולות יותר מטיסות ישירות. אם אתם מוכנים להקריב קצת זמן ולעשות עצירה, זו דרך מעולה לחסוך במחיר הטיסה. אתרים כמו Skyscanner ו-Kayak מאפשרים לכם לחפש טיסות עם עצירות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">שימוש בכרטיסי אשראי של חברות תעופה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חברות תעופה רבות מציעות כרטיסי אשראי שמצטברים נקודות עבור כל דולר שנשלם. אלו ניתן למרות לטיסות בחינם או בהכחשה. כרטיסי האשראי של חברות כמו ANA, JAL או Air Nippon יכולים לסייע לכם למצוא טיסות זולות ליפן.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסות זולות ליפן יכולה להיות משימה מאתגרת, אך עם הכלים הנכונים וקצת מחקר, אתם יכולים למצוא דילים מצויינים. זכרו להשוות מחירים, להיות גמישים בתאריכים, להירשם לרשימות דואר ולשקול טיסות עם עצירות. בהצלחה בחיפוש!</p>

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
