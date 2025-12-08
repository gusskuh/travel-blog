import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מצאו את הטיסות הזולות ביותר ליוון: טיפים וטריקים - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'המדריך המלא למציאת הטיסות הזולות ביותר ליוון. מגלים את האתרים המובילים, האפשרויות הגמישות והתכנונים המוקדמים שישפרו את ה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, יוון, חופשה, חסכון',
  openGraph: {
    title: 'מצאו את הטיסות הזולות ביותר ליוון: טיפים וטריקים - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך המלא למציאת הטיסות הזולות ביותר ליוון. מגלים את האתרים המובילים, האפשרויות הגמישות והתכנונים המוקדמים שישפרו את ה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-12-08',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","יוון","חופשה","חסכון"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
        width: 800,
        height: 600,
        alt: 'מצאו את הטיסות הזולות ביותר ליוון: טיפים וטריקים - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מצאו את הטיסות הזולות ביותר ליוון: טיפים וטריקים - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך המלא למציאת הטיסות הזולות ביותר ליוון. מגלים את האתרים המובילים, האפשרויות הגמישות והתכנונים המוקדמים שישפרו את ה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-tips-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מצאו את הטיסות הזולות ביותר ליוון: טיפים וטריקים',
    excerpt: 'המדריך המלא למציאת הטיסות הזולות ביותר ליוון. מגלים את האתרים המובילים, האפשרויות הגמישות והתכנונים המוקדמים שישפרו את החוויה שלכם ויחסכו לכם כסף.',
    publishedAt: '2025-12-08',
    readTime: 12,
    category: 'טיפים לנוסעים',
    tags: ["טיסות זולות","יוון","חופשה","חסכון"],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">במהלך השנים האחרונות, יוון הפכה לאחת היעדים המרכזיים לחופשה של ישראלים. האם אתם מתכננים לטוס ליוון ורוצים לחסוך כמה שיותר? אנחנו מביאים לכם מדריך מקיף שיעזור לכם למצוא טיסות זולות ליוון. הטיפים והטריקים שלנו יחסכו לכם כסף, זמן ומאמץ.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights, Skyscanner ו-Kayak הם שלושה מהאתרים המובילים בתחום. Google Flights מאפשר לכם לראות מחירים על פני חודש שלם, מה שמאפשר למצוא את התאריכים הזולים ביותר. Skyscanner מציגה יעדים זולים לפי תקציב, ו-Kayak מציגה 'Hacker Fares' - טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנה מוקדמת</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הזמנת הטיסה בהקדם האפשרי היא אחת מהדרכים הכי יעילות לחסוך במחיר הטיסה. בהנחה שאתם מתכננים את החופשה שלכם מראש, מומלץ להזמין את הטיסה לפחות שלושה עד שישה חודשים לפני המועד המבוקש. כך תוכלו למצוא מגוון רחב של אפשרויות טיסה ולבחור באופציה הכי זולה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מצב incognito</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרים רבים משנים את המחירים שהם מציגים למשתמשים בהתאם להיסטוריית החיפוש שלהם. כדי למנוע מהאתרים להעלות את המחירים, אפשר לחפש את הטיסות במצב incognito של הדפדפן. במצב זה, האתרים לא יוכלו לעקוב אחר היסטוריית החיפוש שלכם ולעלות את המחירים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיסות עם עצירה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים, טיסות עם עצירה באמצע הדרך יכולות להיות זולות יותר מטיסות ישירות. אתרים כמו Skyscanner ו-Kayak מאפשרים לכם לחפש גם את האפשרויות האלו. כמובן, זה יכול להוסיף מעט למשך הטיסה, אך אם אתם גמישים עם הזמנים שלכם, זו דרך מצויינת לחסוך.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מבצעים והכרזות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חברות התעופה לעיתים קורות מפרסמות מבצעים והכרזות על טיסות זולות. מומלץ להירשם לרשימת התפוצה של החברות השונות ולעקוב אחריהן ברשתות החברתיות. בנוסף, אפשר להשתמש באתרים כמו SecretFlying ו-Airfarewatchdog שמפרסמים טיסות במחירים מוזלים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם מתכננים חופשה ביוון, אל תשלמו יותר מדי על הטיסה. השתמשו באתרי השוואת מחירים, הזמינו מראש, השתמשו במצב incognito, חפשו טיסות עם עצירה ועקבו אחר מבצעים והכרזות. אם תעקבו אחר הטיפים והטריקים שלנו, תוכלו למצוא טיסות זולות ליוון ולחסוך כסף רב.</p>

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
