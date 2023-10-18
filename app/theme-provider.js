'use client'
 
import { createContext } from 'react'
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const [selectedSc,setSelectedSc] = useState()


  const cambiarDarkTheme = () => setDarkTheme(!darkTheme);
  
  return <ThemeContext.Provider value={{darkTheme,cambiarDarkTheme}}>{children}</ThemeContext.Provider>
}