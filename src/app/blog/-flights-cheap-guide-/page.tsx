import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מציאת טיסות זולות להודו: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מדריך זה מספק טיפים ואסטרטגיות מקצועיות על כיצד למצוא טיסות זולות להודו. כולל אתרים מועילים, זמנים מומלצים להזמנה והכנה ... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, הודו, חיסכון, ניסיעות',
  openGraph: {
    title: 'מציאת טיסות זולות להודו: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך זה מספק טיפים ואסטרטגיות מקצועיות על כיצד למצוא טיסות זולות להודו. כולל אתרים מועילים, זמנים מומלצים להזמנה והכנה ... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-11-17',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","הודו","חיסכון","ניסיעות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
        width: 800,
        height: 600,
        alt: 'מציאת טיסות זולות להודו: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מציאת טיסות זולות להודו: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך זה מספק טיפים ואסטרטגיות מקצועיות על כיצד למצוא טיסות זולות להודו. כולל אתרים מועילים, זמנים מומלצים להזמנה והכנה ... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-guide-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מציאת טיסות זולות להודו: מדריך מקצועי',
    excerpt: 'מדריך זה מספק טיפים ואסטרטגיות מקצועיות על כיצד למצוא טיסות זולות להודו. כולל אתרים מועילים, זמנים מומלצים להזמנה והכנה מראש לטיסה.',
    publishedAt: '2025-11-17',
    readTime: 12,
    category: 'ניסיעות',
    tags: ["טיסות","הודו","חיסכון","ניסיעות"],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">החלום ההודי שלכם יכול להפוך למציאות עם טיסות זולות להודו. במדריך זה, אנחנו מספקים טיפים מקצועיים ואסטרטגיות חשובות למציאת המחירים הטובים ביותר לטיסות, כולל שימוש באתרים מומלצים, זמנים המומלצים ביותר להזמנה ועוד.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרים כמו Google Flights, Skyscanner, ו-Kayak הם כלים נהדרים למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם. Skyscanner מציג יעדים זולים לפי התקציב שלכם, באמצעות האפשרות 'Everywhere'. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנה מוקדמת</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בדרך כלל, ההזמנה המוקדמת ביותר של טיסות תספק לכם את המחירים הטובים ביותר. מחקרים מראים שהזמנה של טיסות כ-60 ימים לפני הנסיעה, במיוחד באמצע השבוע, יכולה להביא לאיכונומיה משמעותית.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">זמנים מומלצים לטיסה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הטיסות הזולות ביותר להודו בדרך כלל מתקיימות בתקופות המחירים הנמוכות של השנה. טיסות בחודשי אפריל עד יוני (התקופה החמה של הודו) ובחודשי ספטמבר עד נובמבר (סוף המונסון) יכולות להיות זולות יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיסות ביניים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים קרובות, טיסות ביניים יכולות להציל ממחירים גבוהים של טיסות ישירות. חברות תעופה כמו Turkish Airlines, Emirates, או Qatar Airways מציעות טיסות במחירים נמוכים יחסית מתל אביב לדלהי ומומבאי, עם עצירה באיסטנבול, דובאי או דוחה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חבילות נסיעה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חברות מסוימות כמו Expedia, Booking.com, או eDreams מציעות חבילות נסיעה שכוללות טיסה, מלון ולפעמים אף רכב להשכרה. טיפול בכל ההזמנות שלכם דרך חברה אחת יכול לחסוך לכם כסף.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסות זולות להודו היא משימה שדורשת מחקר ותכנון. באמצעות שימוש באתרים להשוואת מחירים, הזמנה מוקדמת, טיסה בתקופות מומלצות ושיקול טיסות ביניים או חבילות נסיעה, תוכלו לחסוך משמעותית במחיר הטיסה שלכם להודו.</p>

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
