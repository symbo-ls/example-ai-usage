export const ModalForm = {
  tag: "form",
  extends: "Grid",
  childExtends: "FieldCaption",
  gap: "B",
  justifyItems: "stretch",
  alignItems: "stretch",
  childProps: {
    minWidth: "100%",
    maxWidth: "100%",
    align: "flex-start flex-start",
    "> label": {
      width: "100%",
    },
    "> *": {
      width: "100%",
    },
  },
  children: [{}],
  childrenAs: "props",
};
