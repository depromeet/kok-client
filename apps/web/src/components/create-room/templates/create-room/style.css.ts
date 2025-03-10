import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%", // w-full
  height: "100vh", // h-screen
  backgroundSize: "cover", // bg-cover
  backgroundPosition: "center", // bg-center
  transition: "all 0.5s ease-in-out", // transition-all duration-500
});
