import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מציאת טיסות זולות לראש השנה: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'חג הראש השנה הוא הזמן המושלם לטוס לנופש. נלמד איך למצוא את הדילים הכי זולים ולהכין מטייל חג בלתי נשכח. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, ראש השנה, חופשה',
  openGraph: {
    title: 'מציאת טיסות זולות לראש השנה: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'חג הראש השנה הוא הזמן המושלם לטוס לנופש. נלמד איך למצוא את הדילים הכי זולים ולהכין מטייל חג בלתי נשכח. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-03-12',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","ראש השנה","חופשה","טיסות זולות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'מציאת טיסות זולות לראש השנה: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מציאת טיסות זולות לראש השנה: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'חג הראש השנה הוא הזמן המושלם לטוס לנופש. נלמד איך למצוא את הדילים הכי זולים ולהכין מטייל חג בלתי נשכח. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-guide-complete',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מציאת טיסות זולות לראש השנה: המדריך המלא',
    excerpt: 'חג הראש השנה הוא הזמן המושלם לטוס לנופש. נלמד איך למצוא את הדילים הכי זולים ולהכין מטייל חג בלתי נשכח.',
    publishedAt: '2026-03-12',
    readTime: 12,
    category: 'חדשות תעופה',
    tags: ["טיסות","ראש השנה","חופשה","טיסות זולות"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">ראש השנה הוא זמן של חגיגות ושמחה, אך גם הזמן המושלם לטוס לנופש. במאמר זה נלמד כיצד למצוא דילים לטיסות זולות לראש השנה, הכוללים טיפים מקצועיים, דוגמאות ספציפיות והוראות שלב אחר שלב.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון. הכלי 'Price Forecast' של Kayak מנבא אם המחיר יעלה או יירד.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">זמן ההזמנה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">זמן ההזמנה של הטיסה יכול להשפיע באופן משמעותי על המחיר. באופן כללי, ככל שההזמנה מוקדמת יותר, כך המחיר יהיה נמוך יותר. מחקר של Skyscanner מצא שהזמנת טיסות כ-2 חודשים לפני המועד המבוקש מציעה את המחירים הטובים ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ניצול מבצעים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חברות הטיסה מציעות לעיתים מבצעים והנחות שעשויות להפחית משמעותית את מחיר הטיסה. בכדי להימנע מפספוס מבצעים אלו, מומלץ להירשם לניוזלטרים של החברות השונות ולעקוב אחרי החברות ברשתות החברתיות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנה דרך סוכנות נסיעות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">למרות שההזמנה ישירות מהחברה האווירית היא לעיתים הפתרון הכי זול, סוכנויות נסיעות יכולות לפעמים להציע מחירים משתלמים יותר בזכות הסכמים שהן יוצרות עם החברות השונות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">איך להימנע מתשלומים נוספים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">באופן כללי, מחיר הטיסה הראשוני שאתם רואים הוא לא המחיר הסופי. יש לחשב בנוסף על עלויות נוספות כמו מזוודות, אוכל ומנות מיוחדות. אם אתם רוצים לחסוך, שקלו להביא את האוכל שלכם ולהגביל את מספר המזוודות שאתם מביאים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסות זולות לראש השנה יכולה להיות משימה מאתגרת, אך עם קצת מחקר ותכנון מראש ניתן למצוא דילים מעולים. אז התחילו לתכנן, לחקור את האפשרויות שלכם ולהכין מטייל חג בלתי נשכח.</p>

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
