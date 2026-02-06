export const editNetwork = {
  extends: "/add-network",
  onSubmit: async (ev, el, s) => {
    ev.preventDefault();
    await el.call("edit", "network", s.root.protocol);
  },
  Hgroup: {
    margin: "0",
    H: {
      tag: "strong",
      text: "Edit Network",
    },
    P: {
      text: "Edit properties for existing {{ protocol }} network",
    },
  },
};
