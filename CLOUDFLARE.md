# Cloudflare Workers 배포

이 저장소는 Workers용 Vinext 앱입니다. 정적 Pages 배포용 앱이 아닙니다.

## 오류 원인

`00000000-0000-4000-8000-000000000000`은 Sites 로컬 미리보기용 임시 D1 ID입니다. Cloudflare 계정의 실제 데이터베이스가 아니므로 직접 배포에 사용할 수 없습니다.

## 최초 설정

1. Cloudflare → 스토리지 및 데이터베이스 → D1 → 데이터베이스 생성. 이름은 `lotto645-db`로 지정합니다.
2. 생성한 데이터베이스의 UUID(데이터베이스 ID)를 복사합니다. Cloudflare 계정 ID나 API 토큰이 아닙니다.
3. Workers 및 Pages → lotto645 → 설정 → 빌드 → 빌드 변수/환경변수에 `LOTTO_D1_DATABASE_ID`를 추가하고 UUID를 값으로 입력합니다. 런타임 변수만 추가하면 빌드에 반영되지 않습니다.
4. D1 데이터베이스 콘솔에서 `scripts/cloudflare-init.sql`을 실행합니다. 기존 저장 데이터는 삭제하지 않습니다. Sites의 저장 데이터는 자동으로 이 DB에 이전되지 않습니다.
5. Workers의 빌드 명령은 `npm run build`, 배포 명령은 `npx wrangler deploy --config dist/server/wrangler.json`으로 지정합니다. `main` 브랜치, 루트 디렉터리 `/`를 사용합니다.
6. 최신 커밋으로 새 빌드를 실행합니다. 생성된 배포 설정의 `DB` 바인딩은 빌드 변수의 실제 UUID를 사용합니다.

DB ID는 비밀 키가 아닙니다. API 토큰은 GitHub 코드나 문서에 넣지 않습니다. 빌드에는 Node.js 22.13 이상이 필요합니다.

## 기능 범위

공개 번호 추천·통계·해설 페이지는 별도 로그인이 필요 없습니다. 내 조합의 기존 ChatGPT 로그인은 Sites 플랫폼이 제공하므로 Cloudflare 독립 배포에서 자동 제공되지 않습니다. 별도 인증 연동 없이는 해당 저장 기능을 사용할 수 없습니다. 프록시 없이 외부 요청의 사용자 식별 헤더를 인증으로 신뢰해서는 안 됩니다.

광고 활성화에는 ADVERTISING.md의 실제 게시자·광고 단위 설정도 필요합니다.
