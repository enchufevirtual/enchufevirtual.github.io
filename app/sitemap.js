import { database } from '@/database/database';

const siteUrl = 'https://enchufevirtual.com';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: `${siteUrl}/`,
    },
    {
      url: `${siteUrl}/contacto/`,
    },
    ...database.map((project) => ({
      url: `${siteUrl}/project/${project.slug}/`,
    })),
  ];
}
