export const ValidatorContent = {
  extends: 'Flex',
  props: {
    width: '100%',
    flow: 'y',
    gap: 'B',
    padding: 'A2',
    onClick: (ev, el, s) => {
      ev.stopPropagation()
      ev.preventDefault()
    },
  },

  // Section 1: Operations
  Section_operations: {
    flow: 'y',
    gap: 'A',
    padding: 'A',
    round: 'A',
    background: 'black .3',
    SectionHeader: {
      fontSize: 'Z',
      fontWeight: '600',
      color: '#94a3b8',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      margin: '0 0 Y 0',
      text: 'Operations',
    },
    Grid: {
      childExtends: 'PreviewItem',
      gap: 'A',
      columns: 'repeat(4, 1fr)',
      Owner: {
        P: { text: 'Node Operator' },
        H: {
          hide: (el, s) => s.owner,
          text: 'n/a',
          fontWeight: '300',
          color: 'caption',
        },
        LabelTag: {
          hide: (el, s) => !s.owner,
          flexFlow: 'x',
          gap: 'X2',
          flexAlign: 'center start',
          alignSelf: 'start',
          background: 'white',
          color: 'black',
          fontSize: 'Z2',
          Avatar: { boxSize: 'A' },
          Text: { text: (el, s) => s.owner },
          text: null,
        },
      },
      Version: {
        P: { text: 'Client Version' },
        H: {
          text: (el, s) => s.client_version || 'n/a',
          isNan: (el, s) => !s.client_version,
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },
      SLA: {
        P: { text: 'SLA' },
        H: {
          isNan: (el, s) => !s.sla,
          text: (el, s) => s.sla || 'n/a',
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },
      CloudProvider: {
        P: { text: 'Cloud Provider' },
        H: {
          isNan: (el, s) => !s.cloud_provider,
          text: (el, s) => s.cloud_provider || 'n/a',
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },
    },
  },

  // Section 2: Node Identity
  Section_identity: {
    flow: 'y',
    gap: 'A',
    padding: 'A',
    round: 'A',
    background: 'black .3',
    SectionHeader: {
      fontSize: 'Z',
      fontWeight: '600',
      color: '#94a3b8',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      margin: '0 0 Y 0',
      text: 'Node Identity',
    },
    Grid: {
      childExtends: 'PreviewItem',
      gap: 'A',
      columns: 'repeat(4, 1fr)',
      Moniker: {
        P: { text: 'Moniker' },
        H: {
          isNan: (el, s) => !s.moniker,
          text: (el, s) => s.moniker || 'n/a',
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },
      Env: {
        P: { text: 'Environment' },
        H: {
          isNan: (el, s) => !s.env,
          text: (el, s) => s.env || 'n/a',
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },
      Consensus: {
        if: (el, s) => s.nodeType !== 'rpc',
        P: { text: 'Consensus' },
        H: {
          isNan: (el, s) => !s.consensus,
          text: (el, s) => s.consensus || 'n/a',
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },
      OurProposal: {
        if: (el, s) => s.nodeType !== 'rpc',
        P: { text: 'Proposals Managed' },
        H: {
          isNan: (el, s) => !s.do_we_manage_proposals,
          text: (el, s) => s.do_we_manage_proposals || 'n/a',
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },
      RewardClaim: {
        if: (el, s) => s.nodeType !== 'rpc',
        P: { text: 'Reward Claim' },
        H: {
          isNan: (el, s) => !s.reward_claim,
          text: (el, s) => s.reward_claim || 'n/a',
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },
    },
  },

  // Section 3: Validator Addresses
  Section_addresses: {
    if: (el, s) => s.nodeType !== 'rpc',
    flow: 'y',
    gap: 'A',
    padding: 'A',
    round: 'A',
    background: 'black .3',
    SectionHeader: {
      fontSize: 'Z',
      fontWeight: '600',
      color: '#94a3b8',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      margin: '0 0 Y 0',
      text: 'Addresses',
    },
    Grid: {
      childExtends: 'PreviewItem',
      gap: 'A',
      columns: 'repeat(2, 1fr)',
      Reward_address: {
        P: { text: 'Reward Address' },
        H: {
          extends: 'Flex',
          flexAlign: 'center start',
          gap: 'Y',
          Text: {
            hide: (el, s) => !s.reward_address,
            overflow: 'hidden',
            maxWidth: '95%',
            textOverflow: 'ellipsis',
            text: '{{reward_address}}',
          },
          Text_no: {
            color: 'caption',
            hide: (el, s) => s.reward_address,
            fontWeight: '300',
            text: 'n/a',
          },
          CopyButton: {
            hide: (el, s) => !s.reward_address,
            value: (el, s) => s.reward_address,
          },
          text: null,
        },
      },
      PublicKey_address: {
        P: { text: 'Account Public Address' },
        H: {
          extends: 'Flex',
          flexAlign: 'center start',
          gap: 'Y',
          Text: {
            hide: (el, s) => !s.public_key,
            overflow: 'hidden',
            maxWidth: '95%',
            textOverflow: 'ellipsis',
            text: '{{public_key}}',
          },
          Text_no: {
            color: 'caption',
            hide: (el, s) => s.public_key,
            fontWeight: '300',
            text: 'n/a',
          },
          CopyButton: {
            hide: (el, s) => !s.public_key,
            value: (el, s) => s.public_key,
          },
          text: null,
        },
      },
    },
  },

  // Section 4: Financials
  Section_financials: {
    flow: 'y',
    gap: 'A',
    padding: 'A',
    round: 'A',
    background: 'black .3',
    SectionHeader: {
      fontSize: 'Z',
      fontWeight: '600',
      color: '#94a3b8',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      margin: '0 0 Y 0',
      text: 'Financials',
    },
    Grid: {
      childExtends: 'PreviewItem',
      gap: 'A',
      columns: 'repeat(4, 1fr)',
      CurrentSpent: {
        P: { text: 'Current Spent' },
        H: {
          text: (el, s) => s.current_spend ? `$${s.current_spend?.toFixed(2)}` : 'n/a',
          isNan: (el, s) => !s.current_spend,
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },
      ProjectedCost: {
        P: { text: 'Projected Cost' },
        H: {
          text: (el, s) => s.projected_cost ? `$${s.projected_cost?.toFixed(2)}` : 'n/a',
          isNan: (el, s) => !s.projected_cost,
          '.isNan': { fontWeight: '300', color: 'caption' },
        },
      },
    },
  },

  // Section 4: Links & Resources
  Section_links: {
    flow: 'y',
    gap: 'A',
    padding: 'A',
    round: 'A',
    background: 'black .3',
    SectionHeader: {
      fontSize: 'Z',
      fontWeight: '600',
      color: '#94a3b8',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      margin: '0 0 Y 0',
      text: 'Links & Resources',
    },
    Grid: {
      childExtends: 'PreviewItem',
      gap: 'A',
      columns: 'repeat(2, 1fr)',
      Explorer: {
        if: (el, s) => s.nodeType !== 'rpc',
        P: { text: 'Explorer' },
        H: null,
        Link: {
          tag: 'a',
          isNan: (el, s) => !s.explorer_link,
          fontSize: 'Z1',
          target: '_blank',
          href: (el, s) => s.explorer_link,
          text: (el, s) => s.explorer_link ? s.explorer_link.slice(0, 50) + '...' : 'n/a',
          fontWeight: '400',
          color: '#3b82f6',
          cursor: 'pointer',
          onClick: (ev) => ev.stopPropagation(),
          ':hover': { textDecoration: 'underline' },
          '.isNan': { fontWeight: '300', color: 'caption', cursor: 'default', pointerEvents: 'none' },
        },
      },
      KnowledgeBase: {
        P: { text: 'Knowledge Base' },
        H: null,
        Link: {
          tag: 'a',
          isNan: (el, s) => !s.knowledge_base,
          fontSize: 'Z1',
          target: '_blank',
          href: (el, s) => s.knowledge_base,
          text: (el, s) => s.knowledge_base ? s.knowledge_base.slice(0, 50) + '...' : 'n/a',
          fontWeight: '400',
          color: '#3b82f6',
          cursor: 'pointer',
          onClick: (ev) => ev.stopPropagation(),
          ':hover': { textDecoration: 'underline' },
          '.isNan': { fontWeight: '300', color: 'caption', cursor: 'default', pointerEvents: 'none' },
        },
      },
      WarehouseSupport: {
        if: (el, s) => s.nodeType === 'rpc',
        P: { text: 'Data Warehouse' },
        H: {
          text: (el, s) => s.data_warehouse_support ? 'Supported' : 'Not supported',
        },
      },
      WarehouseUrl: {
        if: (el, s) => s.nodeType === 'rpc',
        P: { text: 'Warehouse URL' },
        H: null,
        Link: {
          tag: 'a',
          isNan: (el, s) => !s.data_warehouse_url,
          fontSize: 'Z1',
          target: '_blank',
          href: (el, s) => s.data_warehouse_url,
          text: (el, s) => s.data_warehouse_url ? s.data_warehouse_url.slice(0, 50) + '...' : 'n/a',
          fontWeight: '400',
          color: '#3b82f6',
          cursor: 'pointer',
          onClick: (ev) => ev.stopPropagation(),
          ':hover': { textDecoration: 'underline' },
          '.isNan': { fontWeight: '300', color: 'caption', cursor: 'default', pointerEvents: 'none' },
        },
      },
    },
  },

  // Graphs Section
  Graphs: {},
};
