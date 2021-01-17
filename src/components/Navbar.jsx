import React, { useState } from "react";
import { Flex, Box, Link, Text, Button, Image } from "rebass";
import MenuActions from "./MenuActions";
import menu from "../assets/menu.svg";
import close from "../assets/Close.svg";

const links = [
  "Product",
  "Business",
  "Education",
  "Pricing",
  "Support",
  "Blog",
];

const menuWrapMobileStyles = {
  bg: "white",
  position: "absolute",
  top: "100%",
  left: "0px",
  height: "calc(100vh - 54px)",
  width: "100%",
};

const menuMobileStyles = {
  alignItems: "center",
  display: "block",
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: "gray",
  py: 4,
  mb: 4,
};

const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <>
      <Button
        variant="buttons.iconBtn"
        ml="auto"
        display={["block", "none"]}
        onClick={() => {
          toggleMenu(!isMenuOpen);
        }}
      >
        <Image
          src={isMenuOpen ? close : menu}
          sx={{
            width: "24px",
            height: "24px",
            color: "black",
          }}
        />
        {isMenuOpen ? "Close menu" : "Open menu"}
      </Button>
      <Flex
        as="nav"
        sx={{
          flex: [null, "1 0 auto"],
        }}
      >
        <Box
          sx={{
            ...menuWrapMobileStyles,
            display: isMenuOpen ? "block" : "none",
          }}
        >
          <Box as="ul" sx={menuMobileStyles}>
            {links.map((item, i) => {
              return (
                <Text as="li" key={i}>
                  <Link href="#" variant="link.navigationLink">
                    {item}
                  </Link>
                </Text>
              );
            })}
          </Box>
          <MenuActions />
        </Box>
        {/* Mobile and desktop menu can be very different visually, in this case it would be better to separate them into different components */}
        <Box
          sx={{
            display: ["none", "flex"],
            flex: "1",
          }}
        >
          <Flex as="ul">
            {links.map((item, i) => {
              return (
                <Text as="li" key={i}>
                  <Link href="#" variant="link.navigationLink">
                    {item}
                  </Link>
                </Text>
              );
            })}
          </Flex>
          <MenuActions />
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
