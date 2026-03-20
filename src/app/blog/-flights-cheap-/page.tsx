import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מצאו את הטיסות הזולות ביותר לחופשת החורף - חופשת חורף טיסות לחורף מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'טיסות זולות לחופשת החורף הן בהחלט אפשריות. במאמר זה, נדריך אתכם כיצד למצוא את המציאות הטובות ביותר ולתכנן חופשה זולה ומש... חופשת חורף, טיסות לחורף, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, חופשת חורף, טיסות לחורף, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, חיפוש גמיש',
  openGraph: {
    title: 'מצאו את הטיסות הזולות ביותר לחופשת החורף - חופשת חורף טיסות לחורף מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'טיסות זולות לחופשת החורף הן בהחלט אפשריות. במאמר זה, נדריך אתכם כיצד למצוא את המציאות הטובות ביותר ולתכנן חופשה זולה ומש... חופשת חורף, טיסות לחורף, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-03-02',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","חופשת חורף","אתרי השוואת מחירים","חיפוש גמיש"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
        width: 800,
        height: 600,
        alt: 'מצאו את הטיסות הזולות ביותר לחופשת החורף - חופשת חורף טיסות לחורף מדריך מקיף',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מצאו את הטיסות הזולות ביותר לחופשת החורף - חופשת חורף טיסות לחורף מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'טיסות זולות לחופשת החורף הן בהחלט אפשריות. במאמר זה, נדריך אתכם כיצד למצוא את המציאות הטובות ביותר ולתכנן חופשה זולה ומש... חופשת חורף, טיסות לחורף, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מצאו את הטיסות הזולות ביותר לחופשת החורף',
    excerpt: 'טיסות זולות לחופשת החורף הן בהחלט אפשריות. במאמר זה, נדריך אתכם כיצד למצוא את המציאות הטובות ביותר ולתכנן חופשה זולה ומשתלמת.',
    publishedAt: '2026-03-02',
    readTime: 12,
    category: 'ביטוח נסיעות',
    tags: ["טיסות זולות","חופשת חורף","אתרי השוואת מחירים","חיפוש גמיש"],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    authorName: 'צוות טיסות זולות',
    authorAvatar: '/author-avatar.svg',
    authorBio: 'מומחים בתחום הטיסות והנסיעות עם ניסיון של שנים במציאת טיסות זולות.',
  };

  return (
    <div className="min-h-screen bg-[#fdfbf3]">
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">החורף מתקרב, ומרביתנו מתכננים כבר את חופשת החורף הבאה. חשוב לשקול כמה גורמים בעת בחירת טיסות זולות לחופשת החורף. כדי לעזור לכם בתהליך, הכנו מדריך יסודי שמציג במילים פשוטות את הצעדים שיש לעקוב אחריהם כדי למצוא טיסות זולות לחופשת החורף.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חיפוש גמיש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים, הגמישות בתאריכים יכולה להוביל לחיסכונות משמעותיים במחירי הטיסות. הכלי 'Price Forecast' של Kayak מנבא אם המחיר יעלה או יירד. נסו להיות גמישים ככל האפשר עם תאריכי הנסיעה שלכם ובדקו מספר תאריכים שונים כדי לראות איזה מהם מציע את המחיר הטוב ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנת מראש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הזמנת טיסות במראש יכולה לחסוך לכם המון כסף. בדרך כלל, המחירים נמוכים יותר כשמזמינים את הטיסה בין 3 ל-6 חודשים לפני מועד הנסיעה. זו חפיפה רחבה, אז בדקו את האתרים שוב ושוב כדי לראות מתי מתרחשת הירידה הגדולה במחיר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנת הטיסה בימים מסוימים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים, הזמנת הטיסה בימים מסוימים בשבוע יכולה לחסוך לכם כסף. בדרך כלל, המחירים הם הנמוכים ביותר באמצע השבוע, בזמן שהם מתרוממים בסוף השבוע. שימו לב גם לשעת ההזמנה. טיסות לילה תכל'ס יכולות להיות זולות יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">השתמשו במצב incognito</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">כאשר אתם מחפשים טיסות זולות, השתמשו במצב incognito בדפדפן שלכם. אתרים רבים משנים את המחירים בהתאם להיסטוריית החיפוש שלכם, והשימוש במצב incognito יכול לעזור למנוע זאת.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">המציאת טיסות זולות לחופשת החורף היא משימה שדורשת מחקר וזמן, אך התשואה היא משמעותית. באמצעות שימוש באתרים מתאימים, גמישות בתאריכים והזמנה מוקדמת, תוכלו למצוא את המציאות הטובה ביותר עבורכם. שימו לב להימנע מלהתרגש ממחיר זול במיוחד שמתגלה כמחיר לא כולל - תמיד קראו את הפרטים הקטנים.</p>

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
