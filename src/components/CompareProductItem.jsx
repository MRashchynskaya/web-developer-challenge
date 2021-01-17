import React from "react";
import { Flex, Text, Box, Heading, Image } from "rebass";

const compareProductItemStyles = {
  width: "100%",
  bg: "bgGray",
  px: [3, "68px"],
  py: [3, "70px"],
  display: "flex",
  flexDirection: "column",
};

const compareProductItemImageWrapStyles = {
  minHeight: "595px",
  mb: 1,
};

const compareProductItemImageStyles = {
  maxHeight: "335px",
  m: "auto",
};

const compareProductItemFeatureWrapStyles = {
  minHeight: "150px",
  "&:not(:last-child)": {
    mb: 5,
  },
};

const CompareProductItem = ({ title, subTitle, image, features, sx }) => {
  return (
    <Box
      sx={{
        ...compareProductItemStyles,
        ...sx,
      }}
    >
      <Heading as="h3" fontSize={"56px"} mb={3}>
        {title}
      </Heading>
      <Text as="p" fontSize={4}>
        {subTitle}
      </Text>
      <Flex sx={compareProductItemImageWrapStyles}>
        <Image
          src={image.src}
          alt={image.alt}
          sx={compareProductItemImageStyles}
        />
      </Flex>
      <Flex flexDirection="column">
        {features.map((item, i) => {
          return (
            <Box key={i} sx={compareProductItemFeatureWrapStyles}>
              <Heading as="h4" fontSize={5} mb={2}>
                {item.title}
              </Heading>
              <Text
                as="p"
                sx={{
                  fontSize: 4,
                  lineHeight: "1.4",
                  width: "90%",
                }}
              >
                {item.text}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default CompareProductItem;
