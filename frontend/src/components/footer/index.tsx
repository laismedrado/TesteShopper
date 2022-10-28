import AppBar from "@mui/material/AppBar";
import { StyledFooter } from "./styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
export const Footer = () => {
  return (
    <AppBar position="sticky">
      <StyledFooter>
        <Link
          href="https://www.instagram.com/shopper.com.br/"
          target="_blank"
          color="inherit"
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://www.facebook.com/shopper.com.br/"
          target="_blank"
          color="inherit"
        >
          <FacebookRoundedIcon />
        </Link>
        <Link
          href="mailto:contato@shopper.com.br?subject=&body="
          color="inherit"
        >
          <EmailIcon />
        </Link>
      </StyledFooter>
    </AppBar>
  );
};
