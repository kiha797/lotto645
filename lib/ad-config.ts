import {env} from 'cloudflare:workers';
export type AdConfig={client:string;slots:{sidebar:string;content:string};enabled:boolean};
export function adConfig():AdConfig{const e=env as unknown as Record<string,string|undefined>;const raw=e.ADSENSE_CLIENT_ID??'ca-pub-2520258098503069';const client=/^ca-pub-\d{16}$/.test(raw)?raw:'';const slot=(v:string|undefined)=>v&&/^\d{5,20}$/.test(v)?v:'';return {client,slots:{sidebar:slot(e.ADSENSE_SLOT_SIDEBAR??'2009598465'),content:slot(e.ADSENSE_SLOT_CONTENT??'4595574216')},enabled:e.ADSENSE_ENABLED!=='false'&&!!client}}
