import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data for now - we'll replace this with contentlayer later
const mockPosts = [
  {
    id: '1767262810807',
    title: 'מציאת טיסות זולות לצרפת: טיפים ואסטרטגיות',
    excerpt: 'המדריך המקיף שלנו יעזור לכם למצוא את הטיסות הזולות ביותר לצרפת, עם המון טיפים, כלים ואסטרטגיות שיפשטו את החיפוש שלכם ויחסכו לכם כסף.',
    publishedAt: '2026-01-01',
    readTime: 12,
    category: 'ביטוח נסיעות',
    tags: ["טיסות","צרפת","חיפוש טיסות","כלים לחיפוש טיסות"],
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52',
    url: '/blog/-flights-cheap-tips-'
  },
  {
    id: '1767003636635',
    title: 'טיסות זולות לראש השנה: כל מה שאתם צריכים לדעת',
    excerpt: 'מציאת טיסות זולות לראש השנה יכולה להפוך למשימה מאתגרת. במאמר זה, אנו מציגים מסלול מפורט איך למצוא את הדילים הכי שווים ואיך להתמודד עם ביטולים והחזרים.',
    publishedAt: '2025-12-29',
    readTime: 12,
    category: 'תיירות',
    tags: ["טיסות זולות","ראש השנה","ביטולים","החזרים","חגים"],
    image: 'https://images.unsplash.com/photo-1596120236172-231999844ade',
    url: '/blog/flights-cheap-'
  },
  {
    id: '1766657954918',
    title: 'מצאו טיסות זולות לאסיה: המדריך המלא',
    excerpt: 'אינטרנט מצפה באתרים שמציעים טיסות זולות, אך איך אפשר לדעת איזה מהם הכי משתלם? כאן תמצאו כל מה שאתם צריכים לדעת כדי למצוא טיסות זולות לאסיה.',
    publishedAt: '2025-12-25',
    readTime: 12,
    category: 'חדשות תעופה',
    tags: ["טיסות","אסיה","חיפוש טיסות","טיסה"],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    url: '/blog/-flights-cheap-asia-guide-complete'
  },
  {
    id: '1766398804844',
    title: 'מציאת טיסות זולות להודו: מדריך מקצועי',
    excerpt: 'מחפשים טיסה זולה להודו? בפוסט זה נעבור על הכלים, האתרים המובילים והטיפים המקצועיים כדי למצוא את הטיסה הזולה ביותר ליעד המרהיב הזה.',
    publishedAt: '2025-12-22',
    readTime: 12,
    category: 'מדריכים מקצועיים',
    tags: ["טיסות זולות","הודו","חיפוש טיסות","אתרים להשוואת מחירים"],
    image: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/blog/-flights-cheap-guide-'
  },
  {
    id: '1766135963406',
    title: 'מציאת טיסות זולות לאנגליה: מדריך מקיף',
    excerpt: 'מחפשים טיסות זולות לאנגליה? בפוסט זה נשתף עם כם טיפים ואסטרטגיות למציאת הדילים הכי שווים ברשת, כולל כלים, אתרים ואפשרויות ביטול והחזרים.',
    publishedAt: '2025-12-19',
    readTime: 12,
    category: 'טיסות',
    tags: ["טיסות","אנגליה","טיסות זולות","החזרים"],
    image: 'https://images.unsplash.com/photo-1543832923-44667a44c804?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/blog/-flights-cheap-guide-'
  },
  {
    id: '1766053202479',
    title: 'מציאת טיסות זולות ליוון: מדריך מקצועי',
    excerpt: 'מדריך מקצועי המסביר כיצד למצוא טיסות זולות ליוון, הכולל המלצות על אתרים, כלים ואסטרטגיות.',
    publishedAt: '2025-12-18',
    readTime: 12,
    category: 'טיולים ונופש',
    tags: ["טיסות","יוון","חופשה","טיסות זולות"],
    image: 'https://plus.unsplash.com/premium_photo-1680497811614-4f93025d7e57?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/blog/-flights-cheap-guide-'
  },
  {
    id: '1765794184454',
    title: 'טיסות זולות לאפריקה: כל הטיפים שאתם צריכים לדעת',
    excerpt: 'מדריך מקיף זה יעזור לכם למצוא טיסות זולות לאפריקה. אנחנו מציעים טיפים מעשיים, כלים ומתודות שיסייעו לכם למקסם את החסכון שלכם.',
    publishedAt: '2025-12-15',
    readTime: 12,
    category: 'טיפים לנוסעים',
    tags: ["טיסות","אפריקה","חסכון","נסיעות"],
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5',
    url: '/blog/flights-cheap-tips-'
  },
  {
    id: '1764843748710',
    title: 'כיצד למצוא טיסות זולות לתאילנד',
    excerpt: 'מדריך מקיף למציאת טיסות זולות לתאילנד. המדריך מכיל דרכים, טיפים ואסטרטגיות שיסייעו לכם לחסוך בעלות הטיסה שלכם.',
    publishedAt: '2025-12-04',
    readTime: 12,
    category: 'תיירות',
    tags: ["טיסות זולות","תאילנד","חיפוש טיסות","אתרים להשוואת מחירים"],
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
    url: '/blog/-flights-cheap-'
  },
  {
    id: '1763979596617',
    title: 'מצאו טיסות זולות ליוון: המדריך המקיף שלנו',
    excerpt: 'מחפשים טיסות זולות ליוון? המדריך שלנו מפרט את הכלים, האתרים והטיפים שיסייעו לכם למצוא את הדיל הכי טוב. למדו איך לחסוך בטיסה הבאה שלכם.',
    publishedAt: '2025-11-24',
    readTime: 12,
    category: 'טיולים ונופש',
    tags: ["טיסות זולות","יוון","תיירות","חסכון"],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    url: '/blog/-flights-cheap-guide-'
  },
  {
    id: '1763633931798',
    title: 'איך לארוז נכון לנסיעה: טיפים מקצועיים ורעיונות מעשיים',
    excerpt: 'אנו נחלוק איתכם טיפים, רעיונות ואסטרטגיות משובחות לאריזה נכונה ויעילה לנסיעה. תלמדו כיצד לארוז נכון, לחסוך מקום ולהפוך את תהליך האריזה לפשוט ונוח יותר.',
    publishedAt: '2025-11-20',
    readTime: 12,
    category: 'יעדים מומלצים',
    tags: ["אריזה","נסיעה","טיפים","אביזרים"],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
    url: '/blog/-tips-professional-'
  },
  {
    id: '1763029187509',
    title: 'המדריך המלא לטיסות זולות ליוון',
    excerpt: 'מחפשים דרך לחסוך בטיסה ליוון? קראו את המדריך שלנו ותגלו את הטיפים למציאת טיסות זולות ואיך למקסם את התמורה לכסף שלכם.',
    publishedAt: '2025-11-13',
    readTime: 12,
    category: 'טיסות',
    tags: ["טיסות זולות","יוון","חופשה","חיפוש טיסות","חיסכון"],
    image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/blog/guide-complete-flights-cheap-'
  },
  {
    id: '1762424401132',
    title: 'מציאת טיסות זולות לטורקיה: המדריך המלא',
    excerpt: 'מדריך מקיף המסביר איך למצוא טיסות זולות לטורקיה. מציע קישורים לאתרים, כלים, וטכניקות שיעזרו לכם לחסוך במחיר הטיסה.',
    publishedAt: '2025-11-06',
    readTime: 12,
    category: 'ייעדים מומלצים',
    tags: ["טיסות זולות","חיפוש טיסות","טורקיה"],
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200',
    url: '/blog/-flights-cheap-guide-complete'
  },
  {
    id: '1765189239760',
    title: 'מצאו את הטיסות הזולות ביותר ליוון: טיפים וטריקים',
    excerpt: 'המדריך המלא למציאת הטיסות הזולות ביותר ליוון. מגלים את האתרים המובילים, האפשרויות הגמישות והתכנונים המוקדמים שישפרו את החוויה שלכם ויחסכו לכם כסף.',
    publishedAt: '2025-12-08',
    readTime: 12,
    category: 'טיפים לנוסעים',
    tags: ["טיסות זולות","יוון","חופשה","חסכון"],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
    url: '/blog/-flights-cheap-tips-'
  },
  {
    id: '1762165224859',
    title: 'טיסות זולות לאמריקה: מדריך מקצועי לנוסעים',
    excerpt: 'מחפשים טיסות זולות לאמריקה? במאמר זה, נספק לכם כלים, טיפים ושיטות שיסייעו לכם למצוא את הדילים הטובים ביותר.',
    publishedAt: '2025-11-03',
    readTime: 12,
    category: 'טיפים לנוסעים',
    tags: ["טיסות זולות","אמריקה","חיפוש טיסות","דילים"],
    image: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '/blog/flights-cheap-america-guide-'
  },
  {
    id: '1761819522216',
    title: 'איך לארוז נכון לנסיעה: מדריך מקצועי',
    excerpt: 'למד טיפים וטריקים לאריזה נכונה לנסיעה. הכנה של מזוודה מראש, בחירה נכונה של הבגדים וארגונם באופן שיחסוך מקום הם רק חלק מהדברים שיש לקחת בחשבון.',
    publishedAt: '2025-10-30',
    readTime: 12,
    category: 'יעדים מומלצים',
    tags: ["אריזת מזוודה","הכנה לנסיעה","טיסות זולות","אריזה נכונה"],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    url: '/blog/-guide-'
  },
  {
    id: '1761733445516',
    title: 'כיצד למצוא טיסות זולות לאירופה: טיפים והמלצות',
    excerpt: 'מחפשים דרכים לחסוך בטיסה לאירופה? במאמר זה, נציג טיפים ואתרים שיסייעו לכם למצוא טיסות זולות ליעדים המועדפים עליכם באירופה.',
    publishedAt: '2025-10-29',
    readTime: 12,
    category: 'טיסות',
    tags: ["טיסות","אירופה","חיסכון","טיפים"],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    url: '/blog/-flights-cheap-europe-tips-'
  },
  {
    id: '1761732980920',
    title: 'איך להזמין מלונות זולים בחו"ל?',
    excerpt: 'המדריך המלא להזמנת מלונות זולים בחו"ל. מגוון טיפים ואסטרטגיות חכמות לחיסכון משמעותי במחיר המלון, כולל שימוש באתרים מיוחדים, כלים ואפליקציות.',
    publishedAt: '2025-10-29',
    readTime: 12,
    category: 'טיסות ונסיעות',
    tags: ["מלונות","טיסות","חיסכון","נסיעות"],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    url: '/blog/-'
  },
  {
    id: '1761716300079',
    title: 'טיסות זולות לקפריסין: כיצד למצוא את הדיל הטוב ביותר',
    excerpt: 'כאן תמצאו טיפים מקצועיים ואסטרטגיות מקיפות על כיצד למצוא טיסות זולות לקפריסין, כולל שימוש באתרים של השוואת מחירים, תיזמון הזמנת הטיסה ועוד.',
    publishedAt: '2025-10-29',
    readTime: 12,
    category: 'טיסות',
    tags: ["טיסות","קפריסין","חופשה","חיסכון"],
    image: 'https://images.unsplash.com/photo-1596120236172-231999844ade',
    url: '/blog/flights-cheap-'
  },
  {
    id: '1761657778056',
    title: 'טיסות זולות לחופשת החורף: מדריך מקיף לחיפוש והזמנה',
    excerpt: 'במאמר זה נעבור על מגוון טיפים וכלים המסייעים במציאת טיסות זולות לחופשת החורף, כולל הסברים מפורטים איך להשתמש באתרים שונים ואיך לנהל תהליך ההזמנה.',
    publishedAt: '2025-10-28',
    readTime: 12,
    category: 'טיסות',
    tags: ["טיסות זולות","חופשת חורף","אתרי השוואת מחירים","הזמנת טיסות"],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    url: '/blog/flights-cheap-guide-'
  },
];

export default function BlogPage() {
  const posts = mockPosts;
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="blog" />

      {/* Blog Content */}
      <main className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 hebrew-text">
              מאמרים על טיסות זולות
            </h1>
            <p className="text-lg text-gray-600 hebrew-text">
              טיפים, מדריכים ומידע עדכני על טיסות זולות
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium hebrew-text">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 pb-10">
                  <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString('he-IL')}</span>
                    </div>
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} דקות קריאה</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 hebrew-text line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 hebrew-text line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8 pb-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-xs hebrew-text"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={post.url}
                    className="inline-flex items-center space-x-2 space-x-reverse text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 pb-2"
                  >
                    <span className="hebrew-text">קרא עוד</span>
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
