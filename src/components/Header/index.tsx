import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <span>logo</span>
      <nav>
        <a href="/">Timer</a>
        <a href="/history">History</a>
      </nav>
    </HeaderContainer>
  );
}
