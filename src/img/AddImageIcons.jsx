function SideOpenIcon({ color }) {
  return (
    <svg height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" role="img" fill={color}>
      <path d="M4.51524 20.5516L11.9051 13.0822C12.0717 12.9273 12.1904 12.7616 12.2613 12.5852C12.3321 12.4088 12.3676 12.2234 12.3676 12.0288C12.3676 11.8343 12.3321 11.6425 12.2613 11.4535C12.1904 11.2645 12.0717 11.0925 11.9051 10.9375L4.51524 3.4302C4.22096 3.13128 3.87532 2.98813 3.47831 3.00077C3.08127 3.01341 2.73563 3.16919 2.44138 3.46812C2.14713 3.76704 2 4.11818 2 4.52153C2 4.92487 2.14713 5.27601 2.44138 5.57494L8.7943 12.0288L2.44138 18.4827C2.14713 18.7816 2.00351 19.1264 2.01052 19.5172C2.01757 19.9079 2.16118 20.2527 2.44138 20.5516C2.74969 20.8505 3.09884 21 3.48883 21C3.87883 21 4.22096 20.8505 4.51524 20.5516ZM14.1477 20.5516L21.5375 13.0822C21.7041 12.9273 21.8229 12.7616 21.8937 12.5852C21.9646 12.4088 22 12.2234 22 12.0288C22 11.8343 21.9646 11.6425 21.8937 11.4535C21.8229 11.2645 21.7041 11.0925 21.5375 10.9375L14.1477 3.4302C13.8534 3.13128 13.5078 2.98813 13.1108 3.00077C12.7137 3.01341 12.3681 3.16919 12.0738 3.46812C11.7796 3.76704 11.6324 4.11818 11.6324 4.52153C11.6324 4.92487 11.7796 5.27601 12.0738 5.57494L18.4478 12.0288L12.0738 18.4827C11.7796 18.7816 11.636 19.1264 11.643 19.5172C11.65 19.9079 11.7936 20.2527 12.0738 20.5516C12.3822 20.8505 12.7313 21 13.1213 21C13.5113 21 13.8534 20.8505 14.1477 20.5516Z" />
    </svg>
  );
}

function PlusIcon({ color }) {
  return (
    <svg height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" role="img" fill={color}>
      <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4" />
    </svg>
  );
}

function UploadIcon({ color }) {
  return (
    <svg height="30" width="30" viewBox="0 0 24 24" aria-hidden="true" role="img" fill={color}>
      <path d="M24 12a12 12 0 1 0-24 0 12 12 0 0 0 24 0m-10.77 3.75a1.25 1.25 0 0 1-2.5 0V11.8L9.7 12.83a1.25 1.25 0 0 1-1.77-1.77L12 7l4.07 4.06a1.25 1.25 0 0 1-1.77 1.77l-1.07-1.06z" />
    </svg>
  );
}

function EditIcon({ color }) {
  return (
    <svg height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" role="img" fill={color}>
      <path d="M17.45 1.95a3.25 3.25 0 1 1 4.6 4.6l-2.3 2.3-4.6-4.6zM2.5 16.9 13.4 6.02l4.6 4.6L7.08 21.5 1 23z" />
    </svg>
  );
}

export { SideOpenIcon, PlusIcon, UploadIcon, EditIcon };