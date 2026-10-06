import type {MetadataRoute} from 'next';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/',disallow:['/api/','/saved','/signin-with-chatgpt','/signout-with-chatgpt','/callback']},sitemap:'https://lotto-note.workspace-948358.chatgpt.site/sitemap.xml'}}
