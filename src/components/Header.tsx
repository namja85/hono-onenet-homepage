import Container from "@/components/Container";

const navItems = [
  {
    label: "회사 소개",
    href: "/company",
  },
  {
    label: "서비스 소개",
    href: "/service",
  },
  {
    label: "기술 지원",
    href: "/support",
  },
  {
    label: "고객 센터",
    href: "/customer-center",
  },
  {
    label: "문의",
    href: "/inquiry",
  },
];

export default function Header() {
  return (
    <header class="py-2">
      <Container class="flex items-center justify-between">
        <div class="w-12 h-12">
          <img
            class="w-full h-full object-contain"
            src="/public/images/onenet-logo.png"
            alt="원넷 로고"
          />
        </div>
        <nav>
          <ul class="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>
                  <span class="text-lg font-bold">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
