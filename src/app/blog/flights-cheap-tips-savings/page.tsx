import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות לחופשת הפסח: תכנון, השוואות וטיפים לחיסכון - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'המדריך המלא למציאת טיסות זולות לחופשת הפסח. כולל טיפים מקצועיים, אתרי השוואה מומלצים ואסטרטגיות חיסכון לנוסע החכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, חופשת פסח, אתרי השוואה, חיסכון',
  openGraph: {
    title: 'טיסות זולות לחופשת הפסח: תכנון, השוואות וטיפים לחיסכון - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך המלא למציאת טיסות זולות לחופשת הפסח. כולל טיפים מקצועיים, אתרי השוואה מומלצים ואסטרטגיות חיסכון לנוסע החכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-04-16',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","חופשת פסח","אתרי השוואה","חיסכון"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596120236172-231999844ade',
        width: 800,
        height: 600,
        alt: 'טיסות זולות לחופשת הפסח: תכנון, השוואות וטיפים לחיסכון - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות לחופשת הפסח: תכנון, השוואות וטיפים לחיסכון - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך המלא למציאת טיסות זולות לחופשת הפסח. כולל טיפים מקצועיים, אתרי השוואה מומלצים ואסטרטגיות חיסכון לנוסע החכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1596120236172-231999844ade'],
  },
  alternates: {
    canonical: '/blog/flights-cheap-tips-savings',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיסות זולות לחופשת הפסח: תכנון, השוואות וטיפים לחיסכון',
    excerpt: 'המדריך המלא למציאת טיסות זולות לחופשת הפסח. כולל טיפים מקצועיים, אתרי השוואה מומלצים ואסטרטגיות חיסכון לנוסע החכם.',
    publishedAt: '2026-04-16',
    readTime: 12,
    category: 'טיפים לנוסעים',
    tags: ["טיסות זולות","חופשת פסח","אתרי השוואה","חיסכון"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">חופשת הפסח הגיעה ואיתה התחלה החיפוש אחר טיסות זולות לחו"ל. אך, כיצד למצוא את הדילים הטובים ביותר? האם קיימים טיפים וטריקים שיכולים לעזור לנו לחסוך בכרטיסי הטיסה? התשובה היא כן, והמדריך הזה נוצר כדי להראות לכם איך.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הכרת אתרי ההשוואה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הכלי החשוב ביותר למציאת טיסות זולות הוא אתרי השוואת מחירים. Google Flights, Skyscanner ו-Kayak הם שלושה מהאתרים המובילים בעולם. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם. Skyscanner מאפשר לכם לחפש 'Everywhere', שמציגה יעדים זולים לפי תקציב. Kayak בנוי עם כלי 'Hacker Fares' שמראה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ניצול תכניות נאמנות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם טסים באופן קבוע, תכניות נאמנות של חברות התעופה יכולות להציע לכם חיסכון משמעותי. חברות כמו El Al, ריין אייר ואייזי ג'ט מציעות תכניות נאמנות שמאפשרות לכם לצבור נקודות ולהמיר אותן לטיסות בחינם או בהכחדות מחיר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">התכננות מראש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ככל שתתכננו מראש, כך תצליחו לחסוך יותר. ברוב המקרים, מחירי הטיסות מתייקרים ככל שהתאריך נקרב. לכן, אם אתם יודעים שאתם מתכננים לטוס בפסח, מומלץ להתחיל לחפש כרטיסים כבר מסביב לחודשים ינואר-פברואר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">כיצד להשתמש בכלים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בחיפוש שלכם על אתרי ההשוואה, השתמשו במצב 'incognito' על מנת למנוע אתרים מלהעלות מחירים בהתבסס על היסטוריית החיפוש שלכם. בנוסף, יש לבדוק מספר אתרים שונים, שכן כל אחד מציע מחירים שונים. ככלל, כדאי להתחיל עם Google Flights, להמשיך ל-Skyscanner, ולסיים עם Kayak.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מניעת מחירים מנופחים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">במקרים מסוימים, חברות התעופה מנפחות מחירים בתקופות של חגים וחופשות. כדי למנוע זאת, נסו להזמין טיסות בימים שאינם פופולריים, כמו יום שני או יום שלישי. בנוסף, המנהיגות בשעות לא שגרתיות, כמו בלילה או בשעות הבוקר המוקדמות, עשויה להביא לחיסכון משמעותי.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בעזרת הכלים והטריקים שנלמדו במדריך זה, מציאת טיסות זולות לחופשת הפסח יכולה להיות פשוטה וחסכונית יותר. הכי חשוב, זכרו שהתכנון המוקדם והשוואת מחירים הם המפתח למציאת הדילים הטובים ביותר. בהצלחה בחיפוש!</p>

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
