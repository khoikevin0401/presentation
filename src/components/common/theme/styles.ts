import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
  },
  styles: {
    global: (props: Dict<any> | StyleFunctionProps) => ({
      body: {
        bg: mode("gray.50", "gray.800")(props),
        fontFamily: "Helvetica",
      },
      html: {
        fontFamily: "Helvetica",
        /* width */
        // "::-webkit-scrollbar": {
        //   width: 0,
        // },

        // /* Track */
        // "::-webkit-scrollbar-track": {
        //   background: "#E3E3E3",
        //   width: 0,
        //   borderRadius: "4px",
        // },

        // /* Handle */
        // "::-webkit-scrollbar-thumb": {
        //   background: "#5141F5",
        //   borderRadius: "10px",
        //   "&:hover": {
        //     background: "#5141F5",
        //   },
        // },
      },
    }),
  },
}
