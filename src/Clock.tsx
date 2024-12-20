import { useComputed } from "@preact/signals"
import { clock } from "./i18n.ts"

export const Clock = () => {
  const clockIso = useComputed(() => clock.value.toISOString())
  const clockLocale = useComputed(() => clock.value.toLocaleString())

  return (
    <section>
      <time datetime={clockIso}>{clockLocale}</time>
    </section>
  )
}
