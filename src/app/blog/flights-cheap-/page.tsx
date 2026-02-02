import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות לדובאי: איך למצוא עסקאות הטיסה הטובות ביותר - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מדריך מעמיק לכל מי שמחפש טיסות זולות לדובאי. דרכים חכמות לחסוך בעלות הטיסה ולמצוא את העסקאות הטובות ביותר. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, זול, דובאי, עסקאות',
  openGraph: {
    title: 'טיסות זולות לדובאי: איך למצוא עסקאות הטיסה הטובות ביותר - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מעמיק לכל מי שמחפש טיסות זולות לדובאי. דרכים חכמות לחסוך בעלות הטיסה ולמצוא את העסקאות הטובות ביותר. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-02-02',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","זול","דובאי","עסקאות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
        width: 800,
        height: 600,
        alt: 'טיסות זולות לדובאי: איך למצוא עסקאות הטיסה הטובות ביותר - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות לדובאי: איך למצוא עסקאות הטיסה הטובות ביותר - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מעמיק לכל מי שמחפש טיסות זולות לדובאי. דרכים חכמות לחסוך בעלות הטיסה ולמצוא את העסקאות הטובות ביותר. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c'],
  },
  alternates: {
    canonical: '/blog/flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיסות זולות לדובאי: איך למצוא עסקאות הטיסה הטובות ביותר',
    excerpt: 'מדריך מעמיק לכל מי שמחפש טיסות זולות לדובאי. דרכים חכמות לחסוך בעלות הטיסה ולמצוא את העסקאות הטובות ביותר.',
    publishedAt: '2026-02-02',
    readTime: 12,
    category: 'נסיעות',
    tags: ["טיסות","זול","דובאי","עסקאות"],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">דובאי היא יעד נפוץ למטיילים מישראל, אך המחירים של הטיסות לשם לעיתים עשויים להיות גבוהים. למרבה המזל, ישנם דרכים שונות למצוא טיסות זולות לדובאי אם אתם יודעים איפה לחפש. בפוסט זה, אנו משתף אתכם בטיפים ובטכניקות שיכולות לעזור לכם לחסוך בעלות הטיסה שלכם.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">התכננות מראש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הזמנת טיסות מראש יכולה להפחית באופן משמעותי את העלות של הטיסה. לדוגמה, ניתן למצוא טיסות זולות לדובאי במיוחד אם אתם מזמינים את הטיסה שלכם לפחות שלושה חודשים לפני הנסיעה. שימו לב שהמחירים עשויים להשתנות במהלך היום, כך שכדאי לבדוק את המחירים בשעות שונות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">שימוש באפליקציות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אפליקציות נסיעה יכולות לעזור לכם למצוא טיסות זולות לדובאי. אפליקציות כמו Hopper ו Skyscanner מנתחות את המחירים של הטיסות ומנבאות מתי הם יהיו הזולים ביותר. אפשר גם לקבל התראות כאשר מחירי טיסה לדובאי יורדים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הימנעות מטיסות בעונות השיא</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אחת הדרכים הטובות ביותר למצוא טיסות זולות לדובאי היא להימנע מהזמנת טיסות בעונות השיא, כמו הקיץ או תקופות החגים. במקום זאת, נסו לתכנן את נסיעתכם לתקופות של השנה שבהן הביקוש לטיסות נמוך יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנת טיסות עם חיבורים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים קרובות, טיסות עם חיבורים יכולות להיות זולות יותר מטיסות ישירות. אפשר למצוא טיסות זולות לדובאי עם חיבורים דרך ערים כמו איסטנבול, אמסטרדם או לונדון. שימו לב שזה יכול להוסיף זמן לנסיעה שלכם, אז שקלו את היתרונות והחסרונות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסות זולות לדובאי יכולה להיות תהליך מאתגר, אך עם קצת מחקר ותכנון מראש, אתם יכולים למצוא טיסות במחירים מצוינים. השתמשו באתרים להשוואת מחירים, התכננו מראש, ונסו להימנע מנסיעה בעונות השיא. בהצלחה במציאת הטיסה הזולה ביותר לדובאי!</p>

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
