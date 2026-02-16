import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות לאמריקה: מדריך לביטולים והחזרים - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מדריך מקיף לישראלים שמחפשים טיסות זולות לאמריקה, כולל מידע מקיף על תהליכי ביטול והחזרים, וטיפים מקצועיים על איך למצוא את... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, אמריקה, ביטולים, החזרים, דילים',
  openGraph: {
    title: 'טיסות זולות לאמריקה: מדריך לביטולים והחזרים - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקיף לישראלים שמחפשים טיסות זולות לאמריקה, כולל מידע מקיף על תהליכי ביטול והחזרים, וטיפים מקצועיים על איך למצוא את... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-02-16',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","אמריקה","ביטולים","החזרים","דילים"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
        width: 800,
        height: 600,
        alt: 'טיסות זולות לאמריקה: מדריך לביטולים והחזרים - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות לאמריקה: מדריך לביטולים והחזרים - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מדריך מקיף לישראלים שמחפשים טיסות זולות לאמריקה, כולל מידע מקיף על תהליכי ביטול והחזרים, וטיפים מקצועיים על איך למצוא את... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05'],
  },
  alternates: {
    canonical: '/blog/flights-cheap-america-guide-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיסות זולות לאמריקה: מדריך לביטולים והחזרים',
    excerpt: 'מדריך מקיף לישראלים שמחפשים טיסות זולות לאמריקה, כולל מידע מקיף על תהליכי ביטול והחזרים, וטיפים מקצועיים על איך למצוא את הדילים הכי טובים.',
    publishedAt: '2026-02-16',
    readTime: 12,
    category: 'תיירות וטיסות',
    tags: ["טיסות","אמריקה","ביטולים","החזרים","דילים"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">אמריקה היא יעד פופולרי לטיולים עבור הרבה ישראלים. אבל מציאת טיסות זולות לאמריקה יכולה להיות משימה מאתגרת. בנוסף, ביטולים והחזרים יכולים להיות מסובכים ומפחידים. מאמר זה מספק מדריך מקיף למציאת טיסות זולות, כולל מידע על תהליכי ביטול והחזרים.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מציאת טיסות זולות לאמריקה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים כמו Google Flights, Skyscanner ו-Kayak הם כלים מעולים למציאת טיסות זולות. אלו מאפשרים חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם. יש לחפש במצב 'incognito' בדפדפנים כדי למנוע מהאתרים להעלות את המחירים בהתאם להיסטוריית החיפוש שלכם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">כללים לביטולים והחזרים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בדרך כלל, טיסות שנקנו ישירות מאתרי חברות תעופה מאפשרות ביטול ללא תשלום תוך 24 שעות מרגע הרכישה. אך במקרים בהם הטיסה נקנתה דרך סוכן נסיעות או אתר השוואת מחירים, הכללים עשויים להשתנות. קראו את הכללים של האתר או החברה שאצלה רכשתם את הטיסה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">זכויותיך במקרה של ביטול טיסה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם החברה שאצלה רכשתם את הטיסה ביטלה את הטיסה, יש לכם זכות להחזר כספי מלא. בנוסף, במקרים מסוימים, כמו ביטול טיסה בגלל מזג אוויר רע, יתכן שתהיו זכאים לתגמולים נוספים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ביטול טיסה מצד הנוסע</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם רוצים לבטל טיסה, יש לכם לעיין בתקנון של החברה בה רכשתם את הטיסה. רוב החברות מחייבות עמלת ביטול, אך ייתכן שלחברות מסוימות יהיו מדיניות ביטול אחרת. חשוב לקרוא את התקנון לפני רכישת הטיסה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ביטולים והחזרים במקרה של טיסות מחירוניות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">במקרה של טיסות מחירוניות, החוקים עשויים להיות שונים. לעיתים, החברות מציעות מדיניות ביטול גמישה יותר, כמו ביטול ללא תשלום תוך 24 שעות או מדיניות ביטול גמישה בתשלום נוסף. קראו את התקנון של החברה בה רכשתם את הטיסה לפרטים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הגנה על עצמך בעת רכישת טיסות זולות לאמריקה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הכי חשוב לבחון את התקנונים של החברות שאצלן אתם רוכשים את הטיסות. זה יכול להציל לכם הרבה כאבי ראש וכסף. כמו כן, חשוב לשקול לרכוש ביטוח נסיעות שיכול להכיל סיכום לביטולים והחזרים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסות זולות לאמריקה היא משימה שאפשר להתמודד עמה בקלות אם אתם מכירים את הכלים הנכונים ואת הזכויות שלכם. לא משנה איפה אתם רוכשים את הטיסה שלכם, תקראו את התקנון ותוודאו שאתם מבינים את הכללים של החברה. וכמובן, אם אתם יכולים, קנו ביטוח נסיעות שיכול להכיל סיכום לביטולים והחזרים.</p>

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
