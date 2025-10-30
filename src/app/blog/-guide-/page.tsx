import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'איך לארוז נכון לנסיעה: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'למד טיפים וטריקים לאריזה נכונה לנסיעה. הכנה של מזוודה מראש, בחירה נכונה של הבגדים וארגונם באופן שיחסוך מקום הם רק חלק מה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, אריזת מזוודה, הכנה לנסיעה, אריזה נכונה',
  openGraph: {
    title: 'איך לארוז נכון לנסיעה: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'למד טיפים וטריקים לאריזה נכונה לנסיעה. הכנה של מזוודה מראש, בחירה נכונה של הבגדים וארגונם באופן שיחסוך מקום הם רק חלק מה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-10-30',
    authors: ['צוות טיסות זולות'],
    tags: ["אריזת מזוודה","הכנה לנסיעה","טיסות זולות","אריזה נכונה"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
        width: 800,
        height: 600,
        alt: 'איך לארוז נכון לנסיעה: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'איך לארוז נכון לנסיעה: מדריך מקצועי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'למד טיפים וטריקים לאריזה נכונה לנסיעה. הכנה של מזוודה מראש, בחירה נכונה של הבגדים וארגונם באופן שיחסוך מקום הם רק חלק מה... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1469474968028-56623f02e42e'],
  },
  alternates: {
    canonical: '/blog/-guide-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'איך לארוז נכון לנסיעה: מדריך מקצועי',
    excerpt: 'למד טיפים וטריקים לאריזה נכונה לנסיעה. הכנה של מזוודה מראש, בחירה נכונה של הבגדים וארגונם באופן שיחסוך מקום הם רק חלק מהדברים שיש לקחת בחשבון.',
    publishedAt: '2025-10-30',
    readTime: 12,
    category: 'יעדים מומלצים',
    tags: ["אריזת מזוודה","הכנה לנסיעה","טיסות זולות","אריזה נכונה"],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">האריזה לנסיעה יכולה להיות משימה מאתגרת ולפעמים מתישה. מה לקחת, איך לארוז, ואיך לוודא שלא שכחנו שום דבר חיוני? במדריך זה, אנו מציגים כמה טיפים מקצועיים שיסייעו לכם להכין את המזוודה שלכם בצורה הטובה ביותר.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הכנה מראש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הכנה מראש היא צעד חשוב באריזת מזוודה. ייעוץ עם רשימת אריזה, כמו זו שמציעה האתר PackingListOnline, יכול לעזור לוודא שלא נשכח שום דבר חיוני. בנוסף, יש למזוג את הבגדים שלכם לפחות שבוע לפני הנסיעה, כך שתהיה לכם הזמן למצוא פתרונות לכל חסר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">בחירת הבגדים הנכונים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בחירת הבגדים הנכונים חשובה להצלחת האריזה. יש לבחור בגדים שניתן לשלב איתם מספר שילובים, כגון מכנסיים ג'ינס שניתן ללבוש עם מספר חולצות. כמו כן, בחירת בגדים מחומרים שאינם מתקמטים, כמו מרינו או סינתטי, יכולה לעזור לשמור על מראה מטופח.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ארגון נכון</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">שיטת אריזת 'הרולינג' היא שיטה מומלצת לארגון המזוודה. היא מאפשרת לשמור על הבגדים חלקים ולמקסם את שימוש המקום. בנוסף, שמירה על סדר עם תיקי תת-אריזה כמו אלו של Eagle Creek Pack-It Specter Compression Cubes, יכולה לסייע בשמירה על סדר וארגון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">שמירה על משקל המזוודה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אחד הדברים החשובים ביותר הוא להיות מודעים למשקל המזוודה. רוב החברות האוויריות מגבות דמי יתר על מזוודות שמשקלן גבוה מידי. שימוש במשקל מזוודה דיגיטלי, כמו זה של Etekcity, יאפשר לכם לדעת את משקל המזוודה שלכם לפני שאתם נוסעים לשדה התעופה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אריזת מוצקים ונוזלים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">יש לארוז מוצקים ונוזלים באריזות שקופות ונפתחות. האתר Muji מציע מגוון של בקבוקים ניתנים למילוי ואריזות שקופות שהם אידיאליים למטרה זו. זכרו לשמור על המוצקים והנוזלים בראש המזוודה, כדי שיהיה קל להוציאם במהלך הביקורת האבטחה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אריזת חפצים חשובים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חפצים חשובים ויקרים עליהם להישאר איתכם בתיק היד. מסמכים, כסף, מחשבים, מצלמות, טלפונים ותרופות אמורים להישאר איתכם בכל הזמן. לעולם אל תשאירו חפצים אלו במזוודה שאתם מכניסים לתא המטען.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אריזת מזוודה יכולה להיות תהליך מאתגר, אך עם הכנה מראש, בחירה חכמה של בגדים וארגון נכון, אפשר להפוך אותו להרבה יותר קל. זכרו להשתמש בכלים שיסייעו לכם ולתכנן מראש, ותהליך האריזה יהפוך להרבה פחות מתיש. בהצלחה בנסיעה!</p>

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
