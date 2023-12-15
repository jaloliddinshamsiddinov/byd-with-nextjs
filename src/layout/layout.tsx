import { Navbar, Footer } from "src/components";
import { layoutProps } from "./layout.props";
import { Box } from "@mui/material";

const Layout = ({ children }: layoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight={"90vh"}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
