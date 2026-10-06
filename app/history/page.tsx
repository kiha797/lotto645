import LottoApp from '../lotto-app';
import draws from '@/data/draws.json';
export const metadata={title:'역대 로또 당첨번호',description:'1회부터 최신 확보 회차까지의 본번호·보너스·당첨금과 홀짝·합계를 확인하세요.',};
export default function Page(){return <LottoApp initialDraws={draws} initialView="history"/>}
