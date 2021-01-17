import React from "react";
import { Flex, Text, Heading, Image } from "rebass";

const compareRowStyles = {
  borderBottom: "1px solid",
  borderColor: "gray",
  mb: 3,
};

const compareItemWrapStyles = {
  flex: "1 0 auto",
  flexBasis: "50%",
};

const CompareProductItemMobile = (props) => {
  const products = props.products;
  const productsFeaturesResult = Array.from(
    Array(products[0].features.length),
    () => new Array(products.length)
  );

  products.forEach(({ features }, p) => {
    features.forEach((item, f) => {
      productsFeaturesResult[f][p] = item;
    });
  });

  return (
    <>
      <Flex>
        {products.map(({ image }, i) => {
          return (
            <Flex
              sx={{
                ...compareItemWrapStyles,
                minHeight: "110px",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                sx={{
                  maxHeight: "100px",
                  m: "auto",
                }}
              />
            </Flex>
          );
        })}
      </Flex>
      <Flex sx={compareRowStyles}>
        {products.map(({ title }, i) => {
          return (
            <Heading
              as="h3"
              fontSize={[4, "56px"]}
              mb={2}
              key={i}
              sx={compareItemWrapStyles}
            >
              {title}
            </Heading>
          );
        })}
      </Flex>
      <Flex sx={compareRowStyles}>
        {products.map(({ subTitle }, i) => {
          return (
            <Text as="p" fontSize={2} mb={2} sx={compareItemWrapStyles} key={i}>
              {subTitle}
            </Text>
          );
        })}
      </Flex>
      {productsFeaturesResult.map((product, i) => {
        return (
          <Flex sx={compareRowStyles}>
            {product.map((item) => {
              return (
                <Flex
                  key={i}
                  sx={{
                    ...compareItemWrapStyles,
                    flexDirection: "column",
                    "&:not(:last-child)": {
                      mb: [3, 5],
                    },
                  }}
                >
                  <Heading as="h4" fontSize={3} mb={[2, 2]}>
                    {item.title}
                  </Heading>
                  <Text
                    as="p"
                    fontSize={2}
                    lineHeight={"1.4"}
                    sx={{
                      width: "90%",
                    }}
                  >
                    {item.text}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        );
      })}
    </>
  );
};

export default CompareProductItemMobile;
