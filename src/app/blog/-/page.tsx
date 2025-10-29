import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'איך להזמין מלונות זולים בחו"ל? - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'המדריך המלא להזמנת מלונות זולים בחו"ל. מגוון טיפים ואסטרטגיות חכמות לחיסכון משמעותי במחיר המלון, כולל שימוש באתרים מיוחד... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, מלונות, טיסות, חיסכון, נסיעות',
  openGraph: {
    title: 'איך להזמין מלונות זולים בחו"ל? - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך המלא להזמנת מלונות זולים בחו"ל. מגוון טיפים ואסטרטגיות חכמות לחיסכון משמעותי במחיר המלון, כולל שימוש באתרים מיוחד... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-10-29',
    authors: ['צוות טיסות זולות'],
    tags: ["מלונות","טיסות","חיסכון","נסיעות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        width: 800,
        height: 600,
        alt: 'איך להזמין מלונות זולים בחו"ל? - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'איך להזמין מלונות זולים בחו"ל? - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך המלא להזמנת מלונות זולים בחו"ל. מגוון טיפים ואסטרטגיות חכמות לחיסכון משמעותי במחיר המלון, כולל שימוש באתרים מיוחד... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945'],
  },
  alternates: {
    canonical: '/blog/-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'איך להזמין מלונות זולים בחו"ל?',
    excerpt: 'המדריך המלא להזמנת מלונות זולים בחו"ל. מגוון טיפים ואסטרטגיות חכמות לחיסכון משמעותי במחיר המלון, כולל שימוש באתרים מיוחדים, כלים ואפליקציות.',
    publishedAt: '2025-10-29',
    readTime: 12,
    category: 'טיסות ונסיעות',
    tags: ["מלונות","טיסות","חיסכון","נסיעות"],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">במסגרת תכנון נסיעה לחו"ל, אחת מההוצאות המשמעותיות היא עלות המלון. לכן, חיסכון במחיר המלון יכול להפוך את הנסיעה להרבה יותר נוחה ונעימה. בפוסט הבא נספק לכם מגוון טיפים ואסטרטגיות להזמנת מלונות זולים בחו"ל.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להזמנת מלונות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרים כמו Booking.com, Hotels.com וTrivago מציעים את אפשרות השוואת מחירים של מלונות ברחבי העולם. באמצעות הזנת התאריכים שלכם, האתרים מציגים מגוון רחב של מלונות ומחירים. הקפידו לבדוק במספר אתרים שונים, שכן לעיתים ישנם הבדלים במחירים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אפליקציות להזמנת מלונות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אפליקציות מובייל כמו HotelTonight, Agoda וHopper מציעות אפשרויות להזמנת מלונות במחירים המשתלמים ביותר. האפליקציות מאפשרות לכם למצוא מלונות ברגע האחרון ולקבל הכי הרבה ערך מההוצאה שלכם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנת מלונות באופן מוקדם</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אחת האסטרטגיות הטובות ביותר לחיסכון במחיר המלון היא להזמין את המלון באופן מוקדם. בדרך כלל, המחירים נמוכים יותר בהזמנה מוקדמת. לדוגמה, אם אתם מתכננים לנסוע לניו יורק באוגוסט, כדאי להתחיל לחפש מלונות כבר בפברואר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנת מלונות בחופשות מחוץ לעונה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אחת האסטרטגיות לחיסכון במחיר המלון היא לנסוע בחופשות מחוץ לעונה. למשל, אם אתם מתכננים לנסוע לאיטליה, כדאי לשקול לנסוע בחודשי הקיץ שהם פחות תיקרים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנת מלונות באמצעות תוכניות נאמנות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">רבים מהמלונות מציעים תוכניות נאמנות שמאפשרות לכם להרוויח נקודות ולנצל אותן להזמנת מלונות בעתיד. לדוגמה, התוכנית 'Marriott Bonvoy' מאפשרת לחסוך בהזמנות הבאות באמצעות הצברת נקודות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בהזמנת מלון לחו"ל, ישנם מגוון דרכים ואסטרטגיות לחיסכון במחיר. השקיעו זמן בחיפוש המקנה הטוב ביותר ותוכלו לחסוך סכומים משמעותיים שתוכלו להשקיע בחוויות בנסיעה שלכם.</p>

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
