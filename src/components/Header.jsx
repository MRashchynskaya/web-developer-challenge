import React from "react";
import { Flex, Image } from "rebass";
import logo from "../assets/airtame-logo-inline-black.svg";
import Navbar from "./Navbar";

const headerStyles = {
  pt: [2, "25px"],
  px: [2, 4],
  pb: [2, 5],
  alignItems: "center",
  position: "relative",
};

const logoStyles = {
  maxWidth: ["140px", "162px"],
  mr: 4,
};

const Header = () => {
  return (
    <Flex as="header" sx={headerStyles}>
      <Image src={logo} alt="logo" sx={logoStyles} />
      <Navbar />
    </Flex>
  );
};

export default Header;
