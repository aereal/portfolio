import React, { ChangeEventHandler, FC, FormEvent, useState } from "react"
import Head from "next/head"
import { getController, subscribe } from "../speech"

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

const SpeechForm: FC = () => {
  const [text, setText] = useState("")
  const [isSpeaking, setSpeaking] = useState(false)
  const [voice, setVoice] = useState<SpeechSynthesisVoice | undefined>()
  const [volume, setVolume] = useState(1)
  const [pitch, setPitch] = useState(1)
  const [rate, setRate] = useState(1)
  const ctrl = getController()
  const voices = ctrl.getVoices()
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    if (isSpeaking) {
      ctrl.pause()
    } else {
      const utter = new SpeechSynthesisUtterance(text)
      if (voice !== undefined) {
        utter.voice = voice
      }
      utter.volume = volume
      utter.pitch = pitch
      utter.rate = rate
      setTimeout(async (): Promise<void> => {
        const speechEvents = subscribe(utter)
        for await (const event of speechEvents) {
          console.log(
            `---> received event name=${JSON.stringify(
              event.name
            )} type=${JSON.stringify(event.type)}`
          )
          switch (event.type) {
            case "start":
              console.log("start")
              setSpeaking(true)
              break
            case "error":
              console.log(
                `---> error ${(event as SpeechSynthesisErrorEvent).error}`
              )
              break
            case "end":
              setSpeaking(false)
              break
          }
        }
      }, 0)
      ctrl.speak(utter)
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
      <button type="submit">{isSpeaking ? "Pause" : "Play"}</button>
    </form>
  )
}

const SpeechPage: FC = () => (
  <>
    <Head>
      <title>Speech Example</title>
    </Head>
    <SpeechForm />
  </>
)
export default SpeechPage
