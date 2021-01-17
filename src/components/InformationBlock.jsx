import React from "react";
import { Flex, Link, Box, Heading, Text } from "rebass";

const features = [
  {
    title: "Device agnostic",
    text:
      "For example, the AirPlay function lets you mirror the screen of your Macbook or iOS device to an Apple TV. Apple has chosen to restrict this AirPlay function to work only with Apple devices. This limits the use of the Apple TV in BYOD environments where a range of different operating systems are in use. There do exist some third party software, such as AirParrot that allow non-Apple devices, such as a Windows PC, to mirror to an Apple TV using AirPlay. However, you have to purchase licenses for this software on each computer, which can add up.",
  },
  {
    title: "Apple TV vs Airtame crossplatform support ",
    text:
      "Airtame is device agnostic, meaning it does not favor any single platform so it's BYOD friendly. Using only software and your computer's existing WiFi connection, Airtame mirrors the screen of your laptop and lets you present from your mobile device. Airtame works with Mac, Windows, and Linux computers to show all your apps and presentations wirelessly. Android users can stream presentations, PDFs, Office documents and images with the Airtame mobile app available for both Android and iOS. After Airtame 3.1, you can also use AirPlay iOS mirroring to mirror your iPads and iPhones to an Airtame-enabled screen. As stated in Airtame's product roadmap, Airtame also plans to develop Android mirroring in the future. ",
  },
  {
    title: "Apps vs. Dashboards",
    text:
      "Apple TV focuses heavily on apps that aim to replace traditional TV and movies. When you turn the Apple TV on, you will see Apple's classic wall of app icons. From the apps, Apple TV can access your media subscriptions and play your favorite shows and movies on your TV. This makes it clear that the Apple TV is made for watching shows and other personal entertainment at home.",
  },
  {
    title: "Apple TV apps vs Airtame dashboard on TV",
    text:
      "With Airtame's customizable Homescreen, you can display an image, website, or dashboard on a TV without the need for additional hardware. Homescreen also allows for an easy and intuitive overview of all your Airtame devices. This gives the Airtame Homescreen a practical use. It is a digital signage solution that's useful for a range of different needs. For example, you can show upcoming events, a meeting room calendar, or important data that you and your team need to track.",
  },
  {
    title: "Home network vs Corporate network",
    text:
      "Apple TV and Airtame both support WPA2 Enterprise networks. Apple TV, however, doesn't work with networks that have multicast or DIAL disabled for performance and security reasons. That's because having these disabled means that streaming devices are not able to broadcast themselves on the network, letting other devices find them. Airtame, however, works around this issue by letting you connect your computer screen to your TV by typing in the Airtame device's IP address, which is always shown on the TV screen. Note that to use AirPlay iOS mirroring with Airtame, however, you will need Multicast enabled. ",
  },
];

const InformationBlockItem = ({ title, text, sx }) => {
  return (
    <Flex
      sx={{
        flexDirection: ["column", "row"],
        justifyContent: "space-between",
        ...sx,
      }}
    >
      <Heading
        as="h3"
        fontSize={[4, 5]}
        mb={[3, 3]}
        sx={{
          flexBasis: [null, "25%"],
        }}
      >
        {title}
      </Heading>
      <Text
        as="p"
        sx={{
          fontSize: [2, 4],
          flexBasis: [null, "45%"],
          lineHeight: ['1.4', '1.2']
        }}
      >
        {text}
      </Text>
    </Flex>
  );
};

const InformationBlock = () => {
  return (
    <Box px={[4, "55px"]} mb={[5, 6]}>
      <Heading as="h3" fontSize={[5, "56px"]} mb={[3, "65px"]}>
        Information
      </Heading>
      {features.map((item, i) => {
        return (
          <InformationBlockItem
            key={i}
            title={item.title}
            text={item.text}
            sx={{ "&:not(:last-child)": { mb: [5, "100px"] } }}
          />
        );
      })}
    </Box>
  );
};

export default InformationBlock;
