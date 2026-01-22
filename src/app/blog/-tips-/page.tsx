import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'איך לארוז נכון לנסיעה? טיפים ועצות שימושיות - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'כמה טיפים ועצות שימושיות לאריזה יעילה ומרשימה לנסיעה. למדו איך לחסוך מקום, למנוע גלימות מיותרות ולהפוך את הנסיעה שלכם לח... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, אריזה, נסיעה, חופשה',
  openGraph: {
    title: 'איך לארוז נכון לנסיעה? טיפים ועצות שימושיות - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'כמה טיפים ועצות שימושיות לאריזה יעילה ומרשימה לנסיעה. למדו איך לחסוך מקום, למנוע גלימות מיותרות ולהפוך את הנסיעה שלכם לח... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-01-22',
    authors: ['צוות טיסות זולות'],
    tags: ["אריזה","נסיעה","טיסות זולות","חופשה"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'איך לארוז נכון לנסיעה? טיפים ועצות שימושיות - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'איך לארוז נכון לנסיעה? טיפים ועצות שימושיות - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'כמה טיפים ועצות שימושיות לאריזה יעילה ומרשימה לנסיעה. למדו איך לחסוך מקום, למנוע גלימות מיותרות ולהפוך את הנסיעה שלכם לח... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/-tips-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'איך לארוז נכון לנסיעה? טיפים ועצות שימושיות',
    excerpt: 'כמה טיפים ועצות שימושיות לאריזה יעילה ומרשימה לנסיעה. למדו איך לחסוך מקום, למנוע גלימות מיותרות ולהפוך את הנסיעה שלכם לחוויה נעימה ומסודרת יותר.',
    publishedAt: '2026-01-22',
    readTime: 12,
    category: 'טיפים לחיסכון',
    tags: ["אריזה","נסיעה","טיסות זולות","חופשה"],
    image: 'https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">אחד החלקים המשמעותיים של ההכנה לנסיעה הוא האריזה. העובדה שאנחנו משאירים את ביתנו וממרינים ליעד חדש מצריכה מאיתנו לחשוב מראש ולתכנן את הבגדים והציוד שנצטרך. אריזה מדוקדקת וממוקדת יכולה לחסוך לנו זמן וכאבי ראש בנסיעה. בפוסט הזה, אני אשתף אתכם כמה טיפים שימושיים לאריזה נכונה.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תכנון מראש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">קבלו החלטות מדוקדקות בנוגע לאיזה בגדים לקחת. במקום לזרוק לתוך המזוודה כמה שיותר מהארון, תכננו את הלוקים שלכם לפי הימים והפעילויות שלכם. אפליקציות כמו PackPoint יכולות לעזור לכם לתכנן את האריזה שלכם לפי מיקום, משך הנסיעה ואת סוג הפעילות שלכם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אריזה יעילה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">כדי לנצל את המקום במזוודה בצורה הכי טובה, מומלץ להשתמש בטכניקת הגלילה. זו טכניקה שמאפשרת לכם לכווץ את הבגדים שלכם בצורה מרשימה ולחסוך מקום. בנוסף, בגדים שגלולים נטים להיות פחות מקומטים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ארגוניות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מומלץ להשתמש במחיצות אריזה (Packing Cubes) שמאפשרות לנו לארגן את הבגדים בצורה יעילה ולשמור על המזוודה מסודרת. מחיצות אלו מאפשרות לנו למצוא בקלות מה שאנחנו מחפשים בלי להתחיל לחפשר במזוודה. ניתן למצוא מחיצות אריזה באתרים כמו Amazon או AliExpress.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מוצרי טיפוח</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">כדי לחסוך מקום, תחשבו להשתמש במוצרים מרוכזים או בגרסאות מיניאטוריות של מוצרי הטיפוח שלכם. תאמתו את כמות הנוזלים שאתם מכניסים לתוך המזוודה לפי הוראות החברה האווירית. בדרך כלל אפשר לקחת במזוודה נוזלים בנפח של עד 100 מל' בקנקנית.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חשיבה ירוקה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם מעוניינים לפעול באופן ירוק ולחסוך בתוצאות הפסולת שלכם, שקיות ממוחזרות או תיקיות בד יכולות להחליף את השקיות הפלסטיק שאנחנו משתמשים בהם לאריזת הבגדים שלנו.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אריזה מדוקדקת ומסודרת מבטיחה התחלה טובה לכל נסיעה. באמצעות הכלים והטיפים שסיפקנו, אתם יכולים להפוך את התהליך של האריזה ממטלה מייגעת לפעילות יעילה וממוקדת. אז תתחילו לארוז ותהנו מהנסיעה!</p>

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
