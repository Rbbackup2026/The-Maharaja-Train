type Name =
  | "phone"
  | "chevron"
  | "menu"
  | "close"
  | "play"
  | "window"
  | "bell"
  | "shield"
  | "cloche"
  | "clock"
  | "quote"
  | "facebook"
  | "instagram"
  | "youtube"
  | "whatsapp"
  | "mail"
  | "arrow";

const paths: Record<Name, React.ReactNode> = {
  phone: (
    <path
      transform="translate(0.8 0.8) scale(0.6)"
      d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"
      fill="currentColor"
    />
  ),
  chevron: <path d="M3 6.5 8 11.5 13 6.5" />,
  menu: (
    <>
      <path d="M2 5h12" />
      <path d="M2 11h12" />
    </>
  ),
  close: (
    <>
      <path d="M3 3l10 10" />
      <path d="M13 3 3 13" />
    </>
  ),
  play: <path d="M7 5.5v9l8-4.5-8-4.5Z" fill="currentColor" />,
  window: (
    <>
      <path d="M3 15V7.5L8 4l5 3.5V15" />
      <path d="M6.5 15v-4h3v4" />
    </>
  ),
  bell: (
    <>
      <path d="M8 3.5a4 4 0 0 0-4 4.2c0 2.2-.6 3.2-1.3 4h10.6c-.7-.8-1.3-1.8-1.3-4A4 4 0 0 0 8 3.5Z" />
      <path d="M6.6 13.2a1.5 1.5 0 0 0 2.8 0" />
    </>
  ),
  shield: <path d="M8 2.8 13 4.6v4.2c0 3-1.8 4.8-5 6-3.2-1.2-5-3-5-6V4.6L8 2.8Z" />,
  cloche: (
    <>
      <path d="M3 12.5h10" />
      <path d="M4.2 12.5a3.8 3.8 0 0 1 7.6 0" />
      <path d="M8 4.2v1.2" />
    </>
  ),
  clock: (
    <>
      <circle cx="8" cy="8" r="5.2" />
      <path d="M8 5.4V8l1.8 1.4" />
    </>
  ),
  quote: (
    <path
      d="M3.2 11.2c0-2.6 1.6-4.6 4-5.6l.5 1.1c-1.5.7-2.3 1.8-2.3 3h2.1v3.4H3.2v-1.9Zm6.2 0c0-2.6 1.6-4.6 4-5.6l.5 1.1c-1.5.7-2.3 1.8-2.3 3H14v3.4H9.4v-1.9Z"
      fill="currentColor"
    />
  ),
  facebook: <path d="M9 14V8.6h1.4V7.2c0-1.5.7-2.3 2.3-2.3H14v1.5h-1c-.6 0-.8.3-.8.9v1.3H14L13.7 8.6h-1.5V14" />,
  instagram: (
    <>
      <rect x="3" y="3" width="10" height="10" rx="2.5" />
      <circle cx="8" cy="8" r="2.3" />
      <circle cx="11.2" cy="4.8" r="0.6" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <rect x="1.5" y="4" width="13" height="8" rx="1.6" />
      <path d="M7 6.4v3.2L10 8 7 6.4Z" fill="currentColor" stroke="none" />
    </>
  ),
  whatsapp: (
    <path d="M8 2.6a5.4 5.4 0 0 0-4.6 8.2L2.6 13.4l2.7-.7A5.4 5.4 0 1 0 8 2.6Zm2.6 7.3c-.1.3-.6.6-1 .6-.3 0-.7.1-2.2-.7-1.8-.9-2.4-2.5-2.5-2.6-.1-.2-.5-.7-.5-1.2s.3-.9.5-1 .3-.2.4-.2h.3c.1 0 .2 0 .3.3l.5 1.2c0 .1 0 .2 0 .3l-.2.3-.2.2c-.1.1-.1.2 0 .3.2.3.6.9 1.2 1.4.8.6 1.4.8 1.6.9.1 0 .2 0 .3-.1l.4-.5c.1-.1.2-.1.3 0l1.1.5c.1.1.2.1.2.2 0 .2 0 .6-.2.8Z" />
  ),
  mail: (
    <>
      <rect x="2.2" y="3.8" width="11.6" height="8.4" rx="0.6" />
      <path d="m2.6 4.4 5.4 4.2 5.4-4.2" />
    </>
  ),
  arrow: <path d="M3 8h10M9.5 4.5 13 8l-3.5 3.5" />,
};

export function Icon({ name }: { name: Name }) {
  const filled = name === "phone" || name === "play" || name === "quote" || name === "whatsapp";
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
