import { notFound, redirect } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Available blog posts (only thick, comprehensive posts)
const availablePosts = [
  'complete-guide-cheap-flights-2025',
  '-flights-cheap-israel-guide-2025',
  '-flights-cheap-2025-guide-israel-travel',
  'guide-2025-flights-cheap-israel-destinations-',
  'guide-flights-cheap-2025-10-destinations-recommended-israel',
  'guide-complete-flights-cheap-destinations-2025',
  'flights-cheap-israel-2025-flights-',
  'flights-cheap-2025',
  'flights-cheap-2025-tips-israel',
  'flights-cheap-2025-guide-complete-israel-'
];

export async function generateStaticParams() {
  return availablePosts.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  if (!availablePosts.includes(slug)) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: 'Blog Post',
    description: 'Hebrew travel blog post',
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  // Redirect to the static pages we already have (only thick posts)
  if (slug === 'complete-guide-cheap-flights-2025') {
    redirect('/blog/complete-guide-cheap-flights-2025');
  }

  if (slug === '-flights-cheap-israel-guide-2025') {
    redirect('/blog/-flights-cheap-israel-guide-2025');
  }

  if (slug === '-flights-cheap-2025-guide-israel-travel') {
    redirect('/blog/-flights-cheap-2025-guide-israel-travel');
  }

  if (slug === 'guide-2025-flights-cheap-israel-destinations-') {
    redirect('/blog/guide-2025-flights-cheap-israel-destinations-');
  }

  if (slug === 'guide-flights-cheap-2025-10-destinations-recommended-israel') {
    redirect('/blog/guide-flights-cheap-2025-10-destinations-recommended-israel');
  }

  if (slug === 'guide-complete-flights-cheap-destinations-2025') {
    redirect('/blog/guide-complete-flights-cheap-destinations-2025');
  }

  if (slug === 'flights-cheap-israel-2025-flights-') {
    redirect('/blog/flights-cheap-israel-2025-flights-');
  }

  if (slug === 'flights-cheap-2025') {
    redirect('/blog/flights-cheap-2025');
  }

  if (slug === 'flights-cheap-2025-tips-israel') {
    redirect('/blog/flights-cheap-2025-tips-israel');
  }

  if (slug === 'flights-cheap-2025-guide-complete-israel-') {
    redirect('/blog/flights-cheap-2025-guide-complete-israel-');
  }

  // If slug is not found, return 404
  notFound();
}