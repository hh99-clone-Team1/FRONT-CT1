function LogoIcon({ color }) {
  return (
    <svg height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" role="img" fill={color}>
      <path d="M0 12a12 12 0 0 0 7.73 11.22 12 12 0 0 1 .03-3.57l1.4-5.94S8.8 13 8.8 11.94c0-1.66.96-2.9 2.16-2.9 1.02 0 1.51.77 1.51 1.68 0 1.03-.65 2.56-.99 3.98-.28 1.19.6 2.16 1.77 2.16 2.12 0 3.76-2.24 3.76-5.47 0-2.86-2.06-4.86-5-4.86a5.17 5.17 0 0 0-5.39 5.18c0 1.03.4 2.13.9 2.73q.12.17.08.34l-.34 1.36q-.06.31-.4.16c-1.49-.7-2.42-2.88-2.42-4.63 0-3.77 2.74-7.23 7.9-7.23 4.14 0 7.36 2.95 7.36 6.9 0 4.12-2.6 7.43-6.2 7.43-1.21 0-2.35-.63-2.74-1.37l-.74 2.84a14 14 0 0 1-1.55 3.23A12 12 0 1 0 0 12" />
    </svg>
  );
}

function NoticeIcon({ color }) {
  return (
    <svg height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" role="img" fill={color}>
      <path d="M19 7v6.17A10 10 0 0 1 22 19H2a10 10 0 0 1 3-5.83V7a7 7 0 1 1 14 0m-4 14a3 3 0 1 1-6 0z" />
    </svg>
  );
}

function ChatIcon({ color }) {
  return (
    <svg
      className="Hn_ BNH gUZ U9O kVc"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
      fill={color}
    >
      <path d="M18 12.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-6-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 0a11 11 0 0 0-8.52 17.95l-1.46 5.43a.5.5 0 0 0 .73.55l5.08-2.75A10.98 10.98 0 0 0 23 11 11 11 0 0 0 12 0" />
    </svg>
  );
}

function DropdownIcon({ color }) {
  return (
    <svg
      className="BNH gUZ U9O kVc"
      height="12"
      width="12"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill={color}
      role="img"
    >
      <path d="M20.16 6.65 12 14.71 3.84 6.65a2.27 2.27 0 0 0-3.18 0 2.2 2.2 0 0 0 0 3.15L12 21 23.34 9.8a2.2 2.2 0 0 0 0-3.15 2.26 2.26 0 0 0-3.18 0" />
    </svg>
  );
}

function SearchIcon({ color }) {
  return (
    <svg
      className="BNH gUZ U9O kVc"
      height="16"
      width="16"
      viewBox="0 0 24 24"
      aria-label="검색 아이콘"
      role="img"
      fill={color}
    >
      <path d="M10 16a6 6 0 1 1 .01-12.01A6 6 0 0 1 10 16m13.12 2.88-4.26-4.26a10 10 0 1 0-4.24 4.24l4.26 4.26a3 3 0 1 0 4.24-4.24" />
    </svg>
  );
}

export { LogoIcon, NoticeIcon, ChatIcon, DropdownIcon, SearchIcon };
