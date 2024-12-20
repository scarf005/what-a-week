import "./app.css"
import { Clock } from "./Clock.tsx"
import { Dialogue } from "./Dialogue.tsx"
import { Footer } from "./Footer.tsx"

export const App = () => {
  return (
    <main id="app">
      <Dialogue />
      <Clock />
      <Footer />
    </main>
  )
}
