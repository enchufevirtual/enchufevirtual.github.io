import SearchPage from '@/containers/SearchPage';
import { database } from '@/database/database';

export function generateStaticParams() {
  return database.map((item) => ({ slug: item.slug }));
}

export default async function SearchSlugPage({ params }) {
  const resolved = await params;
  return <SearchPage slug={resolved.slug} />;
}
