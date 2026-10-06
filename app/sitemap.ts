import type {MetadataRoute} from 'next';
import {guides} from '@/lib/guides';
export default function sitemap():MetadataRoute.Sitemap{const origin='https://lotto-note.workspace-948358.chatgpt.site';return ['','/history','/stats','/check','/methods','/probability','/guides','/about','/privacy','/terms',...guides.map(g=>`/guides/${g.slug}`)].map(path=>({url:origin+path,changeFrequency:path===''||path==='/stats'||path==='/history'?'weekly':'monthly',priority:path===''?1:path.startsWith('/guides/')?.7:.6}))}
