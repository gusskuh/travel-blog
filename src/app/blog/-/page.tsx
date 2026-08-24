import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'תרגול לאיטליה במחירים שאי לפספס - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'איטליה היא יעד מועדף לא רק בגלל האוכל המעולה, הנופים המרהיבים והתרבות העשירה, אלא גם בגלל שיש לה הרבה להציע למטיילים מכל... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, איטליה, חופשה, חיפוש טיסות',
  openGraph: {
    title: 'תרגול לאיטליה במחירים שאי לפספס - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'איטליה היא יעד מועדף לא רק בגלל האוכל המעולה, הנופים המרהיבים והתרבות העשירה, אלא גם בגלל שיש לה הרבה להציע למטיילים מכל... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-08-24',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","איטליה","חופשה","חיפוש טיסות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
        width: 800,
        height: 600,
        alt: 'תרגול לאיטליה במחירים שאי לפספס - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'תרגול לאיטליה במחירים שאי לפספס - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'איטליה היא יעד מועדף לא רק בגלל האוכל המעולה, הנופים המרהיבים והתרבות העשירה, אלא גם בגלל שיש לה הרבה להציע למטיילים מכל... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05'],
  },
  alternates: {
    canonical: '/blog/-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'תרגול לאיטליה במחירים שאי לפספס',
    excerpt: 'איטליה היא יעד מועדף לא רק בגלל האוכל המעולה, הנופים המרהיבים והתרבות העשירה, אלא גם בגלל שיש לה הרבה להציע למטיילים מכל הסוגים. בפוסט זה, אנחנו מעלים את המסך על כמה טיפים שיכולים לעזור לכם למצוא טיסות זולות לאיטליה.',
    publishedAt: '2026-08-24',
    readTime: 12,
    category: 'יעדים מומלצים',
    tags: ["טיסות זולות","איטליה","חופשה","חיפוש טיסות"],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">כאשר משפחה או זוג מתכננים חופשה, אחת מההתרסהות הראשיות היא העלות. טיסות הן חלק משמעותי מהתקציב ולכן קריטי למצוא טיסה במחיר משתלם. בפוסט זה, נספק מספר טיפים שיכולים לעזור לכם למצוא טיסות זולות לאיטליה, יעד הפופולרי.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner לעומתו, מאפשר חיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. אתר Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמן מראש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">למרות שזה לא תמיד אפשרי, ככלל הזמנת טיסה מראש, בערך 6 חודשים לפני הטיסה, יכולה לחסוך לכם הרבה כסף. יש יותר זמן לחקור, להשוות מחירים ולמצוא את הדיל הכי טוב.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיסות בינעית</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים, טיסה ישירה לא תמיד האפשרות הכי זולה. טיסות עם עצירה או שתיים יכולות להיות זולות יותר. אתרי השוואת מחירים כמו Skyscanner ו-Kayak מאפשרים לכם לחפש טיסות בינעית ולהשוות מחירים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מנויים והטבות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חברות תעופה רבות מציעות מנויים שמאפשרים לכם להצטרף לרשימת התפוצה שלהם ולקבל הטבות והנחות בלעדיות. אל תשכחו לבדוק את ההטבות שחברת האשראי שלכם מציעה, כי לעיתים הן כוללות הטבות על טיסות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">זמן הטיסה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">טיסות בשעות מאוד מוקדמות בבוקר או מאוחרות בלילה יכולות להיות זולות יותר מאשר טיסות בשעות הפיק. זה עשוי להיות ממעט ממוזג, אך אם אתם מעוניינים לחסוך, זה שיקול שמשתלם לקחת בחשבון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בעזרת הטיפים האלה, תוכלו למצוא טיסות זולות לאיטליה ולחסוך עשרות ואף מאות שקלים. אז תיכננו מראש, השוו מחירים, וקחו בחשבון את כל האפשרויות. בהצלחה בטיסה שלכם לאיטליה!</p>

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
