import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data for now - we'll replace this with contentlayer later
const mockPosts = [
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
    id: '1761672847672',
    title: 'מצאו טיסות זולות לאוסטרליה: המדריך המלא',
    excerpt: 'ניסיון למצוא טיסות זולות לאוסטרליה יכול להיות ממש תחרותי. עם הכלים והטיפים שלנו, תוכלו למצוא את המסלול הזול ביותר למסע הבא שלכם.',
    publishedAt: '2025-10-28',
    readTime: 12,
    category: 'חדשות תעופה',
    tags: ["טיסות","אוסטרליה","חדשות תעופה","טיסות זולות"],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    url: '/blog/-flights-cheap-guide-complete'
  },
  {
    id: '1761658007558',
    title: 'איך למצוא טיסות זולות לקפריסין',
    excerpt: 'קפריסין היא יעד מועדף לישראלים. גלו במאמר זה איך למצוא טיסות זולות לקפריסין באמצעות אתרים מגוונים, כלים חדשניים וטיפים מקצועיים.',
    publishedAt: '2025-10-28',
    readTime: 12,
    category: 'יעדים מומלצים',
    tags: ["טיסות","קפריסין","חגים","חופשה","חיפוש טיסות"],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    url: '/blog/-flights-cheap-'
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
  {
    id: '1761656655302',
    title: 'טיסות זולות לקפריסין: המדריך המלא',
    excerpt: 'מחפשים טיסות זולות לקפריסין? במאמר זה, נדריך אתכם צעד אחר צעד כיצד למצוא את הדילים הכי שווים בשוק.',
    publishedAt: '2025-10-28',
    readTime: 12,
    category: 'טיולים',
    tags: ["טיסות זולות","קפריסין","השוואת מחירים","Google Flights","Skyscanner","Kayak"],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    url: '/blog/flights-cheap-guide-complete'
  },
  {
    id: '1761654985489',
    title: 'כיצד למצוא טיסות זולות לחו"ל תוך חסכון משמעותי?',
    excerpt: 'מדריך מקיף שמסביר איך למצוא טיסות זולות לחו"ל, תוך שמירה על חסכון משמעותי בשנת 2025. יוצאים לטיול? קראו את המדריך שלנו ותעפו לחו"ל במחירים שווים לכל כיס.',
    publishedAt: '2025-10-28',
    readTime: 12,
    category: 'טיולים',
    tags: ["טיסות","חסכון","חו\"ל","מדריכים"],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    url: '/blog/-flights-cheap-'
  },
  {
    id: '1761499137266',
    title: 'כיצד למצוא את הטיסות הזולות ביותר לישראלים: מדריך מקצועי לשנת 2025',
    excerpt: 'מדריך זה יעזור לכם למצוא את הטיסות הכי זולות הזמינות לישראלים. הוא מכיל מגוון טיפים וטכניקות מקצועיות שמטרתן לחסוך לכם כסף בהזמנת טיסות.',
    publishedAt: '2025-10-26',
    readTime: 12,
    category: 'מדריכים מקצועיים',
    tags: ["טיסות","חיסכון","מחירים","חופשה"],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    url: '/blog/-flights-cheap-israel-guide-2025'
  },
  {
    id: '1761499033192',
    title: 'גילוי הטיסות הכי זולות לשנת 2025: מדריך מקצועי לישראלים המחפשים לחסוך בנסיעות',
    excerpt: 'המדריך המקיף הזה מספק טיפים מעשיים ומקצועיים לישראלים המחפשים דרכים לחסוך ברכישת טיסות. המדריך כולל את המקורות המובילים למציאת טיסות זולות, טכניקות חיפוש מתקדמות והמלצות לנסיעה חסכונית.',
    publishedAt: '2025-10-26',
    readTime: 12,
    category: 'נסיעות',
    tags: ["נסיעות","חיסכון","טיסות","מדריך"],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    url: '/blog/-flights-cheap-2025-guide-israel-travel'
  },
  {
    id: 'comprehensive-guide-2025',
    title: 'המדריך המלא למציאת טיסות זולות ב-2025: כל מה שאתה צריך לדעת',
    excerpt: 'מדריך מקיף ומפורט למציאת טיסות זולות ב-2025. כולל טיפים מקצועיים, כלים מומלצים, אסטרטגיות מתקדמות ודוגמאות מעשיות שיחסכו לך מאות שקלים על כל טיסה.',
    publishedAt: '2025-01-15',
    readTime: 15,
    category: 'מדריכים מקיפים',
    tags: ['טיסות זולות', 'מדריך מקיף', 'חיסכון', '2025', 'טיפים מקצועיים'],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    url: '/blog/complete-guide-cheap-flights-2025'
  },
  {
    id: '1761498359502',
    title: 'מדריך מעודכן ל-2025: כיצד למצוא את הטיסות הזולות ביותר מישראל ליעדים פופולריים בעולם',
    excerpt: 'המדריך הזה מציג מספר טיפים מעשיים שיסייעו לכם למצוא את הטיסות הזולות ביותר מישראל ליעדים פופולריים בעולם, עם דגש על שיטות חיפוש חכמות והכנה מוקדמת.',
    publishedAt: '2025-10-26',
    readTime: 8,
    category: 'חדשות תעופה',
    tags: ["טיסות","חיפוש טיסות","טיפים","חסכון","תעופה"],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    url: '/blog/guide-2025-flights-cheap-israel-destinations-'
  }
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
