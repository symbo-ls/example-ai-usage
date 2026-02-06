export const editNode = {
  Hgroup: {
    margin: "0",
    H: {
      tag: "strong",
      text: "Edit Node",
    },
    P: {
      text: "Edit properties for existing node",
    },
  },
  Form: {},
  Hr: {
    margin: "-A1 0 X",
    opacity: "0.05",
  },
  Form_2: {
    extends: "ModalForm",
    columns: "repeat(2, 1fr)",
    "@mobileM": {
      columns: "repeat(1, 1fr)",
    },
    children: () => [
      {
        gridColumn: "1 / span 2",
        Caption: {
          text: "Status",
        },
        Field: {
          Input: null,
          Select: {
            padding: "A A2",
            round: "C1",
            theme: "field",
            required: true,
            Selects: {
              name: "status",
              children: [
                {
                  text: "Please select",
                  value: "",
                  disabled: "disabled",
                },
                {
                  text: "Off",
                  value: "Off",
                },
                {
                  text: "Onboarding",
                  value: "Onboarding",
                },
                {
                  text: "Live",
                  value: "Live",
                },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === "") return !s.status;
                  return s.status === el.props.value;
                },
              },
            },
            Icon: {
              color: "caption",
              right: "Z",
            },
          },
        },
      },
      {
        Caption: {
          text: "Client version",
        },
        Field: {
          Input: {
            name: "client_version",
            placeholder: "1.2.3...",
            required: true,
            type: "text",
            value: "{{ client_version }}",
          },
        },
      },
      {
        Caption: {
          text: "Env",
        },
        Field: {
          Input: null,
          Select: {
            padding: "A A2",
            round: "C1",
            theme: "field",
            Selects: {
              name: "env",
              required: true,
              children: [
                {
                  text: "Please select",
                  value: "",
                  disabled: "disabled",
                },
                {
                  text: "Testnet",
                  value: "Testnet",
                },
                {
                  text: "Mainnet",
                  value: "Mainnet",
                },
                {
                  text: "Devnet",
                  value: "Devnet",
                },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === "") return !s.env;
                  return s.env === el.props.value;
                },
              },
            },
            Icon: {
              color: "caption",
              right: "Z",
            },
          },
        },
      },
    ],
    tag: "div",
  },
  extends: "/add-node",
  onSubmit: async (ev, el, s) => {
    ev.preventDefault();
    await el.call("edit", "node", s.protocol);
  },
};
