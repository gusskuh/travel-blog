import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מציאת טיסות זולות לצרפת: מדריך מקיף - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מציאת טיסות זולות לצרפת היא משימה מאתגרת, אך לא בלתי אפשרית. במאמר זה, נחקור כמה דרכים שונות למצוא טיסות במחירים משתלמים... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, צרפת, חבילות נסיעה, מחירים זולים',
  openGraph: {
    title: 'מציאת טיסות זולות לצרפת: מדריך מקיף - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מציאת טיסות זולות לצרפת היא משימה מאתגרת, אך לא בלתי אפשרית. במאמר זה, נחקור כמה דרכים שונות למצוא טיסות במחירים משתלמים... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-06-18',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","צרפת","חבילות נסיעה","מחירים זולים"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'מציאת טיסות זולות לצרפת: מדריך מקיף - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מציאת טיסות זולות לצרפת: מדריך מקיף - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מציאת טיסות זולות לצרפת היא משימה מאתגרת, אך לא בלתי אפשרית. במאמר זה, נחקור כמה דרכים שונות למצוא טיסות במחירים משתלמים... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-guide-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מציאת טיסות זולות לצרפת: מדריך מקיף',
    excerpt: 'מציאת טיסות זולות לצרפת היא משימה מאתגרת, אך לא בלתי אפשרית. במאמר זה, נחקור כמה דרכים שונות למצוא טיסות במחירים משתלמים לעיר האורות.',
    publishedAt: '2026-06-18',
    readTime: 12,
    category: 'חבילות נסיעה',
    tags: ["טיסות","צרפת","חבילות נסיעה","מחירים זולים"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">כל מי שמתכנן נסיעה לצרפת יודע שאחת מהמשימות האתגריות ביותר היא מציאת טיסה במחיר סביר. מחיר הטיסה יכול להיות משמעותי בתקציב הנסיעה ולכן משתלם להשקיע זמן בחיפוש אחר הטיסה הזולה ביותר. במאמר זה, אנחנו מציגים כמה טיפים וטכניקות שיעזרו לכם למצוא טיסות זולות לצרפת.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חיפוש לפי תאריכים גמישים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אחת הדרכים הטובות ביותר לחסוך במחירי הטיסות היא להיות גמישים בתאריכים. לעיתים, שינוי קטן בתאריך היציאה או החזרה יכול להוביל להפחתת מחיר משמעותית. מרבית אתרי ההשוואות מאפשרים לכם לראות את המחירים לפי חודש שלם, מה שמאפשר לכם לבחור את התאריכים הזולים ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנת טיסה בימים מסוימים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">כלל אצבע אומר שהזמנת טיסות באמצע השבוע, בפרט ביום שלישי, היא הזולה ביותר. זה נובע מהעובדה שרוב האנשים מעדיפים לטוס בסופי שבוע, ולכן החברות מעלות את המחירים בימים אלה. בנוסף, יש תקופות בשנה שבהן מחיר הטיסות עולה, כמו חגים וחופשות בית ספר, ולכן עדיף להימנע מהזמנת טיסות בתקופות אלה אם אפשר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנה מוקדמת</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">כלל אצבע אחר אומר שהזמנת טיסה בערך 6-8 שבועות לפני היציאה היא הזולה ביותר. המחירים יכולים להיות משתנים, אך ברוב המקרים, מחירי הטיסות עולים ככל שהתאריך המבוקש מתקרב. לכן, כדאי להתכנס מוקדם ולבדוק את המחירים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">עקוב אחרי המחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">רוב אתרי ההשוואות מאפשרים לכם להגדיר התראות מחיר, מה שאומר שאתם תקבלו התראה כאשר המחיר של הטיסה שאתם מחפשים יורד. זו דרך מצוינת לשמור על המחירים ולוודא שאתם לא מחמיאים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בתקווה שהטיפים והטכניקות שהוצגו במאמר זה יעזרו לכם למצוא טיסה זולה לצרפת. זכרו, המרכיב החשוב ביותר במציאת טיסה זולה הוא גמישות. כל כך הרבה גורמים משפיעים על מחיר הטיסה שאתם יכולים למצוא טיסה זולה אם אתם מוכנים להיות גמישים בתאריכים, בשעות היציאה ואפילו בנמל התעופה שממנו אתם טסים.</p>

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
