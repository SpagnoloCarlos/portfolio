interface Colors {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  quinary: string;
  white: string;
  black: string;
  warning: string;
  danger: string;
  success: string;
  info: string;
  red: string;
  redOffer: string;
  gray: {
    base: string;
    "light-10": string;
    "light-20": string;
    "light-30": string;
    "light-40": string;
  };
}

interface Typography {
  fonts: {
    primary: string;
    secondary: string;
  };
  rootFontSize: string;
  sizes: {
    small: string;
    extraSmall: string;
    large: string;
    extraLarge: string;
    extraExtraLarge: string;
    normal: string;
  };
  colors: {
    base: string;
    soft: string;
  };
}

interface Breakpoints {
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  extraExtraLarge: string;
}

interface BaseThemes {
  colors: Colors;
  typography: Typography;
  breakpoints: Breakpoints;
}

const colors: Colors = {
  primary: "#521945",
  secondary: "#912F56",
  tertiary: "#361F27",
  quaternary: "#EAF2EF",
  quinary: "#F4F4F4",
  white: "#EAF2EF",
  black: "#010409",
  warning: "orange",
  danger: "red",
  success: "#00A650",
  info: "skyblue",
  red: "#ff2323",
  redOffer: "#FA726E",
  gray: {
    base: "#6C6C6C",
    "light-10": "#c4c4c4",
    "light-20": "#9B9B9B",
    "light-30": "#D9D9D9",
    "light-40": "#f5f5f5",
  },
};

const typography: Typography = {
  fonts: {
    primary: "Inter",
    secondary: "Raleway",
  },
  rootFontSize: "16px",
  sizes: {
    small: "0.875rem",
    extraSmall: "0.750rem",
    large: "1.2rem",
    extraLarge: "1.4rem",
    extraExtraLarge: "1.6rem",
    normal: "1rem",
  },
  colors: {
    base: "#6C6C6C",
    soft: "#58595B",
  },
};

const breakpoints: Breakpoints = {
  small: "576px",
  medium: "768px",
  large: "992px",
  extraLarge: "1200px",
  extraExtraLarge: "1400px",
};

const baseTheme: BaseThemes = {
  colors,
  typography,
  breakpoints,
};

const blackScale = {
  1: "#010409",
  2: "#04070d",
  3: "#070a10",
  4: "#0a0d13",
  5: "#0c1016",
};

export type BaseTheme = typeof baseTheme;
export default baseTheme;
