import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מסמכים נדרשים לנסיעה לחו"ל: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'נסיעה לחו"ל מחייבת הכנה מראש וכוללת מספר מסמכים חיוניים. במאמר זה, אנו מסכמים את המסמכים המרכזיים שצריך להכין לפני נסיעה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, נסיעה לחו"ל, מסמכים נדרשים, הכנה לנסיעה, דרכונים, ויזות',
  openGraph: {
    title: 'מסמכים נדרשים לנסיעה לחו"ל: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'נסיעה לחו"ל מחייבת הכנה מראש וכוללת מספר מסמכים חיוניים. במאמר זה, אנו מסכמים את המסמכים המרכזיים שצריך להכין לפני נסיעה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-08-20',
    authors: ['צוות טיסות זולות'],
    tags: ["נסיעה לחו\"ל","מסמכים נדרשים","הכנה לנסיעה","דרכונים","ויזות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'מסמכים נדרשים לנסיעה לחו"ל: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מסמכים נדרשים לנסיעה לחו"ל: המדריך המלא - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'נסיעה לחו"ל מחייבת הכנה מראש וכוללת מספר מסמכים חיוניים. במאמר זה, אנו מסכמים את המסמכים המרכזיים שצריך להכין לפני נסיעה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/-guide-complete',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מסמכים נדרשים לנסיעה לחו"ל: המדריך המלא',
    excerpt: 'נסיעה לחו"ל מחייבת הכנה מראש וכוללת מספר מסמכים חיוניים. במאמר זה, אנו מסכמים את המסמכים המרכזיים שצריך להכין לפני נסיעה לחו"ל.',
    publishedAt: '2026-08-20',
    readTime: 12,
    category: 'חבילות נסיעה',
    tags: ["נסיעה לחו\"ל","מסמכים נדרשים","הכנה לנסיעה","דרכונים","ויזות"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">הכנה לנסיעה לחו"ל היא תהליך שמחייב תכנון והכנה מראש. חלק מההכנות כוללות גם הבנה של המסמכים החיוניים שנדרשים לסיום התהליך בהצלחה. במאמר זה, אנחנו נסכם את המסמכים המרכזיים שאתם צריכים להכין לפני הנסיעה.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">דרכון</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הדרכון הוא המסמך החשוב ביותר בכל נסיעה לחו"ל. הקפידו לבדוק שהדרכון שלכם בתוקף לפחות שישה חודשים מתאריך החזרה המתוכנן. אם הדרכון שלכם לא בתוקף, אתם יכולים להחליף אותו במשרד הפנים או בקונסוליה או בשגרירות של מדינתכם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ויזה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לא כל המדינות מחייבות ויזה למטיילים מישראל. בדקו מראש אם המדינה שאליה אתם מתכננים לנסוע מחייבת ויזה. אם כן, אתם תצטרכו להגיש בקשה דרך השגרירות או הקונסוליה של המדינה, או דרך אתר אינטרנט מיוחד אם יש אחד.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ביטוח נסיעה לחו"ל</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ביטוח נסיעה לחו"ל הוא לא מסמך חיוני, אך מומלץ מאוד. הוא מכסה רוב ההוצאות הרפואיות והחירום שיכולות להתרחש במהלך הנסיעה. חברות כמו פסגות, הראל ומגדל מציעות ביטוחים שונים שמתאימים לכל סוגי הנסיעות והיעדים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">רישיון נהיגה בינלאומי</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם מתכננים לנהוג רכב במהלך הנסיעה שלכם, עשוי להיות לכם צורך ברישיון נהיגה בינלאומי. בדקו את החוקים במדינה אליה אתם נוסעים. אתם יכולים לבקש רישיון נהיגה בינלאומי ברשות התנועה בישראל.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תעודת חיסון</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חלק מהמדינות מחייבות תעודת חיסון נגד מחלות מסוימות. זה נכון במיוחד למדינות באפריקה ודרום אמריקה. בדקו מראש את הדרישות ואם נדרש, התחסנו במרכז חיסונים מיוחד כמו זה של משרד הבריאות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תעודת זהות מקומית</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">במקרים מסוימים, תעודת הזהות הישראלית עשויה להספיק. לדוגמה, במדינות האיחוד האירופי, תעודת הזהות הישראלית מספקת את ההוכחה המשפטית שלכם כאזרחים של מדינה שהיא חלק מההסכם של שנגן.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">נסיעה לחו"ל מחייבת הכנה מראש וכוללת מספר מסמכים חיוניים. אם אתם מתכננים לנסוע לחו"ל בקרוב, תחילו להכין את המסמכים שציינו. בכך, תוכלו להתמקד בליהנות מהנסיעה שלכם במקום לדאוג למסמכים.</p>

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
