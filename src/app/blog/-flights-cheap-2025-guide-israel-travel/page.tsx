import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות מישראל לחו"ל - מדריך נסיעות 2025',
  description: 'מדריך מקיף לטיסות זולות מישראל לכל היעדים הפופולריים. כולל טיפים מקצועיים, כלים מומלצים ואסטרטגיות מתקדמות לחיסכון על טיסות.',
  keywords: 'טיסות זולות מישראל, נסיעות לחו"ל, טיפים לטיסות, חיסכון על טיסות, אתרי השוואת מחירים, טיסות זולות, נסיעות זולות',
  openGraph: {
    title: 'טיסות זולות מישראל לחו"ל - מדריך נסיעות 2025',
    description: 'מדריך מקיף לטיסות זולות מישראל לכל היעדים הפופולריים. כולל טיפים מקצועיים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-10-28',
    authors: ['צוות טיסות זולות'],
    tags: ['טיסות זולות', 'מישראל', 'נסיעות', 'חו"ל', 'מדריך', '2025'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
        width: 800,
        height: 600,
        alt: 'טיסות זולות מישראל לחו"ל',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות מישראל לחו"ל - מדריך נסיעות 2025',
    description: 'מדריך מקיף לטיסות זולות מישראל לכל היעדים הפופולריים.',
    images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-2025-guide-israel-travel',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'גילוי הטיסות הכי זולות לשנת 2025: מדריך מקצועי לישראלים המחפשים לחסוך בנסיעות',
    excerpt: 'המדריך המקיף הזה מספק טיפים מעשיים ומקצועיים לישראלים המחפשים דרכים לחסוך ברכישת טיסות. המדריך כולל את המקורות המובילים למציאת טיסות זולות, טכניקות חיפוש מתקדמות והמלצות לנסיעה חסכונית.',
    publishedAt: '2025-10-26',
    readTime: 12,
    category: 'נסיעות',
    tags: ["נסיעות","חיסכון","טיסות","מדריך"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">מציאת טיסה זולה היא משימה שאותה כולנו מנסים להשיג, אך לא תמיד מוצלחת. במדריך זה נדון בכלים השונים שיכולים לעזור לכם למצוא את הטיסות הכי זולות לשנת 2025, תרגלים שישפרו את יכולות החיפוש שלכם וטכניקות נוספות לחסכון בנסיעה.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרים כמו Skyscanner, Kayak ו-Expedia מאפשרים לכם להשוות בין מחירי טיסות של מגוון חברות תעופה. לאחר הזנת היעד והתאריכים, אתרים אלו יציגו לכם את האפשרויות הזולות ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מנוי לרשימת תפוצה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">רבות מחברות התעופה מציעות מנוי לרשימת תפוצה שלהן, שבה הן שולחות מבצעים והכרזות על טיסות זולות. כדאי לבחון את האפשרות להירשם לרשימת התפוצה של כמה חברות תעופה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">זמנים נמוכים של שנה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">במקרים רבים, ניתן למצוא טיסות זולות יותר בתקופות מסוימות של השנה. לדוגמא, טיסות בחודשים שלא בעונה הגבוהה או בימי השבוע שהן לא בימי סוף השבוע.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנה מוקדמת</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ההזמנה של טיסות בהרבה מקרים מצריכה תכנון מראש. ככל שתזמינו את הטיסה שלכם מוקדם יותר, כך המחירים יהיו זולים יותר. המלצה כללית היא להזמין בערך ששה חודשים מראש.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אפליקציות חיפוש טיסות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אפליקציות כמו Hopper או Skyscanner יכולות להיות כלי עזר חשוב במציאת טיסות זולות. הן מספקות הודעות בזמן אמת על ירידות מחירים ומאפשרות חיפוש גמיש של טיסות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיסות עם העברה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים, ניתן לחסוך במחיר הטיסה באמצעות בחירה בטיסה עם העברה או שניים. תוך כדי שמירה על הזמן הראוי להחלפה בין הטיסות, זו יכולה להיות אפשרות חסכונית.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">כפי שהוכחנו, יש מגוון דרכים למצוא טיסות זולות. המפתח הוא מחקר, תכנון מראש והשתמש בכלים המתאימים לחיפוש שלכם. אז לכו והתחילו לחפש את הטיסה הזולה הבאה שלכם!</p>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✈</span>
              </div>
              <span className="text-xl font-bold hebrew-text">טיסות זולות</span>
            </div>
            <p className="text-gray-400 hebrew-text">
              המדריך המלא לטיסות זולות ונסיעות חכמות
            </p>
          </div>
        </div>
      </footer>
      <Footer />
    </div>
  );
}
