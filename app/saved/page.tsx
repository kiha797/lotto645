import LottoApp from '../lotto-app';
import draws from '@/data/draws.json';
export const metadata={title:'내 로또 조합 보관함',description:'계정별 조합을 회차와 함께 보관하고 실제 추첨 결과와 비교하세요.',robots:{index:false,follow:true},};
export default function Page(){return <LottoApp initialDraws={draws} initialView="saved"/>}
