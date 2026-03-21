import Container from "@/components/Container";
import Menu from "./icons/Menu";

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
    <header class="p-4">
      <Container class="relative flex items-center justify-between">
        <div class="h-12 w-12">
          <a href="/">
            <img
              class="w-full h-full object-contain"
              src="/public/images/onenet-logo.png"
              alt="원넷 로고"
            />
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" class="peer hidden" />
        <label
          for="menu-toggle"
          class="relative z-50 ml-auto block cursor-pointer md:hidden"
        >
          <Menu />
        </label>

        <nav class="hidden md:block">
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

        <label
          for="menu-toggle"
          class="fixed inset-0 z-30 hidden bg-black/40 peer-checked:block md:hidden"
        />
        <nav class="fixed right-0 top-0 z-40 h-full w-72 translate-x-full bg-neutral-800 p-6 pt-20 transition-transform duration-300 peer-checked:translate-x-0 md:hidden">
          <ul class="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={`mobile-${item.href}`}>
                <a href={item.href} class="block">
                  <span class="text-lg font-bold text-white">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
