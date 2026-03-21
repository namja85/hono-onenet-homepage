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
    label: "고객 문의",
    href: "/inquiry",
  },
];

export default function Header() {
  return (
    <header class="px-4 py-2">
      <Container class="flex flex-col md:flex-row items-center justify-between">
        <div class="w-12 h-12">
          <a href="/">
            <img
              class="w-full h-full object-contain"
              src="/public/images/onenet-logo.png"
              alt="원넷 로고"
            />
          </a>
        </div>
        <nav>
          <ul class="flex flex-col md:flex-row items-center gap-4 md:gap-10">
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
