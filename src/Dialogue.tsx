import type { ReadonlySignal } from "@preact/signals"
import { day, userLocale } from "./i18n.ts"

export const KannaDialogue = () => {
  switch (userLocale) {
    case "ko":
    case "ko-KR":
      return "힘든 한 주였어, 안 그래?"
    default:
      return "What a week, huh?"
  }
}

export const MobDialogue = ({ day }: { day: ReadonlySignal<string> }) => {
  switch (userLocale) {
    case "ko":
    case "ko-KR":
      return (
        <>
          <p>국장님, 이제</p>
          <p>{day}입니다.</p>
        </>
      )
    default:
      return (
        <>
          <p>Director, it's</p>
          <p>{day}</p>
        </>
      )
  }
}

export const Dialogue = () => {
  return (
    <section id="dialogue">
      <img src="./kanna.png" />
      <h2 id="kanna">
        <KannaDialogue />
      </h2>
      <h2 id="mob">
        <MobDialogue day={day} />
      </h2>
    </section>
  )
}
