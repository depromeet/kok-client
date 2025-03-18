import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  paddingTop: "56px",
  height: "100%",
});

export const headingContainerStyle = style({
  marginTop: "32px",
});

export const roomNameContainerStyle = style({
  maxWidth: "320px",
  textAlign: "center",
});

export const peopleCountStyle = style({
  width: "72px",
  height: "48px",
  backgroundColor: "#FFFFFFCC",
  borderRadius: "12px",
});

export const footerContainerStyle = style({
  borderRadius: "32px 32px 0px 0px",
  width: "100%",
  backgroundColor: "#FFFFFFCC",
});

export const footerBtnContainerStyle = style({
  padding: "20px 16px",
  width: "100%",
});

export const gridContainerStyle = style({
  padding: "24px 20px 20px 20px",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(5, max-content)",
  gap: "12px",
  justifyContent: "center",
  alignItems: "center",
});

export const imageWrapperStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const imageStyle = style({
  width: "56px",
  height: "56px",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  ":hover": {
    transform: "scale(1.2)", //너무 심심해서 효과 줘봤음
  },
});

export const TopIconStyle = style({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  padding: "4px",
  backgroundColor: "#FFFFFFCC",
  borderRadius: "8px 8px 0 0 ",
});

export const BottomIconStyle = style({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  padding: "4px",
  backgroundColor: "#FFFFFFCC",
  borderRadius: "0 0 8px 8px ",
});
