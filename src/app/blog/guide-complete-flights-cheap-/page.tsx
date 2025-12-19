import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'המדריך המלא לטיסות זולות ליוון - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מחפשים דרך לחסוך בטיסה ליוון? קראו את המדריך שלנו ותגלו את הטיפים למציאת טיסות זולות ואיך למקסם את התמורה לכסף שלכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, יוון, חופשה, חיפוש טיסות, חיסכון',
  openGraph: {
    title: 'המדריך המלא לטיסות זולות ליוון - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים דרך לחסוך בטיסה ליוון? קראו את המדריך שלנו ותגלו את הטיפים למציאת טיסות זולות ואיך למקסם את התמורה לכסף שלכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-11-13',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","יוון","חופשה","חיפוש טיסות","חיסכון"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'המדריך המלא לטיסות זולות ליוון - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'המדריך המלא לטיסות זולות ליוון - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים דרך לחסוך בטיסה ליוון? קראו את המדריך שלנו ותגלו את הטיפים למציאת טיסות זולות ואיך למקסם את התמורה לכסף שלכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/guide-complete-flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'המדריך המלא לטיסות זולות ליוון',
    excerpt: 'מחפשים דרך לחסוך בטיסה ליוון? קראו את המדריך שלנו ותגלו את הטיפים למציאת טיסות זולות ואיך למקסם את התמורה לכסף שלכם.',
    publishedAt: '2025-11-13',
    readTime: 12,
    category: 'טיסות',
    tags: ["טיסות זולות","יוון","חופשה","חיפוש טיסות","חיסכון"],
    image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">יש משהו מכמיר בעונה הקרה שמזכיר לנו כמה אהבנו להיות בחופשה במקום חמים ונעים כמו יוון. אם אתם מחפשים לחסוך בטיסה ליוון, יש לנו כמה טיפים חשובים שיכולים לעזור לכם. בפוסט זה נדון באתרים השונים להשוואת מחירים, בזמנים המומלצים להזמנת טיסה ובדרכים למקסם את התמורה לכסף שלכם.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנת הטיסה בזמן הנכון</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">למרות שקיימות תיאוריות שונות, המחקרים מראים שהזמן הטוב ביותר להזמין טיסה הוא בין 60 ל-90 יום לפני המועד המתוכנן. אם אתם מתכננים לטוס בעונה הגבוהה, כמו בחופשת הקיץ, מומלץ להזמין את הטיסה בערך 120 יום מראש. בימי שני עד חמישי הם הימים שבהם מחירי הטיסות הם הזולים ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אפשרויות לחסכון אף יותר</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מעבר להשוואת מחירים והזמנה בזמן המתאים, ישנם דרכים נוספות לחסוך. אתרים כמו Secret Flying וScott’s Cheap Flights מציעים עדכונים על טיסות שמחירן ירד באופן חריג. חברות תעופה מסוימות מציעות מבצעים והנחות בתקופות מסוימות של השנה, אז שימו לב לעדכונים מהחברות האהובות עליכם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אריזת המזוודה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אחת הדרכים לחסוך בטיסה היא לחסוך במזוודה. רוב החברות דורשות תשלום נוסף עבור מזוודה גדולה, אז אם תצליחו להסתדר עם מזוודה קטנה שאפשר להכניס לתא המטען העליון באופן חופשי, תוכלו לחסוך על הטיסה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מקסימום התמורה לכסף</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לא רק המחיר משנה, אלא גם השירות והנוחות. בחרו בחברת תעופה שמציעה שירות טוב, מזון טעים, מקום רגליים מספק ואפשרויות בילוי מרובות. חברות כמו Aegean Airlines וOlympic Air מציעות שירות מצוין למחירים סבירים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בעזרת הטיפים שנתנו לכם בפוסט זה, אנו מאמינים שתוכלו למצוא טיסה זולה יותר ליוון. זכרו, המפתח הוא להשוות מחירים, להזמין בזמן המתאים, למקסם את האריזה ולבחור בחברה שמציעה לכם את השירות הטוב ביותר. תהלום!</p>

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
