export const addNode = {
  extends: "FormModal",
  tag: "form",
  gap: "C",
  width: "80%",
  maxWidth: "I",
  onSubmit: async (ev, el, s) => {
    ev.preventDefault();
    await el.call("add", "node");
  },
  Hgroup: {
    margin: "0",
    H: {
      tag: "strong",
      text: "Add node",
    },
    P: {
      text: "Add node in {{ protocol }} network",
    },
  },
  Form: {
    columns: "repeat(2, 1fr)",
    "@mobileM": {
      columns: "repeat(1, 1fr)",
    },
    children: () => [
      // Moniker - all node types
      {
        gridColumn: "1 / span 2",
        Caption: { text: "Moniker" },
        Field: {
          Input: {
            name: "moniker",
            placeholder: "E.g. Bcw-Technologies",
            type: "text",
            required: true,
            value: "{{ moniker }}",
          },
        },
      },
      // Node type - all node types
      {
        Caption: { text: "Node type" },
        Field: {
          Input: null,
          Select: {
            padding: "A A2",
            round: "C1",
            theme: "field",
            onChange: (ev, el, s) => {
              s.update({ nodeType: ev.target.value });
            },
            Selects: {
              name: "nodeType",
              required: true,
              children: [
                { text: "Please select", value: "", disabled: "disabled" },
                { text: "Validator", value: "validator" },
                { text: "RPC", value: "rpc" },
                { text: "Archival-RPC", value: "archival-RPC" },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === "") return !s.nodeType;
                  return s.nodeType === el.props.value;
                },
              },
            },
            Icon: { color: "caption", right: "Z" },
          },
        },
      },
      // Cloud Provider - all node types
      {
        Caption: { text: "Cloud Provider" },
        Field: {
          Input: null,
          Select: {
            padding: "A A2",
            round: "C1",
            theme: "field",
            Selects: {
              name: "cloud_provider",
              required: true,
              children: [
                { text: "Please select", value: "", disabled: "disabled" },
                { text: "AWS", value: "AWS" },
                { text: "GCP", value: "GCP" },
                { text: "Latitude", value: "Latitude" },
                { text: "OVH", value: "OVH" },
                { text: "Nirvana", value: "Nirvana" },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === "") return !s.cloud_provider;
                  return s.cloud_provider === el.props.value;
                },
              },
            },
            Icon: { color: "caption", right: "Z" },
          },
        },
      },
      // Priority - all node types
      {
        Caption: { text: "Priority" },
        Field: {
          Input: null,
          Select: {
            padding: "A A2",
            round: "C1",
            theme: "field",
            Selects: {
              name: "category",
              required: true,
              children: [
                { text: "Please select", value: "", disabled: "disabled" },
                { text: "P1", value: "P1" },
                { text: "P2", value: "P2" },
                { text: "P3", value: "P3" },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === "") return !s.category;
                  return s.category === el.props.value;
                },
              },
            },
            Icon: { color: "caption", right: "Z" },
          },
        },
      },
      // Do we manage proposals - VALIDATOR ONLY
      {
        if: (_, s) => s.nodeType === "validator",
        Caption: { text: "Do we manage proposals?" },
        Field: {
          Input: null,
          Select: {
            padding: "A A2",
            round: "C1",
            theme: "field",
            Selects: {
              name: "do_we_manage_proposals",
              children: [
                { text: "Please select", value: "", disabled: "disabled" },
                { text: "Yes", value: "Yes" },
                { text: "No", value: "No" },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === "") return !s.do_we_manage_proposals;
                  return s.do_we_manage_proposals === el.props.value;
                },
              },
            },
            Icon: { color: "caption", right: "Z" },
          },
        },
      },
      // SLA - all node types
      {
        Caption: { text: "SLA" },
        Field: {
          Input: {
            name: "sla",
            placeholder: "99.99%",
            value: "{{ sla }}",
          },
        },
      },
      // Projected Cost - all node types
      {
        Caption: { text: "Projected Cost" },
        Field: {
          Input: {
            name: "projected_cost",
            placeholder: "$2,911.00",
            value: "{{ projected_cost }}",
          },
        },
      },
      // Node Operator - all node types
      {
        Caption: { text: "Node Operator" },
        Field: {
          Input: null,
          Select: {
            padding: "A A2",
            round: "C1",
            theme: "field",
            Selects: {
              name: "owner",
              children: [
                { text: "Please select", value: "", disabled: "disabled" },
                { text: "Tornike", value: "Tornike" },
                { text: "Peter", value: "Peter" },
                { text: "Yan", value: "Yan" },
                { text: "Patrick", value: "Patrick" },
                { text: "Prashant", value: "Prashant" },
                { text: "Ankit", value: "Ankit" },
                { text: "Raja", value: "Raja" },
                { text: "Reza", value: "Reza" },
                { text: "Tommy", value: "Tommy" },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === "") return !s.owner;
                  return s.owner === el.props.value;
                },
              },
            },
            Icon: { color: "caption", right: "Z" },
          },
        },
      },
      // Reward claim - VALIDATOR ONLY
      {
        if: (_, s) => s.nodeType === "validator",
        Caption: { text: "Reward claim" },
        Field: {
          Input: null,
          Select: {
            padding: "A A2",
            round: "C1",
            theme: "field",
            Selects: {
              name: "reward_claim",
              children: [
                { text: "Please select", value: "", disabled: "disabled" },
                { text: "Automatic", value: "Automatic" },
                { text: "Manual", value: "Manual" },
              ],
              childProps: {
                selected: (el, s) => {
                  if (el.props.value === "") return !s.reward_claim;
                  return s.reward_claim === el.props.value;
                },
              },
            },
            Icon: { color: "caption", right: "Z" },
          },
        },
      },
      // Public key - VALIDATOR ONLY
      {
        if: (_, s) => s.nodeType === "validator",
        gridColumn: "1 / span 2",
        Caption: { text: "Public key" },
        Field: {
          Input: {
            name: "public_key",
            placeholder: "Public key",
            value: "{{ public_key }}",
          },
        },
      },
      // Reward address - VALIDATOR ONLY
      {
        if: (_, s) => s.nodeType === "validator",
        gridColumn: "1 / span 2",
        Caption: { text: "Reward address" },
        Field: {
          Input: {
            name: "reward_address",
            placeholder: "Reward address",
            value: "{{ reward_address }}",
          },
        },
      },
      // Explorer Link - VALIDATOR ONLY
      {
        if: (_, s) => s.nodeType === "validator",
        gridColumn: "1 / span 2",
        Caption: { text: "Explorer Link" },
        Field: {
          Input: {
            name: "explorer_link",
            placeholder: "Explorer link",
            value: "{{ explorer_link }}",
          },
        },
      },
      // Knowledge Base - VALIDATOR ONLY
      {
        if: (_, s) => s.nodeType === "validator",
        gridColumn: "1 / span 2",
        Caption: { text: "Knowledge Base" },
        Field: {
          Input: {
            name: "knowledge_base",
            placeholder: "Knowledge base URL",
            value: "{{ knowledge_base }}",
          },
        },
      },
    ],
    tag: "div",
  },
  Button: {
    text: "Save",
    theme: "primary",
    type: "submit",
  },
};
