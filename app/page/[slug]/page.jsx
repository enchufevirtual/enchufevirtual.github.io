import LegacyProjectRedirect from '@/components/LegacyProjectRedirect';
import { database } from '@/database/database';

export function generateStaticParams() {
  return database.map((item) => ({ slug: item.slug }));
}

export default async function ProjectSlugPage({ params }) {
  const resolved = await params;
  return <LegacyProjectRedirect slug={resolved.slug} />;
}
