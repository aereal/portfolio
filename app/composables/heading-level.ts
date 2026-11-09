import type { InjectionKey } from "vue"

const headingLevelKey: InjectionKey<number> = Symbol("heading-level")

export const useHeadingLevel = (): number => inject(headingLevelKey, 1)

export const provideNextHeadingLevel = (): void => {
  provide(headingLevelKey, useHeadingLevel() + 1)
}
