import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות לקפריסין: הדרך לחסוך בנסיעה הבאה שלכם - קפריסין טיסות לקפריסין חופשה בקפריסין מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מצאו את הטיסות הזולות ביותר לקפריסין דרך אתרים מקוונים, כלים וטכניקות חסכניות. המדריך המקיף שלנו יעזור לכם למצוא את ההצע... קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, חיפוש טיסות, חסכון',
  openGraph: {
    title: 'טיסות זולות לקפריסין: הדרך לחסוך בנסיעה הבאה שלכם - קפריסין טיסות לקפריסין חופשה בקפריסין מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מצאו את הטיסות הזולות ביותר לקפריסין דרך אתרים מקוונים, כלים וטכניקות חסכניות. המדריך המקיף שלנו יעזור לכם למצוא את ההצע... קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-04-02',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","קפריסין","חיפוש טיסות","חסכון"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1617871109543-6ee1791d7f17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'טיסות זולות לקפריסין: הדרך לחסוך בנסיעה הבאה שלכם - קפריסין טיסות לקפריסין חופשה בקפריסין',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות לקפריסין: הדרך לחסוך בנסיעה הבאה שלכם - קפריסין טיסות לקפריסין חופשה בקפריסין מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מצאו את הטיסות הזולות ביותר לקפריסין דרך אתרים מקוונים, כלים וטכניקות חסכניות. המדריך המקיף שלנו יעזור לכם למצוא את ההצע... קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1617871109543-6ee1791d7f17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיסות זולות לקפריסין: הדרך לחסוך בנסיעה הבאה שלכם',
    excerpt: 'מצאו את הטיסות הזולות ביותר לקפריסין דרך אתרים מקוונים, כלים וטכניקות חסכניות. המדריך המקיף שלנו יעזור לכם למצוא את ההצעות הטובות ביותר.',
    publishedAt: '2026-04-02',
    readTime: 12,
    category: 'חדשות תעופה',
    tags: ["טיסות זולות","קפריסין","חיפוש טיסות","חסכון"],
    image: 'https://images.unsplash.com/photo-1617871109543-6ee1791d7f17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">קפריסין היא יעד מבוקש למטיילים מישראל, אך מחירי הטיסות יכולים להיות מנהלים. עם טכניקות חכמות ואתרים מקוונים, ניתן למצוא טיסות במחירים נמוכים לקפריסין. במדריך זה, נדריך אתכם צעד אחר צעד איך למצוא את ההצעות הטובות ביותר.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי הראשון שלכם למציאת טיסות זולות לקפריסין. Google Flights, Skyscanner, ו-Kayak הם אתרים מצוינים שמציעים חיפוש גמיש ואפשרות לראות מחירים לאורך חודש שלם. נסו לשנות את התאריכים שלכם כדי לראות אם ישנם ימים זולים יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנה מוקדמת</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מחקרים מראים שהזמנת טיסות בערך 60 ימים לפני הנסיעה יכולה למזער את המחיר. לכן, אם אתם יודעים מתי אתם רוצים לנסוע לקפריסין, נסו להזמין את הטיסה שלכם בהתאם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חיפוש גמיש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם תאריכי הנסיעה שלכם גמישים, אתם יכולים לחסוך כסף על טיסה לקפריסין. אתרים כמו Skyscanner מציעים אפשרות 'חיפוש גמיש' שמציגה את הימים הזולים ביותר לטוס.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיסות עם עצירה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים, טיסות עם עצירה אחת או יותר יכולות להיות זולות יותר מטיסות ישירות. קחו בחשבון זמן העצירה והפספוס האפשרי של הטיסה הבאה. אתרים כמו Kayak ו-Skyscanner מאפשרים לכם לחפש טיסות עם עצירות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">התראות מחיר</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הגדרת התראות מחיר באתרים כמו Skyscanner או Google Flights יכולה לעזור לכם למצוא טיסות זולות לקפריסין. כאשר המחירים יורדים, תקבלו התראה בדואר האלקטרוני שלכם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיסות בשעות לא נוחות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">טיסות בשעות לא נוחות, כמו בלילה או בשעות הבוקר המוקדמות, יכולות להיות זולות יותר. כמו כן, טיסות באמצע השבוע יכולות להיות זולות יותר מטיסות בסוף השבוע.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בעזרת הטיפים והטכניקות שהוצגו, אתם יכולים למצוא טיסות זולות לקפריסין. המפתח הוא להיות גמישים עם תאריכי הנסיעה שלכם, להשוות מחירים באתרים שונים, ולהזמין מראש כמה שיותר. תכננו את הנסיעה הבאה שלכם היום.</p>

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
