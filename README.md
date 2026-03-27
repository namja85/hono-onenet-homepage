# ONENET 홈페이지

주식회사 원넷의 기업 홈페이지 프로젝트입니다.  
원넷은 온/오프라인 결제 환경에서 안전하고 편리한 결제 수단을 제공하는 전자결제 전문 기업입니다.

## 프로젝트 개요

- 기술 스택: `Bun`, `Hono`, `TypeScript`, `JSX`
- 목적: 회사 소개 및 서비스 안내, 기술지원/고객센터, 고객문의 접수 제공
- 서버 렌더링 기반으로 주요 페이지를 라우팅하고, 문의 폼 입력을 검증해 처리합니다.

## 주요 페이지

- `/` : 메인
- `/company` : 회사소개
- `/service` : 서비스소개
- `/support` : 기술지원
- `/customer-center` : 고객센터
- `/inquiry` : 고객문의

## 로컬 실행

```bash
bun install
bun run dev
```

- 개발 서버: `http://localhost:3000`

## 빌드 및 실행

```bash
bun run build
bun run start
```

## 배포

EC2 배포 스크립트를 제공합니다.

```bash
bun run deploy -- <ec2-host-or-ip> <ssh-key-path>
```

## 회사 정보 (주식회사 원넷)

- 회사명: 원넷 ㈜
- 대표이사: 권성일
- 사업자등록번호: 278-88-00237
- 주소: (41256) 대구광역시 동구 동대구로 489, 8층 811호
- 전화: 1544-0557
- 팩스: 02-592-5059
- 이메일: [One-net@naver.com](mailto:One-net@naver.com)

---

Copyright © 2026 ONENET. All rights reserved.
