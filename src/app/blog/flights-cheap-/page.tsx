import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות לקפריסין: כיצד למצוא את הדיל הטוב ביותר - קפריסין טיסות לקפריסין חופשה בקפריסין מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'כאן תמצאו טיפים מקצועיים ואסטרטגיות מקיפות על כיצד למצוא טיסות זולות לקפריסין, כולל שימוש באתרים של השוואת מחירים, תיזמו... קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, חופשה, חיסכון',
  openGraph: {
    title: 'טיסות זולות לקפריסין: כיצד למצוא את הדיל הטוב ביותר - קפריסין טיסות לקפריסין חופשה בקפריסין מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'כאן תמצאו טיפים מקצועיים ואסטרטגיות מקיפות על כיצד למצוא טיסות זולות לקפריסין, כולל שימוש באתרים של השוואת מחירים, תיזמו... קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-10-29',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","קפריסין","חופשה","חיסכון"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596120236172-231999844ade',
        width: 800,
        height: 600,
        alt: 'טיסות זולות לקפריסין: כיצד למצוא את הדיל הטוב ביותר - קפריסין טיסות לקפריסין חופשה בקפריסין',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות לקפריסין: כיצד למצוא את הדיל הטוב ביותר - קפריסין טיסות לקפריסין חופשה בקפריסין מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'כאן תמצאו טיפים מקצועיים ואסטרטגיות מקיפות על כיצד למצוא טיסות זולות לקפריסין, כולל שימוש באתרים של השוואת מחירים, תיזמו... קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1596120236172-231999844ade'],
  },
  alternates: {
    canonical: '/blog/flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיסות זולות לקפריסין: כיצד למצוא את הדיל הטוב ביותר',
    excerpt: 'כאן תמצאו טיפים מקצועיים ואסטרטגיות מקיפות על כיצד למצוא טיסות זולות לקפריסין, כולל שימוש באתרים של השוואת מחירים, תיזמון הזמנת הטיסה ועוד.',
    publishedAt: '2025-10-29',
    readTime: 12,
    category: 'טיסות',
    tags: ["טיסות","קפריסין","חופשה","חיסכון"],
    image: 'https://images.unsplash.com/photo-1596120236172-231999844ade',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">קפריסין היא אחת היעדים המועדפים על ישראלים, ולא מפתיע שכך. האי המקסים מציע חופים מדהימים, מסעדות מצויינות ותרבות עשירה. אך במקרה שאתם מחפשים לחסוך בעלות הטיסה, זה יכול להיות מאתגר. בבלוג זה, אנו נשתף אתכם את הטיפים הטובים ביותר למציאת טיסות זולות לקפריסין.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי הראשון שאתם צריכים להשתמש בו. גוגל טיסות, Skyscanner ו-Kayak הם כמה מהאפשרויות הטובות ביותר. גוגל טיסות מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תיזמון הזמנת הטיסה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אחת האסטרטגיות החשובות ביותר למציאת טיסות זולות היא התיזמון. לפי מחקר של Skyscanner, היום הזול ביותר להזמין טיסה הוא ביום שני, והיום היקר ביותר הוא ביום שישי. בנוסף, חודשים מסוימים כמו פברואר ונובמבר מציעים מחירים זולים יותר מאשר חודשים אחרים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הפתעות אחרונה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם גמישים בתאריכים שלכם, אתר ההפתעות האחרונה The Last Minute Travel מציע דילים מצויינים לקפריסין. האתר מתעדכן באופן יומיומי ומציע טיסות זולות שניתן להזמין ברגע האחרון. זו אפשרות מעולה למי שמחפש לחסוך ומוכן להתאמץ.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חברות טיסה זולות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חברות טיסה זולות כמו Ryanair ו-Wizz Air מציעות טיסות לקפריסין במחירים משתלמים. אמנם, יתכנו תוספות תשלום עבור מזוודות ושירותים אחרים, אך אם אתם יודעים לשלוט במערכת, תוכלו לחסוך משמעותית.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">המראה משדה תעופה שונה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם חיים באזור שקרוב לשדה תעופה אחר, כדאי לבדוק אם המראה ממנו יכול לחסוך בעלות הטיסה. לדוגמה, טיסות משדה התעופה בנתב'ג יכולות להיות יקרות יותר מאשר משדה התעופה בלרנקה או פפוס בקפריסין.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">המציאת טיסות זולות לקפריסין מחייבת מחקר וגמישות, אך החיסכון שיכול להגיע ממנה בהחלט שווה את המאמץ. בעזרת הטיפים ששיתפנו, אתם יכולים להתחיל לתכנן את החופשה הבאה שלכם בקפריסין. בהצלחה!</p>

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
