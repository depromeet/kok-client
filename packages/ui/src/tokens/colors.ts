import { deepMerge } from "../utils";

const scale = {
  gray0: "#FFFFFF",
  gray2: "#FBFBFB",
  gray5: "#F6F6F6",
  gray8: "#EFEFEF",
  gray10: "#E7E7E7",
  gray15: "#DBDBDB",
  gray20: "#D1D1D1",
  gray25: "#C3C3C3",
  gray30: "#B0B0B0",
  gray40: "#888888",
  gray50: "#6D6D6D",
  gray60: "#5D5D5D",
  gray70: "#4F4F4F",
  gray80: "#454545",
  gray90: "#313131",
  gray95: "#1D1D1D",

  red5: "#FFF1F1",
  red10: "#FFE0E1",
  red20: "#FFC7C8",
  red30: "#FFA0A2",
  red40: "#FF6A6D",
  red50: "#F73418",
  red60: "#E61C1F",
  red70: "#C21316",
  red80: "#A01416",
  red90: "#84181A",
  red95: "#480708",

  orange5: "#FFF2ED",
  orange10: "#FFE1D5",
  orange20: "#FDC0AB",
  orange30: "#FC9475",
  orange40: "#F9502E",
  orange50: "#F73418",
  orange60: "#E81B0E",
  orange70: "#C10F0D",
  orange80: "#991317",
  orange90: "#7B1316",
  orange95: "#43070B",

  yellow5: "#FFFBEA",
  yellow10: "#FFF5C6",
  yellow20: "#FFEB87",
  yellow30: "#FFD949",
  yellow40: "#FFC61F",
  yellow50: "#F4A004",
  yellow60: "#DE7C01",
  yellow70: "#B85605",
  yellow80: "#95420B",
  yellow90: "#7B360C",
  yellow95: "#471B01",

  green5: "#F1FCF1",
  green10: "#E1F8E0",
  green20: "#C3F0C2",
  green30: "#93E392",
  green40: "#5BCE5A",
  green50: "#3BC63B",
  green60: "#269326",
  green70: "#217421",
  green80: "#1F5C20",
  green90: "#1B4C1C",
  green95: "#0A290C",

  blue5: "#EEF6FF",
  blue10: "#D9E9FF",
  blue20: "#BCDAFF",
  blue30: "#8EC3FF",
  blue40: "#59A2FF",
  blue50: "#3D84FF",
  blue60: "#1B5CF5",
  blue70: "#1447E1",
  blue80: "#173AB6",
  blue90: "#19358F",
  blue95: "#142257",

  subwayRaw1: "#00498B",
  subwayRaw2: "#009246",
  subwayRaw3: "#F36630",
  subwayRaw4: "#00A2D1",
  subwayRaw5: "#A064A3",
  subwayRaw6: "#9E4510",
  subwayRaw7: "#5D6519",
  subwayRaw8: "#D6406A",
  subwayRaw9: "#8E764B",

  subwayAdjust1: "#006DD2",
  subwayAdjust2: "#00BF57",
  subwayAdjust3: "#F36630",
  subwayAdjust4: "#00A2D1",
  subwayAdjust5: "#A064A3",
  subwayAdjust6: "#A15E12",
  subwayAdjust7: "#8F9A16",
  subwayAdjust8: "#D6406A",
  subwayAdjust9: "#8E764B",
};

const token = {
  textPrimary: scale.gray95,
  text1: scale.gray0,
  text2: scale.gray10,
  text3: scale.gray30,
  text4: scale.gray40,
  text5: scale.gray90,
  textKok: scale.orange50,
  textKok2: scale.orange40,

  bgPrimary: scale.gray95,
  bg1: scale.gray0,
  bg2: scale.gray2,
  bg3: scale.gray8,
  bg4: scale.gray10,
  bg5: scale.gray15,
  bg6: scale.gray20,
  bgSecondary: scale.orange40,
  bgS1: scale.orange5,

  iconPrimary: scale.gray0,
  iconSecondary: scale.orange50,
  icon2: scale.gray15,
  icon3: scale.gray40,
  icon4: scale.gray50,

  divider1: scale.gray10,
  divider2: scale.gray95,

  error: scale.red50,
  warning: scale.yellow50,
  success: scale.green40,
  info: scale.blue50,
};

const semantic = {
  bg: {
    base: token.bg2,
    base2: token.bg1,
  },

  btn: {
    cta: {
      primary: token.textPrimary,
      placeholder: token.text3,
      caret: token.textKok2,
    },

    input: {
      default: token.bg3,

      text: {
        primary: token.textPrimary,
        placehorder: token.text3,
        caret: token.textKok2,
      },
    },

    fab: {
      bg: {
        kok: token.bgSecondary,
        white: token.bg1,
      },
    },
  },

  icon: {
    default: token.icon4,
    pressed: token.icon3,
    disabled: token.icon2,
    kok: token.iconSecondary,

    handlebar: {
      bar: token.bg3,
    },

    progress: {
      active: token.bgPrimary,
      inactive: token.bg5,
    },
  },

  text: {
    secondary: token.text5,
  },
};

// TODO: reduce 사용시 타입 추론이 되지 않아 논의 후 필요시 추후 개선 필요
export const colors = deepMerge(deepMerge(scale, token), semantic);
