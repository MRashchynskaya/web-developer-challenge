import React, { useState } from "react";
import { Flex, Box, Image, Heading, Text } from "rebass";
import AppleTv from "../assets/Apple-tv.png";
import chromecast from "../assets/chromecast.png";
import wepresent from "../assets/wepresent.jpg";
import creston from "../assets/creston.jpg";
import actiontech from "../assets/actiontech.jpg";
import mersive from "../assets/mersive.jpg";
import chevronRight from "../assets/chevron-right.svg";

const sliderItemWrapStyles = {
  "&:not(:last-child)": {
    mr: 2,
  },
  flexShrink: 0,
};

const sliderItemStyles = {
  width: ["100px", "170px"],
  height: ["100px", "135px"],
  bg: "gray",
  py: 3,
  px: [1, 4],
  textAlign: "center",
};

const sliderActiveItemStyles = {
  ...sliderItemStyles,
  bg: "darkGray",
  color: "white",
};

const imageStyles = {
  maxHeight: "75%",
  mb: 1,
};

const sliderChevronStyles = {
  height: "38px",
  width: "35px",
  mt: "30px",
};

const Slider = () => {
  const [isActive, setActive] = useState(false);

  return (
    <Box as="section" mb={4}>
      <Heading as="h2" fontWeight="bold" fontSize={3} mb={2} ml={4}>
        Compare
      </Heading>
      <Flex
        as="ul"
        sx={{
          overflowX: "auto",
        }}
      >
        <Text as="li" sx={sliderItemWrapStyles}>
          <Text
            as="figure"
            sx={true ? sliderActiveItemStyles : sliderItemStyles}
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <Image src={AppleTv} sx={imageStyles} alt="AppleTv picture" />
            <Text as="figcaption" textAlign="center" fontWeight="bold">
              Apple TV
            </Text>
          </Text>
        </Text>
        <Text as="li" sx={sliderItemWrapStyles}>
          <Text
            as="figure"
            sx={isActive ? sliderActiveItemStyles : sliderItemStyles}
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <Image src={chromecast} sx={imageStyles} alt="Chromecast picture" />
            <Text as="figcaption" textAlign="center" fontWeight="bold">
              Chromecast
            </Text>
          </Text>
        </Text>
        <Text as="li" sx={sliderItemWrapStyles}>
          <Text
            as="figure"
            sx={isActive ? sliderActiveItemStyles : sliderItemStyles}
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <Image
              src={chromecast}
              sx={imageStyles}
              alt="Click Share picture"
            />
            <Text as="figcaption" textAlign="center" fontWeight="bold">
              Click Share
            </Text>
          </Text>
        </Text>
        <Text as="li" sx={sliderItemWrapStyles}>
          <Text
            as="figure"
            sx={isActive ? sliderActiveItemStyles : sliderItemStyles}
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <Image src={wepresent} sx={imageStyles} alt="wePresent picture" />
            <Text as="figcaption" textAlign="center" fontWeight="bold">
              wePresent
            </Text>
          </Text>
        </Text>
        <Text as="li" sx={sliderItemWrapStyles}>
          <Text
            as="figure"
            sx={isActive ? sliderActiveItemStyles : sliderItemStyles}
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <Image src={creston} sx={imageStyles} alt="Creston picture" />
            <Text as="figcaption" textAlign="center" fontWeight="bold">
              Creston
            </Text>
          </Text>
        </Text>
        <Text as="li" sx={sliderItemWrapStyles}>
          <Text
            as="figure"
            sx={isActive ? sliderActiveItemStyles : sliderItemStyles}
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <Image
              src={actiontech}
              sx={imageStyles}
              alt="Action Tech picture"
            />
            <Text as="figcaption" textAlign="center" fontWeight="bold">
              Action Tech
            </Text>
          </Text>
        </Text>
        <Text as="li" sx={sliderItemWrapStyles}>
          <Text
            as="figure"
            sx={isActive ? sliderActiveItemStyles : sliderItemStyles}
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <Image src={mersive} sx={imageStyles} alt="Mersive picture" />
            <Text as="figcaption" textAlign="center" fontWeight="bold">
              Mersive
            </Text>
          </Text>
        </Text>
        <Text
          as="li"
          sx={{ ...sliderItemWrapStyles, display: ["none", "block"] }}
        >
          <Text
            as="figure"
            sx={isActive ? sliderActiveItemStyles : sliderItemStyles}
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <Image
              src={chevronRight}
              sx={sliderChevronStyles}
              alt="chevron button"
            />
          </Text>
        </Text>
      </Flex>
    </Box>
  );
};

export default Slider;
