const navBarLinks = {
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: [2, 1],
  display: ["block", "inline-block"],
  px: 3,
  py: ['13px', 2],
  borderRadius: "default",
  transition: "fast",
  textAlign: "center",
  "&:hover": {
    bg: "gray",
  },
};

const theme = {
  space: [0, 5, 10, 15, 20, 30, 40].map((n) => n + "px"),
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64].map((n) => n + "px"),
  fonts: {
    body: '"Barlow", "Helvetica", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  colors: {
    primary: "#07c",
    gray: "#f0f0f2",
    bgGray: "#f7f7f9",
    darkGray: "#5c6479",
  },
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 2px",
    },
    iconBtn: {
      backgroundColor: "transparent",
      padding: 1,
      fontSize: "0px",
      color: "inherit",
      letterSpacing: "initial",
      lineHeight: "1.3",
      svg: {
        margin: "0px",
      },
    },
  },
  radii: {
    default: "2px",
    circle: 99999,
  },
  transition: {
    fast: "all 0.2s ease-in",
    slow: "all 0.3s ease-in",
  },
  link: {
    navigationLink: navBarLinks,
    linkBtn: {
      ...navBarLinks,
      color: "white",
      bg: "primary",
      px: 4,
      "&:hover": {
        filter: "saturate(50%)",
      },
    },
  },
};

export default theme;
