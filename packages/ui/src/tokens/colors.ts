import { deepMerge } from "../utils";

const scale = {
  gray: {
    0: "#FFFFFF",
    2: "#FBFBFB",
    5: "#F6F6F6",
    8: "#EFEFEF",
    10: "#E7E7E7",
    15: "#DBDBDB",
    20: "#D1D1D1",
    25: "#C3C3C3",
    30: "#B0B0B0",
    40: "#888888",
    50: "#6D6D6D",
    60: "#5D5D5D",
    70: "#4F4F4F",
    80: "#454545",
    90: "#313131",
    95: "#1D1D1D",
  },

  red: {
    5: "#FFF1F1",
    10: "#FFE0E1",
    20: "#FFC7C8",
    30: "#FFA0A2",
    40: "#FF6A6D",
    50: "#F73418",
    60: "#E61C1F",
    70: "#C21316",
    80: "#A01416",
    90: "#84181A",
    95: "#480708",
  },

  orange: {
    5: "#FFF2ED",
    10: "#FFE1D5",
    20: "#FDC0AB",
    30: "#FC9475",
    40: "#F9502E",
    50: "#F73418",
    60: "#E81B0E",
    70: "#C10F0D",
    80: "#991317",
    90: "#7B1316",
    95: "#43070B",
  },

  yellow: {
    5: "#FFFBEA",
    10: "#FFF5C6",
    20: "#FFEB87",
    30: "#FFD949",
    40: "#FFC61F",
    50: "#F4A004",
    60: "#DE7C01",
    70: "#B85605",
    80: "#95420B",
    90: "#7B360C",
    95: "#471B01",
  },

  green: {
    5: "#F1FCF1",
    10: "#E1F8E0",
    20: "#C3F0C2",
    30: "#93E392",
    40: "#5BCE5A",
    50: "#3BC63B",
    60: "#269326",
    70: "#217421",
    80: "#1F5C20",
    90: "#1B4C1C",
    95: "#0A290C",
  },

  blue: {
    5: "#EEF6FF",
    10: "#D9E9FF",
    20: "#BCDAFF",
    30: "#8EC3FF",
    40: "#59A2FF",
    50: "#3D84FF",
    60: "#1B5CF5",
    70: "#1447E1",
    80: "#173AB6",
    90: "#19358F",
    95: "#142257",
  },

  subway: {
    raw: {
      1: "#00498B",
      2: "#009246",
      3: "#F36630",
      4: "#00A2D1",
      5: "#A064A3",
      6: "#9E4510",
      7: "#5D6519",
      8: "#D6406A",
      9: "#8E764B",
    },
    adjust: {
      1: "#006DD2",
      2: "#00BF57",
      3: "#F36630",
      4: "#00A2D1",
      5: "#A064A3",
      6: "#A15E12",
      7: "#8F9A16",
      8: "#D6406A",
      9: "#8E764B",
    },
  },
};

const token = {
  text: {
    primary: scale.gray[95],
    1: scale.gray[0],
    2: scale.gray[10],
    3: scale.gray[30],
    4: scale.gray[40],
    5: scale.gray[90],
    kok: scale.orange[50],
    kok2: scale.orange[40],
  },

  bg: {
    primary: scale.gray[95],
    1: scale.gray[0],
    2: scale.gray[2],
    3: scale.gray[8],
    4: scale.gray[10],
    5: scale.gray[15],
    6: scale.gray[20],
    secondary: scale.orange[40],
    s1: scale.orange[5],
  },

  icon: {
    primary: scale.gray[0],
    secondary: scale.orange[50],
    2: scale.gray[15],
    3: scale.gray[40],
    4: scale.gray[50],
  },

  divider: {
    1: scale.gray[10],
    2: scale.gray[95],
  },

  error: scale.red[50],
  warning: scale.yellow[50],
  success: scale.green[40],
  info: scale.blue[50],
};

const semantic = {
  bg: {
    base: token.bg[2],
    base2: token.bg[1],
  },

  btn: {
    cta: {
      primary: token.text.primary,
      placeholder: token.text[3],
      caret: token.text.kok2,
    },

    input: {
      default: token.bg[3],

      text: {
        primary: token.text.primary,
        placehorder: token.text[3],
        caret: token.text.kok2,
      },
    },

    fab: {
      bg: {
        kok: token.bg.secondary,
        white: token.bg[1],
      },
    },
  },

  icon: {
    default: token.icon[4],
    pressed: token.icon[3],
    disabled: token.icon[2],
    kok: token.icon.secondary,

    handlebar: {
      bar: token.bg[3],
    },

    progress: {
      active: token.bg.primary,
      inactive: token.bg[5],
    },
  },

  text: {
    secondary: token.text[5],
  },
};

// TODO: reduce 사용시 타입 추론이 되지 않아 논의 후 필요시 추후 개선 필요
export const colors = deepMerge(deepMerge(scale, token), semantic);
