import React from "react"
import { Box, useStyleConfig } from "@chakra-ui/react"

const MainPanel: React.FC = (props: any) => {
  const { variant, children} = props
  const styles = useStyleConfig("MainPanel", { variant })
  // Pass the computed styles into the `__css` prop
  return (
    <Box
      __css={styles}
      w={{
        base: "100%",
        xl: "calc(100% - 300px)",
      }}
    >
      {children}
    </Box>
  )
}

export default MainPanel
