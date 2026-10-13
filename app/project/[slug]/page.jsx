import ProjectPage from '@/containers/ProjectPage';
import { database } from '@/database/database';

const siteUrl = 'https://enchufevirtual.com';

export function generateStaticParams() {
  return database.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = database.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  const url = `${siteUrl}/project/${project.slug}/`;
  const image = `/assets/${project.image}`;

  return {
    title: project.title,
    description: project.description_card,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} | Enchufe Virtual`,
      description: project.description_card,
      url,
      siteName: 'Enchufe Virtual',
      locale: 'es_EC',
      type: 'article',
      images: [{ url: image, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Enchufe Virtual`,
      description: project.description_card,
      images: [image],
    },
  };
}

export default async function ProjectSlugPage({ params }) {
  const resolved = await params;
  return <ProjectPage slug={resolved.slug} />;
}
