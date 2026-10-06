import LottoApp from '../lotto-app';
import draws from '@/data/draws.json';
export const metadata={title:'로또 번호 통계 분석',description:'최근 10·30·50회 출현 빈도, 미출현, 홀짝, 합계, AC, 끝수, 소수, 직전 중복 통계.',};
export default function Page(){return <LottoApp initialDraws={draws} initialView="stats"/>}
