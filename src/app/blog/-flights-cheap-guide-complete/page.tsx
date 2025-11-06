import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מציאת טיסות זולות לטורקיה: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מדריך מקיף המסביר איך למצוא טיסות זולות לטורקיה. מציע קישורים לאתרים, כלים, וטכניקות שיעזרו לכם לחסוך במחיר הטיסה. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, חיפוש טיסות, טורקיה',
  openGraph: {
    title: 'מציאת טיסות זולות לטורקיה: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקיף המסביר איך למצוא טיסות זולות לטורקיה. מציע קישורים לאתרים, כלים, וטכניקות שיעזרו לכם לחסוך במחיר הטיסה. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-11-06',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","חיפוש טיסות","טורקיה"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200',
        width: 800,
        height: 600,
        alt: 'מציאת טיסות זולות לטורקיה: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מציאת טיסות זולות לטורקיה: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקיף המסביר איך למצוא טיסות זולות לטורקיה. מציע קישורים לאתרים, כלים, וטכניקות שיעזרו לכם לחסוך במחיר הטיסה. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1524231757912-21f4fe3a7200'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-guide-complete',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מציאת טיסות זולות לטורקיה: המדריך המלא',
    excerpt: 'מדריך מקיף המסביר איך למצוא טיסות זולות לטורקיה. מציע קישורים לאתרים, כלים, וטכניקות שיעזרו לכם לחסוך במחיר הטיסה.',
    publishedAt: '2025-11-06',
    readTime: 12,
    category: 'ייעדים מומלצים',
    tags: ["טיסות זולות","חיפוש טיסות","טורקיה"],
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">למצוא טיסות זולות לטורקיה הוא משימה שמחייבת מחקר והתמדה. המטרה היא למצוא את המחיר הנמוך ביותר תוך שמירה על איכות החבילה. במדריך זה נשתף איתכם טיפים, טכניקות ואתרים שיקלו עליכם את המשימה.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">זמן ההזמנה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הזמן בו אתם מזמינים את הטיסה יכול להשפיע באופן משמעותי על המחיר. המחקרים מראים שהזמן הטוב ביותר להזמין טיסה הוא בין 50 ל-100 יום לפני הטיסה. אם אתם מזמינים טיסה לטורקיה, מומלץ להתחיל לחפש כבר מספר חודשים לפני הנסיעה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">המראות הזולות ביותר</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חלק מהחברות השונות מציעות מראות זולות במיוחד לטורקיה. לדוגמה, חברת Pegasus Airlines מציעה מראות זולות מתל אביב לאיסטנבול, וחברת SunExpress מציעה מראות זולות לאנטליה. כדאי לבדוק את אתרי החברות הללו ולהשוות את המחירים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">התכננות מראש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">התכננות מראש יכולה לעזור לכם לחסוך במחיר הטיסה. כדאי להתעדכן במבצעים והנחות של חברות התעופה, ולהגיש בקשות למידע מחירים מראש. בנוסף, כדאי לשקול את אפשרות הרכישה של חבילת נופש, שלא תמיד יותר יקרה מרכישת כרטיס טיסה בלבד.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">שימוש במצב incognito</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרים רבים משנים את המחירים בהתאם להיסטוריית החיפוש שלכם. כדי למנוע מהם להעלות את המחירים, כדאי להשתמש במצב incognito בדפדפן שלכם. במצב זה, האתרים לא יוכלו לעקוב אחרי היסטוריית החיפוש שלכם, והמחירים שיציגו יהיו נכונים יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסות זולות לטורקיה היא משימה שדורשת מחקר ותכנון. בעזרת הכלים והטכניקות ששיתפנו כאן, אתם תוכלו לחסוך משמעותית במחיר הטיסה. בהצלחה בחיפוש!</p>

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
