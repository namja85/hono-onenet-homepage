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
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
