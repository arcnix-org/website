import { getCollection } from 'astro:content';

export type Locale = 'en' | 'zh-cn';
export const guidePath = (locale: Locale, slug = '') =>
  `${locale === 'en' ? '' : '/zh-cn'}/docs/${slug ? slug + '/' : ''}`;

export async function guideRoutes() {
  const entries = await getCollection('guides');
  const locales = ['en', 'zh-cn'] as const;
  return locales.flatMap(locale => {
    const pages = entries.filter(entry => entry.id.startsWith(locale + '/'))
      .sort((a, b) => a.data.order - b.data.order);
    const topics = pages.map(entry => ({
      slug: entry.id.split('/')[1], title: entry.data.title, description: entry.data.description,
    }));
    for (const slug of ['quick-start', 'install']) {
      if (!topics.some(topic => topic.slug === slug)) {
        throw new Error(`Missing ${locale}/${slug}. Check the Arcnix docs/guide checkout.`);
      }
    }
    const other = locale === 'en' ? 'zh-cn' : 'en';
    const route = (slug: string, article?: (typeof pages)[number]) => ({
      params: { path: guidePath(locale, slug).slice(1, -1) },
      props: { locale, slug, topics, article },
    });
    return [route(''), ...pages.map((article, index) => {
      const slug = topics[index].slug;
      if (!entries.some(entry => entry.id === other + '/' + slug)) {
        throw new Error(`Missing ${other} translation of ${slug}`);
      }
      return route(slug, article);
    })];
  });
}
