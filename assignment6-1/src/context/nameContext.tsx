'use client'

import { createContext, ReactNode, useState, useContext } from "react"

type NameProps = {
  name: string,
  setName: (name: string)=>void
}

const NameContext = createContext<NameProps | undefined>(undefined)

export function NameContextProvider(props: {children: ReactNode}){
  const [name, setName] = useState<string>("")
  return(
    <NameContext.Provider value={{name: name, setName: setName}}>
      {props.children}
    </NameContext.Provider>
  )
}

export function useNameContext(){
  const context = useContext(NameContext)
  if (!context){
    throw Error("Context Not Defined")
  }
  return context
}