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

const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <Flex
      as="nav"
      sx={{
        flex: "1 1 auto",
      }}
    >
      <Button
        variant="buttons.iconBtn"
        ml="auto"
        display={['block', 'none']}
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
      <Box
        sx={{
          display: isMenuOpen ? "block" : "none",
          bg: "white",
          position: "absolute",
          top: "100%",
          left: "0px",
          height: "calc(100vh - 54px)",
          width: "100%",
        }}
      >
        <Box
          as="ul"
          sx={{
            alignItems: "center",
            display: "block",
            borderTop: "1px solid",
            borderBottom: "1px solid",
            borderColor: "gray",
            py: [4, 0],
            mb: [4, 0],
          }}
        >
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
      <Box
        as="ul"
        sx={{
          alignItems: "center",
          display: "none",
        }}
      >
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
      {/* <MenuActions /> */}
    </Flex>
  );
};

export default Navbar;
