import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיפים למציאת טיסות זולות לטורקיה - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מחפשים טיסות זולות לטורקיה? באמצעות הכלים הנכונים, קצת גמישות ומעט מזל, תוכלו למצוא טיסות במחירים נמוכים. הנה מדריך מקיף... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טורקיה, חיסכון, טיסה',
  openGraph: {
    title: 'טיפים למציאת טיסות זולות לטורקיה - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים טיסות זולות לטורקיה? באמצעות הכלים הנכונים, קצת גמישות ומעט מזל, תוכלו למצוא טיסות במחירים נמוכים. הנה מדריך מקיף... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-03-05',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","טורקיה","חיסכון","טיסה"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'טיפים למציאת טיסות זולות לטורקיה - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיפים למציאת טיסות זולות לטורקיה - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים טיסות זולות לטורקיה? באמצעות הכלים הנכונים, קצת גמישות ומעט מזל, תוכלו למצוא טיסות במחירים נמוכים. הנה מדריך מקיף... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/tips-flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיפים למציאת טיסות זולות לטורקיה',
    excerpt: 'מחפשים טיסות זולות לטורקיה? באמצעות הכלים הנכונים, קצת גמישות ומעט מזל, תוכלו למצוא טיסות במחירים נמוכים. הנה מדריך מקיף לכל מה שאתם צריכים לדעת.',
    publishedAt: '2026-03-05',
    readTime: 12,
    category: 'טיולים',
    tags: ["טיסות זולות","טורקיה","חיסכון","טיסה"],
    image: 'https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">הטיסה היא חלק חשוב מכל טיול, ומחירה יכול להחליט האם הטיול יתקיים או לא. לכן, חשוב מאוד לדעת איך למצוא טיסות זולות. בפוסט הזה נדבק בטיסות לטורקיה, אך המידע יכול להיות שימושי לכל יעד.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון. הכלי 'Price Forecast' של Kayak מנבא אם המחיר יעלה או יירד.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנה מוקדמת</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חשוב מאוד להזמין את הטיסה שלכם בהקדם האפשרי. המחירים נטים לעלות ככל שניגשים לתאריך הטיסה, ולכן הכי זול להזמין כשהטיסה עוד רחוקה. בדרך כלל, המחירים הכי נמוכים נמצאים בין 60 ל-90 יום לפני הטיסה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">גמישות בתאריכים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אחת מהשיטות הכי טובות לחסוך בטיסות היא להיות גמישים בתאריכים. אם אתם מסוגלים להגיע או לחזור יום או שניים לפני או אחרי התאריך שחשבתם עליו, אתם יכולים לחסוך מאות שקלים. אתרים כמו Google Flights ו-Skyscanner מאפשרים לכם לראות את המחירים לכל החודש, כך שתוכלו לבחור את התאריכים הכי זולים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מסלולים עם עצירה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לפעמים, טיסות עם עצירה בדרך יכולות להיות זולות יותר מטיסות ישירות. אתרים כמו Skyscanner ו-Kayak מאפשרים לכם לחפש גם טיסות שלא ישירות. למרות שזה יכול להוסיף זמן לנסיעה, זה יכול לחסוך לכם מאות שקלים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הרשמה להתראות מחיר</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם מתכננים טיול לטורקיה ועדיין לא קניתם טיסה, מומלץ להירשם להתראות מחיר באתרי השוואת מחירים. ברגע שהמחיר ירד, אתם תקבלו התראה למייל ותוכלו לקנות את הטיסה במחיר הכי נמוך.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בסופו של דבר, מציאת טיסות זולות לטורקיה דורשת קצת מאמץ, אך עם הכלים הנכונים וקצת גמישות, אפשר לחסוך מאות שקלים. זכרו, המחיר הכי זול לא תמיד הכי טוב - שימו לב גם לזמני הטיסה, למספר העצירות ולהגבלות במזוודה. בהצלחה בחיפוש!</p>

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
