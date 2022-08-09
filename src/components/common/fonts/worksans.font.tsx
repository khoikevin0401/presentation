import React from "react"
import { Global } from "@emotion/react"

export const WorkSansFonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Work Sans";
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: 
          url("fonts/worksans/WorkSans-SemiBold.woff2") format("woff2"),
          url("fonts/worksans/WorkSans-SemiBold.woff") format("woff"),
          url("fonts/worksans/WorkSans-SemiBold.ttf") format("truetype"),
          url("fonts/worksans/WorkSans-SemiBold.otf") format("opentype");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `}
  />
)
