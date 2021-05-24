import React, { ChangeEventHandler, FC, FormEvent, useState } from "react"
import Head from "next/head"
import { getController, subscribeUtterance } from "../speech"

const SinglePointRangeInput: FC<{
  readonly min: number
  readonly max: number
  readonly step: number
  readonly defaultValue: number
  readonly onChange: (value: number) => void
}> = ({ min, max, defaultValue, step, onChange }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.currentTarget.valueAsNumber)
  }
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  )
}

const VolumeInput: FC<{ readonly onChange: (volume: number) => void }> = ({
  onChange,
}) => (
  <div>
    <label>
      Volume:
      <SinglePointRangeInput
        defaultValue={1}
        min={0}
        max={0}
        step={0.1}
        onChange={onChange}
      />
    </label>
  </div>
)

const PitchInput: FC<{ readonly onChange: (pitch: number) => void }> = ({
  onChange,
}) => (
  <div>
    <label>
      Pitch:
      <SinglePointRangeInput
        defaultValue={1}
        min={0}
        max={2}
        step={0.1}
        onChange={onChange}
      />
    </label>
  </div>
)

const RateInput: FC<{ readonly onChange: (rate: number) => void }> = ({
  onChange,
}) => (
  <div>
    <label>
      Rate:
      <SinglePointRangeInput
        defaultValue={1}
        min={0.1}
        max={10}
        step={0.1}
        onChange={onChange}
      />
    </label>
  </div>
)

const SpeechVoicesList: FC<{
  readonly voices: SpeechSynthesisVoice[]
  readonly onSelect: (voice: SpeechSynthesisVoice) => void
}> = ({ voices, onSelect }) => {
  const voiceByName = voices.reduce(
    (accum, voice) => ({
      ...accum,
      [voice.name]: voice,
    }),
    {} as { [key: string]: SpeechSynthesisVoice }
  )
  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selected = voiceByName[e.currentTarget.value]
    if (selected !== undefined) {
      onSelect(selected)
    }
  }
  return (
    <>
      <select onChange={handleSelect}>
        {voices.map((voice) => (
          <option key={voice.voiceURI} value={voice.voiceURI}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
    </>
  )
}

const speechConditions = ["waiting", "speaking", "pausing"] as const
type SpeechCondition = typeof speechConditions[number]

const SpeechForm: FC = () => {
  const [text, setText] = useState("")
  const [condition, setCondition] = useState<SpeechCondition>("waiting")
  const [voice, setVoice] = useState<SpeechSynthesisVoice | undefined>()
  const [volume, setVolume] = useState(1)
  const [pitch, setPitch] = useState(1)
  const [rate, setRate] = useState(1)
  const ctrl = getController()
  const voices = ctrl.getVoices()
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    console.log(`submitted; condition=${condition}`)
    const utter = new SpeechSynthesisUtterance(text)
    switch (condition) {
      case "pausing":
        ctrl.resume()
        setCondition("speaking")
        break
      case "speaking":
        ctrl.pause()
        setCondition("pausing")
        break
      case "waiting":
        if (voice !== undefined) {
          utter.voice = voice
        }
        utter.volume = volume
        utter.pitch = pitch
        utter.rate = rate
        setTimeout(async (): Promise<void> => {
          const speechEvents = subscribeUtterance(utter)
          for await (const event of speechEvents) {
            console.log(
              `---> received event name=${JSON.stringify(
                event.name
              )} type=${JSON.stringify(event.type)}`
            )
            switch (event.type) {
              case "start":
                console.log("start")
                setCondition("speaking")
                break
              case "error":
                setCondition("waiting")
                console.log(
                  `---> error ${(event as SpeechSynthesisErrorEvent).error}`
                )
                break
              case "end":
                setCondition("waiting")
                break
            }
          }
        }, 0)
        ctrl.speak(utter)
        break
    }
  }
  const handleChangeVoice = (selectedVoice: SpeechSynthesisVoice): void =>
    setVoice(selectedVoice)
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setText(e.currentTarget.value)
  const handleVolumeChange = (newVolume: number): void => setVolume(newVolume)
  const handlePitchChange = (nextPitch: number): void => setPitch(nextPitch)
  const handleRateChange = (nextRate: number): void => setRate(nextRate)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <SpeechVoicesList voices={voices} onSelect={handleChangeVoice} />
      </div>
      <div>
        <input type="text" onChange={handleChange} />
      </div>
      <VolumeInput onChange={handleVolumeChange} />
      <PitchInput onChange={handlePitchChange} />
      <RateInput onChange={handleRateChange} />
      <SubmitButton speechCondition={condition} />
    </form>
  )
}

const buttonLabel: Record<SpeechCondition, string> = {
  pausing: String.fromCodePoint(0x25b6, 0xfe0f),
  waiting: String.fromCodePoint(0x25b6, 0xfe0f),
  speaking: String.fromCodePoint(0x23f8),
}

const SubmitButton: FC<{ readonly speechCondition: SpeechCondition }> = ({
  speechCondition,
}) => <button type="submit">{buttonLabel[speechCondition]}</button>

const SpeechPage: FC = () => (
  <>
    <Head>
      <title>Speech Example</title>
    </Head>
    <SpeechForm />
  </>
)
export default SpeechPage
