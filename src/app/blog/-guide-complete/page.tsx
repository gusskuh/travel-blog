import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'השכרת רכב בחו"ל - המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מדריך מקיף המסביר את כל מה שצריך לדעת לפני השכרת רכב בחו"ל, מהחשיבות של בחירת החברה הנכונה, דרך הביטוח ועד לחווית הנהיגה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, השכרת רכב, נסיעה לחו"ל, ביטוח נסיעות, חוויית נהיגה',
  openGraph: {
    title: 'השכרת רכב בחו"ל - המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקיף המסביר את כל מה שצריך לדעת לפני השכרת רכב בחו"ל, מהחשיבות של בחירת החברה הנכונה, דרך הביטוח ועד לחווית הנהיגה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-10-01',
    authors: ['צוות טיסות זולות'],
    tags: ["השכרת רכב","נסיעה לחו\"ל","ביטוח נסיעות","חוויית נהיגה"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'השכרת רכב בחו"ל - המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'השכרת רכב בחו"ל - המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקיף המסביר את כל מה שצריך לדעת לפני השכרת רכב בחו"ל, מהחשיבות של בחירת החברה הנכונה, דרך הביטוח ועד לחווית הנהיגה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/-guide-complete',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'השכרת רכב בחו"ל - המדריך המלא',
    excerpt: 'מדריך מקיף המסביר את כל מה שצריך לדעת לפני השכרת רכב בחו"ל, מהחשיבות של בחירת החברה הנכונה, דרך הביטוח ועד לחווית הנהיגה עצמה.',
    publishedAt: '2026-10-01',
    readTime: 12,
    category: 'ביטוח נסיעות',
    tags: ["השכרת רכב","נסיעה לחו\"ל","ביטוח נסיעות","חוויית נהיגה"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">השכרת רכב בחו"ל מאפשרת חופש רב יותר במהלך החופשה. עם זאת, ישנם כמה דברים חשובים שצריך לדעת על מנת להבטיח שהתהליך יתנהל בצורה חלקה ובלי הפתעות לא נעימות. במאמר זה נתאר את השלבים השונים של השכרת רכב בחו"ל, מהבחירה בחברת ההשכרה, דרך בחירת ביטוח המתאים ועד למשפטים החשובים לצרכן.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">בחירת חברת ההשכרה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">יינה אתרים רבים המאפשרים השוואת מחירים של חברות השכרה שונות, כמו Expedia, Rentalcars או Skyscanner. חשוב לבחור בחברה מוכרת עם מוניטין טוב, ולא רק להתמקד במחיר הזול ביותר. זכורו, המחיר הזול ביותר לא תמיד משקף את העלות הכוללת, ולעיתים ייתכן שישנם תוספות מחיר שנמסרות רק בתחילת השכרה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">בחירת ביטוח רכב</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הביטוח של חברת ההשכרה לעיתים אינו מכסה את כל הנזקים. ייתכן שתרצו לשקול ביטוח נוסף מחברת ביטוח נפרדת. אתרים כמו iCarhire או Protect Your Bubble מציעים ביטוחים נוספים שמכסים נזקים שלא מכוסים על ידי ביטוח החברה, כמו נזק לגלגלים או לחלונות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תכנון הנסיעה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חשוב לתכנן את הנסיעה שלכם מראש. אם אתם מתכננים לנהוג במדינה שבה הנהיגה היא בצד השני, כדאי להתרגל לכך מראש. כמו כן, חשוב לבחון את החוקים המקומיים של הנהיגה. לדוגמה, בחלק מהמדינות האירופאיות נדרשים לשלם דמי כניסה לערים מסוימות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חווית הנהיגה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בנוסף לכך, חשוב לשקול את חווית הנהיגה עצמה. האם אתם מרגישים בנוח לנהוג במדינה שאינכם מכירים? האם אתם מעדיפים רכב ידני או אוטומטי? אלו מסלולים אתם מתכננים לנסוע? כל אלה הם שאלות שכדאי לחשוב עליהם מראש.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">החזרת הרכב</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם מתכננים להחזיר את הרכב במקום שונה מאשר אכן השכרתם אותו, זכרו לבדוק את התוספת למחיר שזה יכול להעלות. חברות כמו Hertz וAvis לעיתים מחייבות תוספת מחיר עבור החזרה במיקום שונה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">השכרת רכב בחו"ל היא דרך מצוינת להכיר את המדינה שאליה אתם מגיעים, אך יש לזכור שהיא מחייבת תכנון מראש. הימנעות מהפתעות ובחינה דקדקנית של התנאים והמחירים יכולים להבטיח שהחוויה שלכם תהיה חיובית ונעימה.</p>

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
