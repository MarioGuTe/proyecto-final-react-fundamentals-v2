import { HeaderSection, HeaderContainer, HeaderTitle } from "./StyledHeader";

const Header = ({ title }) => (
  <HeaderSection>
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  </HeaderSection>
);

export default Header;
