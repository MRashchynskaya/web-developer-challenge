import React from "react";
import { Box, Text } from "rebass";
import appleTv from "../assets/Apple-tv.png";
import airtamePhoto from "../assets/Airtame.png";
import CompareProductItem from "./CompareProductItem";
import CompareProductItemMobile from "./CompareProductItemMobile";

const products = [
  {
    title: "Apple TV",
    subTitle: "Ideal for your home entertainment",
    image: {
      src: `${appleTv}`,
      alt: "AppleTv picture",
    },
    features: [
      {
        title: "Pick Apple TV if",
        text:
          "Pick Apple TV if If you only own Apple devices and want to easily watch movies and entertainment at home, you should consider the Apple TV.",
      },
      {
        title: "Apple TV for home",
        text:
          "Apple TV is made for watching TV shows and sharing personal media at home. Apple-centric Work only with Mac and iOS. ",
      },
      {
        title: "Pick Apple TV if",
        text:
          "Pick Apple TV if If you only own Apple devices and want to easily watch movies and entertainment at home, you should consider the Apple TV.",
      },
    ],
  },
  {
    title: "Airtame",
    subTitle: "Ideal for business and schools work",
    image: {
      src: `${airtamePhoto}`,
      alt: "Airtame picture",
    },
    features: [
      {
        title: "Pick Airtame if",
        text:
          "If you want a device agnostic option for your school or business that lets you stream wirelessly, Airtame is the Apple TV alternative for your needs.",
      },
      {
        title: "Airtame for school and work",
        text:
          "Airtame is that Airtame is intended for collaborative work at schools and offices.",
      },
      {
        title: "Device agnostic",
        text: "Work on multiple platforms.",
      },
    ],
  },
];

const versusElementStyles = {
  display: [null, "flex"],
  testTransform: "uppercase",
  position: "absolute",
  width: "100px",
  height: "100px",
  fontSize: 6,
  borderRadius: "circle",
  bg: "#181c28",
  top: "30%",
  left: "50%",
  transform: "translateX(-50%)",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: "1",
  fontWeight: "bold",
};

const compareProductsWrapStyles = {
  mb: [5, "160px"],
  display: ["none", "flex"],
  position: "relative",
};

const CompareProducts = () => {
  return (
    <>
      <Box sx={compareProductsWrapStyles}>
        <Text sx={versusElementStyles}>
          <Text height="50px">vs</Text>
        </Text>
        {products.map((item, i) => {
          return (
            <CompareProductItem
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
              features={item.features}
              sx={{ "&:not(:last-child)": { mr: 4 } }}
              key={i}
            />
          );
        })}
      </Box>
      <Box display={["block", "none"]} mx={4}>
        <CompareProductItemMobile products={products} />
      </Box>
    </>
  );
};

export default CompareProducts;
