import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מציאת טיסות זולות ליוון: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מדריך מקצועי המסביר כיצד למצוא טיסות זולות ליוון, הכולל המלצות על אתרים, כלים ואסטרטגיות. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, יוון, חופשה',
  openGraph: {
    title: 'מציאת טיסות זולות ליוון: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקצועי המסביר כיצד למצוא טיסות זולות ליוון, הכולל המלצות על אתרים, כלים ואסטרטגיות. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-12-18',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","יוון","חופשה","טיסות זולות"],
    images: [
      {
        url: 'https://plus.unsplash.com/premium_photo-1680497811614-4f93025d7e57?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'מציאת טיסות זולות ליוון: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מציאת טיסות זולות ליוון: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקצועי המסביר כיצד למצוא טיסות זולות ליוון, הכולל המלצות על אתרים, כלים ואסטרטגיות. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://plus.unsplash.com/premium_photo-1680497811614-4f93025d7e57?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-guide-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מציאת טיסות זולות ליוון: מדריך מקצועי',
    excerpt: 'מדריך מקצועי המסביר כיצד למצוא טיסות זולות ליוון, הכולל המלצות על אתרים, כלים ואסטרטגיות.',
    publishedAt: '2025-12-18',
    readTime: 12,
    category: 'טיולים ונופש',
    tags: ["טיסות","יוון","חופשה","טיסות זולות"],
    image: 'https://plus.unsplash.com/premium_photo-1680497811614-4f93025d7e57?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">מציאת טיסות זולות ליוון היא משימה שיכולה להיות מאתגרת, אך לא בלתי אפשרית. בעזרת מחקר נכון והכרה עם הכלים המתאימים, ניתן למצוא מספר דרכים לחסוך במחיר הטיסה. במדריך זה, נעבור על מספר אסטרטגיות שיכולות לעזור לכם למצוא טיסות זולות ליוון.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם כלי חיוני למציאת טיסות זולות. אתרים כמו Google Flights, Skyscanner ו-Kayak מציעים חיפוש גמיש עם אפשרויות שונות להשוואת מחירים. לדוגמה, Google Flights מאפשר לך לראות מחירים לאורך חודש שלם, והאפשרות 'Everywhere' של Skyscanner מראה לך יעדים זולים לפי התקציב שלך. זכור לבדוק מספר אתרים, שכן כל אחד מהם יכול להציע מחירים שונים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מצב incognito</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חשוב להשתמש במצב incognito במהלך החיפוש שלך, כי אתרים רבים משנים את המחירים בהתאם להיסטוריית החיפוש שלך. במצב incognito, ההיסטוריה שלך לא נשמרת, מה שמסייע להשגת מחירים מדויקים ונכונים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">זמן ההזמנה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מחקרים מראים שהזמן הטוב ביותר להזמין טיסה הוא בין 50 ל-100 ימים לפני הטיסה. זמנים אלו משתנים בהתאם ליעד, אך באופן כללי, ההזמנה מראש מספקת מחירים טובים יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">יום השבוע להזמנה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לפי חקירות, היום הזול ביותר להזמנת טיסות הוא יום שלישי, והימים היקרים ביותר הם שישי ושבת. אז נסו לתכנן את ההזמנות שלכם בהתאם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">נסיעה בעונה מוזלת</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אחת הדרכים הטובות למצוא טיסות זולות היא לנסוע בעונה המוזלת. במקרה של יוון, העונה המוזלת היא בעיקר בחודשים החורפיים, כאשר מספר התיירים יורד.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסות זולות ליוון יכולה להיות משימה קלה יותר באמצעות שימוש בכלים ובאסטרטגיות הנכונות. עם מקצת מחקר ותכנון, תוכלו לחסוך משמעותית במחיר הטיסה. אז תחילו לתכנן את החופשה הבאה שלכם ביוון עם טיסה זולה יותר.</p>

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
