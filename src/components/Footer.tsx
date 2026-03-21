import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer class="bg-neutral-800 text-neutral-300">
      <Container class="py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* 로고 & 회사명 */}
          <div class="lg:col-span-2 flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <img
                src="/public/images/onenet-logo.png"
                alt="원넷 로고"
                class="w-14 h-14 object-contain brightness-0 invert opacity-90"
              />
              <div>
                <p class="text-xl font-bold text-white">
                  원넷 <span class="text-neutral-400 font-normal">㈜</span>
                </p>
                <p class="text-sm text-neutral-400 mt-0.5">
                  보안성과 편의성의 완벽한 조화
                </p>
              </div>
            </div>
            <p class="text-sm text-neutral-400">
              Copyright © 2026 ONENET. All rights reserved.
            </p>
          </div>

          {/* 연락처 정보 */}
          <div class="space-y-4">
            <h3 class="text-sm font-bold text-neutral-400 uppercase tracking-wider">
              연락처
            </h3>
            <ul class="space-y-3">
              <li class="flex flex-col gap-1">
                <span class="text-xs text-neutral-500">주소</span>
                <span class="text-sm">
                  (41256) 대구광역시 동구 동대구로 489, 8층 811호
                </span>
              </li>
              <li class="flex flex-col gap-1">
                <span class="text-xs text-neutral-500">전화</span>
                <a
                  href="tel:1544-0557"
                  class="text-sm hover:text-neutral-400 transition-colors"
                >
                  1544-0557
                </a>
              </li>
              <li class="flex flex-col gap-1">
                <span class="text-xs text-neutral-500">팩스</span>
                <a
                  href="fax:02-592-5059"
                  class="text-sm hover:text-neutral-400 transition-colors"
                >
                  02-592-5059
                </a>
              </li>
              <li class="flex flex-col gap-1">
                <span class="text-xs text-neutral-500">이메일</span>
                <a
                  href="mailto:One-net@naver.com"
                  class="text-sm hover:text-neutral-400 transition-colors"
                >
                  One-net@naver.com
                </a>
              </li>
            </ul>
          </div>

          {/* 링크 */}
          <div class="space-y-4">
            <h3 class="text-sm font-bold text-neutral-400 uppercase tracking-wider">
              바로가기
            </h3>
            <ul class="space-y-2">
              {[
                { label: "회사 소개", href: "/company" },
                { label: "서비스 소개", href: "/service" },
                { label: "기술 지원", href: "/support" },
                { label: "고객 센터", href: "/customer-center" },
                { label: "문의", href: "/inquiry" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    class="text-sm hover:text-neutral-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 하단 구분선 */}
        <div class="mt-12 pt-8 border-t border-neutral-700">
          <p class="text-xs text-neutral-500 text-center">
            원넷 ㈜ | 사업자등록번호: 278-88-00237 | 대표이사: 권성일
          </p>
        </div>
      </Container>
    </footer>
  );
}
