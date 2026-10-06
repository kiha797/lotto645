import LottoApp from '../lotto-app';
import draws from '@/data/draws.json';
export const metadata={title:'로또 당첨 확인',description:'회차별 실제 본번호와 보너스를 비교하고 1~5등 당첨 조건을 확인하세요.',};
export default function Page(){return <LottoApp initialDraws={draws} initialView="check"/>}
