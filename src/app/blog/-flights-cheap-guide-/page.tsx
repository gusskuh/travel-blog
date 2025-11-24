import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מצאו טיסות זולות ליוון: המדריך המקיף שלנו - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מחפשים טיסות זולות ליוון? המדריך שלנו מפרט את הכלים, האתרים והטיפים שיסייעו לכם למצוא את הדיל הכי טוב. למדו איך לחסוך בט... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, יוון, תיירות, חסכון',
  openGraph: {
    title: 'מצאו טיסות זולות ליוון: המדריך המקיף שלנו - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים טיסות זולות ליוון? המדריך שלנו מפרט את הכלים, האתרים והטיפים שיסייעו לכם למצוא את הדיל הכי טוב. למדו איך לחסוך בט... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-11-24',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","יוון","תיירות","חסכון"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
        width: 800,
        height: 600,
        alt: 'מצאו טיסות זולות ליוון: המדריך המקיף שלנו - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מצאו טיסות זולות ליוון: המדריך המקיף שלנו - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים טיסות זולות ליוון? המדריך שלנו מפרט את הכלים, האתרים והטיפים שיסייעו לכם למצוא את הדיל הכי טוב. למדו איך לחסוך בט... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1469474968028-56623f02e42e'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-guide-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מצאו טיסות זולות ליוון: המדריך המקיף שלנו',
    excerpt: 'מחפשים טיסות זולות ליוון? המדריך שלנו מפרט את הכלים, האתרים והטיפים שיסייעו לכם למצוא את הדיל הכי טוב. למדו איך לחסוך בטיסה הבאה שלכם.',
    publishedAt: '2025-11-24',
    readTime: 12,
    category: 'טיולים ונופש',
    tags: ["טיסות זולות","יוון","תיירות","חסכון"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">בעידן שבו החיפוש וההזמנה של טיסה הפכו למשימה שבספר השניים של כל אחד, נדרשים כלים נוספים כדי למצוא את הדילים הכי שווים. חלק מהכלים המדוברים כבר ידועים לרובנו, אך האם אנחנו מנצלים אותם באופן המיטבי? במדריך זה, נעבור על מספר אתרים וכלים שיכולים לסייע בקניית טיסות זולות ליוון.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון. הכלי 'Price Forecast' של Kayak מנבא אם המחיר יעלה או יירד.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">זמן ההזמנה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">למרות שאין כלל חותך, מחקרים מציינים שהזמן הטוב ביותר להזמין טיסה הוא בין 3 ל-7 שבועות לפני המועד המבוקש. כמו כן, בחלק מהמקרים, ימי שני, שלישי ושבת הם הימים הזולים ביותר לטוס. זכרו, מדובר בממוצעים ועלולות להיות חריגות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">התראות מחיר</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">רוב אתרי הטיסות ואפליקציות הניידת מציעים אפשרות לקבל התראות על ירידות מחירים. הגדירו התראה לטיסות ליוון וקבלו עדכונים בהתאם לתנאים שהגדרתם. Google Flights, Skyscanner, וHopper הם רק חלק מהאפליקציות שמציעות שירות זה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיסות עם עצירה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לפעמים ניתן לחסוך סכומים משמעותיים על טיסות עם עצירה, ולהוסיף בונוס של מקום נוסף לביקור. אתרים כמו Skyscanner וGoogle Flights מאפשרים לכם לבחור 'חיפוש גמיש' או 'עצירה בראוטים מסוימים'.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תכנו את הטיסות שלכם לפי המחיר</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">למרות שיש אתרים שמציעים חלפים זולים יותר לטיסה, הם יכולים לכלול מספר חסרונות, כמו המתנה ארוכה בשדה התעופה, טיסה בשעות לא נוחות וכד'. בחרו בטיסה שמתאימה לצרכים שלכם, ולא רק לתקציב שלכם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסות זולות ליוון לא חייבת להיות משימה מתישה. באמצעות הטיפים והכלים שהוזכרו במדריך זה, אתם יכולים למצוא את הדיל הכי משתלם בצורה יעילה ופשוטה. תכננו את הטיסה שלכם בחוכמה, תחסכו כסף, ותתחילו לתכנן את החופשה הבאה שלכם ביוון.</p>

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
