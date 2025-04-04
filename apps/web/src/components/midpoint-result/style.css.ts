import { zIndex } from "@repo/z-index";
import { style } from "@vanilla-extract/css";

export const mapContainer = style({
  display: "flex",
  height: "100%",
  width: "100%",
  maxWidth: "600px",
});

export const overlayStyle = style({
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  bottom: 0,
  width: "600px",
  backgroundColor: "rgba(0, 0, 0, 0.65)",
  zIndex: zIndex.floating,
});

export const refreshStyle = style({
  position: "fixed",
  top: 74,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: zIndex.floating,
});

export const AddLocationButtonPositionStyle = style({
  position: "fixed",
  width: "100%",
  maxWidth: "600px",
  bottom: "190px",
  justifyContent: "flex-end",
  paddingRight: "20px",
});

export const headerSkeletonWrapper = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});
