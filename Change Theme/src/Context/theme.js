import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext({
    // We Comment this but ref is u can direct pass some veriable and function by default in useContext
    // themeMode : "light",
    // // darkTheme : () => {},
    // // lightTheme : () =>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}

