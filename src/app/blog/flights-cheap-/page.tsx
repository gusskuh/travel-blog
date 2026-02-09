import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות לאיטליה: כיצד למצוא את המציאות הבאה - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'המדריך המקיף הבא מסביר איך למצוא טיסות זולות לאיטליה, כולל עצות מקצועיות, כלים ואתרים שיסייעו לכם לחסוך בעלויות הטיסה. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, איטליה, חיפוש טיסות',
  openGraph: {
    title: 'טיסות זולות לאיטליה: כיצד למצוא את המציאות הבאה - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך המקיף הבא מסביר איך למצוא טיסות זולות לאיטליה, כולל עצות מקצועיות, כלים ואתרים שיסייעו לכם לחסוך בעלויות הטיסה. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-02-09',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","איטליה","טיסות זולות","חיפוש טיסות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b',
        width: 800,
        height: 600,
        alt: 'טיסות זולות לאיטליה: כיצד למצוא את המציאות הבאה - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות לאיטליה: כיצד למצוא את המציאות הבאה - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך המקיף הבא מסביר איך למצוא טיסות זולות לאיטליה, כולל עצות מקצועיות, כלים ואתרים שיסייעו לכם לחסוך בעלויות הטיסה. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b'],
  },
  alternates: {
    canonical: '/blog/flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיסות זולות לאיטליה: כיצד למצוא את המציאות הבאה',
    excerpt: 'המדריך המקיף הבא מסביר איך למצוא טיסות זולות לאיטליה, כולל עצות מקצועיות, כלים ואתרים שיסייעו לכם לחסוך בעלויות הטיסה.',
    publishedAt: '2026-02-09',
    readTime: 12,
    category: 'טיולים',
    tags: ["טיסות","איטליה","טיסות זולות","חיפוש טיסות"],
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">אין ספק שהמציאת טיסה זולה לאיטליה יכולה לחסוך המון כסף שניתן להשקיע במהלך הנסיעה. למרות שזה נשמע כמו משימה מורכבת, קיימות הרבה אסטרטגיות וכלים שיכולים לעזור לכם למצוא את המציאה הבאה. במדריך הזה, אנחנו נדריך אתכם צעד אחר צעד כיצד למצוא את הטיסות הזולות האלה.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">השוואת מחירים באתרים שונים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הדרך הטובה ביותר למצוא טיסות זולות היא להשוות מחירים באמצעות אתרים כמו Google Flights, Skyscanner ו-Kayak. כל אחד מהאתרים האלה מאפשר לכם לראות מחירים לפי תאריכים מסוימים, ולפני שאתם מזמינים, חשוב לבדוק בכמה אתרים שונים כדי לוודא שאתם מקבלים את המחיר הזול ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">השתמשו במצב גלישה פרטית</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרים רבים משנים את המחירים בהתאם להיסטוריית החיפוש שלכם. כדי למנוע מהאתרים להעלות את המחירים, השתמשו במצב גלישה פרטית או incognito בכל פעם שאתם מחפשים טיסות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמינו בהקדם האפשרי</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בדרך כלל, הזמנת טיסות מראש מאפשרת לכם למצוא מחירים זולים יותר. כאמור, זה לא תמיד המקרה, אך ברוב המקרים תוכלו למצוא מחירים זולים יותר אם תזמינו כמה חודשים לפני הטיסה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">המרו בראש ניחוח</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם מזמינים טיסות לחו"ל, שימו לב לשער החליפין. לעיתים, זה יכול להיות זול יותר להמיר מראש כסף למטבע המקומי ולשלם בו עבור הטיסה, במקום לשלם בש"ח.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">בחרו ביעדים פחות פופולריים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם גמישים לגבי היעד שלכם, נסו לחפש טיסות ליעדים פחות פופולריים באיטליה. לעיתים, טיסה לעיר קטנה יותר או לשדה תעופה פחות עמוס יכולה להיות זולה יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">למצוא טיסות זולות לאיטליה הוא משימה שדורשת מחקר וסבלנות, אך הכדאיות של העצות והכלים הנ"ל היא בלתי מעורערת. זכרו לבדוק מספר אתרים, להשתמש במצב גלישה פרטית, להזמין מראש, לשלם במטבע מקומי אם אפשרי ולשקול יעדים פחות פופולריים. בהצלחה במציאת הטיסה הזולה הבאה שלכם לאיטליה!</p>

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
