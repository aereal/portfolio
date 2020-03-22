import { createContext, useContext } from "react"

export const HeadingLevelContext = createContext<number>(1)

export const useHeadingLevel = (): number => {
  const headingLevel = useContext(HeadingLevelContext)
  return headingLevel
}
