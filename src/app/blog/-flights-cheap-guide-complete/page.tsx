import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';

export default function BlogPostPage() {
  const post = {
    title: 'מצאו טיסות זולות לאוסטרליה: המדריך המלא',
    excerpt: 'ניסיון למצוא טיסות זולות לאוסטרליה יכול להיות ממש תחרותי. עם הכלים והטיפים שלנו, תוכלו למצוא את המסלול הזול ביותר למסע הבא שלכם.',
    publishedAt: '2025-10-28',
    readTime: 12,
    category: 'חדשות תעופה',
    tags: ["טיסות","אוסטרליה","חדשות תעופה","טיסות זולות"],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">המסע לאוסטרליה הוא ארוך ויכול להיות יקר, אך עם הכלים והמדריכים הנכונים, ניתן למצוא טיסות במחירים סבירים. נדרשת תכנון מראש, גמישות ושימוש נכון באתרים ובכלים שונים. יחד עם זאת, ניתן למצוא מסלולים זולים ואף לחסוך מאות דולרים.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים כמו Google Flights, Skyscanner ו-Kayak הם המקום הראשון לחפש טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים במהלך חודש שלם, כך שאתם יכולים למצוא את התאריכים הזולים ביותר. Skyscanner מציג יעדים זולים לפי התקציב שלכם ו-Kayak מציע את האפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">זמנים נמוכים לטיסה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">התקופה המוזלת ביותר לטוס לאוסטרליה היא באופן כללי בין מאי ליוני ואז שוב בין יולי לספטמבר. המחירים נמוכים במיוחד במהלך חודשי הקיץ החמים באוסטרליה, שהם דצמבר עד פברואר. כמובן, המחירים יכולים להשתנות בהתאם לביקוש ולמלאי.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנת טיסה מראש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ההזמנה מראש של טיסה היא גם דרך מצוינת לחסוך בעלויות. באופן כללי, הזמנת טיסה לאוסטרליה בפחות מששה חודשים לפני המסע יכולה להוביל למחירים גבוהים יותר. אם אתם מתכננים את המסע שלכם מראש, תוכלו למצוא מסלולים זולים יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מסלולים עם החלפות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">החלפת טיסות יכולה להוביל לחיסכון משמעותי. למשל, ניתן לטוס מתל אביב לדובאי, ומשם לסינגפור, ולבסוף לסידני. אמנם זה מוסיף זמן למסע, אך זה יכול לחסוך במחיר הטיסה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">השוואת חברות תעופה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חברות התעופה השונות מציעות מחירים שונים, ולכן חשוב להשוות ביניהן. לדוגמה, חברות כמו Emirates ו-Etihad מציעות טיסות במחירים נמוכים יותר לאוסטרליה מאשר חברות אחרות. השוואת מחירים בין חברות התעופה השונות יכולה לעזור לכם למצוא את המסלול הזול ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">המסע לאוסטרליה יכול להיות יקר, אך עם התכנון הנכון ושימוש נכון בכלים, ניתן למצוא טיסות במחירים סבירים. זכרו להשוות מחירים, להיות גמישים עם התאריכים שלכם ולטוס בתקופות הנמוכות ביותר. בהצלחה במסע שלכם!</p>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✈</span>
              </div>
              <span className="text-xl font-bold hebrew-text">טיסות זולות</span>
            </div>
            <p className="text-gray-400 hebrew-text">
              המדריך המלא לטיסות זולות ונסיעות חכמות
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
