import type {Draw} from './lotto';
const odd=(ns:number[])=>ns.filter(n=>n%2).length;
const sum=(ns:number[])=>ns.reduce((a,b)=>a+b,0);
const pairs=(ns:number[])=>[...ns].sort((a,b)=>a-b).filter((n,i,a)=>i>0&&n===a[i-1]+1).length;
export const PRIMES=new Set([2,3,5,7,11,13,17,19,23,29,31,37,41,43]);
export function choose(n:number,k:number){if(k<0||k>n)return 0;let x=1;for(let i=1;i<=Math.min(k,n-k);i++)x=x*(n-i+1)/i;return Math.round(x)}
export const TOTAL=choose(45,6);
export function ac(ns:number[]){const diffs=new Set<number>();for(let i=0;i<ns.length;i++)for(let j=i+1;j<ns.length;j++)diffs.add(Math.abs(ns[j]-ns[i]));return diffs.size-(ns.length-1)}
export function metrics(ns:number[],previous:number[]=[]){const zones=new Set(ns.map(n=>Math.floor((n-1)/10)));const ends=new Set(ns.map(n=>n%10));return {sum:sum(ns),odd:odd(ns),pairs:pairs(ns),low:ns.filter(n=>n<=22).length,prime:ns.filter(n=>PRIMES.has(n)).length,multiple3:ns.filter(n=>n%3===0).length,span:Math.max(...ns)-Math.min(...ns),ac:ac(ns),zones:zones.size,ends:ends.size,repeat:ns.filter(n=>previous.includes(n)).length}}
export type Rules={oddCounts?:number[];acValues?:number[];lowCounts?:number[];primeCounts?:number[];repeatCounts?:number[];zoneCounts?:number[];sharedCounts?:number[];sumMin?:number;sumMax?:number;acMin?:number;lowCount?:number;primeCount?:number;repeatCount?:number;zoneMin?:number;uniqueEnds?:boolean;maxShared?:number};
export function matchesRules(ns:number[],previous:number[],r:Rules){const m=metrics(ns,previous);return allows(r.oddCounts,m.odd)&&allows(r.acValues,m.ac)&&allows(r.lowCounts,m.low)&&allows(r.primeCounts,m.prime)&&allows(r.repeatCounts,m.repeat)&&allows(r.zoneCounts,m.zones)&&(r.sumMin===undefined||m.sum>=r.sumMin)&&(r.sumMax===undefined||m.sum<=r.sumMax)&&(r.acMin===undefined||m.ac>=r.acMin)&&(r.lowCount===undefined||m.low===r.lowCount)&&(r.primeCount===undefined||m.prime===r.primeCount)&&(r.repeatCount===undefined||m.repeat===r.repeatCount)&&(r.zoneMin===undefined||m.zones>=r.zoneMin)&&(!r.uniqueEnds||m.ends===6)}
export function distribution(draws:Draw[],key:keyof ReturnType<typeof metrics>){const map=new Map<number,number>();draws.forEach((d,i)=>{const value=metrics(d.numbers,draws[i+1]?.numbers)[key];map.set(value,(map.get(value)??0)+1)});return [...map].sort((a,b)=>a[0]-b[0]).map(([value,count])=>({value,count}))}
export const oddTheoretical=Array.from({length:7},(_,i)=>({value:i,count:choose(23,i)*choose(22,6-i)}));

export function allows(values:number[]|undefined,value:number){return !values?.length||values.includes(value)}
export type PatternKey="odd"|"ac"|"low"|"prime"|"repeat"|"zones";
export function patternHistory(draws:Draw[],limit:number){const rows=draws.slice(0,limit);return rows.map((d,i)=>({draw:d,values:metrics(d.numbers,draws[i+1]?.numbers??[]),hasPrevious:!!draws[i+1]}))}
export function patternFrequency(rows:ReturnType<typeof patternHistory>,key:PatternKey,value:number){const usable=key==="repeat"?rows.filter(r=>r.hasPrevious):rows;return {count:usable.filter(r=>r.values[key]===value).length,total:usable.length}}
