import Navbar from "../navbar/Navbar";
import { LayoutContainer, ContentWrapper } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <ContentWrapper>{children}</ContentWrapper>
      </LayoutContainer>
    </>
  );
};

export default Layout;
