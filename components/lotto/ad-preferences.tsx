'use client';
export function AdPreferences(){return <button className="btn" onClick={()=>{localStorage.removeItem('lotto-ad-consent');window.dispatchEvent(new Event('lotto-ad-preferences'))}}>광고 서비스 허용 설정 변경</button>}
