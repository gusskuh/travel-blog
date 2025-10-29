import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות לחופשת החורף - מדריך מקיף לחיפוש והזמנה 2025',
  description: 'במאמר זה נעבור על מגוון טיפים וכלים המסייעים במציאת טיסות זולות לחופשת החורף, כולל הסברים מפורטים איך להשתמש באתרים שונים ואיך לנהל תהליך ההזמנה.',
  keywords: 'טיסות זולות לחורף, חופשת חורף, טיסות זולות, אתרי השוואת מחירים, הזמנת טיסות, טיפים לטיסות, חיסכון על טיסות',
  openGraph: {
    title: 'טיסות זולות לחופשת החורף - מדריך מקיף לחיפוש והזמנה 2025',
    description: 'במאמר זה נעבור על מגוון טיפים וכלים המסייעים במציאת טיסות זולות לחופשת החורף.',
    type: 'article',
    publishedTime: '2025-10-28',
    authors: ['צוות טיסות זולות'],
    tags: ['טיסות זולות', 'חופשת חורף', 'אתרי השוואת מחירים', 'הזמנת טיסות'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
        width: 800,
        height: 600,
        alt: 'טיסות זולות לחופשת החורף',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות לחופשת החורף - מדריך מקיף 2025',
    description: 'במאמר זה נעבור על מגוון טיפים וכלים המסייעים במציאת טיסות זולות לחופשת החורף.',
    images: ['https://images.unsplash.com/photo-1469474968028-56623f02e42e'],
  },
  alternates: {
    canonical: '/blog/flights-cheap-guide-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיסות זולות לחופשת החורף: מדריך מקיף לחיפוש והזמנה',
    excerpt: 'במאמר זה נעבור על מגוון טיפים וכלים המסייעים במציאת טיסות זולות לחופשת החורף, כולל הסברים מפורטים איך להשתמש באתרים שונים ואיך לנהל תהליך ההזמנה.',
    publishedAt: '2025-10-28',
    readTime: 12,
    category: 'טיסות',
    tags: ["טיסות זולות","חופשת חורף","אתרי השוואת מחירים","הזמנת טיסות"],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">חופשת החורף הגיעה ומגיעה השאלה - איך למצוא טיסות במחירים זולים? ישנם מגוון רחב של כלים ואתרים שיכולים לעזור לכם בחיפוש. במאמר זה נעבור על כמה מהם ונסביר איך להשתמש בהם.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חיפוש מתקדם באתרים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון. הכלי 'Price Forecast' של Kayak מנבא אם המחיר יעלה או יירד. חשוב לבדוק מספר אתרים כי כל אחד מציע מחירים שונים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הסתרת היסטוריית החיפוש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">כאשר אתם מחפשים טיסות, חשוב להשתמש במצב incognito בדפדפן שלכם. זה מונע מהאתרים להעלות את המחירים בהתבסס על היסטוריית החיפוש שלכם. כלול פשוט: פתחו חלון חדש במצב incognito, חפשו את הטיסה שאתם רוצים, וראו את המחירים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנה דרך חברות התעופה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לאחר שמצאתם טיסה שמתאימה לכם, כדאי לבדוק את המחירים גם באתר של חברת התעופה עצמה. לפעמים, המחירים שם יהיו זולים יותר. בנוסף, חברות התעופה לעיתים מציעות מבצעים והנחות מיוחדות רק באתר שלהן.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">בחירת תאריכים גמישים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אחת המקומות בהם אפשר לחסוך המון מחיר הטיסה היא בבחירת תאריכים גמישים. לא תמיד יום הטיסה המיועד או שעת הטיסה המיועדת הם הזולים ביותר. משנים את התאריכים או את שעת הטיסה יכולים לחסוך לכם המון כסף.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">במאמר זה סקרנו מגוון כלים וטיפים שיכולים לעזור לכם למצוא טיסות זולות לחופשת החורף. אנו ממליצים לנסות את כל הכלים והאפשרויות שציינו, ולא להמהר להזמין את הטיסה בלי לבדוק את כל האפשרויות. בהצלחה!</p>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✈</span>
              </div>
              <span className="text-xl font-bold hebrew-text">טיסות זולות</span>
            </div>
            <p className="text-gray-400 hebrew-text">
              המדריך המלא לטיסות זולות ונסיעות חכמות
            </p>
          </div>
        </div>
      </footer>
      <Footer />
    </div>
  );
}
