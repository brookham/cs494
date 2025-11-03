'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

// create a type for your props
type ThemeProps = {
    darkMode: boolean,
    setDarkMode: (Darkmode: boolean) => void
}

// create a context variable
const ThemeContext = createContext<ThemeProps | undefined>(undefined)


// create a context provider
export function ThemeContextProvider(props: {children: ReactNode}){
    const [darkMode, setDarkMode] = useState<boolean>(true)

    // return the context.provider component, ensuring the values align with the context props
    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

// create a profile function
export function useThemeContext(){
    const context = useContext(ThemeContext)
  if (!context){
    throw Error("Context Not Defined")
  }
  return context
}
