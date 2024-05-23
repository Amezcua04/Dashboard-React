import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
    ...(mode === 'dark'
    ? {
        grey: {
            50: "#f3f3f3",
            100: "#e7e7e7",
            200: "#c8c8c8",
            300: "#a9a9a9",
            400: "#888888",
            500: "#666666",
            600: "#515151",
            700: "#3e3e3e",
            800: "#323232",
            900: "#282828",
            950: "#171717"
        },
        primary: {
            50: "#ecedee",
            100: "#d9dbdd",
            200: "#abaeb4",
            300: "#7c7f89",
            400: "#1F2A40",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#0a0d16",
            900: "#080b12",
            950: "#04060b"
        },
        greenAccent: {
            50: "#f1fbf8",
            100: "#e2f7f2",
            200: "#bfeee2",
            300: "#9be4d1",
            400: "#74d9bf",
            500: "#4cceac",
            600: "#3da589",
            700: "#2e7c67",
            800: "#256554",
            900: "#1e5244",
            950: "#122f27"
        },
        redAccent: {
            50: "#fcf1f0",
            100: "#f9e3e2",
            200: "#f2c0bf",
            300: "#eb9d99",
            400: "#e37773",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2d",
            800: "#6b2624",
            900: "#561f1d",
            950: "#321211"
        },
        blueAccent: {
            50: "#f3f4ff",
            100: "#e7e8fe",
            200: "#c9ccfe",
            300: "#aaaffd",
            400: "#8a90fb",
            500: "#6870fa",
            600: "#535ac8",
            700: "#3e4396",
            800: "#33377b",
            900: "#292c63",
            950: "#181939"
        },
    }
    : {
        grey: {
            50: "#171717",
            100: "#282828",
            200: "#323232",
            300: "#3e3e3e",
            400: "#515151",
            500: "#666666",
            600: "#888888",
            700: "#a9a9a9",
            800: "#c8c8c8",
            900: "#e7e7e7",
            950: "#f3f3f3",
        },
        primary: {
            50:  "#04060b",
            100: "#080b12",
            200: "#0a0d16",
            300: "#0c101b",
            400: "#f2f0f0",
            500: "#141b2d",
            600: "#494e5c",
            700: "#7c7f89",
            800: "#abaeb4",
            900: "#d9dbdd",
            950: "#ecedee",
        },
        greenAccent: {
            50:  "#122f27",
            100: "#1e5244",
            200: "#256554",
            300: "#2e7c67",
            400: "#3da589",
            500: "#4cceac",
            600: "#74d9bf",
            700: "#9be4d1",
            800: "#bfeee2",
            900: "#e2f7f2",
            950: "#f1fbf8",
        },
        redAccent: {
            50:  "#321211",
            100: "#561f1d",
            200: "#6b2624",
            300: "#832f2d",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e37773",
            700: "#eb9d99",
            800: "#f2c0bf",
            900: "#f9e3e2",
            950: "#fcf1f0",
        },
        blueAccent: {
            50:  "#181939",
            100: "#292c63",
            200: "#33377b",
            300: "#3e4396",
            400: "#535ac8",
            500: "#6870fa",
            600: "#8a90fb",
            700: "#aaaffd",
            800: "#c9ccfe",
            900: "#e7e8fe",
            950: "#f3f4ff",
        },
    })
});

// mui theme setting
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
            ? {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background: {
                    default: colors.primary[500],
                },
            }
            : {
                primary: {
                    main: colors.primary[100],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background: {
                    default: "#fcfcfc",
                },
            }),
        },
// Suggested code may be subject to a license. Learn more: ~LicenseLog:428300327.
        typography: {
            fontFamily: ["Source Sans 3", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 14,
            },
        }
    };
};

// context for color mode
// Suggested code may be subject to a license. Learn more: ~LicenseLog:101989034.
export const colorModeContext = createContext({
    toggleColorMode: () => {}
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