import { userLocale } from "./i18n.ts"
import { SocialIcon } from "./SocialIcon.tsx"

const artworkURL = "https://www.pixiv.net/artworks/115651167"
const authorURL = "https://www.pixiv.net/users/86417779"

const Attribution = () => {
  switch (userLocale) {
    case "ko":
    case "ko-KR":
      return (
        <p>
          작가: <a href={authorURL}>Maven</a>
        </p>
      )
    default:
      return (
        <>
          <a href={artworkURL}>Original artwork</a> by{" "}
          <a href={authorURL}>Maven</a>
        </>
      )
  }
}

export const Footer = () => (
  <footer>
    <Attribution />
    <SocialIcon
      src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Pixiv_Icon.svg"
      href={artworkURL}
    />
    <SocialIcon
      src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
      href="https://github.com/scarf005/what-a-week"
    />
  </footer>
)
