import React from "react"
import { Global } from "@emotion/react"

export const MontserratFonts = () => (
  <Global
    styles={`
      @import url("css/slick.min.css");
      @import url("css/slick-theme.min.css");

      @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: 
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-regular.eot?#iefix") format("embedded-opentype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-regular.svg#Montserrat") format("svg"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-regular.ttf") format("truetype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-regular.woff") format("woff"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-regular.woff2") format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: 
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-500.eot?#iefix") format("embedded-opentype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-500.svg#Montserrat") format("svg"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-500.ttf") format("truetype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-500.woff") format("woff"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-500.woff2") format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: 
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-600.eot?#iefix") format("embedded-opentype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-600.svg#Montserrat") format("svg"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-600.ttf") format("truetype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-600.woff") format("woff"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-600.woff2") format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: 
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-700.eot?#iefix") format("embedded-opentype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-700.svg#Montserrat") format("svg"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-700.ttf") format("truetype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-700.woff") format("woff"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-700.woff2") format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      /* italic */
      @font-face {
        font-family: "Montserrat";
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: 
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-italic.eot?#iefix") format("embedded-opentype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-italic.svg#Montserrat") format("svg"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-italic.ttf") format("truetype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-italic.woff") format("woff"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-italic.woff2") format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      /* italic */
      @font-face {
        font-family: "Montserrat";
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: 
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-500italic.eot?#iefix") format("embedded-opentype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-500italic.svg#Montserrat") format("svg"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-500italic.ttf") format("truetype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-500italic.woff") format("woff"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-500italic.woff2") format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      /* italic */
      @font-face {
        font-family: "Montserrat";
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: 
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-600italic.eot?#iefix") format("embedded-opentype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-600italic.svg#Montserrat") format("svg"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-600italic.ttf") format("truetype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-600italic.woff") format("woff"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-600italic.woff2") format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      /* italic */
      @font-face {
        font-family: "Montserrat";
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: 
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-700italic.eot?#iefix") format("embedded-opentype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-700italic.svg#Montserrat") format("svg"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-700italic.ttf") format("truetype"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-700italic.woff") format("woff"),
          url("fonts/montserrat/montserrat-v23-latin-ext_latin-700italic.woff2") format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      
      * {
        font-family: "Montserrat";
      }
    `}
  />
)
