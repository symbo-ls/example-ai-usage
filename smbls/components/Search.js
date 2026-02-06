export const Search = {
  extends: "Flex",
  tag: "button",
  minWidth: "G2",
  gap: "Z",
  flexAlign: "center start",
  padding: "Z2 A",
  theme: "field",
  round: "D2",
  cursor: "pointer",
  border: "none",
  transition: "background A defaultBezier",
  ":hover": {
    background: "gray2 .3",
  },
  "@mobileS": {
    minWidth: "G1",
  },
  onClick: () => {
    // Ninja-keys removed - was: const ninja = document.querySelector("ninja-keys"); if (ninja) ninja.open();
  },
  Icon: {
    icon: "search",
    color: "caption",
  },
  Span: {
    tag: "span",
    text: "Search...",
    color: "caption",
    flex: 1,
    textAlign: "left",
  },
  Kbd: {
    tag: "kbd",
    padding: "X1 Z",
    fontSize: "Y2",
    fontFamily: "system-ui",
    background: "gray2 .5",
    round: "X2",
    color: "caption",
    text: "⌘K",
  },
};
