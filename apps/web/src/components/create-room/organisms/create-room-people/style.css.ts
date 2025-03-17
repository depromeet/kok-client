import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  paddingTop: "56px",
  height: "100%",
});

export const headingContainerStyle = style({
  marginTop: "32px",
});

export const footerContainerStyle = style({
  width: "100%",
  backgroundColor: "white", //호진 todo : 잘 모르겠음.
});

export const footerProfileContainerStyle = style({
  padding: "24px 20px 20px 20px",
  width: "100%",
});

export const footerBtnContainerStyle = style({
  padding: "20px 16px",
  width: "100%",
});
