import { EventIterator } from "event-iterator"

const voidController: SpeechController = {
  getVoices: () => [],
  cancel: () => {
    // no-op
  },
  pause: () => {
    // no-op
  },
  resume: () => {
    // no-op
  },
  speak: () => {
    // no-op
  },
  addEventListener: () => {
    // no-op
  },
  removeEventListener: () => {
    // no-op
  },
}

export const getController = (): SpeechController => {
  if (typeof window === "undefined") {
    return voidController
  }
  return window.speechSynthesis
}

type Events = SpeechSynthesisEventMap & SpeechSynthesisUtteranceEventMap
type EventKinds = keyof Events

export interface SpeechController {
  readonly getVoices: () => SpeechSynthesisVoice[]
  readonly cancel: () => void
  readonly pause: () => void
  readonly resume: () => void
  readonly speak: (utterance: SpeechSynthesisUtterance) => void
  readonly addEventListener: <K extends EventKinds>(
    kind: K,
    listener: (this: SpeechController, event: Events[K]) => void
  ) => void
  readonly removeEventListener: <K extends EventKinds>(
    kind: K,
    listener: (this: SpeechController, event: Events[K]) => void
  ) => void
}

const continueableEvents = [
  "pause",
  "resume",
  "start",
  "mark",
  "boundary",
] as const
const finishEvents = ["end", "error"] as const
const events = [...continueableEvents, ...finishEvents] as const

export const subscribeUtterance = (
  utterance: SpeechSynthesisUtterance
): EventIterator<SpeechSynthesisEvent | SpeechSynthesisErrorEvent> =>
  new EventIterator<SpeechSynthesisEvent | SpeechSynthesisErrorEvent>(
    ({ push, stop }) => {
      for (const event of events) {
        utterance.addEventListener(event, push)
      }
      for (const event of finishEvents) {
        utterance.addEventListener(event, stop)
      }
      return () => {
        for (const event of events) {
          utterance.removeEventListener(event, push)
        }
        for (const event of finishEvents) {
          utterance.removeEventListener(event, stop)
        }
      }
    }
  )

export const subscribeController = (
  controller: SpeechController
): EventIterator<SpeechSynthesisEvent | SpeechSynthesisErrorEvent> =>
  new EventIterator<SpeechSynthesisEvent | SpeechSynthesisErrorEvent>(
    ({ push, stop }) => {
      for (const event of events) {
        controller.addEventListener(event, push)
      }
      for (const event of finishEvents) {
        controller.addEventListener(event, stop)
      }
      return () => {
        for (const event of events) {
          controller.removeEventListener(event, push)
        }
        for (const event of finishEvents) {
          controller.removeEventListener(event, stop)
        }
      }
    }
  )
