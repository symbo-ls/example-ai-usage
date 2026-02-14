export const ValidatorContent = {
  Grid: {
    childExtends: 'PreviewItem',
    gap: 'C',
    columns: 'repeat(4, 1fr)',
    Monkier: {
      P: {
        text: 'Moniker',
      },
      H: {
        isNan: (el, s) => !s.moniker,
        text: (el, s) => s.moniker || 'n/a',
        '.isNan': {
          fontWeight: '300',
          color: 'caption',
        },
      },
    },
    Env: {
      P: {
        text: 'Environment',
      },
      H: {
        isNan: (el, s) => !s.env,
        text: (el, s) => s.env || 'n/a',
        '.isNan': {
          fontWeight: '300',
          color: 'caption',
        },
      },
    },
    Status: {
      P: {
        text: 'Status',
      },
      H: {
        flexFlow: 'x',
        gap: 'X2',
        flexAlign: 'center start',
        alignSelf: 'start',
        text: null,
        Status: {
          props: (el, s) => ({
            hide: (el, s) => !s.status,
            order: '-1',
            background: el.call('getStatusColor', s.status),
            round: 'C',
            boxSize: 'Y2'
          }),
        },
        Text: {
          isNan: (el, s) => !s.status,
          text: (el, s) => s.status || 'n/a',
          '.isNan': {
            fontWeight: '300',
            color: 'caption',
          },
        },
      },
    },
    Owner: {
      P: {
        text: 'Node Operator',
      },
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
        Avatar: {
          boxSize: 'A',
        },
        Text: {
          text: (el, s) => s.owner,
        },
        text: null,
      },
    },
    Version: {
      P: {
        text: 'Client version',
      },
      H: {
        text: (el, s) => s.client_version || 'n/a',
        isNan: (el, s) => !s.owner,
        '.isNan': {
          fontWeight: '300',
          color: 'caption',
        },
      },
    },
    RewardClaim: {
      P: {
        text: 'Reward Claim',
      },
      H: {
        isNan: (el, s) => !s.reward_claim,
        text: (el, s) => s.reward_claim || 'n/a',
        '.isNan': {
          fontWeight: '300',
          color: 'caption',
        },
      },
    },
    Category: {
      P: {
        text: 'Category',
      },
      H: {
        isNan: (el, s) => !s.category,
        text: (el, s) => s.category || 'n/a',
        '.isNan': {
          fontWeight: '300',
          color: 'caption',
        },
      },
    },
    CloudProvider: {
      P: {
        text: 'Cloud Provider',
      },
      H: {
        isNan: (el, s) => !s.cloud_provider,
        text: (el, s) => s.cloud_provider || 'n/a',
        '.isNan': {
          fontWeight: '300',
          color: 'caption',
        },
      },
    },
    Reward_address: {
      gridColumn: 'span 2',
      P: {
        text: 'Reward Address',
      },
      H: {
        extends: 'Flex',
        flexAlign: 'center start',
        Text: {
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
      gridColumn: 'span 2',
      P: {
        text: 'Public key',
      },
      H: {
        extends: 'Flex',
        flexAlign: 'center start',
        Text: {
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
    Hr: {
      ignoreChildExtend: true,
      margin: 'A 0',
      opacity: '.05',
      gridColumn: 'span 4',
    },
    OurProposal: {
      P: {
        text: 'Proposals managed by us',
      },
      H: {
        isNan: (el, s) => !s.do_we_manage_proposals,
        text: (el, s) => s.do_we_manage_proposals || 'n/a',
        '.isNan': {
          fontWeight: '300',
          color: 'caption',
        },
      },
    },
    CurrentSpent: {
      P: {
        text: 'Current Spent',
      },
      H: {
        text: (el, s) => s.projected_cost ? `$${ s.current_spend?.toFixed(2) }` : 'n/a',
      },
    },
    ProjectedCost: {
      P: {
        text: 'Projected Cost',
      },
      H: {
        text: (el, s) => s.projected_cost ? `$${ s.projected_cost?.toFixed(2) }` : 'n/a',
        isNan: (el, s) => !s.owner,
        '.isNan': {
          fontWeight: '300',
          color: 'caption',
        },
      },
    },
    Consensus: {
      P: {
        text: 'Consensus',
      },
      H: {
        text: (el, s) => s.consensus || 'n/a',
        isNan: (el, s) => !s.consensus,
        '.isNan': {
          fontWeight: '300',
          color: 'caption',
        },
      },
    },
    SLA: {
      P: {
        text: 'SLA',
      },
      H: {
        text: (el, s) => s.sla || 'n/a',
        isNan: (el, s) => !s.sla,
        '.isNan': {
          fontWeight: '300',
          color: 'caption',
        },
      },
    },
    WarehouseSupport: {
      if: (el, s) => s.nodeType === 'rpc',
      P: {
        text: 'Data warehouse support',
      },
      H: {
        text: (el, s) => s.data_warehouse_support ? 'Yes' : 'No',
      },
    },
    WarehouseUrl: {
      if: (el, s) => s.nodeType === 'rpc',
      gridColumn: 'span 2',
      P: {
        text: 'Data warehouse URL',
      },
      H: null,
      Link: {
        isNan: (el, s) => !s.data_warehouse_url,
        fontSize: 'B',
        target: '_blank',
        href: (el, s) => s.data_warehouse_url,
        text: (el, s) => s.data_warehouse_url ? s.data_warehouse_url.slice(0, 56) + '...' : 'n/a',
        fontWeight: '400',
        '[href]:hover': {
          textDecoration: 'underline',
        },
        '.isNan': {
          fontWeight: '300',
          color: 'caption',
        },
      },
    },
    KnowledgeBase: {
      gridColumn: 'span 2',
      P: {
        text: 'Knowledge base',
      },
      H: null,
      Link: {
        isNan: (el, s) => !s.knowledge_base,
        fontSize: 'B',
        target: '_blank',
        href: (el, s) => s.knowledge_base,
        text: (el, s) => s.knowledge_base ? s.knowledge_base.slice(0, 56) + '...' : 'n/a',
        fontWeight: '400',
        '[href]:hover': {
          textDecoration: 'underline',
        },
        '.isNan': {
          fontWeight: '300',
          color: 'caption',
        },
      },
    },
    Explorer: {
      gridColumn: 'span 2',
      P: {
        text: 'Explorer link',
      },
      H: null,
      Link: {
        isNan: (el, s) => !s.explorer_link,
        fontSize: 'B',
        target: '_blank',
        href: (el, s) => s.explorer_link,
        text: (el, s) => s.explorer_link ? s.explorer_link.slice(0, 56) + '...' : 'n/a',
        fontWeight: '400',
        '[href]:hover': {
          textDecoration: 'underline',
        },
        '.isNan': {
          fontWeight: '300',
          color: 'caption',
        },
      },
    },
  },
  Hr: {
    ignoreChildExtend: true,
    margin: '-B2 0',
    opacity: '.05',
    gridColumn: 'span 4',
  },
  Uptime: {},
  Graphs: {},
  props: {
    width: '100%',
    flow: 'y',
    gap: 'E',
    padding: 'A2',
    onClick: (ev, el, s) => {
      ev.stopPropagation()
      ev.preventDefault()
    },
  },
  extend: 'Flex',
};