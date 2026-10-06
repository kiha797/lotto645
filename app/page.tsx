import LottoApp from './lotto-app';
import draws from '@/data/draws.json';
export const metadata={alternates:{canonical:'/'}};
export default function Page(){return <LottoApp initialDraws={draws}/>}
