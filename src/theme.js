import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color desgin token
export const tokens = (mode) => ({
    ...(mode === "dark"
      ? {
        grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        purple: {
          100: "#e6cce6",
          200: "#cc99cc",
          300: "#b366b3",
          400: "#993399",
          500: "#8A2BE2",
          600: "#660066",
          700: "#4d004d",
          800: "#330033",
          900: "#1a001a"
},
        white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333" },
        primary: {
          100: "#cecece",
          200: "#9c9c9c",
          300: "#6b6b6b",
          400: "#393939",
          500: "#080808",
          600: "#060606",
          700: "#050505",
          800: "#030303",
          900: "#020202"
        },
        greenAccent: {
            100: "#d8efd9",
            200: "#b1dfb4",
            300: "#8ad08e",
            400: "#63c069",
            500: "#3cb043",
            600: "#308d36",
            700: "#246a28",
            800: "#18461b",
            900: "#0c230d"
        },
        redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f"
        },
        blueAccent: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#3E8EDE",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632"
        },
    }
    :{
        grey: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
        },

        white: {
          100: "#333333",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#ffffff"
         },
         purple: {
          100: "#e6cce6",
          200: "#cc99cc",
          300: "#b366b3",
          400: "#993399",
          500: "#8A2BE2",
          600: "#660066",
          700: "#4d004d",
          800: "#330033",
          900: "#1a001a"
},

        primary:{
          100: "#020202",
          200: "#030303",
          300: "#050505",
          400: "#060606",
          500: "#080808",
          600: "#393939",
          700: "#6b6b6b",
          800: "#9c9c9c",
          900: "#cecece",
        },
       
        greenAccent: {
            100: "#0c230d",
            200: "#18461b",
            300: "#246a28",
            400: "#308d36",
            500: "#3cb043",
            600: "#63c069",
            700: "#8ad08e",
            800: "#b1dfb4",
            900: "#d8efd9"
        },
        redAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb",
        },
        blueAccent: {
            100: "#151632",
            200: "#2a2d64",
            300: "#3e4396",
            400: "#535ac8",
            500: "#3E8EDE",
            600: "#868dfb",
            700: "#a4a9fc",
            800: "#c3c6fd",
            900: "#e1e2fe",
        }, 
    }),
});

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                main: colors.primary[700],
              },
              secondary: {
                main: colors.blueAccent[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[400],
                light: colors.grey[100],
              },
              background: {
                default: colors.primary[500],
              },
            }
          : {
              // palette values for light mode
              primary: {
                main: colors.primary[700],
              },
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: { 
                dark: colors.grey[700],
                main: colors.grey[400],
                light: colors.grey[100],
              },
              background: {
                default: "#fcfcfc",
              },
            }),
      },
      typography: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
      select: {
        backgroundColor: colors.grey[200],
        fontWeight: 600
      },
      paper: {
        background: "red",
        color: "white"
      },

      }
    };
  
  // context for color mode
  export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });
  
  export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };

 