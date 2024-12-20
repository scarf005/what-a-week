import type { JSX } from "preact"

export const SocialIcon = (
  { href, ...rest }:
    & { href: string }
    & JSX.ImgHTMLAttributes<HTMLImageElement>,
) => (
  <a href={href} class=".social-icon" target="_blank" rel="noopener noreferrer">
    <img {...rest} width="36px" />
  </a>
)
