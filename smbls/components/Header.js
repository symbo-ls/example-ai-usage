export const Header = {
  extends: "Flex",
  minWidth: "G2",
  icon: "search",
  align: "center flex-start",
  position: "relative",
  theme: "dialog",
  round: "D2",
  ":focus-visible": {
    outline: "solid, X, blue .3",
  },
  ":focus-within ~ .content": {
    opacity: 0.3,
    pointerEvents: "none",
  },
  ":focus-within ~ .search-results": {
    opacity: 0.3,
  },
  ":focus-within": {
    "@dark": {
      background: "softBlack .95 +4",
    },
    "@light": {
      background: "gray1 .95",
    },
  },
  Link: {
    extends: ["Link", "IconButton"],
    paddingInline: "A Z1",
    icon: "chevron left",
    href: "/",
    theme: null,
    hide: () => window.location.pathname === "/",
    borderRadius: "0",
    border: null,
    borderWidth: "0 1px 0 0",
    borderStyle: "solid",
    borderColor: "deepFir",
    style: null,
  },
  Search: {
    flex: 1,
  },
  Avatar: {
    boxSize: "B",
    margin: "Z",
    src: (el, s) =>
      s.root.user?.picture ||
      `https://avatars.symbo.ls/initials/png?seed=${s.root.user?.name}`,
  },
};
