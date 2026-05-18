import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מסע ארוך באוויר: כיצד להתכונן בהצלחה - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מסעות אוויר ארוכים יכולים להיות מאתגרים. במאמר זה, אנו נעזור לכם להתכונן היטב לנסיעה ארוכה, כולל המלצות על כיצד למצוא טי... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, נסיעות, טיסות, הכנה לנסיעה, טיפים לנסיעה',
  openGraph: {
    title: 'מסע ארוך באוויר: כיצד להתכונן בהצלחה - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מסעות אוויר ארוכים יכולים להיות מאתגרים. במאמר זה, אנו נעזור לכם להתכונן היטב לנסיעה ארוכה, כולל המלצות על כיצד למצוא טי... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-05-18',
    authors: ['צוות טיסות זולות'],
    tags: ["נסיעות","טיסות","הכנה לנסיעה","טיפים לנסיעה"],
    images: [
      {
        url: 'https://plus.unsplash.com/premium_photo-1679619558250-41fa96ef187c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'מסע ארוך באוויר: כיצד להתכונן בהצלחה - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מסע ארוך באוויר: כיצד להתכונן בהצלחה - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מסעות אוויר ארוכים יכולים להיות מאתגרים. במאמר זה, אנו נעזור לכם להתכונן היטב לנסיעה ארוכה, כולל המלצות על כיצד למצוא טי... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://plus.unsplash.com/premium_photo-1679619558250-41fa96ef187c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מסע ארוך באוויר: כיצד להתכונן בהצלחה',
    excerpt: 'מסעות אוויר ארוכים יכולים להיות מאתגרים. במאמר זה, אנו נעזור לכם להתכונן היטב לנסיעה ארוכה, כולל המלצות על כיצד למצוא טיסות זולות, להביא את הציוד הנכון, ולשמור על הבריאות שלכם באוויר.',
    publishedAt: '2026-05-18',
    readTime: 12,
    category: 'ביטול והחזרים',
    tags: ["נסיעות","טיסות","הכנה לנסיעה","טיפים לנסיעה"],
    image: 'https://plus.unsplash.com/premium_photo-1679619558250-41fa96ef187c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">האם אתם מתכננים טיסה ארוכה? אתם יכולים לחכות לשעות של ישיבה ממושכות, צפיפות ואי נוחות. אבל אל תדאגו - עם ההכנה הנכונה, ניתן להפוך את הנסיעה להרבה יותר נעימה ויעילה. במאמר זה, נספק לכם מדריך מקיף כיצד להתכונן לנסיעה ארוכה באוויר.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מציאת טיסות זולות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הכלי הראשון שיש לכם להשתמש בו הוא אתרי השוואת מחירים כמו Google Flights, Skyscanner או Kayak. אלה מציעים חיפוש גמיש ומאפשרים לכם לראות מחירים על פני חודש שלם, כך שתוכלו למצוא את התאריכים הזולים ביותר. השתמשו באפשרות 'Everywhere' שב-Skyscanner כדי לראות יעדים זולים לפי התקציב שלכם, ובכלי 'Hacker Fares' של Kayak כדי למצוא טיסות חסכוניות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הכנת ציוד</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אחרי שמצאתם טיסה, הצעד הבא הוא להתכונן. כדאי להביא עימכם אוזניות ביטול רעשים, מסכת עיניים, וכרית צוואר כדי לשמור על הנוחות שלכם במהלך הטיסה. בנוסף, אל תשכחו את המתנעים שלכם, מטען, וספר או מכשיר קריאה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">שמירה על בריאותך</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">נסיעות אוויר ארוכות יכולות להשפיע על בריאותך. כדי למנוע תחושת חולשה ועייפות, זכרו להשאיר את עצמכם מנוזלים, לקום מדי פעם למען תנודת הדם, ולאכול בריא.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הכנה נפשית</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לטיסה ארוכה יש השפעה גם על הנפש. הכינו פלייליסטים שמרגיעים, מספרים מאודיובוק, או מדיטציות מולטימדיה כדי לעזור לכם להישאר מרוכזים ורגועים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ביטולים והחזרים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לפני שאתם מזמינים טיסה, חשוב לבדוק את מדיניות הביטולים וההחזרים של החברה. כמה חברות מציעות החזר כספי מלא אם אתם בוטלים את הטיסה במספר ימים מסוים לאחר הרכישה. יש גם חברות שמציעות הזזה חינם של הטיסה לתאריך אחר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ההכנה היא המפתח לנסיעה אווירית ארוכה נעימה. אם אתם מתכננים היטב, מביאים את הציוד הנכון, ושמים לב לבריאותכם, תוכלו להפוך את הנסיעה להרבה יותר נעימה. אז תכננו, התכוננו, ותהנו מהטיסה!</p>

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
