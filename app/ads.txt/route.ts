import {adConfig} from '@/lib/ad-config';
export function GET(){const config=adConfig();const content=config.client?`google.com, ${config.client.slice(3)}, DIRECT, f08c47fec0942fa0\n`:'# Publisher ID is not configured. No authorized seller is listed yet.\n';return new Response(content,{headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'public,max-age=300'}})}
