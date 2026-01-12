import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מציאת טיסות זולות לצרפת: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מחפשים טיסות זולות לצרפת? בפוסט זה נחשוף את כל הטריקים והכלים שיעזרו לכם למצוא את המציאה הבאה שלכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, צרפת, חיפוש טיסות, אתרים להשוואת מחירים',
  openGraph: {
    title: 'מציאת טיסות זולות לצרפת: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים טיסות זולות לצרפת? בפוסט זה נחשוף את כל הטריקים והכלים שיעזרו לכם למצוא את המציאה הבאה שלכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-01-12',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","צרפת","חיפוש טיסות","אתרים להשוואת מחירים"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'מציאת טיסות זולות לצרפת: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מציאת טיסות זולות לצרפת: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים טיסות זולות לצרפת? בפוסט זה נחשוף את כל הטריקים והכלים שיעזרו לכם למצוא את המציאה הבאה שלכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-guide-complete',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מציאת טיסות זולות לצרפת: המדריך המלא',
    excerpt: 'מחפשים טיסות זולות לצרפת? בפוסט זה נחשוף את כל הטריקים והכלים שיעזרו לכם למצוא את המציאה הבאה שלכם.',
    publishedAt: '2026-01-12',
    readTime: 12,
    category: 'ביטוח נסיעות',
    tags: ["טיסות זולות","צרפת","חיפוש טיסות","אתרים להשוואת מחירים"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">טיסה לצרפת יכולה להיות חוויה מרהיבה, אך לא תמיד המחירים הגבוהים מאפשרים לנו לממש את החלום. למרות זאת, ישנם שיטות וכלים שיכולים לעזור לנו למצוא טיסות במחירים נמוכים יותר. כל מה שנדרש הוא קצת סבלנות, גמישות והכרה עם כמה כלים מקוונים.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי ההשוואות של מחירי טיסות הם המקום הראשון שנציעו לנו לבקר בו. Google Flights, Skyscanner ו-Kayak הם דוגמאות לאתרים שמציעים חיפוש טיסות גמיש, שמאפשר לראות מחירים על פני חודש שלם או להשוות את המחירים בין חברות שונות. כמו כן, כל אחד מהם מציע כלים משלו לחיסכון במחיר הטיסה, כמו 'Hacker Fares' של Kayak או האפשרות 'Everywhere' של Skyscanner.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנת טיסה בתקופות נמוכות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חלק מהעצות למציאת טיסות זולות מתייחסות לתקופות ההזמנה. ברוב המקרים, המחירים הזולים ביותר נמצאים באמצע השבוע, כאשר פחות אנשים מחפשים טיסות. בנוסף, כדאי לבחון את המחירים בתקופות נמוכות, כמו בחורף, כאשר יש פחות תיירים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנת טיסה מראש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ברוב המקרים, ההזמנה מראש של טיסה תאפשר לכם להשיג מחיר נמוך יותר. למשל, לפי נתונים של Skyscanner, ההזמנה של טיסה לצרפת שלושה חודשים מראש תאפשר לכם לחסוך עד 7% מהמחיר הממוצע.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מנויים לרשימות תפוצה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חלק מהחברות מציעות מנוי לרשימת תפוצה שמאפשרת לקבל מבצעים והכרזות על טיסות זולות. ישנן גם רשימות תפוצה של אתרים כמו Scott's Cheap Flights או Jack's Flight Club שמשלחות מבצעים לטיסות זולות מסביב לעולם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">שימוש בנקודות ומילים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם משתמשים בכרטיס אשראי שמצביר נקודות או מילים, זו הזדמנות מעולה לחסוך במחיר הטיסה. תוכלו לממש את הנקודות או המילים שצברתם לטיסה לצרפת ולחסוך משמעותית במחיר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">למרות שהמחירים של הטיסות לצרפת לעיתים גבוהים, אם תשתמשו בכלים ובשיטות שהוצגו בפוסט זה, תוכלו למצוא טיסות במחירים נמוכים יותר. המפתח הוא להיות גמישים, להכין בזמן ולהשתמש במגוון הכלים שזמינים באינטרנט. בהצלחה בחיפוש!</p>

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
