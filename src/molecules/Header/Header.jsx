import PropTypes from "prop-types";
import { HeaderSection, HeaderContainer, HeaderTitle } from "./StyledHeader";

const Header = ({ title }) => (
  <HeaderSection>
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  </HeaderSection>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
