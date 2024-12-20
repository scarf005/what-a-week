import { computed, signal } from "@preact/signals"

export const userLocale = navigator.language || "en-US"
const formatter = new Intl.DateTimeFormat(userLocale, { weekday: "long" })

export const clock = signal(new Date())
setInterval(() => clock.value = new Date(), 1000)

export const day = computed(() => formatter.format(clock.value))
