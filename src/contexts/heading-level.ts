import { createContext, useContext } from "react"

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" // TODO: use Template Literal types

export const HeadingLevelContext = createContext<HeadingLevel>(1)

export const useCurrentHeadingLevel = (): HeadingLevel => {
  const headingLevel = useContext(HeadingLevelContext)
  return headingLevel
}

const mapping: Record<HeadingLevel, HeadingElement> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
}

export const asHeadingElement = (
  level: HeadingLevel
): "h1" | "h2" | "h3" | "h4" | "h5" | "h6" => mapping[level]

export const useNextHeadingLevel = (): HeadingLevel => {
  const current = useContext(HeadingLevelContext)
  switch (current) {
    case 1:
      return 2
    case 2:
      return 3
    case 3:
      return 4
    case 4:
      return 5
    case 5:
      return 6
    case 6:
      return 6
  }
}
