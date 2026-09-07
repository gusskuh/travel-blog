import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מציאת טיסות זולות לחופשת הסוכות: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'למדו איך למצוא טיסות זולות לחופשת הסוכות, איך לנצל את האפשרויות השונות ולהשיב את הכסף שלכם במקרה של ביטול טיסה. המדריך מ... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, חופשת סוכות, ביטול טיסות',
  openGraph: {
    title: 'מציאת טיסות זולות לחופשת הסוכות: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'למדו איך למצוא טיסות זולות לחופשת הסוכות, איך לנצל את האפשרויות השונות ולהשיב את הכסף שלכם במקרה של ביטול טיסה. המדריך מ... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-09-07',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","חופשת סוכות","טיסות זולות","ביטול טיסות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
        width: 800,
        height: 600,
        alt: 'מציאת טיסות זולות לחופשת הסוכות: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מציאת טיסות זולות לחופשת הסוכות: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'למדו איך למצוא טיסות זולות לחופשת הסוכות, איך לנצל את האפשרויות השונות ולהשיב את הכסף שלכם במקרה של ביטול טיסה. המדריך מ... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-guide-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מציאת טיסות זולות לחופשת הסוכות: מדריך מקצועי',
    excerpt: 'למדו איך למצוא טיסות זולות לחופשת הסוכות, איך לנצל את האפשרויות השונות ולהשיב את הכסף שלכם במקרה של ביטול טיסה. המדריך מציע טיפים מעשיים, תרחישים מהעולם האמיתי ותובנות מקצועיות.',
    publishedAt: '2026-09-07',
    readTime: 12,
    category: 'טיולים ונופש',
    tags: ["טיסות","חופשת סוכות","טיסות זולות","ביטול טיסות"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">הסוכות הם זמן מרכזי בשנה שבו הישראלים מנצלים את החופש לטוס לחו"ל. המחירים של הטיסות יכולים להיות גבוהים, אבל עם מעט מחקר וכמה טיפים מקצועיים, ניתן למצוא טיסות במחירים משתלמים. במדריך זה, אנו נדריך אתכם כיצד למצוא את הטיסות הזולות ביותר, ומה לעשות במקרה של ביטול טיסה.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">איך למצוא טיסות זולות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מניעת העלאת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">השתמשו במצב incognito בדפדפן שלכם כדי למנוע מהאתרים להעלות את המחירים בהתאם להיסטוריית החיפוש שלכם. הזמינו טיסות באמצע השבוע, כאשר המחירים הם בדרך כלל הכי זולים. כמו כן, חשוב להזמין טיסות מראש, לפחות ששה חודשים לפני הטיסה, כדי למצוא את המחירים הטובים ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מה לעשות במקרה של ביטול טיסה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">במקרה של ביטול טיסה, יש לכם זכויות מסויימות שאתם יכולים לדרוש. החברה שבה הזמנתם את הטיסה חייבת להחזיר לכם את הכסף, או להציע לכם טיסה חלופית. בנוסף, אתם יכולים לדרוש פיצוי כספי של עד 600 אירו, בהתאם לחוק האירופי.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ניהול ביטולים והחזרים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם הטיסה שלכם הושבתה או בוטלה, אתם יכולים להשתמש בחברות כמו AirHelp או EUclaim כדי לעזור לכם להגיש תביעה. הם ינהלו את כל התהליך עבורכם, כולל התמודדות עם החברה של הטיסה והחזרת הכסף שלכם. זו דרך מצוינת לחסוך זמן ולוודא שאתם מקבלים את מה שאתם זכאים לו.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הפקת המרב מהחופשה שלכם</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לאחר שמצאתם את הטיסה הזולה שלכם, זה הזמן לתכנן את החופשה שלכם. חשוב לבחון את מגבלות המזוודה של חברת התעופה שלכם, לבדוק את החיסונים הנדרשים לארץ שאליה אתם מטיסים, ולוודא שיש לכם ביטוח נסיעות מקיף.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסות זולות לחופשת הסוכות מצריכה מעט מחקר, אך עם הכלים הנכונים והתרחישים המתאימים, אתם יכולים לחסוך כסף רב. זכרו, במקרה של ביטול טיסה, יש לכם זכויות מסוימות. נצלו את המרב מהחופשה שלכם ותהליך ההזמנה שלכם יהיה חלק ונעים.</p>

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
