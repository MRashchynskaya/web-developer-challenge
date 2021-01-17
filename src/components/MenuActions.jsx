import React from "react";
import { Flex, Link, Text } from "rebass";

const menuActionsStyles = {
  ml: [null, "auto"],
  alignItems: "center",
  flexDirection: ["column", "row"],
  px: [4, 0],
};

const MenuActions = () => {
  return (
    <Flex as="ul" sx={menuActionsStyles}>
      <Text as="li" width={["100%", "auto"]}>
        <Link href="#" variant="link.navigationLink">
          Book demo
        </Link>
      </Text>
      <Text as="li" width={["100%", "auto"]}>
        <Link href="#" variant="link.linkBtn">
          Buy now
        </Link>
      </Text>
    </Flex>
  );
};

export default MenuActions;
