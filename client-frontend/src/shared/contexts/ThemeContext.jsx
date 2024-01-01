import { createContext, useContext, useState} from 'react';

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeContextProvider({children}) {
    const[theme, setTheme] = useState(false);
    const toggleTheme = () => {
        setTheme((prvTheme) => !prvTheme);
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}