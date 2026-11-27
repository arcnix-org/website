export type Locale = 'en' | 'zh-cn';
export const locales = ['en', 'zh-cn'] as const;
export const sections = ['workspace', 'operations', 'videos', 'docs', 'downloads'] as const;
export type Section = typeof sections[number];

export const repo = 'https://github.com/arcnix-org/arcnix';
export const version = '0.3.11';
export const tag = `v${version}`;
export const releaseGuide = `docs/release-${version.replaceAll('.', '-')}/`;
export const sitePath = (locale: Locale, path = '') => (locale === 'en' ? '/' : '/zh-cn/') + path;
export const translate = (locale: Locale) => (en: string, zh: string) => locale === 'en' ? en : zh;
export function sectionNames(locale: Locale): Record<Section, string> {
  const t = translate(locale);
  return { workspace: t('Workspace', '工作台'), operations: t('Operations', '运维'), videos: t('Videos', '操作实录'), docs: t('Docs', '使用文档'), downloads: t('Downloads', '下载') };
}
