export const buttonStyles = {
  components: {
    Button: {
      variants: {
        "no-hover": {
          _hover: {
            boxShadow: "none",
          },
        },
        "transparent-with-icon": {
          bg: "transparent",
          fontWeight: "bold",
          borderRadius: "inherit",
          cursor: "pointer",
          _active: {
            bg: "transparent",
            transform: "none",
            borderColor: "transparent",
          },
          _focus: {
            boxShadow: "none",
          },
          _hover: {
            boxShadow: "none",
          },
        },
        "singin": {
          background: "#8D81E8",
          width: "100%",
          height: "45",
          marginBottom: "20px",
          color: "white",
          marginTop: "20px",
          _hover: {
            opacity: 0.7,
          },
        },
        "submit": {
          background: "#8D81E8",
          color: "#fff",
          border: "none",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "19px",
          borderRadius: "10px",
          padding: "15px 30px",
          _hover: {
            background: "#6753fa",
          },
        },
        "cancel": {
          background: "none",
          border: "1px solid #000",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "19px",
          borderRadius: "10px",
          padding: "15px 30px",
          _hover: {
            background: "#F7F7F7",
          },
        },
        "popup": {
          background: "#8D81E8",
          width: "100px",
          height: "45",
          marginBottom: "20px",
          color: "white",
          marginTop: "20px",
        },
        "upload": {
          background: "#8D81E8",
          color: "#fff",
          border: "none",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "16px",
          borderRadius: "8px",
          padding: "10px",
          _hover: {
            background: "#6753fa",
          },
        },
      },
      baseStyle: {
        borderRadius: "15px",
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
};
