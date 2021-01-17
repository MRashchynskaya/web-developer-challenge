import React from "react";
import { Flex, Text, Box, Heading, Image } from "rebass";

const CompareProductItem = ({ title, subTitle, image, features, sx }) => {
  return (
    <Box
      sx={{
        width: "100%",
        bg: "bgGray",
        px: [3, "68px"],
        py: [3, "70px"],
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
    >
      <Heading as="h3" fontSize={[4, "56px"]} mb={[2, 3]}>
        {title}
      </Heading>
      <Text as="p" fontSize={[3, 4]}>
        {subTitle}
      </Text>
      <Flex
        sx={{
          minHeight: "595px",
          mb: 1,
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          sx={{
            maxHeight: "335px",
            m: "auto",
          }}
        />
      </Flex>
      <Flex flexDirection="column" sx={{
        height: '100%'
      }}>
        {features.map((item, i) => {
          return (
            <Box
              key={i}
              sx={{
                minHeight: '150px',
                "&:not(:last-child)": {
                  mb: [3, 5],
                },
              }}
            >
              <Heading as="h4" fontSize={[4, 5]} mb={[2, 2]}>
                {item.title}
              </Heading>
              <Text as="p" fontSize={[2, 4]} lineHeight={'1.4'} sx={{
                width: '90%'
              }}>
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
