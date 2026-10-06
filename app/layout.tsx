import type {Metadata} from 'next';
import './globals.css';
import {SiteHeader,SiteFooter} from '@/components/lotto/shell';
import {AdProvider} from '@/components/lotto/ads';
const origin='https://lotto-note.workspace-948358.chatgpt.site';
export const metadata:Metadata={metadataBase:new URL(origin),title:{default:'로또노트 — 로또 6/45 추천·통계·확률 해설',template:'%s | 로또노트'},description:'로또 6/45 번호 추천과 실제 당첨 기록 분석. 홀짝, 합계, AC값, 끝수, 미출현 통계의 의미를 알고 조합을 저장하세요.',icons:{icon:'/favicon.svg'},openGraph:{title:'로또노트',description:'계산 근거를 공개하는 로또 6/45 통계와 추천',type:'website',locale:'ko_KR'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body><AdProvider><SiteHeader/>{children}<SiteFooter/></AdProvider></body></html>}
